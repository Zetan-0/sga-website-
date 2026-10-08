from flask import Flask, render_template, request

app = Flask(__name__, template_folder='.')


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/welcome')
def join_page():
    return render_template('welcome.html')