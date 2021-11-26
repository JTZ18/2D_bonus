// Transcrypt'ed from Python, 2021-11-26 16:24:42
var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
var __name__ = '__main__';
export var gen_random_int = function (number, seed) {
	// pass;
};
export var generate = function () {
	var number = 10;
	var seed = 200;
	// pass;
	var array = null;
	// pass;
	var array_str = null;
	document.getElementById ('generate').innerHTML = array_str;
};
export var sortnumber1 = function () {
	// pass;
	var array_str = null;
	document.getElementById ('sorted').innerHTML = array_str;
};
export var predict = function () {
	var beta = dict ([['constant', 14898.40336134], ['new_cases', 6892.94736509], ['new_deaths', 762.58212297], ['people_fully_vaccinated', -(770.3293162)]]);
	var new_cases = document.getElementsByName ('new_cases') [0].value;
	var new_deaths = document.getElementsByName ('new_deaths') [0].value;
	var people_fully_vaccinated = document.getElementsByName ('people_fully_vaccinated') [0].value;
	console.log (new_deaths);
	var new_cases = (new_cases - 92757.94201470583) / 62584.71150509345;
	var new_deaths = (new_deaths - 1384.348749999999) / 924.1441661978166;
	var people_fully_vaccinated = (people_fully_vaccinated - 112820639.42941177) / 71111542.05442297;
	var pred = ((beta ['constant'] + new_cases * beta ['new_cases']) + new_deaths * beta ['new_deaths']) + people_fully_vaccinated * beta ['people_fully_vaccinated'];
	console.log (pred);
	document.getElementById ('predicted').innerHTML = round (pred);
	// pass;
};
export var sortnumber2 = function () {
	var value = document.getElementsByName ('numbers') [0].value;
	if (value == '') {
		window.alert ('Your textbox is empty');
		return ;
	}
	// pass;
	var array_str = null;
	document.getElementById ('sorted').innerHTML = array_str;
};

//# sourceMappingURL=library.map