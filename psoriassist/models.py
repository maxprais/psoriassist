from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import User


class AppUser(models.Model):
    user = models.OneToOneField(User)
    age = models.IntegerField(null=True)
    birthday = models.DateField(null=True)
    profile_picture = models.ImageField(null=True)
    last_doctor_appointment = models.DateField(null=True)
    bio = models.CharField(max_length=2000, null=True)
    isMentor = models.BooleanField()
    mentoree = models.ManyToManyField('AppUser')
    doctor = models.ManyToManyField('Doctor')

    def __str__(self):
        return self.user.username


class Message(models.Model):
    user = models.ForeignKey(AppUser, related_name='initialiseConvo')
    other_user = models.ForeignKey(AppUser, related_name='answerConvo')
    content = models.TextField()
    message_date = models.DateTimeField()
    delivered = models.BooleanField(default=False)

    def __str__(self):
        return self.message_date


class PASIScore(models.Model):
    user = models.ForeignKey(AppUser)
    score = models.CharField(max_length=100)

    def __str__(self):
        return self.user.user.username


class LesionSection(models.Model):
    section_name = models.CharField(max_length=100)
    PASI = models.ForeignKey(PASIScore)

    def __str__(self):
        return self.section_name


class Lesion(models.Model):
    user = models.ForeignKey(AppUser)
    name = models.CharField(null=True, max_length=500)
    image = models.ImageField(blank=True)
    lesion_location = models.ForeignKey(LesionSection)
    date_taken = models.DateTimeField(null=True)
    thickness = models.IntegerField(null=True)
    redness = models.IntegerField(null=True)
    scale = models.IntegerField(null=True)

    def __str__(self):
        return "%s- %s %s" % (self.user.user.username, self.name, self.date_taken)



class MentalState(models.Model):
    user = models.ForeignKey(AppUser)
    stress = models.IntegerField()
    anxiety = models.IntegerField()
    mood = models.IntegerField()
    date_taken = models.DateTimeField()

    def __str__(self):
        return "%s- %s" % (self.user.user.username, self.date_taken)

class Medication(models.Model):
    user = models.ForeignKey(AppUser)
    name = models.CharField(max_length=800)
    prescribed_by = models.ForeignKey('Doctor')
    date_prescribed = models.DateField()
    expiration_date = models.DateField()
    dosage = models.CharField(max_length=2000)
    other_info = models.TextField(max_length=2000)
    isCurrent = models.BooleanField()

    def __str__(self):
        return "%s- %s" % (self.user.user.username, self.name)

class Rating(models.Model):
    user = models.ManyToManyField(AppUser)
    medication = models.ForeignKey(Medication)
    effectiveness = models.SmallIntegerField(default=0)
    quality_of_life = models.SmallIntegerField(default=0)
    adherence = models.SmallIntegerField(default=0)

    def __str__(self):
        return "%s" % self.medication.name


class Doctor(models.Model):
    name = models.CharField(max_length=100)
    work_address = models.CharField(max_length=500)
    profile_picture = models.ImageField(null=True)
    distance_from_user = models.CharField(max_length=300)

    def __str__(self):
        return self.name

class Appointment(models.Model):
    user = models.ManyToManyField(AppUser)
    doctor = models.ManyToManyField(Doctor)
    date = models.DateTimeField()
    location = models.CharField( max_length=800)
    type_of_appointment = models.CharField(max_length=100)
    reason_for_appointment = models.TextField(max_length=2000)
    duration = models.TimeField()

    def __str__(self):
        return "%s %s %s" % (self.user.user.username, self.doctor.name, self.date)



