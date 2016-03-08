from django.contrib import admin
from .models import AppUser, Message, Lesion, MentalState, Medication, Rating, Doctor, Appointment, LesionSection, \
    PASIScore


class AppUserAdmin(admin.ModelAdmin):
    list_display = ('user',)

admin.site.register(AppUser, AppUserAdmin)

admin.site.register(Message)
admin.site.register(Lesion)
admin.site.register(LesionSection)
admin.site.register(PASIScore)
admin.site.register(MentalState)
admin.site.register(Medication)
admin.site.register(Rating)
admin.site.register(Doctor)
admin.site.register(Appointment)
