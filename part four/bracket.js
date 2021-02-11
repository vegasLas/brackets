function bracket(a) {
  let closing = {
    ']': ']',
    '}': '}',
    ')': ')'
  };
  let opening = {
    '[': '[',
    '{': '{',
    '(': '('
  };
  var array = []
  var s = ''
  var ss;
  for (var i = 1; i < a + 1; i++) {
    var random = Math.floor(
      Math.random() * Math.floor(2)
    );
    ss = random === 1 ? opening['{'] + closing['}'] : opening['['] + closing[']']
    if (!(i % 3)) {
      if (ss[ss.length - 1] === s[s.length - 1]) {
        ss = random === 0 ? opening['{'] + closing['}'] : opening['['] + closing[']']
      }
      s = s.substr(0, s.length - 1) + ss + s[s.length - 1]
    }
    else if (!(i % 2)) {
      if (ss[ss.length - 1] === s[s.length - 1]) {
        ss = random === 0 ? opening['{'] + closing['}'] : opening['['] + closing[']']
      }
      s += ss
    }
    else {
      s += opening['('] + closing[')']
    }
  }
  return s
}
console.log(bracket(10))

function test(s) {
  var counter = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      if (s[i + 3] !== ')') {
        if (s[i + 1] !== ')') {
          counter++
        }
      }
    } else if (s[i] === '{') {
      if (s[i + 3] !== '}') {
        if (s[i + 1] !== '}') {
          counter++
        }
      }
    } else if (s[i] === '[') {
      if (s[i + 3] !== ']') {
        if (s[i + 1] !== ']') {
          counter++
        }
      }
    }
  }
  return Boolean(counter)
}
console.log(test(bracket(10000)))
console.log(test(bracket(1)))
console.log(test(bracket(13213)))
console.log(test(bracket(12)))
console.log(test(bracket(32)))



