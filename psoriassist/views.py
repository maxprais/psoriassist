from django.shortcuts import render, redirect
from django.views.generic import View
from .models import AppUser, User

class Index(View):
    def get(self, request):
        return render(request, 'psoriassist/base.html')


# class UserLogin(View):
#     def get(self):
#       # user_obj = AppUser()
        #
        # date_subscribed = user_obj.calc_date_subscribed()
        # new_user = AppUser(username=user.username, password=user.password, email=user.email,
        #                    date_registered=date_subscribed)
        # new_user.save()

