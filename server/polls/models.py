from django.db import models
import datetime
from django.utils import timezone


class Question(models.Model):
     def __str__(self):
        #  question_text = models.CharField(max_length=200)
        #  pub_date = models.DateTimeField("date published")
         return self.question_text
         # ...q.
    # def was_published_recently(self):
    #     return self.pub_date >= timezone.now() - datetime.timedelta(days=1)
   


class Choice(models.Model):
     def __str__(self):
        question = models.ForeignKey(Question, on_delete=models.CASCADE)
        choice_text = models.CharField(max_length=200)
        votes = models.IntegerField(default=0)
        return self.choice.text
      