from org.transcrypt.stubs.browser import *
import random


def gen_random_int(number, seed):
	pass

def generate():
	number = 10
	seed = 200

	# call gen_random_int() with the given number and seed
	# store it to the variable array
	pass

	array = None
	# convert the items into one single string 
	# the number should be separated by a comma
	# and a full stop should end the string.
	pass

	array_str = None

	# This line is to placed the string into the HTML
	# under div section with the id called "generate"	
	document.getElementById("generate").innerHTML = array_str


def sortnumber1():
	'''	This function is used in Exercise 1.
		The function is called when the sort button is clicked.

		You need to do the following:
		- get the list of numbers from the "generate" HTML id, use document.getElementById(id).innerHTML
		- create a list of integers from the string of numbers
		- call your sort function, either bubble sort or insertion sort
		- create a string of the sorted numbers and store it in array_str
	'''
	pass

	array_str = None
	
	document.getElementById("sorted").innerHTML = array_str

def predict():
	beta = {
    "constant": 14898.40336134,
    "new_cases": 6892.94736509,
    "new_deaths": 762.58212297,
    "people_fully_vaccinated": -770.3293162
	}
	new_cases = document.getElementsByName("new_cases")[0].value
	new_deaths = document.getElementsByName("new_deaths")[0].value
	people_fully_vaccinated = document.getElementsByName("people_fully_vaccinated")[0].value
	console.log(new_deaths)

	# normalise input to feed to model
	new_cases = (new_cases - 92757.94201470583) / 62584.71150509345
	new_deaths = (new_deaths - 1384.348749999999) / 924.1441661978166
	people_fully_vaccinated = (people_fully_vaccinated - 112820639.42941177) / 71111542.05442297
	# model output
	pred = beta["constant"] + new_cases * beta["new_cases"] + new_deaths * beta["new_deaths"] + people_fully_vaccinated * beta["people_fully_vaccinated"]
	console.log(pred)
	document.getElementById("predicted").innerHTML =  round(pred)
	pass

def sortnumber2():
	'''	This function is used in Exercise 2.
		The function is called when the sort button is clicked.

		You need to do the following:
		- Get the numbers from a string variable "value".
		- Split the string using comma as the separator and convert them to 
			a list of numbers
		- call your sort function, either bubble sort or insertion sort
		- create a string of the sorted numbers and store it in array_str
	'''
	# The following line get the value of the text input called "numbers"
	value = document.getElementsByName("numbers")[0].value

	# Throw alert and stop if nothing in the text input
	if value == "":
		window.alert("Your textbox is empty")
		return

	# Your code should start from here
	# store the final string to the variable array_str
	pass

	array_str = None

	document.getElementById("sorted").innerHTML = array_str







