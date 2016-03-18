# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-03-16 17:57
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('psoriassist', '0014_auto_20160316_1951'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='computerconversation',
            name='message_content',
        ),
        migrations.AddField(
            model_name='computerconversation',
            name='computer_message',
            field=models.TextField(max_length=2000, null=True),
        ),
        migrations.AddField(
            model_name='computerconversation',
            name='user_message',
            field=models.CharField(max_length=2000, null=True),
        ),
    ]