# Тестовое задание

## Требования:

### Нужно написать функцию для разбивки текста на фрагменты
- Функция принимает на вход текст, написанный латиницей, где все слова
разделены только 1 пробелом. Текст содержит в себе только латинские буквы и
пробелы (без знаков препинания).
- Задача функции разбить текст на СМСки размером не больше 140 символов и
   вернуть в результате массив получившихся строк. 
- Так как СМСки платные важно разбить текст на минимальное количество
   фрагментов. 
- Слова нельзя разбивать посередине, то есть текст нужно разбить строго по
   пробелам. 
- Если весь текст не помещается в один фрагмент то каждый фрагмент должен
   заканчиваться суффиксом ' k/n', где k - порядковый номер фрагмента, n -
   количество фрагментов, на которые разбит текст. k <= n <= 9999. 
- Суффикс учитывается при подсчете длины СМСки, то есть длина фрагмента
   вместе с суффиксом должна быть меньше или равна 140 символам. 
- Задача решаема, то есть в тексте не может быть настолько длинных слов, чтобы
   одно слово с суффиксом не уместилось в одном СМС

## Запуск 

- Установить необходимые зависимости с помошью `npm install`
- После установки зависимостей запустить файл с помощью команды `npm start` 

## Тестирование

### В приложении представлены 6 видов дестов 

- Обычное сообщение
- Короткое сообщение
- Длинное сообщение
- Очень длинное сообщение
- Сообщение с кастомной длиной фрагментов
- Сообщение состояние из одного большого слова (кейс с ошибкой)