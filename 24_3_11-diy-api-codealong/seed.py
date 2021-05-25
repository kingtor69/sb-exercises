from app import app
from models import db, Todo

db.drop_all()
db.create_all()

Todo.query.delete()

seed_todos = [
    Todo(title="Groceries", done=True),
    Todo(title="Eat Lunch", done=True),
    Todo(title="Code yer butt off"),
    Todo(title="Office Hours", done=True),
    Todo(title="RIDE!!!! (home)"),
    Todo(title="make dinner"),
    Todo(title="enjoy family"),
    Todo(title="Walk Dogs"),
    Todo(title="Get to bed before midnight")
]

db.session.add_all(seed_todos)
db.session.commit()