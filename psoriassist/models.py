from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import User


class AppUser(models.Model):
    user = models.OneToOneField(User)
    age = models.IntegerField(blank=True)
    birthday = models.DateField(blank=True)
    profile_picture = models.ImageField(blank=True)
    last_doctor_appointment = models.DateField(blank=True)
    date_registered = models.DateField(blank=False)
    bio = models.CharField(max_length=2000, blank=True)
    isMentor = models.BooleanField(blank=False)
    mentoree = models.ManyToManyField('AppUser', blank=True)
    doctor = models.ManyToManyField('Doctor', blank=True)

    def __str__(self):
        return self.user.username

class Message(models.Model):
    user = models.ForeignKey(AppUser, related_name='initialiseConvo')
    other_user = models.ForeignKey(AppUser, related_name='answerConvo')
    content = models.TextField(blank=False)
    message_date = models.DateTimeField(blank=False)
    delivered = models.BooleanField(default=False)

    def __str__(self):
        return self.message_date


class Lesion(models.Model):
    user = models.ForeignKey(AppUser)
    name = models.CharField(max_length=500)
    image = models.ImageField(blank=False)
    lesion_location = models.OneToOneField('LesionSection')
    date_taken = models.DateTimeField(blank=False)
    size = models.IntegerField(blank=False)
    redness = models.IntegerField(blank=False)

    def __str__(self):
        return "%s- %s %s" % (self.user.user.username, self.name, self.date_taken)


class PASIScore(models.Model):
    user = models.ForeignKey(AppUser)
    score = models.CharField(max_length=100)


class LesionSection(models.Model):
    section_name = models.CharField(max_length=100)
    PASI = models.OneToOneField(PASIScore, default=0)

    def __str__(self):
        return self.section_name


class MentalState(models.Model):
    user = models.ForeignKey(AppUser)
    stress = models.IntegerField(blank=False)
    anxiety = models.IntegerField(blank=False)
    mood = models.IntegerField(blank=False)
    date_taken = models.DateTimeField(blank=False)

    def __str__(self):
        return "%s- %s" % (self.user.user.username, self.date_taken)

class Medication(models.Model):
    user = models.ForeignKey(AppUser)
    name = models.CharField(blank=False, max_length=800)
    prescribed_by = models.ForeignKey('Doctor')
    date_prescribed = models.DateField(blank=False)
    expiration_date = models.DateField(blank=False)
    dosage = models.CharField(max_length=2000)
    other_info = models.TextField(max_length=2000)
    isCurrent = models.BooleanField(blank=False)

    def __str__(self):
        return "%s- %s" % (self.user.user.username, self.name)

class Rating(models.Model):
    user = models.ManyToManyField(AppUser)
    medication = models.ForeignKey(Medication)
    rating = models.SmallIntegerField(default=0)

    def __str__(self):
        return "%s %s" % (self.medication.name, self.rating)


class Doctor(models.Model):
    name = models.CharField(max_length=100)
    work_address = models.CharField(max_length=500)
    profile_picture = models.ImageField()
    distance_from_user = models.CharField(max_length=300)

    def __str__(self):
        return self.name

class Appointment(models.Model):
    user = models.ManyToManyField(AppUser)
    doctor = models.ManyToManyField(Doctor)
    date = models.DateTimeField(blank=False)
    location = models.CharField(blank=False, max_length=800)
    type_of_appointment = models.CharField(blank=False, max_length=100)
    reason_for_appointment = models.TextField(max_length=2000)
    duration = models.TimeField(blank=False)

    def __str__(self):
        return "%s %s %s" % (self.user.user.username, self.doctor.name, self.date)



