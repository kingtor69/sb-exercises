from flask import Flask, request, jsonify, render_template, redirect

from models import db, connect_db, Todo

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///todos_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'yer-damn-right-its-secret'

connect_db(app)

@app.route('/')
def redirect_to_todos_api_json():
    """ load front-end home page """
    todos = Todo.query.all()
    return render_template('index.html', todos=todos)

@app.route('/api/todos')
def list_todos():
    all_todos = [todo.serialize() for todo in Todo.query.all()]

    return jsonify(todos=all_todos)

@app.route('/api/todos/<int:id>')
def get_todo(id):
    todo = Todo.query.get_or_404(id)
    return jsonify(todo=todo.serialize())

@app.route('/todos/new')
def load_new_todo_form():
    return render_template('new-todo.html')


@app.route('/api/todos', methods=["POST"])
def create_todo():
    # if no title, response with error code and JSON indicating what's wrong, blah blah blah
    new_todo=Todo(title=request.json['title'])
    # likewise something for created todos that are already done, if that's something a person could do
    db.session.add(new_todo)
    db.session.commit()
    json_response = jsonify(todo=new_todo.serialize())
    return (json_response, 201)

@app.route('/api/todos/<int:id>', methods=['PATCH'])
def update_todo(id):
    todo = Todo.query.get_or_404(id)
    try: 
        db.session.query(Todo).filter_by(id=id).update(request.json)
    except:
        todo.title=request.json.get('title', todo.title)
        todo.done=request.json.get('done', todo.done)
    db.session.commit()
    return jsonify(todo=todo.serialize())

@app.route('/api/todos/<int:id>', methods=["DELETE"])
def delete_todo(id):
    todo = Todo.query.get_or_404(id)
    db.session.delete(todo)
    db.session.commit()
    return jsonify(deleted=id)
        