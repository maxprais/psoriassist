# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-03-15 08:20
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('psoriassist', '0007_computerconversation_topic'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='computerconversation',
            name='computer',
        ),
        migrations.AddField(
            model_name='computerconversation',
            name='sender',
            field=models.CharField(default='None', max_length=1000),
        ),
    ]
