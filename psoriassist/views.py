from django.shortcuts import render, redirect
from django.views.generic import View
from .models import AppUser, User, Lesion
from django.contrib import messages

class Index(View):
    def get(self, request):
        return render(request, 'psoriassist/site_nav.html')

class TakePhoto(View):
    def get(self, request):
        return render(request, 'psoriassist/take_photo.html')


    def post(self, request):

        new_img = request.POST['image']
        username = request.POST['username']

        user = AppUser.objects.get(user=username)
        new_lesion_img = Lesion(user=user, image=new_img)
        new_lesion_img.save()

        messages.add_message(request, messages.SUCCESS, 'Thanks %s your image has been saved' % username)

        return render(request, 'psoriassist/site_nav.html')




# class UserLogin(View):
#     def get(self):
#       # user_obj = AppUser()
        #
        # date_subscribed = user_obj.calc_date_subscribed()
        # new_user = AppUser(username=user.username, password=user.password, email=user.email,
        #                    date_registered=date_subscribed)
        # new_user.save()



