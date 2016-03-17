from django.shortcuts import render, redirect, HttpResponse
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


class SaveConversationHistory(View):
    def post(self, request):

        msg = json.loads(request.body)
        messages = msg['msg']
        username = msg['user']
        username = username[1:]
        index = messages['id']

        saved_convo = ComputerConversation.objects.filter(index=index)
        if not saved_convo:
            user_instance = User.objects.get(username=username)
            app_user_instance = AppUser.objects.get(user=user_instance)
            print user_instance

            new_conv = ComputerConversation(user=app_user_instance, index=index)
            new_conv.save()

        return HttpResponse(json.dumps({'result': 'success'}))


class ReloadWelcomePage(View):
    def get(self, request):
        conversations_id = []
        conversations = ComputerConversation.objects.all()
        print conversations

        for i in range(len(conversations)):
            conversations_id.append(conversations[i].index)

        ids = []
        for id in conversations_id:
            ids.append(id)

        return HttpResponse(json.dumps(ids))



        # messages = msg['msg']
        # username = msg['user']
        # username = username[1:]
        # comp_list = []
        # comp_message, user_message, index = '', '', ''
        #
        # for i in range(len(messages)):
        #     index = messages['id']
        # for j in range(len(messages['messages'])):
        #     comp_list += ' ' + messages['messages'][j]['text']
        # for k in range(len(messages['responses'])):
        #     user_message = messages['responses'][0]['text']
        #
        # for letter in comp_list:
        #     comp_message += letter
        # comp_message = comp_message[1:]
        #



