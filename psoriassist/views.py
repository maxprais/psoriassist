from django.shortcuts import render, redirect
from django.views.generic import View
from .models import AppUser, User, Lesion, ComputerConversation
from django.contrib import messages
import json

class Index(View):
    def get(self, request):
        return render(request, 'psoriassist/welcome.html')

class Rate(View):
    def get(self, request):
        return render (request, 'psoriassist/rate_medication.html')

class Medication(View):
    def get(self, request):
        return render(request, 'psoriassist/my_medication.html')

class TakePhoto(View):
    def get(self, request):
        return render(request, 'psoriassist/take_photo.html')


    def post(self, request):
        new_img = request.POST['image']
        username = request.POST['username']
        username = username[1:]
        print User.objects

        user_instance = User.objects.get(username=username)

        print user_instance

        app_user = AppUser.objects.get(user=user_instance)
        new_lesion_img = Lesion(user=app_user, image=new_img)
        new_lesion_img.save()

        messages.add_message(request, messages.SUCCESS, 'Thanks %s your image has been saved' % username)


class Welcome(View):
    def get(self, request):
        return render(request, 'psoriassist/welcome.html')

class Medicine(View):
    def get(self, request):
        return render(request, 'psoriassist/my_medication.html')


class SaveConversationHistory(View):
    def post(self, request):

        msg = json.loads(request.body)
        message = msg['msg']
        username = msg['user']
        username = username[1:]

        sender = message['sender']
        message_content = message['messageContent']

        if message['topic']:
            topic = message['topic']
        else:
            topic = False

        user_instance = User.objects.get(username=username)
        app_user_instance = AppUser.objects.get(user=user_instance)
        print user_instance

        new_conv = ComputerConversation(user=app_user_instance, sender=sender, message_content=message_content,
                                        topic=topic)
        new_conv.save()


class ReloadWelcomePage(View):
    def get(self, request):

        conversations = ComputerConversation.objects.all()

        for i in range(len(conversations)):
            print conversations[i].message_content


        return render(request, 'psoriassist/welcome.html')


