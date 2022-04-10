/**
 * Usee class syntax to create LinkedList Methods below:
 * add(value)
 * remove(value)
 * print()
 */

 class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {

    constructor(node) {
        this.head = node;
    }

    add(newElement) {
        let newNode = new Node(newElement);

        if (this.head == null) {
            this.head = newNode;
        } else {
            let cur = this.head;
            while (cur.next != null) {
                cur = cur.next;
            }
            cur.next = newNode;
        }
    }

    find(aElement) {
        let currNode = this.head;
        while (!(currNode.next == null) && (currNode.next.element != aElement)) {
            currNode = currNode.next;
        }
        return currNode;
    }

    remove(aElement) {
        let preNode = this.find(aElement);
        if (!(preNode.next == null)) {
            preNode.next = preNode.next.next;
        }
    }

    print() {
        let result = 'LinkedList{';
        let node = this.head;
        while (node != null) {
            result += node.element + ",";
            node = node.next;
            // console.log("xxx");
        }
        result += '}';
        console.log(result);
    }

}

let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print();
linkedlist.remove(2);
linkedlist.print();
console.log(linkedlist);



/*
This is a quiz system which allows students to take quiz, get each student's quiz score and
compute average score of students.
You need to use constructor functions or class syntax to implement Student, Question and Quiz
constructor function/class Student:
properties:
studentId: a unique student id
answers: holds an array that records the student's answers for the questions.
method: addAnswer(question) - add student's question(id, answer) to answers array.
constructor function/class Question:
properties:
qid: unique quesiton id
answer: hold quiz correct answer or student's answer
method: checkAnswer(answer) - used to check if student's answer is correct
constructor function/class Quiz:
properties:
questions: It's a Map which holds question id and correct answers. The key is question id, the
value is the correct answer for this question
students: an array holds all students
methods:
• scoreStudent(sid), computes the quiz score for this student
• getAverageScore(), computes the average score over all students
After you complete the Question, Student and Quiz constructor functions, we may use the
system as below:
Your system should return the correct result for getAverageScore() and scoreStudent(sid) as the
expected result.
 */






class Question {
    constructor(id, answer) {
        this.id = id;
        this.answer = answer;
    }
    checkAnswer(rightAnswer) {
        return this.answer === rightAnswer;
    }
}


class Student {
    constructor(studentId, answers = []) {
        this.studentId = studentId;
        this.answers = answers;
    }
    addAnswer(question) {
        this.answers.push(question);
    }
}


class Quiz {
    constructor(questionsArray = [], students = []) {
        this.questions = new Map();
        questionsArray.forEach(q => {
            this.questions.set(q.id, q.answer);
        });
        this.students = students;
    }

    scoreStudent(studentId) {
        let studentarr = this.students.filter((st) => {
            return st.studentId === studentId;
        })
        let student = studentarr[0];
        console.log(student);

        return student.answers.reduce((mk, curQuestion) => {
            let quesid = curQuestion.id;
            let correctAnswer = this.questions.get(quesid);
            if (curQuestion.checkAnswer(correctAnswer)) {
                mk += 1;
            }
            return mk;
        }, 0);

    }

    getAverageScore() {

        return this.students.reduce((avg, curStudent, index, array) => 
            avg + this.scoreStudent(curStudent.studentId) / array.length
        , 0);


    }

}

const questionsArraywithCorrectAnswers = [new Question(1, 'a'), new Question(2, 'b'), new Question(3, 'd')];

let student1 = new Student(1001, [new Question(1, 'b'), new Question(2, 'b'), new
    Question(3, 'b')]);

let student2 = new Student(1002);
student2.addAnswer(new Question(1, 'a'));
student2.addAnswer(new Question(2, 'b'));
student2.addAnswer(new Question(3, 'd'));
const students = [student1, student2];
let quizObj = new Quiz(questionsArraywithCorrectAnswers, students);
console.log(quizObj.scoreStudent(1001));
console.log(quizObj.scoreStudent(1002));
console.log(quizObj.getAverageScore());