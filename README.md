# custom-state-manager

### Кастомный стейт-менеждер (упрощённая версия Redux).

Функциональные возможности стейт-менеджера:

- запись/хранение/получение данных,
- обновление компонента при изменении состояния.

Реализация использует функцию createStore, которая принимает функцию-редюсер и объект начального состояния в качестве аргументов и возвращает объект Store с функциями getState, dispatch и subscribe.

Функция getState возвращает текущее состояние хранилища. Функция dispatch принимает действие и обновляет состояние хранилища, вызывая функцию-редюсер с текущим состоянием и действием. Функция subscribe принимает функцию-слушатель и добавляет ее в массив слушателей, которые будут вызываться каждый раз, когда изменится состояние хранилища.

Демо использования стейт-менеджера на примере списка Todo
https://github.com/Ole-Leo/todo-list

Для установки стейт-менеджера в свой проект необходимо установить npm-пакет

```sh

npm i custom-sm

```
