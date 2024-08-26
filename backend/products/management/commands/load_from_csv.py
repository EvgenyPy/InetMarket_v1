import csv

from django.core.management.base import BaseCommand
from products.models import Notebook

csv_file = 'exemple.csv'


class Command(BaseCommand):
    help = 'Импорт данных из csv файлов в БД.'

    def handle(self, *args, **options):
        print('')
        try:
            with open(
                'products/data/exemple.csv',
                'r',
                encoding='utf-8',
            ) as file:
                if not file:
                    raise FileNotFoundError
                reader = csv.DictReader(file, delimiter=',')
                for row in reader:
                    Notebook.objects.get_or_create(**row)
        except Exception as error:
            print(f'Импорт завершен с ошибкой: {error}')
        self.stdout.write(self.style.SUCCESS('Импорт завершен'))
