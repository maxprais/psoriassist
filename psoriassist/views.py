from django.shortcuts import render, redirect
from django.views.generic import View
from .models import AppUser, User
import dbgenerate

class Index(View):
    def get(self, request):
        dbgenerate.create_user()
        dbgenerate.update_lesion()
        return render(request, 'psoriassist/index.html')


# class UserLogin(View):
#     def get(self):
#       # user_obj = AppUser()
        #
        # date_subscribed = user_obj.calc_date_subscribed()
        # new_user = AppUser(username=user.username, password=user.password, email=user.email,
        #                    date_registered=date_subscribed)
        # new_user.save()

