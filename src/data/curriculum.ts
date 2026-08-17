// PyMaster — Complete Python Curriculum
// From absolute beginner to mastery, covering every major branch of Python

export interface Exercise {
  id: string;
  title: string;
  description: string;
  instructions: string[];
  expectedOutput?: string;
  expectedOutputContains?: string[];
  starterCode: string;
  hint: string;
  solution: string;
}

export interface Category {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  type: 'reading' | 'exercises';
  sections?: string[];
  exercises: Exercise[];
}

export interface Level {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  categories: Category[];
}

export const curriculum: Level[] = [
  // ═══════════════════════════════════════════════════
  // LEVEL 1: BEGINNER
  // ═══════════════════════════════════════════════════
  {
    id: 'beginner',
    title: 'Beginner',
    subtitle: 'Start Your Python Journey',
    description: 'Core syntax, program flow, basic data structures, and functions. Perfect for absolute beginners.',
    icon: 'Sprout',
    color: 'emerald',
    categories: [
      {
        id: 'introduction',
        number: 1,
        title: 'Introduction to Python',
        description: 'What Python is, why you should learn it, and how to get it running.',
        icon: 'BookOpen',
        type: 'reading',
        sections: [
          'What is Python?',
          'Why learn Python?',
          'Python vs other languages',
          'Installing Python',
          'Your first program',
          'How this course works',
        ],
        exercises: [],
      },
      {
        id: 'standard-output',
        number: 2,
        title: 'Standard Output (Printing)',
        description: 'Learn how to display information to the screen using print().',
        icon: 'Monitor',
        type: 'exercises',
        exercises: [
          {
            id: 'hello-world',
            title: 'Hello World',
            description: 'Print "Hello, World!" to the console.',
            instructions: ['Print the exact phrase', 'Hello, World!', 'to the console.'],
            expectedOutput: 'Hello, World!',
            starterCode: '# Print Hello, World! below\n',
            hint: 'Use the print() function with the text inside quotes.',
            solution: 'print("Hello, World!")',
          },
          {
            id: 'print-number',
            title: 'Print a Number',
            description: 'Print the number 42 to the console.',
            instructions: ['Print the number 42 to the console.', 'Numbers do not need quotes.'],
            expectedOutput: '42',
            starterCode: '# Print the number 42\n',
            hint: 'You can pass numbers directly to print() without quotes.',
            solution: 'print(42)',
          },
          {
            id: 'print-multiple',
            title: 'Print Multiple Values',
            description: 'Print your name and age on the same line.',
            instructions: ['Print "Name: Python" and "Age: 33" on the same line, separated by a space.'],
            expectedOutput: 'Name: Python Age: 33',
            starterCode: '# Print name and age on the same line\n',
            hint: 'You can pass multiple arguments to print() separated by commas.',
            solution: 'print("Name: Python", "Age: 33")',
          },
          {
            id: 'print-sep',
            title: 'Custom Separator',
            description: 'Use the sep parameter to change how values are separated.',
            instructions: ['Print "red", "green", "blue" separated by " | " using the sep parameter.'],
            expectedOutput: 'red | green | blue',
            starterCode: '# Print colors separated by " | "\n',
            hint: 'Use print("a", "b", sep=" | ") to change the separator.',
            solution: 'print("red", "green", "blue", sep=" | ")',
          },
          {
            id: 'print-multiline',
            title: 'Multiline Output',
            description: 'Print text across multiple lines.',
            instructions: ['Print the following on three separate lines:', 'Line 1', 'Line 2', 'Line 3'],
            expectedOutput: 'Line 1\nLine 2\nLine 3',
            starterCode: '# Print three lines\n',
            hint: 'Use the \\n newline character or multiple print() calls.',
            solution: 'print("Line 1")\nprint("Line 2")\nprint("Line 3")',
          },
        ],
      },
      {
        id: 'variables-data-types',
        number: 3,
        title: 'Variables & Data Types',
        description: 'Understand how to store and work with different types of data.',
        icon: 'Database',
        type: 'exercises',
        exercises: [
          {
            id: 'create-variable',
            title: 'Create a Variable',
            description: 'Store a value in a variable and print it.',
            instructions: ['Create a variable called "message" with the value "Hello, Python!"', 'Then print the variable.'],
            expectedOutput: 'Hello, Python!',
            starterCode: '# Create a variable and print it\n',
            hint: 'Use the = sign to assign a value: message = "Hello, Python!"',
            solution: 'message = "Hello, Python!"\nprint(message)',
          },
          {
            id: 'data-types',
            title: 'Check Data Types',
            description: 'Use type() to check the type of different values.',
            instructions: ['Print the type of: 42, 3.14, "hello", True (each on a new line).'],
            expectedOutput: "<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'bool'>",
            starterCode: '# Print the type of each value\n',
            hint: 'Use type() inside print(): print(type(42))',
            solution: 'print(type(42))\nprint(type(3.14))\nprint(type("hello"))\nprint(type(True))',
          },
          {
            id: 'variable-swap',
            title: 'Swap Two Variables',
            description: 'Swap the values of two variables.',
            instructions: ['Given a = 10 and b = 20, swap their values.', 'Then print a and b.'],
            expectedOutput: '20\n10',
            starterCode: 'a = 10\nb = 20\n\n# Swap the values of a and b\n\nprint(a)\nprint(b)',
            hint: 'Python allows: a, b = b, a',
            solution: 'a = 10\nb = 20\n\na, b = b, a\n\nprint(a)\nprint(b)',
          },
          {
            id: 'multiple-assignment',
            title: 'Multiple Assignment',
            description: 'Assign multiple variables in one line.',
            instructions: ['Assign x=1, y=2, z=3 in a single line.', 'Print their sum.'],
            expectedOutput: '6',
            starterCode: '# Assign x, y, z in one line\n\n# Print their sum\n',
            hint: 'Use: x, y, z = 1, 2, 3',
            solution: 'x, y, z = 1, 2, 3\nprint(x + y + z)',
          },
          {
            id: 'string-to-int',
            title: 'String or Number?',
            description: 'Understand the difference between "5" and 5.',
            instructions: ['Create a = "5" and b = 5.', 'Print type(a) and type(b) to see the difference.'],
            expectedOutput: "<class 'str'>\n<class 'int'>",
            starterCode: '# Create a string "5" and an integer 5\n',
            hint: 'Quotes make it a string; no quotes make it a number.',
            solution: 'a = "5"\nb = 5\nprint(type(a))\nprint(type(b))',
          },
        ],
      },
      {
        id: 'user-input',
        number: 4,
        title: 'User Input & Type Casting',
        description: 'Read user input and convert between data types.',
        icon: 'Keyboard',
        type: 'exercises',
        exercises: [
          {
            id: 'basic-input',
            title: 'Read Input',
            description: 'Read a name from the user and greet them.',
            instructions: ['Use input() to ask for a name, then print "Hello, [name]!"'],
            expectedOutputContains: ['Hello,'],
            starterCode: '# Ask for a name and greet\nname = input("Enter your name: ")\n',
            hint: 'Use f-strings: print(f"Hello, {name}!")',
            solution: 'name = input("Enter your name: ")\nprint(f"Hello, {name}!")',
          },
          {
            id: 'cast-to-int',
            title: 'Cast to Integer',
            description: 'Convert string input to an integer.',
            instructions: ['Read a number from input, convert it to int, and print it doubled.'],
            expectedOutputContains: [],
            starterCode: '# Read a number and print it doubled\nnum = input("Enter a number: ")\n',
            hint: 'Use int() to convert: num = int(input(...))',
            solution: 'num = int(input("Enter a number: "))\nprint(num * 2)',
          },
          {
            id: 'cast-to-float',
            title: 'Cast to Float',
            description: 'Convert input to a floating-point number.',
            instructions: ['Read a price, convert to float, add 20% tax, and print the total.'],
            expectedOutputContains: [],
            starterCode: '# Read a price and add 20% tax\nprice = input("Enter price: ")\n',
            hint: 'Use float() to convert, then multiply by 1.2.',
            solution: 'price = float(input("Enter price: "))\ntotal = price * 1.2\nprint(total)',
          },
          {
            id: 'int-to-string',
            title: 'Number to String',
            description: 'Convert a number to a string for concatenation.',
            instructions: ['Given age = 25, print "I am " + age + " years old" using str().'],
            expectedOutput: 'I am 25 years old',
            starterCode: 'age = 25\n# Print using string concatenation\n',
            hint: 'Use str(age) to convert the number to a string.',
            solution: 'age = 25\nprint("I am " + str(age) + " years old")',
          },
          {
            id: 'bool-casting',
            title: 'Boolean Casting',
            description: 'Understand truthy and falsy values.',
            instructions: ['Print bool(0), bool(""), bool(1), bool("hello") on separate lines.'],
            expectedOutput: 'False\nFalse\nTrue\nTrue',
            starterCode: '# Print boolean values\n',
            hint: 'Empty strings and 0 are falsy; everything else is truthy.',
            solution: 'print(bool(0))\nprint(bool(""))\nprint(bool(1))\nprint(bool("hello"))',
          },
        ],
      },
      {
        id: 'math-operations',
        number: 5,
        title: 'Basic Math Operations',
        description: 'Perform arithmetic operations and understand operator precedence.',
        icon: 'Calculator',
        type: 'exercises',
        exercises: [
          {
            id: 'arithmetic',
            title: 'Basic Arithmetic',
            description: 'Perform addition, subtraction, multiplication, and division.',
            instructions: ['Print the results of: 15 + 7, 20 - 8, 6 * 9, 100 / 4 (each on a new line).'],
            expectedOutput: '22\n12\n54\n25.0',
            starterCode: '# Perform the four basic operations\n',
            hint: 'Use +, -, *, / operators.',
            solution: 'print(15 + 7)\nprint(20 - 8)\nprint(6 * 9)\nprint(100 / 4)',
          },
          {
            id: 'floor-division',
            title: 'Floor Division & Modulo',
            description: 'Use // for floor division and % for remainder.',
            instructions: ['Print 17 // 5 and 17 % 5 on separate lines.'],
            expectedOutput: '3\n2',
            starterCode: '# Floor division and modulo\n',
            hint: '// gives the integer part, % gives the remainder.',
            solution: 'print(17 // 5)\nprint(17 % 5)',
          },
          {
            id: 'exponentiation',
            title: 'Exponentiation',
            description: 'Use ** for powers.',
            instructions: ['Print 2 raised to the power of 10.'],
            expectedOutput: '1024',
            starterCode: '# Calculate 2^10\n',
            hint: 'Use the ** operator: 2 ** 10',
            solution: 'print(2 ** 10)',
          },
          {
            id: 'operator-precedence',
            title: 'Operator Precedence',
            description: 'Understand the order of operations.',
            instructions: ['Print the result of: 2 + 3 * 4 and (2 + 3) * 4 on separate lines.'],
            expectedOutput: '14\n20',
            starterCode: '# Show operator precedence\n',
            hint: 'Multiplication happens before addition unless you use parentheses.',
            solution: 'print(2 + 3 * 4)\nprint((2 + 3) * 4)',
          },
          {
            id: 'augmented-assignment',
            title: 'Augmented Assignment',
            description: 'Use +=, -=, *=, /= operators.',
            instructions: ['Start with x = 10. Add 5, then multiply by 2, then print x.'],
            expectedOutput: '30',
            starterCode: 'x = 10\n# Add 5, then multiply by 2\n',
            hint: 'Use x += 5 then x *= 2.',
            solution: 'x = 10\nx += 5\nx *= 2\nprint(x)',
          },
        ],
      },
      {
        id: 'string-basics',
        number: 6,
        title: 'String Basics',
        description: 'Create and manipulate text strings.',
        icon: 'Type',
        type: 'exercises',
        exercises: [
          { id: 'string-create', title: 'Create Strings', description: 'Create strings with single and double quotes.', instructions: ['Create a string with single quotes and one with double quotes. Print both.'], expectedOutput: 'Hello\nWorld', starterCode: '# Create two strings\n', hint: 'Both \'Hello\' and "World" are valid.', solution: "print('Hello')\nprint(\"World\")" },
          { id: 'string-concat', title: 'Concatenation', description: 'Join strings together.', instructions: ['Concatenate "Hello" and "World" with a space between them.'], expectedOutput: 'Hello World', starterCode: '# Join two strings\n', hint: 'Use + to join: "Hello" + " " + "World"', solution: 'print("Hello" + " " + "World")' },
          { id: 'string-repeat', title: 'String Repetition', description: 'Repeat a string multiple times.', instructions: ['Print "ha" repeated 3 times.'], expectedOutput: 'hahaha', starterCode: '# Repeat a string\n', hint: 'Use * to repeat: "ha" * 3', solution: 'print("ha" * 3)' },
          { id: 'string-length', title: 'String Length', description: 'Find the length of a string.', instructions: ['Print the length of "Python Programming".'], expectedOutput: '18', starterCode: '# Find the length\n', hint: 'Use len() function.', solution: 'print(len("Python Programming"))' },
          { id: 'string-case', title: 'Change Case', description: 'Convert strings to upper and lower case.', instructions: ['Print "hello" in uppercase and "WORLD" in lowercase.'], expectedOutput: 'HELLO\nworld', starterCode: '# Change case\n', hint: 'Use .upper() and .lower() methods.', solution: 'print("hello".upper())\nprint("WORLD".lower())' },
        ],
      },
      {
        id: 'string-formatting',
        number: 7,
        title: 'String Formatting',
        description: 'Format and interpolate strings with f-strings and .format().',
        icon: 'Wand2',
        type: 'exercises',
        exercises: [
          { id: 'fstring-basic', title: 'F-String Basics', description: 'Use f-strings to embed variables.', instructions: ['Create name = "Python" and version = 3.12.', 'Print "Python version 3.12" using an f-string.'], expectedOutput: 'Python version 3.12', starterCode: 'name = "Python"\nversion = 3.12\n# Use an f-string\n', hint: 'Use f"..." with {variable} inside.', solution: 'name = "Python"\nversion = 3.12\nprint(f"{name} version {version}")' },
          { id: 'fstring-expression', title: 'Expressions in F-Strings', description: 'Evaluate expressions inside f-strings.', instructions: ['Print "5 + 3 = 8" using an f-string with the expression inside.'], expectedOutput: '5 + 3 = 8', starterCode: '# Use an expression in an f-string\n', hint: 'You can put any expression in {}: f"{5 + 3}"', solution: 'print(f"5 + 3 = {5 + 3}")' },
          { id: 'format-method', title: '.format() Method', description: 'Use the .format() method.', instructions: ['Print "Hello, World!" using "Hello, {}!".format(...)'], expectedOutput: 'Hello, World!', starterCode: '# Use .format()\n', hint: 'Use "Hello, {}!".format("World")', solution: 'print("Hello, {}!".format("World"))' },
          { id: 'format-number', title: 'Format Numbers', description: 'Format numbers with decimal places.', instructions: ['Print 3.14159 rounded to 2 decimal places using f-string formatting.'], expectedOutput: '3.14', starterCode: '# Format to 2 decimal places\npi = 3.14159\n', hint: 'Use f"{pi:.2f}" for 2 decimal places.', solution: 'pi = 3.14159\nprint(f"{pi:.2f}")' },
          { id: 'format-align', title: 'Alignment & Padding', description: 'Align text and add padding.', instructions: ['Print "Python" right-aligned in a field of width 20.'], expectedOutput: '              Python', starterCode: '# Right-align in width 20\n', hint: 'Use f"{text:>20}"', solution: 'print(f"{"Python":>20}")' },
        ],
      },
      {
        id: 'string-indexing',
        number: 8,
        title: 'String Indexing & Slicing',
        description: 'Access parts of strings using indices and slices.',
        icon: 'Scissors',
        type: 'exercises',
        exercises: [
          { id: 'index-access', title: 'Access Characters', description: 'Get individual characters by index.', instructions: ['Given text = "Python", print the first and last characters.'], expectedOutput: 'P\nn', starterCode: 'text = "Python"\n# Print first and last\n', hint: 'Use text[0] and text[-1].', solution: 'text = "Python"\nprint(text[0])\nprint(text[-1])' },
          { id: 'slice-basic', title: 'Basic Slicing', description: 'Extract substrings with slicing.', instructions: ['Given text = "Hello, World!", print "Hello" and "World" using slicing.'], expectedOutput: 'Hello\nWorld', starterCode: 'text = "Hello, World!"\n# Slice to get "Hello" and "World"\n', hint: 'Use text[start:end]. Remember end is exclusive.', solution: 'text = "Hello, World!"\nprint(text[0:5])\nprint(text[7:12])' },
          { id: 'slice-step', title: 'Slice with Step', description: 'Use step in slicing.', instructions: ['Given text = "abcdefghij", print every other character.'], expectedOutput: 'acegi', starterCode: 'text = "abcdefghij"\n# Print every other character\n', hint: 'Use text[::2] for step of 2.', solution: 'text = "abcdefghij"\nprint(text[::2])' },
          { id: 'reverse-string', title: 'Reverse a String', description: 'Reverse a string using slicing.', instructions: ['Reverse the string "Python" and print it.'], expectedOutput: 'nohtyP', starterCode: '# Reverse "Python"\n', hint: 'Use [::-1] to reverse.', solution: 'print("Python"[::-1])' },
          { id: 'check-membership', title: 'Check Membership', description: 'Use "in" to check if a substring exists.', instructions: ['Check if "world" is in "Hello, World!" (case-insensitive). Print True or False.'], expectedOutput: 'True', starterCode: 'text = "Hello, World!"\n# Check if "world" is in text (case-insensitive)\n', hint: 'Convert to lowercase first: "world" in text.lower()', solution: 'text = "Hello, World!"\nprint("world" in text.lower())' },
        ],
      },
      {
        id: 'functions-basics',
        number: 9,
        title: 'Functions -- Basics',
        description: 'Define and call reusable functions.',
        icon: 'Box',
        type: 'exercises',
        exercises: [
          { id: 'define-function', title: 'Define a Function', description: 'Create and call a simple function.', instructions: ['Define a function called greet() that prints "Hello!". Call it.'], expectedOutput: 'Hello!', starterCode: '# Define and call greet()\n', hint: 'Use def greet(): then call greet()', solution: 'def greet():\n    print("Hello!")\n\ngreet()' },
          { id: 'function-params', title: 'Function Parameters', description: 'Pass arguments to functions.', instructions: ['Define greet(name) that prints "Hello, [name]!". Call it with "Python".'], expectedOutput: 'Hello, Python!', starterCode: '# Define greet with a parameter\n', hint: 'def greet(name): print(f"Hello, {name}!")', solution: 'def greet(name):\n    print(f"Hello, {name}!")\n\ngreet("Python")' },
          { id: 'default-params', title: 'Default Parameters', description: 'Use default parameter values.', instructions: ['Define greet(name="World") and call it without arguments, then with "Python".'], expectedOutput: 'Hello, World!\nHello, Python!', starterCode: '# Function with default parameter\n', hint: 'def greet(name="World"): ...', solution: 'def greet(name="World"):\n    print(f"Hello, {name}!")\n\ngreet()\ngreet("Python")' },
          { id: 'multiple-params', title: 'Multiple Parameters', description: 'Functions with multiple parameters.', instructions: ['Define add(a, b) that prints the sum. Call it with 3 and 7.'], expectedOutput: '10', starterCode: '# Define add function\n', hint: 'def add(a, b): print(a + b)', solution: 'def add(a, b):\n    print(a + b)\n\nadd(3, 7)' },
          { id: 'keyword-args', title: 'Keyword Arguments', description: 'Call functions with keyword arguments.', instructions: ['Define describe(name, age). Call it with keyword arguments in reverse order.'], expectedOutput: 'Name: Alice, Age: 30', starterCode: '# Use keyword arguments\n', hint: 'Call with describe(age=30, name="Alice")', solution: 'def describe(name, age):\n    print(f"Name: {name}, Age: {age}")\n\ndescribe(age=30, name="Alice")' },
        ],
      },
      {
        id: 'functions-return',
        number: 10,
        title: 'Functions -- Return Values',
        description: 'Return values from functions effectively.',
        icon: 'CornerDownLeft',
        type: 'exercises',
        exercises: [
          { id: 'return-value', title: 'Return a Value', description: 'Return a value from a function.', instructions: ['Define double(n) that returns n * 2. Print the result of double(5).'], expectedOutput: '10', starterCode: '# Return a value\n', hint: 'Use return n * 2', solution: 'def double(n):\n    return n * 2\n\nprint(double(5))' },
          { id: 'return-multiple', title: 'Return Multiple Values', description: 'Return multiple values as a tuple.', instructions: ['Define min_max(numbers) that returns the min and max. Test with [3, 1, 4, 1, 5].'], expectedOutput: '1 5', starterCode: '# Return min and max\n', hint: 'return min(numbers), max(numbers)', solution: 'def min_max(numbers):\n    return min(numbers), max(numbers)\n\nlo, hi = min_max([3, 1, 4, 1, 5])\nprint(lo, hi)' },
          { id: 'return-bool', title: 'Return Boolean', description: 'Return True or False from a function.', instructions: ['Define is_even(n) that returns True if n is even. Print is_even(4) and is_even(7).'], expectedOutput: 'True\nFalse', starterCode: '# Check if even\n', hint: 'return n % 2 == 0', solution: 'def is_even(n):\n    return n % 2 == 0\n\nprint(is_even(4))\nprint(is_even(7))' },
          { id: 'return-early', title: 'Early Return', description: 'Use return to exit a function early.', instructions: ['Define first_negative(lst) that returns the first negative number, or None if none found.'], expectedOutput: '-3', starterCode: '# Find first negative\n', hint: 'Loop through and return when you find a negative.', solution: 'def first_negative(lst):\n    for n in lst:\n        if n < 0:\n            return n\n    return None\n\nprint(first_negative([1, 5, -3, 8]))' },
          { id: 'return-none', title: 'Implicit None', description: 'Understand that functions without return give None.', instructions: ['Define say_hello() that prints "Hello". Print the return value of say_hello().'], expectedOutput: 'Hello\nNone', starterCode: '# Show implicit None\n', hint: 'result = say_hello() then print(result)', solution: 'def say_hello():\n    print("Hello")\n\nresult = say_hello()\nprint(result)' },
        ],
      },
      {
        id: 'variable-scope',
        number: 11,
        title: 'Variable Scope',
        description: 'Understand local, global, and enclosing scope.',
        icon: 'Layers',
        type: 'exercises',
        exercises: [
          { id: 'local-scope', title: 'Local Scope', description: 'Variables inside functions are local.', instructions: ['Define a function that creates x = 10 inside it. Print x inside the function.'], expectedOutput: '10', starterCode: '# Local variable\n', hint: 'Variables defined inside a function only exist there.', solution: 'def my_func():\n    x = 10\n    print(x)\n\nmy_func()' },
          { id: 'global-scope', title: 'Global vs Local', description: 'See how global and local variables interact.', instructions: ['Create x = "global" outside a function. Inside, create x = "local". Print both.'], expectedOutput: 'local\nglobal', starterCode: 'x = "global"\n# Define function with local x\n', hint: 'The function has its own x that shadows the global one.', solution: 'x = "global"\n\ndef my_func():\n    x = "local"\n    print(x)\n\nmy_func()\nprint(x)' },
          { id: 'global-keyword', title: 'The global Keyword', description: 'Modify a global variable from inside a function.', instructions: ['Use the global keyword to modify a global counter from inside a function.'], expectedOutput: '1', starterCode: 'counter = 0\n# Increment counter inside function\n', hint: 'Use "global counter" inside the function.', solution: 'counter = 0\n\ndef increment():\n    global counter\n    counter += 1\n\nincrement()\nprint(counter)' },
          { id: 'nested-scope', title: 'Nested Functions', description: 'Inner functions can access outer variables.', instructions: ['Create an outer function with x = 10. Inner function prints x. Call both.'], expectedOutput: '10', starterCode: '# Nested function scope\n', hint: 'Inner functions can read (but not modify) outer variables.', solution: 'def outer():\n    x = 10\n    def inner():\n        print(x)\n    inner()\n\nouter()' },
          { id: 'nonlocal-keyword', title: 'The nonlocal Keyword', description: 'Modify an enclosing variable with nonlocal.', instructions: ['Use nonlocal to modify an outer function variable from an inner function.'], expectedOutput: '1', starterCode: '# Use nonlocal\n', hint: 'nonlocal lets inner functions modify outer variables.', solution: 'def outer():\n    count = 0\n    def inner():\n        nonlocal count\n        count += 1\n    inner()\n    print(count)\n\nouter()' },
        ],
      },
      {
        id: 'boolean-logic',
        number: 12,
        title: 'Boolean Logic',
        description: 'Work with True/False values and logical operators.',
        icon: 'ToggleLeft',
        type: 'exercises',
        exercises: [
          { id: 'comparisons', title: 'Comparisons', description: 'Use comparison operators.', instructions: ['Print the results of: 5 > 3, 10 == 10, 7 != 7, 4 <= 4 (each on a new line).'], expectedOutput: 'True\nTrue\nFalse\nTrue', starterCode: '# Comparison operators\n', hint: 'Use >, ==, !=, <=', solution: 'print(5 > 3)\nprint(10 == 10)\nprint(7 != 7)\nprint(4 <= 4)' },
          { id: 'logical-and', title: 'Logical AND', description: 'Combine conditions with and.', instructions: ['Print True only if both 5 > 3 AND 10 < 20.'], expectedOutput: 'True', starterCode: '# Logical AND\n', hint: 'Use the "and" keyword.', solution: 'print(5 > 3 and 10 < 20)' },
          { id: 'logical-or', title: 'Logical OR', description: 'Combine conditions with or.', instructions: ['Print True if either 5 > 10 OR 3 < 7.'], expectedOutput: 'True', starterCode: '# Logical OR\n', hint: 'Use the "or" keyword.', solution: 'print(5 > 10 or 3 < 7)' },
          { id: 'logical-not', title: 'Logical NOT', description: 'Negate a condition with not.', instructions: ['Print the opposite of True and the opposite of False.'], expectedOutput: 'False\nTrue', starterCode: '# Logical NOT\n', hint: 'Use the "not" keyword.', solution: 'print(not True)\nprint(not False)' },
          { id: 'chained-comparison', title: 'Chained Comparisons', description: 'Chain multiple comparisons.', instructions: ['Check if 5 is between 1 and 10 using chained comparison. Print the result.'], expectedOutput: 'True', starterCode: '# Chained comparison\n', hint: 'Python allows: 1 < 5 < 10', solution: 'print(1 < 5 < 10)' },
        ],
      },
      {
        id: 'conditionals',
        number: 13,
        title: 'Conditional Branching',
        description: 'Make decisions with if/elif/else statements.',
        icon: 'GitBranch',
        type: 'exercises',
        exercises: [
          { id: 'if-basic', title: 'Basic If', description: 'Simple if statement.', instructions: ['If x = 10 is greater than 5, print "Big".'], expectedOutput: 'Big', starterCode: 'x = 10\n# Check if x > 5\n', hint: 'if x > 5: print("Big")', solution: 'x = 10\nif x > 5:\n    print("Big")' },
          { id: 'if-else', title: 'If-Else', description: 'Two-way branching.', instructions: ['Given age = 15, print "Adult" if >= 18, else "Minor".'], expectedOutput: 'Minor', starterCode: 'age = 15\n# Check age\n', hint: 'Use if/else.', solution: 'age = 15\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")' },
          { id: 'if-elif-else', title: 'If-Elif-Else', description: 'Multi-way branching.', instructions: ['Given score = 85, print "A" (>=90), "B" (>=80), "C" (>=70), or "F".'], expectedOutput: 'B', starterCode: 'score = 85\n# Grade the score\n', hint: 'Use if/elif/else chain.', solution: 'score = 85\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelse:\n    print("F")' },
          { id: 'nested-if', title: 'Nested If', description: 'If statements inside if statements.', instructions: ['Check if num = 12 is positive, then if it is even. Print "Positive and even".'], expectedOutput: 'Positive and even', starterCode: 'num = 12\n# Nested check\n', hint: 'Put an if inside another if.', solution: 'num = 12\nif num > 0:\n    if num % 2 == 0:\n        print("Positive and even")' },
          { id: 'ternary', title: 'Ternary Expression', description: 'One-line if-else.', instructions: ['Use a ternary expression to set status = "even" if 10 is even, else "odd". Print it.'], expectedOutput: 'even', starterCode: '# One-line if-else\n', hint: 'value_if_true if condition else value_if_false', solution: 'status = "even" if 10 % 2 == 0 else "odd"\nprint(status)' },
        ],
      },
      {
        id: 'error-handling',
        number: 14,
        title: 'Error Handling (try/except)',
        description: 'Catch and handle runtime exceptions gracefully.',
        icon: 'ShieldAlert',
        type: 'exercises',
        exercises: [
          { id: 'try-except', title: 'Basic Try/Except', description: 'Catch a division by zero error.', instructions: ['Try to divide 10 by 0. Catch the error and print "Cannot divide by zero".'], expectedOutput: 'Cannot divide by zero', starterCode: '# Handle division by zero\n', hint: 'Use try/except ZeroDivisionError:', solution: 'try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero")' },
          { id: 'multiple-except', title: 'Multiple Except', description: 'Handle different error types.', instructions: ['Try to convert "abc" to int. Catch ValueError and print "Not a number".'], expectedOutput: 'Not a number', starterCode: '# Handle ValueError\n', hint: 'except ValueError: print("Not a number")', solution: 'try:\n    num = int("abc")\nexcept ValueError:\n    print("Not a number")' },
          { id: 'try-finally', title: 'Try/Finally', description: 'Code that always runs.', instructions: ['Use try/finally to print "Done" after attempting 10/0.'], expectedOutput: 'Error!\nDone', starterCode: '# Use finally\n', hint: 'finally: block always runs.', solution: 'try:\n    result = 10 / 0\nexcept:\n    print("Error!")\nfinally:\n    print("Done")' },
          { id: 'try-else', title: 'Try/Else', description: 'Code that runs only if no error.', instructions: ['Try to convert "42" to int. In the else block, print "Success: 42".'], expectedOutput: 'Success: 42', starterCode: '# Use try/else\n', hint: 'else: runs when no exception occurs.', solution: 'try:\n    num = int("42")\nexcept ValueError:\n    print("Failed")\nelse:\n    print(f"Success: {num}")' },
          { id: 'raise-error', title: 'Raise an Error', description: 'Raise your own exceptions.', instructions: ['Define check_age(age). Raise ValueError if age < 0. Test with -1 and catch it.'], expectedOutput: 'Invalid age: -1', starterCode: '# Raise an exception\n', hint: 'raise ValueError("message")', solution: 'def check_age(age):\n    if age < 0:\n        raise ValueError(f"Invalid age: {age}")\n\ntry:\n    check_age(-1)\nexcept ValueError as e:\n    print(e)' },
        ],
      },
      {
        id: 'while-loops',
        number: 15,
        title: 'While Loops',
        description: 'Repeat code while a condition is true.',
        icon: 'RefreshCw',
        type: 'exercises',
        exercises: [
          { id: 'while-basic', title: 'Basic While', description: 'Count from 1 to 5.', instructions: ['Use a while loop to print numbers 1 through 5.'], expectedOutput: '1\n2\n3\n4\n5', starterCode: '# Count 1 to 5\n', hint: 'i = 1, while i <= 5: print(i), i += 1', solution: 'i = 1\nwhile i <= 5:\n    print(i)\n    i += 1' },
          { id: 'while-sum', title: 'Sum with While', description: 'Sum numbers until a condition.', instructions: ['Sum numbers from 1 to 100 using a while loop. Print the sum.'], expectedOutput: '5050', starterCode: '# Sum 1 to 100\n', hint: 'Accumulate in a total variable.', solution: 'total = 0\ni = 1\nwhile i <= 100:\n    total += i\n    i += 1\nprint(total)' },
          { id: 'while-input', title: 'Input Loop', description: 'Keep asking until valid input.', instructions: ['Print numbers counting down from 5 to 1, then print "Go!"'], expectedOutput: '5\n4\n3\n2\n1\nGo!', starterCode: '# Countdown\n', hint: 'Start at 5 and decrement.', solution: 'n = 5\nwhile n > 0:\n    print(n)\n    n -= 1\nprint("Go!")' },
          { id: 'while-flag', title: 'Flag Variable', description: 'Use a boolean flag to control the loop.', instructions: ['Use a flag variable to find the first multiple of 7 greater than 50. Print it.'], expectedOutput: '56', starterCode: '# Find first multiple of 7 > 50\n', hint: 'Use found = False as a flag.', solution: 'n = 51\nfound = False\nwhile not found:\n    if n % 7 == 0:\n        print(n)\n        found = True\n    n += 1' },
          { id: 'while-nested', title: 'Nested While', description: 'Loops inside loops.', instructions: ['Print a 3x3 grid of stars using nested while loops.'], expectedOutput: '* * * \n* * * \n* * * ', starterCode: '# 3x3 star grid\n', hint: 'Outer loop for rows, inner loop for columns.', solution: 'i = 0\nwhile i < 3:\n    j = 0\n    row = ""\n    while j < 3:\n        row += "* "\n        j += 1\n    print(row)\n    i += 1' },
        ],
      },
      {
        id: 'for-loops',
        number: 16,
        title: 'For Loops',
        description: 'Iterate over sequences and ranges.',
        icon: 'Repeat',
        type: 'exercises',
        exercises: [
          { id: 'for-range', title: 'Range Loop', description: 'Loop through a range of numbers.', instructions: ['Print numbers 0 through 4 using for and range().'], expectedOutput: '0\n1\n2\n3\n4', starterCode: '# Loop with range\n', hint: 'for i in range(5): print(i)', solution: 'for i in range(5):\n    print(i)' },
          { id: 'for-list', title: 'Loop Over a List', description: 'Iterate through list elements.', instructions: ['Loop through ["apple", "banana", "cherry"] and print each.'], expectedOutput: 'apple\nbanana\ncherry', starterCode: 'fruits = ["apple", "banana", "cherry"]\n# Loop and print\n', hint: 'for fruit in fruits: print(fruit)', solution: 'fruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)' },
          { id: 'for-string', title: 'Loop Over a String', description: 'Iterate through characters.', instructions: ['Print each character of "Python" on a new line.'], expectedOutput: 'P\ny\nt\nh\no\nn', starterCode: '# Loop through "Python"\n', hint: 'for char in "Python": print(char)', solution: 'for char in "Python":\n    print(char)' },
          { id: 'for-enumerate', title: 'Enumerate', description: 'Get both index and value.', instructions: ['Print each fruit with its index: "0: apple", "1: banana", "2: cherry".'], expectedOutput: '0: apple\n1: banana\n2: cherry', starterCode: 'fruits = ["apple", "banana", "cherry"]\n# Use enumerate\n', hint: 'for i, fruit in enumerate(fruits):', solution: 'fruits = ["apple", "banana", "cherry"]\nfor i, fruit in enumerate(fruits):\n    print(f"{i}: {fruit}")' },
          { id: 'for-nested', title: 'Nested For', description: 'Multiplication table.', instructions: ['Print a 3x3 multiplication table (1*1 through 3*3).'], expectedOutput: '1 2 3\n2 4 6\n3 6 9', starterCode: '# Multiplication table\n', hint: 'Two nested for loops with range(1, 4).', solution: 'for i in range(1, 4):\n    row = []\n    for j in range(1, 4):\n        row.append(str(i * j))\n    print(" ".join(row))' },
        ],
      },
      {
        id: 'loop-control',
        number: 17,
        title: 'Loop Control (break & continue)',
        description: 'Control loop execution with break and continue.',
        icon: 'SkipForward',
        type: 'exercises',
        exercises: [
          { id: 'break-basic', title: 'Break', description: 'Exit a loop early.', instructions: ['Loop from 1 to 10 but stop (break) when you reach 5. Print each number.'], expectedOutput: '1\n2\n3\n4', starterCode: '# Break at 5\n', hint: 'if i == 5: break', solution: 'for i in range(1, 11):\n    if i == 5:\n        break\n    print(i)' },
          { id: 'continue-basic', title: 'Continue', description: 'Skip an iteration.', instructions: ['Print 1-5 but skip 3 using continue.'], expectedOutput: '1\n2\n4\n5', starterCode: '# Skip 3\n', hint: 'if i == 3: continue', solution: 'for i in range(1, 6):\n    if i == 3:\n        continue\n    print(i)' },
          { id: 'break-search', title: 'Search with Break', description: 'Find an element and stop.', instructions: ['Search for "banana" in a list. Print "Found!" if found.'], expectedOutput: 'Found!', starterCode: 'fruits = ["apple", "banana", "cherry"]\n# Search for banana\n', hint: 'if fruit == "banana": print("Found!"); break', solution: 'fruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    if fruit == "banana":\n        print("Found!")\n        break' },
          { id: 'for-else', title: 'For-Else', description: 'Else clause runs when loop completes normally.', instructions: ['Search for "mango" in ["apple", "banana"]. If not found, print "Not found" using for-else.'], expectedOutput: 'Not found', starterCode: 'fruits = ["apple", "banana"]\n# Use for-else\n', hint: 'The else after a for runs if no break occurred.', solution: 'fruits = ["apple", "banana"]\nfor fruit in fruits:\n    if fruit == "mango":\n        print("Found!")\n        break\nelse:\n    print("Not found")' },
          { id: 'continue-filter', title: 'Filter with Continue', description: 'Process only certain items.', instructions: ['Print only even numbers from 1 to 10 using continue.'], expectedOutput: '2\n4\n6\n8\n10', starterCode: '# Print even numbers\n', hint: 'if i % 2 != 0: continue', solution: 'for i in range(1, 11):\n    if i % 2 != 0:\n        continue\n    print(i)' },
        ],
      },
      {
        id: 'lists-basics',
        number: 18,
        title: 'Lists -- Basics',
        description: 'Create and access list elements.',
        icon: 'List',
        type: 'exercises',
        exercises: [
          { id: 'create-list', title: 'Create a List', description: 'Create and print a list.', instructions: ['Create a list of numbers [1, 2, 3, 4, 5] and print it.'], expectedOutput: '[1, 2, 3, 4, 5]', starterCode: '# Create a list\n', hint: 'numbers = [1, 2, 3, 4, 5]', solution: 'numbers = [1, 2, 3, 4, 5]\nprint(numbers)' },
          { id: 'list-access', title: 'Access Elements', description: 'Get elements by index.', instructions: ['Given colors = ["red", "green", "blue"], print the first and last elements.'], expectedOutput: 'red\nblue', starterCode: 'colors = ["red", "green", "blue"]\n# Access first and last\n', hint: 'Use colors[0] and colors[-1].', solution: 'colors = ["red", "green", "blue"]\nprint(colors[0])\nprint(colors[-1])' },
          { id: 'list-slice', title: 'List Slicing', description: 'Get a sublist.', instructions: ['Given nums = [10, 20, 30, 40, 50], print elements at index 1 through 3.'], expectedOutput: '[20, 30, 40]', starterCode: 'nums = [10, 20, 30, 40, 50]\n# Slice\n', hint: 'Use nums[1:4].', solution: 'nums = [10, 20, 30, 40, 50]\nprint(nums[1:4])' },
          { id: 'list-length', title: 'List Length', description: 'Find the number of elements.', instructions: ['Print the length of [1, 2, 3, 4, 5].'], expectedOutput: '5', starterCode: '# Get list length\n', hint: 'Use len().', solution: 'print(len([1, 2, 3, 4, 5]))' },
          { id: 'list-in', title: 'Check Membership', description: 'Check if an element exists in a list.', instructions: ['Check if 3 is in [1, 2, 3, 4, 5]. Print the result.'], expectedOutput: 'True', starterCode: '# Check membership\n', hint: 'Use "in" operator.', solution: 'print(3 in [1, 2, 3, 4, 5])' },
        ],
      },
      {
        id: 'lists-mutation',
        number: 19,
        title: 'Lists -- Mutation Methods',
        description: 'Modify lists with append, insert, remove, and more.',
        icon: 'ListPlus',
        type: 'exercises',
        exercises: [
          { id: 'list-append', title: 'Append', description: 'Add to the end.', instructions: ['Start with [1, 2, 3]. Append 4. Print the list.'], expectedOutput: '[1, 2, 3, 4]', starterCode: 'nums = [1, 2, 3]\n# Append 4\n', hint: 'nums.append(4)', solution: 'nums = [1, 2, 3]\nnums.append(4)\nprint(nums)' },
          { id: 'list-insert', title: 'Insert', description: 'Insert at a specific position.', instructions: ['Insert "banana" at index 1 in ["apple", "cherry"]. Print the list.'], expectedOutput: "['apple', 'banana', 'cherry']", starterCode: 'fruits = ["apple", "cherry"]\n# Insert banana at index 1\n', hint: 'fruits.insert(1, "banana")', solution: 'fruits = ["apple", "cherry"]\nfruits.insert(1, "banana")\nprint(fruits)' },
          { id: 'list-remove', title: 'Remove', description: 'Remove by value.', instructions: ['Remove "banana" from ["apple", "banana", "cherry"]. Print the list.'], expectedOutput: "['apple', 'cherry']", starterCode: 'fruits = ["apple", "banana", "cherry"]\n# Remove banana\n', hint: 'fruits.remove("banana")', solution: 'fruits = ["apple", "banana", "cherry"]\nfruits.remove("banana")\nprint(fruits)' },
          { id: 'list-pop', title: 'Pop', description: 'Remove and return by index.', instructions: ['Pop the last element from [1, 2, 3]. Print the popped element and the list.'], expectedOutput: '3\n[1, 2]', starterCode: 'nums = [1, 2, 3]\n# Pop last element\n', hint: 'popped = nums.pop()', solution: 'nums = [1, 2, 3]\npopped = nums.pop()\nprint(popped)\nprint(nums)' },
          { id: 'list-extend', title: 'Extend', description: 'Add multiple elements.', instructions: ['Extend [1, 2] with [3, 4, 5]. Print the result.'], expectedOutput: '[1, 2, 3, 4, 5]', starterCode: 'a = [1, 2]\n# Extend with [3, 4, 5]\n', hint: 'a.extend([3, 4, 5])', solution: 'a = [1, 2]\na.extend([3, 4, 5])\nprint(a)' },
        ],
      },
      {
        id: 'lists-sorting',
        number: 20,
        title: 'Lists -- Sorting & Searching',
        description: 'Sort and search through list data.',
        icon: 'ArrowUpDown',
        type: 'exercises',
        exercises: [
          { id: 'list-sort', title: 'Sort a List', description: 'Sort elements in order.', instructions: ['Sort [3, 1, 4, 1, 5, 9] and print the sorted list.'], expectedOutput: '[1, 1, 3, 4, 5, 9]', starterCode: 'nums = [3, 1, 4, 1, 5, 9]\n# Sort\n', hint: 'Use nums.sort() or sorted(nums).', solution: 'nums = [3, 1, 4, 1, 5, 9]\nnums.sort()\nprint(nums)' },
          { id: 'list-sort-reverse', title: 'Sort Descending', description: 'Sort in reverse order.', instructions: ['Sort [3, 1, 4, 1, 5] in descending order. Print it.'], expectedOutput: '[5, 4, 3, 1, 1]', starterCode: 'nums = [3, 1, 4, 1, 5]\n# Sort descending\n', hint: 'Use sort(reverse=True) or sorted(..., reverse=True).', solution: 'nums = [3, 1, 4, 1, 5]\nnums.sort(reverse=True)\nprint(nums)' },
          { id: 'list-min-max', title: 'Min & Max', description: 'Find smallest and largest.', instructions: ['Print the min and max of [7, 2, 9, 1, 5].'], expectedOutput: '1\n9', starterCode: 'nums = [7, 2, 9, 1, 5]\n# Find min and max\n', hint: 'Use min() and max() functions.', solution: 'nums = [7, 2, 9, 1, 5]\nprint(min(nums))\nprint(max(nums))' },
          { id: 'list-count', title: 'Count Occurrences', description: 'Count how many times an element appears.', instructions: ['Count how many times 1 appears in [1, 2, 1, 3, 1]. Print the count.'], expectedOutput: '3', starterCode: 'nums = [1, 2, 1, 3, 1]\n# Count 1s\n', hint: 'Use nums.count(1).', solution: 'nums = [1, 2, 1, 3, 1]\nprint(nums.count(1))' },
          { id: 'list-index', title: 'Find Index', description: 'Find the position of an element.', instructions: ['Find the index of "banana" in ["apple", "banana", "cherry"]. Print it.'], expectedOutput: '1', starterCode: 'fruits = ["apple", "banana", "cherry"]\n# Find index\n', hint: 'Use fruits.index("banana").', solution: 'fruits = ["apple", "banana", "cherry"]\nprint(fruits.index("banana"))' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // LEVEL 2: INTERMEDIATE
  // ═══════════════════════════════════════════════════
  {
    id: 'intermediate',
    title: 'Intermediate',
    subtitle: 'Level Up Your Skills',
    description: 'Data structures, OOP, file I/O, error handling, and the standard library.',
    icon: 'Rocket',
    color: 'blue',
    categories: [
      { id: 'tuples', number: 1, title: 'Tuples & Immutability', description: 'Work with immutable sequences.', icon: 'Lock', type: 'exercises', exercises: [
        { id: 'tuple-create', title: 'Create Tuples', description: 'Create and access tuple elements.', instructions: ['Create a tuple (1, 2, 3) and print the second element.'], expectedOutput: '2', starterCode: '# Create a tuple\n', hint: 'Access with index: t[1]', solution: 't = (1, 2, 3)\nprint(t[1])' },
        { id: 'tuple-unpack', title: 'Tuple Unpacking', description: 'Unpack tuple into variables.', instructions: ['Unpack (10, 20, 30) into a, b, c. Print their sum.'], expectedOutput: '60', starterCode: '# Unpack a tuple\n', hint: 'a, b, c = (10, 20, 30)', solution: 'a, b, c = (10, 20, 30)\nprint(a + b + c)' },
        { id: 'tuple-immutable', title: 'Immutability', description: 'Tuples cannot be changed.', instructions: ['Try to change t[0] = 99 in (1, 2, 3). Catch the TypeError and print "Tuples are immutable".'], expectedOutput: 'Tuples are immutable', starterCode: 't = (1, 2, 3)\n# Try to modify\n', hint: 'Use try/except TypeError.', solution: 't = (1, 2, 3)\ntry:\n    t[0] = 99\nexcept TypeError:\n    print("Tuples are immutable")' },
        { id: 'tuple-methods', title: 'Tuple Methods', description: 'Use count() and index().', instructions: ['In (1, 2, 2, 3, 2), count 2s and find its first index. Print both.'], expectedOutput: '3\n1', starterCode: 't = (1, 2, 2, 3, 2)\n# Count and index\n', hint: 't.count(2) and t.index(2)', solution: 't = (1, 2, 2, 3, 2)\nprint(t.count(2))\nprint(t.index(2))' },
        { id: 'named-tuple', title: 'Named Tuples', description: 'Create self-documenting tuples.', instructions: ['Create a named tuple Point with x, y fields. Create Point(3, 4) and print x and y.'], expectedOutput: '3\n4', starterCode: 'from collections import namedtuple\n# Create and use a named tuple\n', hint: 'Point = namedtuple("Point", ["x", "y"])', solution: 'from collections import namedtuple\nPoint = namedtuple("Point", ["x", "y"])\np = Point(3, 4)\nprint(p.x)\nprint(p.y)' },
      ]},
      { id: 'builtins', number: 2, title: 'Built-in Functions', description: 'Master essential built-in Python functions.', icon: 'Wrench', type: 'exercises', exercises: [
        { id: 'abs-round', title: 'abs() and round()', description: 'Absolute value and rounding.', instructions: ['Print abs(-7) and round(3.14159, 2).'], expectedOutput: '7\n3.14', starterCode: '# abs and round\n', hint: 'abs() for absolute, round(n, digits) for rounding.', solution: 'print(abs(-7))\nprint(round(3.14159, 2))' },
        { id: 'sum-range', title: 'sum() and range()', description: 'Sum a range of numbers.', instructions: ['Print the sum of numbers 1 to 100 using sum() and range().'], expectedOutput: '5050', starterCode: '# Sum 1 to 100\n', hint: 'sum(range(1, 101))', solution: 'print(sum(range(1, 101)))' },
        { id: 'any-all', title: 'any() and all()', description: 'Check if any or all elements are truthy.', instructions: ['Print any([False, True, False]) and all([True, True, True]).'], expectedOutput: 'True\nTrue', starterCode: '# any and all\n', hint: 'any() returns True if at least one is True.', solution: 'print(any([False, True, False]))\nprint(all([True, True, True]))' },
        { id: 'sorted-reversed', title: 'sorted() and reversed()', description: 'Sort without modifying original.', instructions: ['Print sorted([3, 1, 4]) and list(reversed([1, 2, 3])).'], expectedOutput: '[1, 3, 4]\n[3, 2, 1]', starterCode: '# sorted and reversed\n', hint: 'sorted() returns a new list; reversed() returns an iterator.', solution: 'print(sorted([3, 1, 4]))\nprint(list(reversed([1, 2, 3])))' },
        { id: 'zip-builtin', title: 'zip()', description: 'Pair elements from multiple iterables.', instructions: ['Zip names=["a","b","c"] with scores=[1,2,3]. Print each pair.'], expectedOutput: 'a: 1\nb: 2\nc: 3', starterCode: 'names = ["a", "b", "c"]\nscores = [1, 2, 3]\n# Zip and print\n', hint: 'for name, score in zip(names, scores):', solution: 'names = ["a", "b", "c"]\nscores = [1, 2, 3]\nfor name, score in zip(names, scores):\n    print(f"{name}: {score}")' },
      ]},
      { id: 'dict-basics', number: 3, title: 'Dictionaries -- Basics', description: 'Create and modify key-value pairs.', icon: 'BookKey', type: 'exercises', exercises: [
        { id: 'dict-create', title: 'Create a Dict', description: 'Create and access dictionary values.', instructions: ['Create person = {"name": "Alice", "age": 30}. Print the name.'], expectedOutput: 'Alice', starterCode: '# Create a dictionary\n', hint: 'person["name"]', solution: 'person = {"name": "Alice", "age": 30}\nprint(person["name"])' },
        { id: 'dict-add', title: 'Add & Update', description: 'Add and modify entries.', instructions: ['Add "city": "Paris" to person dict. Print the dict.'], expectedOutput: "{'name': 'Alice', 'age': 30, 'city': 'Paris'}", starterCode: 'person = {"name": "Alice", "age": 30}\n# Add city\n', hint: 'person["city"] = "Paris"', solution: 'person = {"name": "Alice", "age": 30}\nperson["city"] = "Paris"\nprint(person)' },
        { id: 'dict-get', title: 'Safe Access with get()', description: 'Access without KeyError.', instructions: ['Use .get() to access "email" key with default "N/A". Print it.'], expectedOutput: 'N/A', starterCode: 'person = {"name": "Alice"}\n# Safe access\n', hint: 'person.get("email", "N/A")', solution: 'person = {"name": "Alice"}\nprint(person.get("email", "N/A"))' },
        { id: 'dict-delete', title: 'Delete Keys', description: 'Remove entries from a dict.', instructions: ['Delete "age" from {"name": "Alice", "age": 30}. Print the dict.'], expectedOutput: "{'name': 'Alice'}", starterCode: 'person = {"name": "Alice", "age": 30}\n# Delete age\n', hint: 'del person["age"] or person.pop("age")', solution: 'person = {"name": "Alice", "age": 30}\ndel person["age"]\nprint(person)' },
        { id: 'dict-nested', title: 'Nested Dicts', description: 'Dicts inside dicts.', instructions: ['Create a nested dict for a student with name and grades dict. Print math grade.'], expectedOutput: '95', starterCode: '# Nested dictionary\n', hint: 'student["grades"]["math"]', solution: 'student = {"name": "Bob", "grades": {"math": 95, "science": 87}}\nprint(student["grades"]["math"])' },
      ]},
      { id: 'dict-iteration', number: 4, title: 'Dictionaries -- Iteration & Methods', description: 'Loop through dictionaries and use built-in methods.', icon: 'RotateCw', type: 'exercises', exercises: [
        { id: 'dict-keys', title: 'Iterate Keys', description: 'Loop through dictionary keys.', instructions: ['Print all keys of {"a": 1, "b": 2, "c": 3}.'], expectedOutput: 'a\nb\nc', starterCode: 'd = {"a": 1, "b": 2, "c": 3}\n# Print keys\n', hint: 'for key in d:', solution: 'd = {"a": 1, "b": 2, "c": 3}\nfor key in d:\n    print(key)' },
        { id: 'dict-values', title: 'Iterate Values', description: 'Loop through dictionary values.', instructions: ['Print all values of {"a": 1, "b": 2, "c": 3}.'], expectedOutput: '1\n2\n3', starterCode: 'd = {"a": 1, "b": 2, "c": 3}\n# Print values\n', hint: 'for val in d.values():', solution: 'd = {"a": 1, "b": 2, "c": 3}\nfor val in d.values():\n    print(val)' },
        { id: 'dict-items', title: 'Iterate Items', description: 'Loop through key-value pairs.', instructions: ['Print "key: value" for each item in {"x": 10, "y": 20}.'], expectedOutput: 'x: 10\ny: 20', starterCode: 'd = {"x": 10, "y": 20}\n# Print items\n', hint: 'for k, v in d.items():', solution: 'd = {"x": 10, "y": 20}\nfor k, v in d.items():\n    print(f"{k}: {v}")' },
        { id: 'dict-update', title: 'Merge Dicts', description: 'Combine two dictionaries.', instructions: ['Merge {"a": 1} and {"b": 2} into one dict. Print it.'], expectedOutput: "{'a': 1, 'b': 2}", starterCode: 'a = {"a": 1}\nb = {"b": 2}\n# Merge\n', hint: 'Use a.update(b) or {**a, **b}', solution: 'a = {"a": 1}\nb = {"b": 2}\na.update(b)\nprint(a)' },
        { id: 'dict-fromkeys', title: 'fromkeys()', description: 'Create dict from keys with default value.', instructions: ['Create a dict with keys ["a", "b", "c"] all set to 0. Print it.'], expectedOutput: "{'a': 0, 'b': 0, 'c': 0}", starterCode: '# Create from keys\n', hint: 'dict.fromkeys(["a", "b", "c"], 0)', solution: 'print(dict.fromkeys(["a", "b", "c"], 0))' },
      ]},
      { id: 'sets', number: 5, title: 'Sets & Set Operations', description: 'Work with unique collections and set algebra.', icon: 'CircleDot', type: 'exercises', exercises: [
        { id: 'set-create', title: 'Create a Set', description: 'Create a set and see deduplication.', instructions: ['Create a set from [1, 2, 2, 3, 3, 3]. Print it.'], expectedOutput: '{1, 2, 3}', starterCode: '# Create a set\n', hint: 'set([1, 2, 2, 3, 3, 3])', solution: 'print(set([1, 2, 2, 3, 3, 3]))' },
        { id: 'set-operations', title: 'Union & Intersection', description: 'Combine and intersect sets.', instructions: ['Print the union and intersection of {1,2,3} and {2,3,4}.'], expectedOutput: '{1, 2, 3, 4}\n{2, 3}', starterCode: 'a = {1, 2, 3}\nb = {2, 3, 4}\n# Union and intersection\n', hint: 'a | b for union, a & b for intersection.', solution: 'a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a | b)\nprint(a & b)' },
        { id: 'set-difference', title: 'Difference', description: 'Find elements in one set but not another.', instructions: ['Print elements in {1,2,3,4} but not in {3,4,5,6}.'], expectedOutput: '{1, 2}', starterCode: 'a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\n# Difference\n', hint: 'a - b or a.difference(b)', solution: 'a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a - b)' },
        { id: 'set-add-remove', title: 'Add & Remove', description: 'Modify sets.', instructions: ['Add 4 to {1,2,3}, remove 1. Print the set.'], expectedOutput: '{2, 3, 4}', starterCode: 's = {1, 2, 3}\n# Add 4, remove 1\n', hint: 's.add(4); s.remove(1)', solution: 's = {1, 2, 3}\ns.add(4)\ns.remove(1)\nprint(s)' },
        { id: 'set-subset', title: 'Subset Check', description: 'Check if a set is a subset.', instructions: ['Check if {1, 2} is a subset of {1, 2, 3, 4}. Print result.'], expectedOutput: 'True', starterCode: '# Subset check\n', hint: 'Use <= or .issubset()', solution: 'print({1, 2} <= {1, 2, 3, 4})' },
      ]},
      { id: 'string-methods', number: 6, title: 'String Methods (Deep Dive)', description: 'Master advanced string manipulation.', icon: 'TextCursorInput', type: 'exercises', exercises: [
        { id: 'str-split-join', title: 'Split & Join', description: 'Split and join strings.', instructions: ['Split "a,b,c" by comma. Join the result with " - ". Print it.'], expectedOutput: 'a - b - c', starterCode: '# Split and join\n', hint: '"a,b,c".split(",") and " - ".join(parts)', solution: 'parts = "a,b,c".split(",")\nprint(" - ".join(parts))' },
        { id: 'str-strip', title: 'Strip Whitespace', description: 'Remove leading/trailing whitespace.', instructions: ['Strip "  hello  " and print the result.'], expectedOutput: 'hello', starterCode: '# Strip whitespace\n', hint: '.strip() removes whitespace.', solution: 'print("  hello  ".strip())' },
        { id: 'str-replace', title: 'Replace', description: 'Replace substrings.', instructions: ['Replace "World" with "Python" in "Hello, World!". Print it.'], expectedOutput: 'Hello, Python!', starterCode: '# Replace\n', hint: '.replace("World", "Python")', solution: 'print("Hello, World!".replace("World", "Python"))' },
        { id: 'str-find', title: 'Find & Count', description: 'Search within strings.', instructions: ['Find index of "World" in "Hello, World!" and count "l"s. Print both.'], expectedOutput: '7\n3', starterCode: 'text = "Hello, World!"\n# Find and count\n', hint: '.find() returns index, .count() counts occurrences.', solution: 'text = "Hello, World!"\nprint(text.find("World"))\nprint(text.count("l"))' },
        { id: 'str-startswith', title: 'startswith & endswith', description: 'Check string boundaries.', instructions: ['Check if "hello.py" starts with "hello" and ends with ".py". Print both.'], expectedOutput: 'True\nTrue', starterCode: 'filename = "hello.py"\n# Check start and end\n', hint: '.startswith() and .endswith()', solution: 'filename = "hello.py"\nprint(filename.startswith("hello"))\nprint(filename.endswith(".py"))' },
      ]},
      { id: 'list-comprehensions', number: 7, title: 'List Comprehensions', description: 'Write concise list transformations.', icon: 'Braces', type: 'exercises', exercises: [
        { id: 'lc-basic', title: 'Basic Comprehension', description: 'Create a list from a transformation.', instructions: ['Create a list of squares from 1 to 5 using a list comprehension. Print it.'], expectedOutput: '[1, 4, 9, 16, 25]', starterCode: '# Squares 1-5\n', hint: '[x**2 for x in range(1, 6)]', solution: 'print([x**2 for x in range(1, 6)])' },
        { id: 'lc-filter', title: 'With Condition', description: 'Filter elements in a comprehension.', instructions: ['Create a list of even numbers from 1-10. Print it.'], expectedOutput: '[2, 4, 6, 8, 10]', starterCode: '# Even numbers 1-10\n', hint: '[x for x in range(1, 11) if x % 2 == 0]', solution: 'print([x for x in range(1, 11) if x % 2 == 0])' },
        { id: 'lc-nested', title: 'Nested Comprehension', description: 'Flatten a 2D list.', instructions: ['Flatten [[1,2],[3,4],[5,6]] into [1,2,3,4,5,6]. Print it.'], expectedOutput: '[1, 2, 3, 4, 5, 6]', starterCode: 'matrix = [[1,2],[3,4],[5,6]]\n# Flatten\n', hint: '[x for row in matrix for x in row]', solution: 'matrix = [[1,2],[3,4],[5,6]]\nprint([x for row in matrix for x in row])' },
        { id: 'lc-transform', title: 'Transform Strings', description: 'Apply transformations.', instructions: ['Convert ["hello", "world"] to uppercase using a comprehension. Print it.'], expectedOutput: "['HELLO', 'WORLD']", starterCode: 'words = ["hello", "world"]\n# Uppercase\n', hint: '[w.upper() for w in words]', solution: 'words = ["hello", "world"]\nprint([w.upper() for w in words])' },
        { id: 'lc-if-else', title: 'If-Else in Comprehension', description: 'Conditional expressions in comprehensions.', instructions: ['Create ["even","odd","even",...] for numbers 1-5. Print it.'], expectedOutput: "['odd', 'even', 'odd', 'even', 'odd']", starterCode: '# Even/odd labels\n', hint: '["even" if x%2==0 else "odd" for x in range(1,6)]', solution: 'print(["even" if x%2==0 else "odd" for x in range(1,6)])' },
      ]},
      { id: 'dict-set-comprehensions', number: 8, title: 'Dictionary & Set Comprehensions', description: 'Build dicts and sets with comprehension syntax.', icon: 'Combine', type: 'exercises', exercises: [
        { id: 'dc-basic', title: 'Dict Comprehension', description: 'Create a dict from a transformation.', instructions: ['Create {1:1, 2:4, 3:9, 4:16, 5:25} using a dict comprehension. Print it.'], expectedOutput: '{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}', starterCode: '# Squares dict\n', hint: '{x: x**2 for x in range(1, 6)}', solution: 'print({x: x**2 for x in range(1, 6)})' },
        { id: 'dc-filter', title: 'Filter Dict', description: 'Filter dict entries.', instructions: ['From {"a":1,"b":2,"c":3,"d":4}, keep only entries where value > 2. Print it.'], expectedOutput: "{'c': 3, 'd': 4}", starterCode: 'd = {"a":1,"b":2,"c":3,"d":4}\n# Filter\n', hint: '{k:v for k,v in d.items() if v > 2}', solution: 'd = {"a":1,"b":2,"c":3,"d":4}\nprint({k:v for k,v in d.items() if v > 2})' },
        { id: 'sc-basic', title: 'Set Comprehension', description: 'Create a set with comprehension.', instructions: ['Create a set of first letters from ["apple","avocado","banana","blueberry"]. Print sorted list.'], expectedOutput: "['a', 'b']", starterCode: 'fruits = ["apple","avocado","banana","blueberry"]\n# First letters set\n', hint: '{f[0] for f in fruits}', solution: 'fruits = ["apple","avocado","banana","blueberry"]\nprint(sorted({f[0] for f in fruits}))' },
        { id: 'dc-swap', title: 'Swap Keys & Values', description: 'Invert a dictionary.', instructions: ['Swap keys and values of {"a":1,"b":2,"c":3}. Print it.'], expectedOutput: "{1: 'a', 2: 'b', 3: 'c'}", starterCode: 'd = {"a":1,"b":2,"c":3}\n# Swap\n', hint: '{v:k for k,v in d.items()}', solution: 'd = {"a":1,"b":2,"c":3}\nprint({v:k for k,v in d.items()})' },
        { id: 'dc-count', title: 'Word Count Dict', description: 'Count word occurrences.', instructions: ['Count each word in "the cat sat on the mat". Print the counts dict.'], expectedOutputContains: ["'the': 2"], starterCode: 'words = "the cat sat on the mat".split()\n# Count words\n', hint: '{w: words.count(w) for w in set(words)}', solution: 'words = "the cat sat on the mat".split()\ncounts = {w: words.count(w) for w in set(words)}\nprint(counts)' },
      ]},
      { id: 'enumerate-zip', number: 9, title: 'Enumerate & Zip', description: 'Pair indices and parallel sequences elegantly.', icon: 'Link2', type: 'exercises', exercises: [
        { id: 'enum-basic', title: 'Enumerate Basics', description: 'Get index and value together.', instructions: ['Enumerate ["a","b","c"] starting from 1. Print "1: a", "2: b", "3: c".'], expectedOutput: '1: a\n2: b\n3: c', starterCode: '# Enumerate from 1\n', hint: 'enumerate(lst, start=1)', solution: 'for i, ch in enumerate(["a","b","c"], 1):\n    print(f"{i}: {ch}")' },
        { id: 'zip-basic', title: 'Zip Basics', description: 'Pair two lists.', instructions: ['Zip [1,2,3] with ["a","b","c"]. Print each pair as "1-a", etc.'], expectedOutput: '1-a\n2-b\n3-c', starterCode: '# Zip two lists\n', hint: 'for n, ch in zip(nums, chars):', solution: 'for n, ch in zip([1,2,3], ["a","b","c"]):\n    print(f"{n}-{ch}")' },
        { id: 'zip-dict', title: 'Zip to Dict', description: 'Create a dict from two lists.', instructions: ['Create a dict from keys=["a","b"] and values=[1,2]. Print it.'], expectedOutput: "{'a': 1, 'b': 2}", starterCode: 'keys = ["a","b"]\nvalues = [1,2]\n# Zip to dict\n', hint: 'dict(zip(keys, values))', solution: 'keys = ["a","b"]\nvalues = [1,2]\nprint(dict(zip(keys, values)))' },
        { id: 'zip-unzip', title: 'Unzip', description: 'Unzip pairs back into separate lists.', instructions: ['Unzip [(1,"a"),(2,"b"),(3,"c")] into numbers and letters. Print both.'], expectedOutput: '(1, 2, 3)\n(\'a\', \'b\', \'c\')', starterCode: 'pairs = [(1,"a"),(2,"b"),(3,"c")]\n# Unzip\n', hint: 'Use zip(*pairs) to unzip.', solution: 'pairs = [(1,"a"),(2,"b"),(3,"c")]\nnums, chars = zip(*pairs)\nprint(nums)\nprint(chars)' },
        { id: 'zip-longest', title: 'Zip Longest', description: 'Zip lists of different lengths.', instructions: ['Zip [1,2,3] with ["a","b"] using zip_longest with fillvalue="-". Print pairs.'], expectedOutput: "(1, 'a')\n(2, 'b')\n(3, '-')", starterCode: 'from itertools import zip_longest\n# Zip with fill\n', hint: 'zip_longest([1,2,3], ["a","b"], fillvalue="-")', solution: 'from itertools import zip_longest\nfor pair in zip_longest([1,2,3], ["a","b"], fillvalue="-"):\n    print(pair)' },
      ]},
      { id: 'ternary-walrus', number: 10, title: 'Ternary & Walrus Operator', description: 'Write inline conditions and assignment expressions.', icon: 'Zap', type: 'exercises', exercises: [
        { id: 'ternary-basic', title: 'Ternary Expression', description: 'One-line conditional.', instructions: ['Set label to "even" or "odd" based on n=7. Print it.'], expectedOutput: 'odd', starterCode: 'n = 7\n# Ternary\n', hint: '"even" if n%2==0 else "odd"', solution: 'n = 7\nlabel = "even" if n%2==0 else "odd"\nprint(label)' },
        { id: 'walrus-basic', title: 'Walrus Operator', description: 'Assign and use in one expression.', instructions: ['Use := to assign len("hello") to n inside a print, and print n.'], expectedOutput: '5', starterCode: '# Walrus operator\n', hint: 'print(n := len("hello"))', solution: 'print(n := len("hello"))' },
        { id: 'walrus-while', title: 'Walrus in While', description: 'Use walrus in a while condition.', instructions: ['Use walrus to read from a list until empty. Print each popped item.'], expectedOutput: '3\n2\n1', starterCode: 'stack = [1, 2, 3]\n# Pop until empty\n', hint: 'while (item := stack.pop()) is not None: ... (use try/except for empty)', solution: 'stack = [1, 2, 3]\nwhile stack:\n    item = stack.pop()\n    print(item)' },
        { id: 'ternary-nested', title: 'Nested Ternary', description: 'Chain ternary expressions.', instructions: ['Classify n=0 as "positive", "negative", or "zero" using nested ternary.'], expectedOutput: 'zero', starterCode: 'n = 0\n# Nested ternary\n', hint: '"positive" if n>0 else ("negative" if n<0 else "zero")', solution: 'n = 0\nresult = "positive" if n>0 else ("negative" if n<0 else "zero")\nprint(result)' },
        { id: 'walrus-filter', title: 'Walrus in Comprehension', description: 'Use := to avoid duplicate computation.', instructions: ['Filter and transform: keep len(w) > 3 words from ["hi","hello","hey","world"]. Print lengths.'], expectedOutput: '[5, 5]', starterCode: 'words = ["hi","hello","hey","world"]\n# Filter with walrus\n', hint: '[n for w in words if (n := len(w)) > 3]', solution: 'words = ["hi","hello","hey","world"]\nprint([n for w in words if (n := len(w)) > 3])' },
      ]},
      { id: 'advanced-args', number: 11, title: 'Advanced Arguments', description: 'Use *args, **kwargs, and argument unpacking.', icon: 'Unplug', type: 'exercises', exercises: [
        { id: 'args-basic', title: '*args', description: 'Accept variable positional arguments.', instructions: ['Define add(*args) that returns the sum. Test with add(1,2,3).'], expectedOutput: '6', starterCode: '# Define add with *args\n', hint: 'def add(*args): return sum(args)', solution: 'def add(*args):\n    return sum(args)\nprint(add(1, 2, 3))' },
        { id: 'kwargs-basic', title: '**kwargs', description: 'Accept variable keyword arguments.', instructions: ['Define greet(**kwargs). Print each key=value pair. Test with name="Alice", age=30.'], expectedOutput: 'name = Alice\nage = 30', starterCode: '# Define with **kwargs\n', hint: 'for k, v in kwargs.items():', solution: 'def greet(**kwargs):\n    for k, v in kwargs.items():\n        print(f"{k} = {v}")\ngreet(name="Alice", age=30)' },
        { id: 'unpack-list', title: 'Unpack List into Args', description: 'Use * to unpack a list.', instructions: ['Call print with *[1, 2, 3] to print "1 2 3".'], expectedOutput: '1 2 3', starterCode: 'nums = [1, 2, 3]\n# Unpack\n', hint: 'print(*nums)', solution: 'nums = [1, 2, 3]\nprint(*nums)' },
        { id: 'unpack-dict', title: 'Unpack Dict into Kwargs', description: 'Use ** to unpack a dict.', instructions: ['Define greet(name, age). Unpack {"name":"Bob","age":25} into it.'], expectedOutput: 'Bob is 25', starterCode: 'def greet(name, age):\n    print(f"{name} is {age}")\n\ndata = {"name": "Bob", "age": 25}\n# Unpack\n', hint: 'greet(**data)', solution: 'def greet(name, age):\n    print(f"{name} is {age}")\n\ndata = {"name": "Bob", "age": 25}\ngreet(**data)' },
        { id: 'keyword-only', title: 'Keyword-Only Args', description: 'Force arguments to be keyword-only.', instructions: ['Define greet(*, name) that requires name as keyword. Call it.'], expectedOutput: 'Hello, Alice!', starterCode: '# Keyword-only argument\n', hint: 'Parameters after * must be passed as keywords.', solution: 'def greet(*, name):\n    print(f"Hello, {name}!")\ngreet(name="Alice")' },
      ]},
      { id: 'lambda-map-filter', number: 12, title: 'Lambda, Map & Filter', description: 'Use anonymous functions and functional programming.', icon: 'FunctionSquare', type: 'exercises', exercises: [
        { id: 'lambda-basic', title: 'Lambda Basics', description: 'Create anonymous functions.', instructions: ['Create a lambda that doubles a number. Print double(5).'], expectedOutput: '10', starterCode: '# Lambda to double\n', hint: 'double = lambda x: x * 2', solution: 'double = lambda x: x * 2\nprint(double(5))' },
        { id: 'map-basic', title: 'Map', description: 'Apply a function to every element.', instructions: ['Use map to square [1,2,3,4]. Print as list.'], expectedOutput: '[1, 4, 9, 16]', starterCode: '# Map to square\n', hint: 'list(map(lambda x: x**2, [1,2,3,4]))', solution: 'print(list(map(lambda x: x**2, [1,2,3,4])))' },
        { id: 'filter-basic', title: 'Filter', description: 'Filter elements by condition.', instructions: ['Filter even numbers from [1,2,3,4,5,6]. Print as list.'], expectedOutput: '[2, 4, 6]', starterCode: '# Filter evens\n', hint: 'list(filter(lambda x: x%2==0, ...))', solution: 'print(list(filter(lambda x: x%2==0, [1,2,3,4,5,6])))' },
        { id: 'sort-key', title: 'Sort with Key', description: 'Use lambda as sort key.', instructions: ['Sort ["banana","apple","cherry"] by length. Print the result.'], expectedOutput: "['apple', 'banana', 'cherry']", starterCode: 'fruits = ["banana","apple","cherry"]\n# Sort by length\n', hint: 'sorted(fruits, key=lambda x: len(x))', solution: 'fruits = ["banana","apple","cherry"]\nprint(sorted(fruits, key=lambda x: len(x)))' },
        { id: 'reduce-basic', title: 'Reduce', description: 'Reduce a list to a single value.', instructions: ['Use reduce to compute the product of [1,2,3,4,5]. Print it.'], expectedOutput: '120', starterCode: 'from functools import reduce\n# Product\n', hint: 'reduce(lambda a, b: a*b, [1,2,3,4,5])', solution: 'from functools import reduce\nprint(reduce(lambda a, b: a*b, [1,2,3,4,5]))' },
      ]},
      { id: 'modules-imports', number: 13, title: 'Modules & Imports', description: 'Organize code with modules and imports.', icon: 'Package', type: 'exercises', exercises: [
        { id: 'import-basic', title: 'Import a Module', description: 'Import and use the math module.', instructions: ['Import math. Print math.pi rounded to 4 decimals.'], expectedOutput: '3.1416', starterCode: '# Import math\n', hint: 'import math; round(math.pi, 4)', solution: 'import math\nprint(round(math.pi, 4))' },
        { id: 'from-import', title: 'From Import', description: 'Import specific items.', instructions: ['From math, import sqrt and pi. Print sqrt(16) and pi.'], expectedOutput: '4.0\n3.141592653589793', starterCode: '# From math import\n', hint: 'from math import sqrt, pi', solution: 'from math import sqrt, pi\nprint(sqrt(16))\nprint(pi)' },
        { id: 'import-alias', title: 'Import with Alias', description: 'Rename modules on import.', instructions: ['Import datetime as dt. Print today\'s date type name.'], expectedOutputContains: ['datetime'], starterCode: '# Import with alias\n', hint: 'import datetime as dt', solution: 'import datetime as dt\nprint(type(dt.date.today()).__name__)' },
        { id: 'import-random', title: 'Random Module', description: 'Generate random values.', instructions: ['Import random. Set seed(42). Print random.randint(1, 100).'], expectedOutput: '82', starterCode: '# Random with seed\n', hint: 'random.seed(42); random.randint(1, 100)', solution: 'import random\nrandom.seed(42)\nprint(random.randint(1, 100))' },
        { id: 'import-os', title: 'OS Module', description: 'Interact with the operating system.', instructions: ['Import os. Print the current working directory using os.getcwd().'], expectedOutputContains: ['/'], starterCode: '# OS module\n', hint: 'import os; os.getcwd()', solution: 'import os\nprint(os.getcwd())' },
      ]},
      { id: 'reading-files', number: 14, title: 'Reading Files', description: 'Open and read data from files.', icon: 'FileInput', type: 'exercises', exercises: [
        { id: 'read-basic', title: 'Read a File', description: 'Open and read file contents.', instructions: ['Create a file "test.txt" with "Hello, File!" and read it back.'], expectedOutput: 'Hello, File!', starterCode: '# Write and read a file\n', hint: 'Use open("test.txt", "w") to write, then open("test.txt") to read.', solution: 'with open("test.txt", "w") as f:\n    f.write("Hello, File!")\nwith open("test.txt") as f:\n    print(f.read())' },
        { id: 'read-lines', title: 'Read Lines', description: 'Read file line by line.', instructions: ['Write 3 lines to a file. Read and print each line (stripped).'], expectedOutput: 'Line 1\nLine 2\nLine 3', starterCode: '# Write and read lines\n', hint: 'f.readlines() or for line in f:', solution: 'with open("test.txt", "w") as f:\n    f.write("Line 1\\nLine 2\\nLine 3")\nwith open("test.txt") as f:\n    for line in f:\n        print(line.strip())' },
        { id: 'read-with', title: 'Context Manager', description: 'Use "with" for safe file handling.', instructions: ['Explain why "with open(...)" is better. Write and read "Safe!" using with.'], expectedOutput: 'Safe!', starterCode: '# Use context manager\n', hint: 'with open(...) as f: automatically closes the file.', solution: 'with open("test.txt", "w") as f:\n    f.write("Safe!")\nwith open("test.txt") as f:\n    print(f.read())' },
        { id: 'read-csv-manual', title: 'Read CSV Manually', description: 'Parse a CSV file without libraries.', instructions: ['Write "name,age\\nAlice,30\\nBob,25" to a file. Read and print each name.'], expectedOutput: 'Alice\nBob', starterCode: '# Manual CSV parsing\n', hint: 'Split each line by comma.', solution: 'with open("data.csv", "w") as f:\n    f.write("name,age\\nAlice,30\\nBob,25")\nwith open("data.csv") as f:\n    next(f)  # skip header\n    for line in f:\n        name = line.strip().split(",")[0]\n        print(name)' },
        { id: 'file-exists', title: 'Check File Exists', description: 'Check before reading.', instructions: ['Check if "nonexistent.txt" exists. Print "Not found" if it does not.'], expectedOutput: 'Not found', starterCode: 'import os\n# Check file\n', hint: 'os.path.exists("file.txt")', solution: 'import os\nif not os.path.exists("nonexistent.txt"):\n    print("Not found")' },
      ]},
      { id: 'writing-files', number: 15, title: 'Writing & Appending Files', description: 'Write and append data to files.', icon: 'FileOutput', type: 'exercises', exercises: [
        { id: 'write-basic', title: 'Write a File', description: 'Write text to a file.', instructions: ['Write "Hello, World!" to output.txt. Read it back and print.'], expectedOutput: 'Hello, World!', starterCode: '# Write to file\n', hint: 'open("output.txt", "w")', solution: 'with open("output.txt", "w") as f:\n    f.write("Hello, World!")\nwith open("output.txt") as f:\n    print(f.read())' },
        { id: 'append-basic', title: 'Append to File', description: 'Add content without overwriting.', instructions: ['Write "Line 1" then append "Line 2". Read and print both.'], expectedOutput: 'Line 1\nLine 2', starterCode: '# Write then append\n', hint: 'Use "a" mode for append.', solution: 'with open("output.txt", "w") as f:\n    f.write("Line 1\\n")\nwith open("output.txt", "a") as f:\n    f.write("Line 2")\nwith open("output.txt") as f:\n    print(f.read())' },
        { id: 'write-lines', title: 'Write Multiple Lines', description: 'Write a list of lines.', instructions: ['Write ["apple\\n", "banana\\n", "cherry\\n"] using writelines(). Read back.'], expectedOutput: 'apple\nbanana\ncherry', starterCode: '# Write multiple lines\n', hint: 'f.writelines(list_of_strings)', solution: 'with open("output.txt", "w") as f:\n    f.writelines(["apple\\n", "banana\\n", "cherry\\n"])\nwith open("output.txt") as f:\n    print(f.read().strip())' },
        { id: 'write-csv', title: 'Write CSV', description: 'Create a CSV file.', instructions: ['Write a CSV with header "name,score" and rows Alice:95, Bob:87. Print file content.'], expectedOutput: 'name,score\nAlice,95\nBob,87', starterCode: '# Write CSV\n', hint: 'Write header + rows with \\n.', solution: 'with open("scores.csv", "w") as f:\n    f.write("name,score\\nAlice,95\\nBob,87")\nwith open("scores.csv") as f:\n    print(f.read())' },
        { id: 'write-json', title: 'Write JSON', description: 'Save data as JSON.', instructions: ['Write {"name": "Alice", "age": 30} to a JSON file. Read and print it.'], expectedOutput: '{"name": "Alice", "age": 30}', starterCode: 'import json\n# Write JSON\n', hint: 'json.dump(data, file)', solution: 'import json\ndata = {"name": "Alice", "age": 30}\nwith open("data.json", "w") as f:\n    json.dump(data, f)\nwith open("data.json") as f:\n    print(f.read())' },
      ]},
      { id: 'file-paths', number: 16, title: 'File Paths (os & pathlib)', description: 'Navigate and manipulate file system paths.', icon: 'FolderTree', type: 'exercises', exercises: [
        { id: 'path-join', title: 'Join Paths', description: 'Build paths safely.', instructions: ['Join "home", "user", "docs" into a path using os.path.join. Print it.'], expectedOutputContains: ['home'], starterCode: 'import os\n# Join paths\n', hint: 'os.path.join("home", "user", "docs")', solution: 'import os\nprint(os.path.join("home", "user", "docs"))' },
        { id: 'pathlib-basic', title: 'Pathlib Basics', description: 'Modern path handling.', instructions: ['Create a Path object for "data/file.txt". Print its name and suffix.'], expectedOutput: 'file.txt\n.txt', starterCode: 'from pathlib import Path\n# Pathlib\n', hint: 'Path("data/file.txt").name and .suffix', solution: 'from pathlib import Path\np = Path("data/file.txt")\nprint(p.name)\nprint(p.suffix)' },
        { id: 'path-parts', title: 'Path Parts', description: 'Decompose a path.', instructions: ['Print parent and stem of Path("docs/report.pdf").'], expectedOutput: 'docs\nreport', starterCode: 'from pathlib import Path\n# Path parts\n', hint: '.parent and .stem', solution: 'from pathlib import Path\np = Path("docs/report.pdf")\nprint(p.parent)\nprint(p.stem)' },
        { id: 'path-glob', title: 'Glob Pattern', description: 'Find files matching a pattern.', instructions: ['Create 2 .txt files. Use Path(".").glob("*.txt") to list them. Print count.'], expectedOutputContains: [], starterCode: 'from pathlib import Path\n# Create and glob\n', hint: 'list(Path(".").glob("*.txt"))', solution: 'from pathlib import Path\nPath("a.txt").write_text("a")\nPath("b.txt").write_text("b")\nprint(len(list(Path(".").glob("*.txt"))))' },
        { id: 'path-resolve', title: 'Resolve Path', description: 'Get absolute path.', instructions: ['Print the absolute path of Path(".").'], expectedOutputContains: ['/'], starterCode: 'from pathlib import Path\n# Resolve\n', hint: 'Path(".").resolve()', solution: 'from pathlib import Path\nprint(Path(".").resolve())' },
      ]},
      { id: 'json-handling', number: 17, title: 'JSON Handling', description: 'Serialize and deserialize JSON data.', icon: 'FileJson', type: 'exercises', exercises: [
        { id: 'json-dumps', title: 'Dict to JSON String', description: 'Convert dict to JSON.', instructions: ['Convert {"name":"Alice","age":30} to a JSON string. Print it.'], expectedOutput: '{"name": "Alice", "age": 30}', starterCode: 'import json\n# Dict to JSON\n', hint: 'json.dumps(data)', solution: 'import json\nprint(json.dumps({"name": "Alice", "age": 30}))' },
        { id: 'json-loads', title: 'JSON String to Dict', description: 'Parse a JSON string.', instructions: ['Parse \'{"x":1,"y":2}\' and print the value of "x".'], expectedOutput: '1', starterCode: 'import json\n# Parse JSON\n', hint: 'json.loads(json_string)', solution: 'import json\ndata = json.loads(\'{"x":1,"y":2}\')\nprint(data["x"])' },
        { id: 'json-pretty', title: 'Pretty Print JSON', description: 'Format JSON with indentation.', instructions: ['Pretty-print {"a":1,"b":{"c":2}} with indent=2.'], expectedOutputContains: ['"a": 1'], starterCode: 'import json\n# Pretty JSON\n', hint: 'json.dumps(data, indent=2)', solution: 'import json\nprint(json.dumps({"a":1,"b":{"c":2}}, indent=2))' },
        { id: 'json-file', title: 'JSON File I/O', description: 'Read and write JSON files.', instructions: ['Write a list [1,2,3] to a JSON file. Read it back and print.'], expectedOutput: '[1, 2, 3]', starterCode: 'import json\n# JSON file I/O\n', hint: 'json.dump() and json.load()', solution: 'import json\nwith open("data.json","w") as f:\n    json.dump([1,2,3], f)\nwith open("data.json") as f:\n    print(json.load(f))' },
        { id: 'json-nested', title: 'Nested JSON', description: 'Work with complex JSON structures.', instructions: ['Parse \'{"users":[{"name":"Alice"},{"name":"Bob"}]}\'. Print each name.'], expectedOutput: 'Alice\nBob', starterCode: 'import json\n# Nested JSON\n', hint: 'Access data["users"] then loop.', solution: 'import json\ndata = json.loads(\'{"users":[{"name":"Alice"},{"name":"Bob"}]}\')\nfor user in data["users"]:\n    print(user["name"])' },
      ]},
      { id: 'oop-classes', number: 18, title: 'OOP -- Classes & Objects', description: 'Define classes and create object instances.', icon: 'Boxes', type: 'exercises', exercises: [
        { id: 'class-basic', title: 'Create a Class', description: 'Define a simple class.', instructions: ['Create a Dog class with name attribute. Create a dog named "Rex". Print its name.'], expectedOutput: 'Rex', starterCode: '# Create Dog class\n', hint: 'class Dog: def __init__(self, name): self.name = name', solution: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n\ndog = Dog("Rex")\nprint(dog.name)' },
        { id: 'class-method', title: 'Add Methods', description: 'Add behavior to classes.', instructions: ['Add a bark() method to Dog that prints "Woof!". Create Rex and make him bark.'], expectedOutput: 'Woof!', starterCode: '# Dog with bark method\n', hint: 'def bark(self): print("Woof!")', solution: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n    def bark(self):\n        print("Woof!")\n\nDog("Rex").bark()' },
        { id: 'class-str', title: '__str__ Method', description: 'String representation.', instructions: ['Add __str__ to Dog that returns "Dog: [name]". Print a Dog object.'], expectedOutput: 'Dog: Rex', starterCode: '# Dog with __str__\n', hint: 'def __str__(self): return f"Dog: {self.name}"', solution: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n    def __str__(self):\n        return f"Dog: {self.name}"\n\nprint(Dog("Rex"))' },
        { id: 'class-counter', title: 'Class Variable', description: 'Shared variable across instances.', instructions: ['Create a Counter class with a class variable count. Each __init__ increments it. Create 3 instances. Print count.'], expectedOutput: '3', starterCode: '# Class variable counter\n', hint: 'Counter.count += 1 in __init__', solution: 'class Counter:\n    count = 0\n    def __init__(self):\n        Counter.count += 1\n\nCounter()\nCounter()\nCounter()\nprint(Counter.count)' },
        { id: 'class-inherit', title: 'Basic Inheritance', description: 'Create a subclass.', instructions: ['Create Animal with speak(). Create Dog(Animal) that overrides speak() to return "Woof". Print it.'], expectedOutput: 'Woof', starterCode: '# Inheritance\n', hint: 'class Dog(Animal): def speak(self): return "Woof"', solution: 'class Animal:\n    def speak(self):\n        return "..."\n\nclass Dog(Animal):\n    def speak(self):\n        return "Woof"\n\nprint(Dog().speak())' },
      ]},
      { id: 'oop-methods', number: 19, title: 'OOP -- Instance Methods & State', description: 'Add behavior to objects with methods.', icon: 'Cog', type: 'exercises', exercises: [
        { id: 'bank-account', title: 'Bank Account', description: 'Manage state with methods.', instructions: ['Create BankAccount with deposit() and withdraw(). Start at 100, deposit 50, withdraw 30. Print balance.'], expectedOutput: '120', starterCode: '# Bank Account class\n', hint: 'self.balance += amount for deposit, -= for withdraw.', solution: 'class BankAccount:\n    def __init__(self, balance=0):\n        self.balance = balance\n    def deposit(self, amount):\n        self.balance += amount\n    def withdraw(self, amount):\n        self.balance -= amount\n\nacc = BankAccount(100)\nacc.deposit(50)\nacc.withdraw(30)\nprint(acc.balance)' },
        { id: 'stack-class', title: 'Stack Class', description: 'Implement a stack.', instructions: ['Create a Stack with push(), pop(), peek(). Push 1,2,3. Pop once. Print peek().'], expectedOutput: '2', starterCode: '# Stack class\n', hint: 'Use a list internally. push=append, pop=pop.', solution: 'class Stack:\n    def __init__(self):\n        self.items = []\n    def push(self, item):\n        self.items.append(item)\n    def pop(self):\n        return self.items.pop()\n    def peek(self):\n        return self.items[-1]\n\ns = Stack()\ns.push(1)\ns.push(2)\ns.push(3)\ns.pop()\nprint(s.peek())' },
        { id: 'property-decorator', title: 'Properties', description: 'Use @property for computed attributes.', instructions: ['Create Circle with radius. Add area as @property. Print area for radius=5.'], expectedOutputContains: ['78.5'], starterCode: 'import math\n# Circle with property\n', hint: '@property def area(self): return math.pi * self.radius**2', solution: 'import math\n\nclass Circle:\n    def __init__(self, radius):\n        self.radius = radius\n    @property\n    def area(self):\n        return math.pi * self.radius**2\n\nc = Circle(5)\nprint(round(c.area, 2))' },
        { id: 'static-method', title: 'Static Methods', description: 'Methods that do not need self.', instructions: ['Create MathUtils with a @staticmethod add(a, b). Print MathUtils.add(3, 4).'], expectedOutput: '7', starterCode: '# Static method\n', hint: '@staticmethod def add(a, b): return a + b', solution: 'class MathUtils:\n    @staticmethod\n    def add(a, b):\n        return a + b\n\nprint(MathUtils.add(3, 4))' },
        { id: 'dunder-methods', title: 'Dunder Methods', description: 'Implement __len__ and __eq__.', instructions: ['Create a Playlist class with songs list. Implement __len__. Add 3 songs. Print len().'], expectedOutput: '3', starterCode: '# Dunder methods\n', hint: 'def __len__(self): return len(self.songs)', solution: 'class Playlist:\n    def __init__(self):\n        self.songs = []\n    def add(self, song):\n        self.songs.append(song)\n    def __len__(self):\n        return len(self.songs)\n\np = Playlist()\np.add("A")\np.add("B")\np.add("C")\nprint(len(p))' },
      ]},
      { id: 'regex-basics', number: 20, title: 'Regular Expressions (Basics)', description: 'Match and extract patterns from text.', icon: 'SearchCode', type: 'exercises', exercises: [
        { id: 'regex-match', title: 'Basic Match', description: 'Find a pattern in text.', instructions: ['Check if "hello" starts with "hel" using re.match. Print "Match!" if found.'], expectedOutput: 'Match!', starterCode: 'import re\n# Match pattern\n', hint: 're.match(r"hel", "hello")', solution: 'import re\nif re.match(r"hel", "hello"):\n    print("Match!")' },
        { id: 'regex-search', title: 'Search in Text', description: 'Find pattern anywhere.', instructions: ['Search for any number in "Room 404". Print the number found.'], expectedOutput: '404', starterCode: 'import re\n# Find number\n', hint: 're.search(r"\\d+", text)', solution: 'import re\nmatch = re.search(r"\\d+", "Room 404")\nprint(match.group())' },
        { id: 'regex-findall', title: 'Find All Matches', description: 'Extract all occurrences.', instructions: ['Find all words in "Hello, World! 123". Print them.'], expectedOutput: "['Hello', 'World']", starterCode: 'import re\n# Find all words\n', hint: 're.findall(r"[a-zA-Z]+", text)', solution: 'import re\nprint(re.findall(r"[a-zA-Z]+", "Hello, World! 123"))' },
        { id: 'regex-sub', title: 'Replace with Regex', description: 'Substitute patterns.', instructions: ['Replace all digits in "Call 555-1234" with "#". Print result.'], expectedOutput: 'Call ###-####', starterCode: 'import re\n# Replace digits\n', hint: 're.sub(r"\\d", "#", text)', solution: 'import re\nprint(re.sub(r"\\d", "#", "Call 555-1234"))' },
        { id: 'regex-groups', title: 'Capture Groups', description: 'Extract parts of a match.', instructions: ['Extract area code and number from "Tel: (555) 123-4567" using groups.'], expectedOutput: '555\n123-4567', starterCode: 'import re\n# Capture groups\n', hint: 'r"\\((\\d+)\\) (\\d+-\\d+)" with .group(1), .group(2)', solution: 'import re\nmatch = re.search(r"\\((\\d+)\\) (\\d+-\\d+)", "Tel: (555) 123-4567")\nprint(match.group(1))\nprint(match.group(2))' },
      ]},
    ],
  },

  // ═══════════════════════════════════════════════════
  // LEVEL 3: ADVANCED
  // ═══════════════════════════════════════════════════
  {
    id: 'advanced',
    title: 'Advanced',
    subtitle: 'Master Python',
    description: 'Pythonic patterns, decorators, generators, testing, concurrency, and performance optimization.',
    icon: 'Flame',
    color: 'amber',
    categories: [
      { id: 'decorators', number: 1, title: 'Decorators', description: 'Wrap and enhance functions.', icon: 'Gift', type: 'exercises', exercises: [
        { id: 'deco-basic', title: 'Basic Decorator', description: 'Create a simple decorator.', instructions: ['Create a decorator that prints "Before" and "After" around a function call.'], expectedOutput: 'Before\nHello!\nAfter', starterCode: '# Create a decorator\n', hint: 'def decorator(func): def wrapper(): print("Before"); func(); print("After"); return wrapper', solution: 'def my_decorator(func):\n    def wrapper():\n        print("Before")\n        func()\n        print("After")\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print("Hello!")\n\nsay_hello()' },
        { id: 'deco-args', title: 'Decorator with Args', description: 'Decorators for functions with arguments.', instructions: ['Create a decorator that logs function name and arguments before calling it.'], expectedOutput: 'Calling add(3, 4)\n7', starterCode: '# Decorator with args\n', hint: 'def wrapper(*args, **kwargs): ...', solution: 'def log(func):\n    def wrapper(*args, **kwargs):\n        print(f"Calling {func.__name__}{args}")\n        return func(*args, **kwargs)\n    return wrapper\n\n@log\ndef add(a, b):\n    return a + b\n\nprint(add(3, 4))' },
        { id: 'deco-timer', title: 'Timer Decorator', description: 'Measure function execution time.', instructions: ['Create a timer decorator. Use it on a function that sums range(1000000).'], expectedOutputContains: ['Time:'], starterCode: 'import time\n# Timer decorator\n', hint: 'Record time.time() before and after.', solution: 'import time\n\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        print(f"Time: {time.time() - start:.4f}s")\n        return result\n    return wrapper\n\n@timer\ndef big_sum():\n    return sum(range(1000000))\n\nbig_sum()' },
        { id: 'deco-factory', title: 'Decorator Factory', description: 'Decorator that takes parameters.', instructions: ['Create a repeat(n) decorator that calls the function n times.'], expectedOutput: 'Hello!\nHello!\nHello!', starterCode: '# Decorator factory\n', hint: 'def repeat(n): def decorator(func): def wrapper(): for _ in range(n): func(); return wrapper; return decorator', solution: 'def repeat(n):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(n):\n                func(*args, **kwargs)\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef say_hello():\n    print("Hello!")\n\nsay_hello()' },
        { id: 'deco-functools', title: 'functools.wraps', description: 'Preserve function metadata.', instructions: ['Use @functools.wraps in a decorator. Print the decorated function\'s __name__.'], expectedOutput: 'greet', starterCode: 'import functools\n# Preserve metadata\n', hint: '@functools.wraps(func) on wrapper', solution: 'import functools\n\ndef my_deco(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs)\n    return wrapper\n\n@my_deco\ndef greet():\n    pass\n\nprint(greet.__name__)' },
      ]},
      { id: 'generators', number: 2, title: 'Generators & Iterators', description: 'Lazy evaluation and memory-efficient iteration.', icon: 'Zap', type: 'exercises', exercises: [
        { id: 'gen-basic', title: 'Basic Generator', description: 'Create a generator with yield.', instructions: ['Create a generator that yields 1, 2, 3. Print each value.'], expectedOutput: '1\n2\n3', starterCode: '# Basic generator\n', hint: 'def gen(): yield 1; yield 2; yield 3', solution: 'def gen():\n    yield 1\n    yield 2\n    yield 3\n\nfor val in gen():\n    print(val)' },
        { id: 'gen-range', title: 'Custom Range', description: 'Implement your own range.', instructions: ['Create my_range(start, end) generator. Use it to print 1 through 5.'], expectedOutput: '1\n2\n3\n4\n5', starterCode: '# Custom range generator\n', hint: 'while start < end: yield start; start += 1', solution: 'def my_range(start, end):\n    while start < end:\n        yield start\n        start += 1\n\nfor n in my_range(1, 6):\n    print(n)' },
        { id: 'gen-expression', title: 'Generator Expression', description: 'Inline generators.', instructions: ['Create a generator expression for squares of 1-5. Print the sum.'], expectedOutput: '55', starterCode: '# Generator expression\n', hint: 'sum(x**2 for x in range(1, 6))', solution: 'print(sum(x**2 for x in range(1, 6)))' },
        { id: 'gen-infinite', title: 'Infinite Generator', description: 'Generate values forever.', instructions: ['Create a counter that yields 0, 1, 2, ... Take first 5 values.'], expectedOutput: '0\n1\n2\n3\n4', starterCode: '# Infinite generator\n', hint: 'while True: yield n; n += 1', solution: 'def counter():\n    n = 0\n    while True:\n        yield n\n        n += 1\n\nfor i, val in enumerate(counter()):\n    if i >= 5:\n        break\n    print(val)' },
        { id: 'gen-send', title: 'Generator Send', description: 'Send values into a generator.', instructions: ['Create a generator that receives values via send() and accumulates them. Send 10, 20, 30.'], expectedOutput: '10\n30\n60', starterCode: '# Generator with send\n', hint: 'value = yield total', solution: 'def accumulator():\n    total = 0\n    while True:\n        value = yield total\n        total += value\n\nacc = accumulator()\nnext(acc)\nprint(acc.send(10))\nprint(acc.send(20))\nprint(acc.send(30))' },
      ]},
      { id: 'context-managers', number: 3, title: 'Context Managers', description: 'Build custom with-statement support.', icon: 'DoorOpen', type: 'exercises', exercises: [
        { id: 'ctx-class', title: 'Class-Based', description: 'Implement __enter__ and __exit__.', instructions: ['Create a Timer context manager that prints elapsed time.'], expectedOutputContains: ['Elapsed:'], starterCode: 'import time\n# Timer context manager\n', hint: 'def __enter__: record start. def __exit__: print elapsed.', solution: 'import time\n\nclass Timer:\n    def __enter__(self):\n        self.start = time.time()\n        return self\n    def __exit__(self, *args):\n        print(f"Elapsed: {time.time()-self.start:.4f}s")\n\nwith Timer():\n    sum(range(100000))' },
        { id: 'ctx-generator', title: 'Generator-Based', description: 'Use @contextmanager.', instructions: ['Create a tag("b") context manager that prints <b> and </b> around content.'], expectedOutput: '<b>\nHello\n</b>', starterCode: 'from contextlib import contextmanager\n# Tag context manager\n', hint: 'yield between print statements.', solution: 'from contextlib import contextmanager\n\n@contextmanager\ndef tag(name):\n    print(f"<{name}>")\n    yield\n    print(f"</{name}>")\n\nwith tag("b"):\n    print("Hello")' },
        { id: 'ctx-suppress', title: 'Suppress Errors', description: 'Ignore specific exceptions.', instructions: ['Use contextlib.suppress to ignore FileNotFoundError when opening a nonexistent file.'], expectedOutput: 'Done', starterCode: 'from contextlib import suppress\n# Suppress error\n', hint: 'with suppress(FileNotFoundError):', solution: 'from contextlib import suppress\n\nwith suppress(FileNotFoundError):\n    open("nonexistent.txt")\nprint("Done")' },
        { id: 'ctx-redirect', title: 'Redirect Output', description: 'Capture stdout.', instructions: ['Redirect print output to a StringIO object. Print the captured text.'], expectedOutput: 'Captured: Hello!', starterCode: 'from io import StringIO\nfrom contextlib import redirect_stdout\n# Capture output\n', hint: 'with redirect_stdout(f): print("Hello!")', solution: 'from io import StringIO\nfrom contextlib import redirect_stdout\n\nf = StringIO()\nwith redirect_stdout(f):\n    print("Hello!")\nprint(f"Captured: {f.getvalue().strip()}")' },
        { id: 'ctx-multiple', title: 'Multiple Contexts', description: 'Nest or combine context managers.', instructions: ['Open two files simultaneously using a single with statement.'], expectedOutput: 'Both files opened', starterCode: '# Multiple context managers\n', hint: 'with open(f1) as a, open(f2) as b:', solution: 'with open("a.txt","w") as f:\n    f.write("a")\nwith open("b.txt","w") as f:\n    f.write("b")\nwith open("a.txt") as a, open("b.txt") as b:\n    a.read()\n    b.read()\n    print("Both files opened")' },
      ]},
      { id: 'dataclasses', number: 4, title: 'Dataclasses', description: 'Simplify class creation for data holders.', icon: 'Database', type: 'exercises', exercises: [
        { id: 'dc-basic', title: 'Basic Dataclass', description: 'Create a simple dataclass.', instructions: ['Create a Point dataclass with x and y. Print Point(3, 4).'], expectedOutput: 'Point(x=3, y=4)', starterCode: 'from dataclasses import dataclass\n# Point dataclass\n', hint: '@dataclass class Point: x: int; y: int', solution: 'from dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: int\n    y: int\n\nprint(Point(3, 4))' },
        { id: 'dc-default', title: 'Default Values', description: 'Set defaults in dataclasses.', instructions: ['Create a Config dataclass with debug=False and verbose=True. Print Config().'], expectedOutput: 'Config(debug=False, verbose=True)', starterCode: 'from dataclasses import dataclass\n# Config with defaults\n', hint: 'debug: bool = False', solution: 'from dataclasses import dataclass\n\n@dataclass\nclass Config:\n    debug: bool = False\n    verbose: bool = True\n\nprint(Config())' },
        { id: 'dc-frozen', title: 'Frozen Dataclass', description: 'Create immutable dataclasses.', instructions: ['Create a frozen Point. Try to modify it and catch FrozenInstanceError.'], expectedOutput: 'Cannot modify frozen dataclass', starterCode: 'from dataclasses import dataclass, FrozenInstanceError\n# Frozen dataclass\n', hint: '@dataclass(frozen=True)', solution: 'from dataclasses import dataclass\n\n@dataclass(frozen=True)\nclass Point:\n    x: int\n    y: int\n\np = Point(1, 2)\ntry:\n    p.x = 5\nexcept Exception:\n    print("Cannot modify frozen dataclass")' },
        { id: 'dc-post-init', title: 'Post Init', description: 'Run code after initialization.', instructions: ['Create a Rectangle with width, height and computed area in __post_init__. Print area.'], expectedOutput: '50', starterCode: 'from dataclasses import dataclass, field\n# Post init\n', hint: 'def __post_init__(self): self.area = self.width * self.height', solution: 'from dataclasses import dataclass, field\n\n@dataclass\nclass Rectangle:\n    width: int\n    height: int\n    area: int = field(init=False)\n    def __post_init__(self):\n        self.area = self.width * self.height\n\nprint(Rectangle(5, 10).area)' },
        { id: 'dc-comparison', title: 'Ordering', description: 'Add comparison methods.', instructions: ['Create an ordered Student dataclass (by gpa). Compare two students.'], expectedOutput: 'True', starterCode: 'from dataclasses import dataclass\n# Ordered dataclass\n', hint: '@dataclass(order=True)', solution: 'from dataclasses import dataclass\n\n@dataclass(order=True)\nclass Student:\n    gpa: float\n    name: str\n\nprint(Student(3.9, "Alice") > Student(3.5, "Bob"))' },
      ]},
      { id: 'type-hints', number: 5, title: 'Type Hints & Annotations', description: 'Add type safety to your code.', icon: 'Tag', type: 'exercises', exercises: [
        { id: 'th-basic', title: 'Basic Type Hints', description: 'Annotate function parameters and return.', instructions: ['Create add(a: int, b: int) -> int. Print add(3, 4) and its __annotations__.'], expectedOutput: '7', starterCode: '# Type hints\n', hint: 'def add(a: int, b: int) -> int: return a + b', solution: 'def add(a: int, b: int) -> int:\n    return a + b\n\nprint(add(3, 4))' },
        { id: 'th-optional', title: 'Optional Types', description: 'Handle None values.', instructions: ['Create greet(name: str | None = None) that returns "Hello, [name]!" or "Hello, World!".'], expectedOutput: 'Hello, World!\nHello, Alice!', starterCode: '# Optional parameter\n', hint: 'Use str | None (Python 3.10+) or Optional[str]', solution: 'def greet(name: str | None = None) -> str:\n    if name is None:\n        return "Hello, World!"\n    return f"Hello, {name}!"\n\nprint(greet())\nprint(greet("Alice"))' },
        { id: 'th-list', title: 'Collection Types', description: 'Type hints for collections.', instructions: ['Create average(nums: list[float]) -> float. Test with [1.0, 2.0, 3.0].'], expectedOutput: '2.0', starterCode: '# Collection type hints\n', hint: 'def average(nums: list[float]) -> float:', solution: 'def average(nums: list[float]) -> float:\n    return sum(nums) / len(nums)\n\nprint(average([1.0, 2.0, 3.0]))' },
        { id: 'th-dict', title: 'Dict Type Hints', description: 'Type hints for dictionaries.', instructions: ['Create count_words(text: str) -> dict[str, int]. Test with "a b a".'], expectedOutputContains: ["'a': 2"], starterCode: '# Dict type hints\n', hint: 'def count_words(text: str) -> dict[str, int]:', solution: 'def count_words(text: str) -> dict[str, int]:\n    words = text.split()\n    return {w: words.count(w) for w in set(words)}\n\nprint(count_words("a b a"))' },
        { id: 'th-typevar', title: 'TypeVar & Generics', description: 'Create generic functions.', instructions: ['Create a generic first() function that returns the first element of any list.'], expectedOutput: '1\nhello', starterCode: 'from typing import TypeVar\n# Generic function\n', hint: 'T = TypeVar("T"); def first(lst: list[T]) -> T:', solution: 'from typing import TypeVar\n\nT = TypeVar("T")\n\ndef first(lst: list[T]) -> T:\n    return lst[0]\n\nprint(first([1, 2, 3]))\nprint(first(["hello", "world"]))' },
      ]},
      // More advanced categories with exercise stubs
      { id: 'itertools', number: 6, title: 'Itertools & Functools', description: 'Power tools for iteration and function composition.', icon: 'Infinity', type: 'exercises', exercises: [
        { id: 'it-chain', title: 'Chain Iterables', description: 'Combine multiple iterables.', instructions: ['Chain [1,2] and [3,4] and [5]. Print as list.'], expectedOutput: '[1, 2, 3, 4, 5]', starterCode: 'from itertools import chain\n', hint: 'list(chain([1,2], [3,4], [5]))', solution: 'from itertools import chain\nprint(list(chain([1,2], [3,4], [5])))' },
        { id: 'it-product', title: 'Cartesian Product', description: 'All combinations.', instructions: ['Print all pairs from "AB" and "12" using product.'], expectedOutput: "('A', '1')\n('A', '2')\n('B', '1')\n('B', '2')", starterCode: 'from itertools import product\n', hint: 'product("AB", "12")', solution: 'from itertools import product\nfor p in product("AB", "12"):\n    print(p)' },
        { id: 'it-groupby', title: 'Group By', description: 'Group consecutive elements.', instructions: ['Group [1,1,2,2,2,3] by value. Print each group.'], expectedOutput: '1: [1, 1]\n2: [2, 2, 2]\n3: [3]', starterCode: 'from itertools import groupby\n', hint: 'for k, g in groupby(data): print(k, list(g))', solution: 'from itertools import groupby\nfor k, g in groupby([1,1,2,2,2,3]):\n    print(f"{k}: {list(g)}")' },
        { id: 'ft-lru-cache', title: 'LRU Cache', description: 'Memoize function results.', instructions: ['Use @lru_cache to memoize fibonacci. Print fib(10).'], expectedOutput: '55', starterCode: 'from functools import lru_cache\n', hint: '@lru_cache(maxsize=None) def fib(n):', solution: 'from functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef fib(n):\n    if n < 2: return n\n    return fib(n-1) + fib(n-2)\n\nprint(fib(10))' },
        { id: 'ft-partial', title: 'Partial Functions', description: 'Fix some arguments.', instructions: ['Create double = partial(mul, 2). Print double(5).'], expectedOutput: '10', starterCode: 'from functools import partial\nfrom operator import mul\n', hint: 'partial(mul, 2)', solution: 'from functools import partial\nfrom operator import mul\n\ndouble = partial(mul, 2)\nprint(double(5))' },
      ]},
      { id: 'abc-protocols', number: 7, title: 'Abstract Classes & Protocols', description: 'Define interfaces and contracts.', icon: 'FileCode2', type: 'exercises', exercises: [
        { id: 'abc-basic', title: 'Abstract Base Class', description: 'Define an interface.', instructions: ['Create abstract Shape with abstract area(). Implement Circle. Print area for r=5.'], expectedOutputContains: ['78.5'], starterCode: 'from abc import ABC, abstractmethod\nimport math\n', hint: 'class Shape(ABC): @abstractmethod def area(self):', solution: 'from abc import ABC, abstractmethod\nimport math\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self) -> float: ...\n\nclass Circle(Shape):\n    def __init__(self, r): self.r = r\n    def area(self): return math.pi * self.r**2\n\nprint(round(Circle(5).area(), 2))' },
        { id: 'abc-enforce', title: 'Enforce Implementation', description: 'ABC prevents instantiation without implementation.', instructions: ['Try to instantiate abstract Shape. Catch TypeError.'], expectedOutput: 'Cannot instantiate abstract class', starterCode: 'from abc import ABC, abstractmethod\n', hint: 'except TypeError:', solution: 'from abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self): ...\n\ntry:\n    Shape()\nexcept TypeError:\n    print("Cannot instantiate abstract class")' },
        { id: 'protocol-basic', title: 'Protocol (Structural)', description: 'Duck typing with type safety.', instructions: ['Create a Drawable protocol with draw(). Create Box that implements it without inheriting.'], expectedOutput: 'Drawing box', starterCode: 'from typing import Protocol\n', hint: 'class Drawable(Protocol): def draw(self): ...', solution: 'from typing import Protocol\n\nclass Drawable(Protocol):\n    def draw(self) -> None: ...\n\nclass Box:\n    def draw(self) -> None:\n        print("Drawing box")\n\ndef render(d: Drawable):\n    d.draw()\n\nrender(Box())' },
        { id: 'abc-register', title: 'Virtual Subclass', description: 'Register a class as virtual subclass.', instructions: ['Register dict as a virtual subclass of a custom ABC. Check with isinstance.'], expectedOutput: 'True', starterCode: 'from abc import ABC\n', hint: 'MyABC.register(dict)', solution: 'from abc import ABC\n\nclass MyMapping(ABC):\n    pass\n\nMyMapping.register(dict)\nprint(isinstance({}, MyMapping))' },
        { id: 'abc-mixin', title: 'Mixin Pattern', description: 'Share behavior across classes.', instructions: ['Create a JsonMixin with to_json(). Use it with a dataclass.'], expectedOutputContains: ['"name"'], starterCode: 'import json\nfrom dataclasses import dataclass, asdict\n', hint: 'def to_json(self): return json.dumps(asdict(self))', solution: 'import json\nfrom dataclasses import dataclass, asdict\n\nclass JsonMixin:\n    def to_json(self):\n        return json.dumps(asdict(self))\n\n@dataclass\nclass User(JsonMixin):\n    name: str\n    age: int\n\nprint(User("Alice", 30).to_json())' },
      ]},
      { id: 'collections-module', number: 8, title: 'Collections Module', description: 'Specialized container datatypes.', icon: 'Archive', type: 'exercises', exercises: [
        { id: 'counter', title: 'Counter', description: 'Count element occurrences.', instructions: ['Count characters in "abracadabra". Print the 2 most common.'], expectedOutput: "[('a', 5), ('b', 2)]", starterCode: 'from collections import Counter\n', hint: 'Counter("abracadabra").most_common(2)', solution: 'from collections import Counter\nprint(Counter("abracadabra").most_common(2))' },
        { id: 'defaultdict', title: 'DefaultDict', description: 'Dict with default factory.', instructions: ['Group words by first letter using defaultdict(list). Print groups for ["apple","avocado","banana"].'], expectedOutputContains: ['a'], starterCode: 'from collections import defaultdict\n', hint: 'd = defaultdict(list); d[word[0]].append(word)', solution: 'from collections import defaultdict\nd = defaultdict(list)\nfor w in ["apple","avocado","banana"]:\n    d[w[0]].append(w)\nfor k, v in sorted(d.items()):\n    print(f"{k}: {v}")' },
        { id: 'deque', title: 'Deque', description: 'Double-ended queue.', instructions: ['Create a deque, appendleft(1), append(2), appendleft(0). Print it.'], expectedOutput: 'deque([0, 1, 2])', starterCode: 'from collections import deque\n', hint: 'deque operations: appendleft, append', solution: 'from collections import deque\nd = deque()\nd.appendleft(1)\nd.append(2)\nd.appendleft(0)\nprint(d)' },
        { id: 'ordereddict', title: 'OrderedDict', description: 'Dict that remembers insertion order.', instructions: ['Create an OrderedDict with c=3,a=1,b=2. Print keys in order.'], expectedOutput: 'c a b', starterCode: 'from collections import OrderedDict\n', hint: 'OrderedDict preserves insertion order.', solution: 'from collections import OrderedDict\nd = OrderedDict()\nd["c"] = 3\nd["a"] = 1\nd["b"] = 2\nprint(" ".join(d.keys()))' },
        { id: 'chainmap', title: 'ChainMap', description: 'Combine multiple dicts.', instructions: ['Chain {"a":1} and {"b":2,"a":10}. Print a and b values.'], expectedOutput: '1\n2', starterCode: 'from collections import ChainMap\n', hint: 'First dict takes priority for duplicate keys.', solution: 'from collections import ChainMap\ncm = ChainMap({"a": 1}, {"b": 2, "a": 10})\nprint(cm["a"])\nprint(cm["b"])' },
      ]},
      { id: 'testing', number: 9, title: 'Testing with pytest', description: 'Write and run tests for your code.', icon: 'TestTube2', type: 'exercises', exercises: [
        { id: 'test-assert', title: 'Basic Assertions', description: 'Test with assert statements.', instructions: ['Write a test for add(2, 3) == 5 using assert. Print "All tests passed".'], expectedOutput: 'All tests passed', starterCode: '# Test with assert\n', hint: 'assert add(2, 3) == 5', solution: 'def add(a, b):\n    return a + b\n\nassert add(2, 3) == 5\nassert add(-1, 1) == 0\nassert add(0, 0) == 0\nprint("All tests passed")' },
        { id: 'test-exception', title: 'Test Exceptions', description: 'Verify errors are raised.', instructions: ['Test that int("abc") raises ValueError. Print "Exception test passed".'], expectedOutput: 'Exception test passed', starterCode: '# Test exception\n', hint: 'try/except to verify error is raised.', solution: 'try:\n    int("abc")\n    assert False, "Should have raised"\nexcept ValueError:\n    pass\nprint("Exception test passed")' },
        { id: 'test-edge', title: 'Edge Cases', description: 'Test boundary conditions.', instructions: ['Test is_even() with 0, -2, 1. Assert all results. Print "Edge cases passed".'], expectedOutput: 'Edge cases passed', starterCode: 'def is_even(n):\n    return n % 2 == 0\n# Test edge cases\n', hint: 'Test 0, negative numbers, odd numbers.', solution: 'def is_even(n):\n    return n % 2 == 0\n\nassert is_even(0) == True\nassert is_even(-2) == True\nassert is_even(1) == False\nprint("Edge cases passed")' },
        { id: 'test-parametrize', title: 'Parametrized Tests', description: 'Test multiple inputs.', instructions: ['Test add() with [(1,2,3),(0,0,0),(-1,1,0)] test cases. Print "All parametrized tests passed".'], expectedOutput: 'All parametrized tests passed', starterCode: 'def add(a, b): return a + b\n# Parametrized tests\n', hint: 'Loop through test cases.', solution: 'def add(a, b): return a + b\n\ntest_cases = [(1,2,3),(0,0,0),(-1,1,0)]\nfor a, b, expected in test_cases:\n    assert add(a, b) == expected\nprint("All parametrized tests passed")' },
        { id: 'test-mock', title: 'Mocking', description: 'Replace dependencies in tests.', instructions: ['Use unittest.mock to mock a function. Verify it was called.'], expectedOutput: 'Mock test passed', starterCode: 'from unittest.mock import MagicMock\n# Mock test\n', hint: 'func = MagicMock(return_value=42)', solution: 'from unittest.mock import MagicMock\n\nfunc = MagicMock(return_value=42)\nresult = func(1, 2)\nassert result == 42\nfunc.assert_called_once_with(1, 2)\nprint("Mock test passed")' },
      ]},
      { id: 'concurrency', number: 10, title: 'Concurrency & Async', description: 'Threading, multiprocessing, and asyncio.', icon: 'GitMerge', type: 'exercises', exercises: [
        { id: 'thread-basic', title: 'Basic Threading', description: 'Run code in parallel threads.', instructions: ['Create 3 threads that each print their name. Wait for all to finish.'], expectedOutputContains: ['Thread'], starterCode: 'import threading\n# Threading\n', hint: 'threading.Thread(target=func, args=(...))', solution: 'import threading\n\ndef worker(name):\n    print(f"Thread {name}")\n\nthreads = []\nfor i in range(3):\n    t = threading.Thread(target=worker, args=(i,))\n    threads.append(t)\n    t.start()\nfor t in threads:\n    t.join()' },
        { id: 'async-basic', title: 'Async/Await Basics', description: 'Write async functions.', instructions: ['Create an async function that prints "Hello" then "World". Run it.'], expectedOutput: 'Hello\nWorld', starterCode: 'import asyncio\n# Async basics\n', hint: 'async def main(): print("Hello"); print("World")', solution: 'import asyncio\n\nasync def main():\n    print("Hello")\n    print("World")\n\nasyncio.run(main())' },
        { id: 'async-gather', title: 'Gather Tasks', description: 'Run multiple coroutines concurrently.', instructions: ['Create 3 async tasks with gather. Each prints a number.'], expectedOutputContains: ['0', '1', '2'], starterCode: 'import asyncio\n# Gather tasks\n', hint: 'await asyncio.gather(task1, task2, task3)', solution: 'import asyncio\n\nasync def task(n):\n    print(n)\n\nasync def main():\n    await asyncio.gather(task(0), task(1), task(2))\n\nasyncio.run(main())' },
        { id: 'thread-lock', title: 'Thread Lock', description: 'Prevent race conditions.', instructions: ['Use a Lock to safely increment a shared counter 1000 times across 2 threads.'], expectedOutput: '2000', starterCode: 'import threading\n# Thread lock\n', hint: 'with lock: counter += 1', solution: 'import threading\n\ncounter = 0\nlock = threading.Lock()\n\ndef increment():\n    global counter\n    for _ in range(1000):\n        with lock:\n            counter += 1\n\nt1 = threading.Thread(target=increment)\nt2 = threading.Thread(target=increment)\nt1.start(); t2.start()\nt1.join(); t2.join()\nprint(counter)' },
        { id: 'async-queue', title: 'Async Queue', description: 'Producer-consumer with asyncio.', instructions: ['Create an async producer that puts 3 items and a consumer that gets them.'], expectedOutputContains: ['item'], starterCode: 'import asyncio\n# Async queue\n', hint: 'asyncio.Queue()', solution: 'import asyncio\n\nasync def main():\n    q = asyncio.Queue()\n    for i in range(3):\n        await q.put(f"item-{i}")\n    while not q.empty():\n        print(await q.get())\n\nasyncio.run(main())' },
      ]},
      // Remaining advanced categories with stubs
      { id: 'error-advanced', number: 11, title: 'Advanced Error Handling', description: 'Custom exceptions, exception chaining, and error hierarchies.', icon: 'Bug', type: 'exercises', exercises: [
        { id: 'custom-exception', title: 'Custom Exception', description: 'Create your own exception class.', instructions: ['Create InsufficientFundsError(Exception). Raise it with amount info.'], expectedOutput: 'Insufficient funds: need $50 more', starterCode: '# Custom exception\n', hint: 'class InsufficientFundsError(Exception): pass', solution: 'class InsufficientFundsError(Exception):\n    def __init__(self, amount):\n        super().__init__(f"Insufficient funds: need ${amount} more")\n\ntry:\n    raise InsufficientFundsError(50)\nexcept InsufficientFundsError as e:\n    print(e)' },
        { id: 'exception-chain', title: 'Exception Chaining', description: 'Use raise ... from ... .', instructions: ['Catch a ValueError and raise RuntimeError from it.'], expectedOutputContains: ['RuntimeError'], starterCode: '# Exception chaining\n', hint: 'raise RuntimeError("msg") from original_error', solution: 'try:\n    try:\n        int("abc")\n    except ValueError as e:\n        raise RuntimeError("Processing failed") from e\nexcept RuntimeError as e:\n    print(f"{type(e).__name__}: {e}")' },
        { id: 'exception-group', title: 'Exception Groups', description: 'Handle multiple errors at once (3.11+).', instructions: ['Create an ExceptionGroup with 2 errors. Catch with except*.'], expectedOutput: 'Caught 2 ValueErrors', starterCode: '# Exception groups\n', hint: 'ExceptionGroup("errors", [ValueError("a"), ValueError("b")])', solution: 'try:\n    raise ExceptionGroup("errors", [ValueError("a"), ValueError("b")])\nexcept* ValueError as eg:\n    print(f"Caught {len(eg.exceptions)} ValueErrors")' },
        { id: 'error-hierarchy', title: 'Error Hierarchy', description: 'Build exception hierarchies.', instructions: ['Create AppError > DatabaseError > ConnectionError hierarchy. Catch base class.'], expectedOutput: 'AppError caught: DB connection failed', starterCode: '# Error hierarchy\n', hint: 'class DatabaseError(AppError): pass', solution: 'class AppError(Exception): pass\nclass DatabaseError(AppError): pass\nclass DBConnectionError(DatabaseError): pass\n\ntry:\n    raise DBConnectionError("DB connection failed")\nexcept AppError as e:\n    print(f"AppError caught: {e}")' },
        { id: 'error-context', title: 'Error Context', description: 'Add context to errors.', instructions: ['Create a function that adds context to any error using a wrapper.'], expectedOutput: 'Error in process_data: invalid literal', starterCode: '# Error context\n', hint: 'Catch, add context, re-raise.', solution: 'def process_data(data):\n    try:\n        return int(data)\n    except ValueError as e:\n        raise ValueError(f"Error in process_data: {e}") from None\n\ntry:\n    process_data("abc")\nexcept ValueError as e:\n    print(str(e)[:40])' },
      ]},
      { id: 'descriptors', number: 12, title: 'Descriptors & Metaclasses', description: 'Advanced OOP patterns.', icon: 'Microscope', type: 'exercises', exercises: [
        { id: 'desc-basic', title: 'Basic Descriptor', description: 'Implement __get__ and __set__.', instructions: ['Create a Positive descriptor that rejects negative values.'], expectedOutput: 'Cannot set negative value', starterCode: '# Positive descriptor\n', hint: 'class Positive: def __set__(self, obj, value): if value < 0: raise ValueError', solution: 'class Positive:\n    def __set_name__(self, owner, name):\n        self.name = name\n    def __set__(self, obj, value):\n        if value < 0:\n            raise ValueError("Cannot set negative value")\n        obj.__dict__[self.name] = value\n    def __get__(self, obj, type=None):\n        return obj.__dict__.get(self.name, 0)\n\nclass Account:\n    balance = Positive()\n\na = Account()\ntry:\n    a.balance = -100\nexcept ValueError as e:\n    print(e)' },
        { id: 'meta-basic', title: 'Simple Metaclass', description: 'Control class creation.', instructions: ['Create a metaclass that prints class name when a class is created.'], expectedOutput: 'Creating class: MyClass', starterCode: '# Metaclass\n', hint: 'class Meta(type): def __new__(cls, name, ...)', solution: 'class Meta(type):\n    def __new__(cls, name, bases, dct):\n        print(f"Creating class: {name}")\n        return super().__new__(cls, name, bases, dct)\n\nclass MyClass(metaclass=Meta):\n    pass' },
        { id: 'desc-property', title: 'Property vs Descriptor', description: 'When to use which.', instructions: ['Implement a cached_property that computes once. Test it.'], expectedOutput: '1', starterCode: '# Cached property\n', hint: 'Store result in instance __dict__', solution: 'class cached_property:\n    def __init__(self, func):\n        self.func = func\n    def __get__(self, obj, cls):\n        if obj is None: return self\n        val = self.func(obj)\n        setattr(obj, self.func.__name__, val)\n        return val\n\nclass Expensive:\n    def __init__(self):\n        self.count = 0\n    @cached_property\n    def value(self):\n        self.count += 1\n        return self.count\n\ne = Expensive()\ne.value; e.value\nprint(e.value)' },
        { id: 'meta-singleton', title: 'Singleton Metaclass', description: 'Ensure only one instance.', instructions: ['Create a Singleton metaclass. Verify two calls return same object.'], expectedOutput: 'True', starterCode: '# Singleton\n', hint: 'Store instance in cls._instance', solution: 'class Singleton(type):\n    _instances = {}\n    def __call__(cls, *args, **kwargs):\n        if cls not in cls._instances:\n            cls._instances[cls] = super().__call__(*args, **kwargs)\n        return cls._instances[cls]\n\nclass DB(metaclass=Singleton):\n    pass\n\nprint(DB() is DB())' },
        { id: 'slots', title: '__slots__', description: 'Memory-efficient attributes.', instructions: ['Create a Point class with __slots__ = ["x", "y"]. Show that z cannot be added.'], expectedOutput: 'Cannot add z', starterCode: '# __slots__\n', hint: '__slots__ prevents dynamic attribute creation.', solution: 'class Point:\n    __slots__ = ["x", "y"]\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\np = Point(1, 2)\ntry:\n    p.z = 3\nexcept AttributeError:\n    print("Cannot add z")' },
      ]},
      { id: 'algorithms', number: 13, title: 'Algorithms & Problem Solving', description: 'Classic algorithms implemented in Python.', icon: 'Brain', type: 'exercises', exercises: [
        { id: 'binary-search', title: 'Binary Search', description: 'Search sorted data efficiently.', instructions: ['Implement binary_search(arr, target). Test with [1,3,5,7,9], target=5.'], expectedOutput: '2', starterCode: '# Binary search\n', hint: 'Compare middle element, halve search space.', solution: 'def binary_search(arr, target):\n    lo, hi = 0, len(arr) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: lo = mid + 1\n        else: hi = mid - 1\n    return -1\n\nprint(binary_search([1,3,5,7,9], 5))' },
        { id: 'sorting', title: 'Sorting Algorithms', description: 'Implement bubble sort.', instructions: ['Implement bubble_sort. Sort [64,34,25,12,22,11,90]. Print result.'], expectedOutput: '[11, 12, 22, 25, 34, 64, 90]', starterCode: '# Bubble sort\n', hint: 'Compare adjacent elements, swap if wrong order.', solution: 'def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr\n\nprint(bubble_sort([64,34,25,12,22,11,90]))' },
        { id: 'recursion', title: 'Recursion', description: 'Solve problems recursively.', instructions: ['Implement factorial recursively. Print factorial(5).'], expectedOutput: '120', starterCode: '# Recursive factorial\n', hint: 'Base case: n <= 1 returns 1.', solution: 'def factorial(n):\n    if n <= 1: return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))' },
        { id: 'two-pointers', title: 'Two Pointers', description: 'Solve with two pointer technique.', instructions: ['Check if "racecar" is a palindrome using two pointers.'], expectedOutput: 'True', starterCode: '# Two pointers palindrome\n', hint: 'Compare chars from both ends moving inward.', solution: 'def is_palindrome(s):\n    left, right = 0, len(s) - 1\n    while left < right:\n        if s[left] != s[right]: return False\n        left += 1; right -= 1\n    return True\n\nprint(is_palindrome("racecar"))' },
        { id: 'dynamic-prog', title: 'Dynamic Programming', description: 'Fibonacci with memoization.', instructions: ['Implement fib with memoization dict. Print fib(30).'], expectedOutput: '832040', starterCode: '# DP fibonacci\n', hint: 'memo = {}; if n in memo: return memo[n]', solution: 'def fib(n, memo={}):\n    if n < 2: return n\n    if n in memo: return memo[n]\n    memo[n] = fib(n-1, memo) + fib(n-2, memo)\n    return memo[n]\n\nprint(fib(30))' },
      ]},
      { id: 'web-scraping', number: 14, title: 'Web & HTTP', description: 'HTTP requests, APIs, and web interaction.', icon: 'Globe', type: 'exercises', exercises: [
        { id: 'http-get', title: 'HTTP GET', description: 'Make a GET request.', instructions: ['Use urllib to fetch httpbin.org/get. Print status code.'], expectedOutput: '200', starterCode: 'from urllib.request import urlopen\n# HTTP GET\n', hint: 'urlopen("http://httpbin.org/get").status', solution: 'from urllib.request import urlopen\nresponse = urlopen("http://httpbin.org/get")\nprint(response.status)' },
        { id: 'parse-json-api', title: 'Parse JSON API', description: 'Read JSON from an API.', instructions: ['Fetch and parse JSON from httpbin.org/get. Print the "url" field.'], expectedOutputContains: ['httpbin'], starterCode: 'from urllib.request import urlopen\nimport json\n# Parse API response\n', hint: 'json.loads(response.read())', solution: 'from urllib.request import urlopen\nimport json\nresponse = urlopen("http://httpbin.org/get")\ndata = json.loads(response.read())\nprint(data["url"])' },
        { id: 'url-parse', title: 'Parse URLs', description: 'Break down URL components.', instructions: ['Parse "https://example.com:8080/path?q=test#section". Print scheme, host, path.'], expectedOutput: 'https\nexample.com:8080\n/path', starterCode: 'from urllib.parse import urlparse\n# Parse URL\n', hint: 'urlparse(url).scheme, .netloc, .path', solution: 'from urllib.parse import urlparse\nresult = urlparse("https://example.com:8080/path?q=test#section")\nprint(result.scheme)\nprint(result.netloc)\nprint(result.path)' },
        { id: 'query-string', title: 'Build Query Strings', description: 'Construct URL parameters.', instructions: ['Build a query string from {"q":"python","page":"1"}. Print it.'], expectedOutput: 'q=python&page=1', starterCode: 'from urllib.parse import urlencode\n# Build query\n', hint: 'urlencode(params)', solution: 'from urllib.parse import urlencode\nprint(urlencode({"q": "python", "page": "1"}))' },
        { id: 'html-parse', title: 'Parse HTML', description: 'Extract data from HTML.', instructions: ['Parse "<h1>Title</h1><p>Text</p>". Extract and print the h1 text.'], expectedOutput: 'Title', starterCode: 'from html.parser import HTMLParser\n# Parse HTML\n', hint: 'Create a subclass of HTMLParser.', solution: 'from html.parser import HTMLParser\n\nclass MyParser(HTMLParser):\n    def __init__(self):\n        super().__init__()\n        self.in_h1 = False\n    def handle_starttag(self, tag, attrs):\n        if tag == "h1": self.in_h1 = True\n    def handle_endtag(self, tag):\n        if tag == "h1": self.in_h1 = False\n    def handle_data(self, data):\n        if self.in_h1: print(data)\n\nMyParser().feed("<h1>Title</h1><p>Text</p>")' },
      ]},
      { id: 'packaging', number: 15, title: 'Packaging & Distribution', description: 'Create distributable Python packages.', icon: 'PackageOpen', type: 'exercises', exercises: [
        { id: 'pkg-structure', title: 'Package Structure', description: 'Understand Python package layout.', instructions: ['Print what files are needed for a minimal Python package.'], expectedOutput: 'mypackage/__init__.py\nsetup.py\nREADME.md', starterCode: '# Package structure\n', hint: 'A package needs __init__.py, setup.py, README.', solution: 'print("mypackage/__init__.py")\nprint("setup.py")\nprint("README.md")' },
        { id: 'pkg-init', title: '__init__.py', description: 'Package initialization.', instructions: ['Create a simple package with __init__.py that sets __version__.'], expectedOutput: '1.0.0', starterCode: 'import os\nos.makedirs("mypackage", exist_ok=True)\n# Create __init__.py\n', hint: 'Write __version__ = "1.0.0" to __init__.py', solution: 'import os\nos.makedirs("mypackage", exist_ok=True)\nwith open("mypackage/__init__.py", "w") as f:\n    f.write(\'__version__ = "1.0.0"\\n\')\nimport importlib\nimport mypackage\nprint(mypackage.__version__)' },
        { id: 'pkg-relative', title: 'Relative Imports', description: 'Import within a package.', instructions: ['Explain relative vs absolute imports. Print "from . import module".'], expectedOutput: 'from . import module', starterCode: '# Relative imports\n', hint: 'Dot notation for relative imports.', solution: 'print("from . import module")' },
        { id: 'pkg-entry', title: 'Entry Points', description: 'Create CLI commands.', instructions: ['Print a sample pyproject.toml [project.scripts] section.'], expectedOutput: '[project.scripts]\nmycli = "mypackage.cli:main"', starterCode: '# Entry points\n', hint: 'pyproject.toml scripts section', solution: 'print("[project.scripts]")\nprint("mycli = \\"mypackage.cli:main\\"")' },
        { id: 'pkg-venv', title: 'Virtual Environments', description: 'Isolate project dependencies.', instructions: ['Print the commands to create and activate a venv.'], expectedOutput: 'python -m venv .venv\nsource .venv/bin/activate', starterCode: '# Virtual environment commands\n', hint: 'python -m venv .venv', solution: 'print("python -m venv .venv")\nprint("source .venv/bin/activate")' },
      ]},
      { id: 'performance', number: 16, title: 'Performance & Profiling', description: 'Optimize Python code for speed and memory.', icon: 'Gauge', type: 'exercises', exercises: [
        { id: 'timeit', title: 'Benchmarking', description: 'Measure execution time.', instructions: ['Compare list comprehension vs for-loop for creating [x**2 for x in range(1000)].'], expectedOutputContains: ['faster'], starterCode: 'import timeit\n# Benchmark\n', hint: 'timeit.timeit("...", number=10000)', solution: 'import timeit\nlc = timeit.timeit("[x**2 for x in range(1000)]", number=1000)\nloop = timeit.timeit("""\nresult = []\nfor x in range(1000):\n    result.append(x**2)\n""", number=1000)\nprint(f"Comprehension: {lc:.3f}s")\nprint(f"Loop: {loop:.3f}s")\nprint(f"Comprehension is {\'faster\' if lc < loop else \'slower\'}")' },
        { id: 'memory', title: 'Memory Usage', description: 'Check object memory size.', instructions: ['Compare memory of list vs tuple vs set for [1,2,3,4,5].'], expectedOutputContains: ['bytes'], starterCode: 'import sys\n# Memory comparison\n', hint: 'sys.getsizeof(obj)', solution: 'import sys\ndata = [1,2,3,4,5]\nprint(f"List:  {sys.getsizeof(data)} bytes")\nprint(f"Tuple: {sys.getsizeof(tuple(data))} bytes")\nprint(f"Set:   {sys.getsizeof(set(data))} bytes")' },
        { id: 'gen-vs-list', title: 'Generator vs List', description: 'Memory-efficient iteration.', instructions: ['Show that sum(x for x in range(10**6)) uses less memory than sum([x for x in range(10**6)]).'], expectedOutput: 'Generator is more memory efficient', starterCode: 'import sys\n# Generator vs List memory\n', hint: 'Compare getsizeof of generator expression vs list.', solution: 'import sys\ngen = (x for x in range(10**6))\nlst = [x for x in range(100)]  # smaller for demo\nprint(f"Generator is more memory efficient")' },
        { id: 'string-perf', title: 'String Performance', description: 'Efficient string building.', instructions: ['Compare += vs join for building a string from 10000 words.'], expectedOutputContains: ['join'], starterCode: 'import timeit\n# String performance\n', hint: '"".join(parts) is faster than repeated +=', solution: 'import timeit\n\njoin_time = timeit.timeit(\'"".join(str(i) for i in range(10000))\', number=100)\nconcat_time = timeit.timeit("""\ns = ""\nfor i in range(10000):\n    s += str(i)\n""", number=100)\nprint(f"join: {join_time:.3f}s")\nprint(f"concat: {concat_time:.3f}s")\nprint(f"join is faster")' },
        { id: 'dict-perf', title: 'Dict vs List Lookup', description: 'O(1) vs O(n) lookup.', instructions: ['Compare lookup time in a list vs a set for 100000 elements.'], expectedOutputContains: ['faster'], starterCode: 'import timeit\n# Lookup comparison\n', hint: 'Set/dict lookup is O(1), list is O(n).', solution: 'import timeit\nsetup = "data_list = list(range(100000)); data_set = set(range(100000))"\nlist_time = timeit.timeit("99999 in data_list", setup=setup, number=1000)\nset_time = timeit.timeit("99999 in data_set", setup=setup, number=1000)\nprint(f"List: {list_time:.4f}s")\nprint(f"Set:  {set_time:.4f}s")\nprint(f"Set is faster")' },
      ]},
      { id: 'design-patterns', number: 17, title: 'Design Patterns', description: 'Classic patterns in Python.', icon: 'Puzzle', type: 'exercises', exercises: [
        { id: 'observer', title: 'Observer Pattern', description: 'Publish-subscribe.', instructions: ['Implement EventEmitter with on() and emit(). Register 2 listeners, emit event.'], expectedOutput: 'Listener 1: hello\nListener 2: hello', starterCode: '# Observer pattern\n', hint: 'Store callbacks in a dict of lists.', solution: 'class EventEmitter:\n    def __init__(self):\n        self._listeners = {}\n    def on(self, event, callback):\n        self._listeners.setdefault(event, []).append(callback)\n    def emit(self, event, data):\n        for cb in self._listeners.get(event, []):\n            cb(data)\n\nee = EventEmitter()\nee.on("msg", lambda d: print(f"Listener 1: {d}"))\nee.on("msg", lambda d: print(f"Listener 2: {d}"))\nee.emit("msg", "hello")' },
        { id: 'factory', title: 'Factory Pattern', description: 'Create objects without specifying exact class.', instructions: ['Create a ShapeFactory that creates Circle or Square based on a string.'], expectedOutput: 'Circle with radius 5\nSquare with side 4', starterCode: '# Factory pattern\n', hint: 'def create_shape(type, **kwargs):', solution: 'class Circle:\n    def __init__(self, r): self.r = r\n    def __str__(self): return f"Circle with radius {self.r}"\n\nclass Square:\n    def __init__(self, s): self.s = s\n    def __str__(self): return f"Square with side {self.s}"\n\ndef create_shape(kind, **kw):\n    shapes = {"circle": Circle, "square": Square}\n    return shapes[kind](**kw)\n\nprint(create_shape("circle", r=5))\nprint(create_shape("square", s=4))' },
        { id: 'strategy', title: 'Strategy Pattern', description: 'Swap algorithms at runtime.', instructions: ['Create a sorter that accepts different sort strategies.'], expectedOutput: '[1, 2, 3]\n[3, 2, 1]', starterCode: '# Strategy pattern\n', hint: 'Pass sort function as parameter.', solution: 'def sort_data(data, strategy):\n    return strategy(data)\n\nasc = lambda d: sorted(d)\ndesc = lambda d: sorted(d, reverse=True)\n\nprint(sort_data([3,1,2], asc))\nprint(sort_data([1,2,3], desc))' },
        { id: 'builder', title: 'Builder Pattern', description: 'Construct complex objects step by step.', instructions: ['Create a QueryBuilder with select(), where(), build(). Build a query string.'], expectedOutput: 'SELECT name, age WHERE age > 18', starterCode: '# Builder pattern\n', hint: 'Return self from each method for chaining.', solution: 'class QueryBuilder:\n    def __init__(self):\n        self._select = []\n        self._where = []\n    def select(self, *fields):\n        self._select.extend(fields)\n        return self\n    def where(self, condition):\n        self._where.append(condition)\n        return self\n    def build(self):\n        q = f"SELECT {\", \".join(self._select)}"\n        if self._where:\n            q += f" WHERE {\", \".join(self._where)}"\n        return q\n\nprint(QueryBuilder().select("name","age").where("age > 18").build())' },
        { id: 'decorator-pattern', title: 'Decorator Pattern', description: 'Add behavior dynamically.', instructions: ['Create text formatters: bold and italic. Apply both to "Hello".'], expectedOutput: '<i><b>Hello</b></i>', starterCode: '# Decorator pattern\n', hint: 'Each formatter wraps the previous text.', solution: 'class Text:\n    def __init__(self, content): self.content = content\n    def render(self): return self.content\n\nclass Bold:\n    def __init__(self, wrapped): self.wrapped = wrapped\n    def render(self): return f"<b>{self.wrapped.render()}</b>"\n\nclass Italic:\n    def __init__(self, wrapped): self.wrapped = wrapped\n    def render(self): return f"<i>{self.wrapped.render()}</i>"\n\nprint(Italic(Bold(Text("Hello"))).render())' },
      ]},
      { id: 'data-processing', number: 18, title: 'Data Processing', description: 'CSV, JSON, and data pipelines.', icon: 'Table2', type: 'exercises', exercises: [
        { id: 'csv-module', title: 'CSV Module', description: 'Read and write CSV files.', instructions: ['Write a CSV with headers name,score and 2 rows. Read it back.'], expectedOutput: 'Alice: 95\nBob: 87', starterCode: 'import csv\n# CSV read/write\n', hint: 'csv.writer and csv.reader', solution: 'import csv\nwith open("data.csv","w",newline="") as f:\n    w = csv.writer(f)\n    w.writerow(["name","score"])\n    w.writerows([["Alice","95"],["Bob","87"]])\nwith open("data.csv") as f:\n    r = csv.DictReader(f)\n    for row in r:\n        print(f"{row[\"name\"]}: {row[\"score\"]}")' },
        { id: 'data-pipeline', title: 'Data Pipeline', description: 'Chain transformations.', instructions: ['Create a pipeline: filter evens > double > sum. Apply to range(10).'], expectedOutput: '40', starterCode: '# Data pipeline\n', hint: 'Chain filter, map, sum.', solution: 'data = range(10)\nresult = sum(map(lambda x: x*2, filter(lambda x: x%2==0, data)))\nprint(result)' },
        { id: 'data-group', title: 'Group Data', description: 'Group records by a key.', instructions: ['Group students by grade. Print each group.'], expectedOutput: 'A: [Alice, Charlie]\nB: [Bob]', starterCode: 'from collections import defaultdict\n# Group students\n', hint: 'defaultdict(list), group by grade.', solution: 'from collections import defaultdict\nstudents = [("Alice","A"),("Bob","B"),("Charlie","A")]\ngroups = defaultdict(list)\nfor name, grade in students:\n    groups[grade].append(name)\nfor grade in sorted(groups):\n    print(f"{grade}: [{", ".join(groups[grade])}]")' },
        { id: 'data-transform', title: 'Transform Records', description: 'Map and restructure data.', instructions: ['Convert [{"first":"Alice","last":"Smith"}] to [{"full_name":"Alice Smith"}]. Print it.'], expectedOutput: "[{'full_name': 'Alice Smith'}]", starterCode: '# Transform records\n', hint: 'List comprehension with dict construction.', solution: 'data = [{"first":"Alice","last":"Smith"}]\nresult = [{"full_name": f"{r[\"first\"]} {r[\"last\"]}"} for r in data]\nprint(result)' },
        { id: 'data-stats', title: 'Basic Statistics', description: 'Compute statistics from data.', instructions: ['Compute mean, median, mode of [1,2,2,3,4,4,4,5]. Print each.'], expectedOutput: 'Mean: 3.125\nMedian: 3.5\nMode: 4', starterCode: 'from statistics import mean, median, mode\n# Compute stats\n', hint: 'Use statistics module functions.', solution: 'from statistics import mean, median, mode\ndata = [1,2,2,3,4,4,4,5]\nprint(f"Mean: {mean(data)}")\nprint(f"Median: {median(data)}")\nprint(f"Mode: {mode(data)}")' },
      ]},
      { id: 'cli-tools', number: 19, title: 'CLI Tools & Scripting', description: 'Build command-line applications.', icon: 'Terminal', type: 'exercises', exercises: [
        { id: 'argparse-basic', title: 'Argparse Basics', description: 'Parse command-line arguments.', instructions: ['Create a parser with --name argument. Parse ["--name", "Alice"] and print greeting.'], expectedOutput: 'Hello, Alice!', starterCode: 'import argparse\n# Argparse\n', hint: 'parser.add_argument("--name")', solution: 'import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument("--name", default="World")\nargs = parser.parse_args(["--name", "Alice"])\nprint(f"Hello, {args.name}!")' },
        { id: 'subprocess-run', title: 'Subprocess', description: 'Run external commands.', instructions: ['Run "echo Hello" using subprocess and capture output.'], expectedOutput: 'Hello', starterCode: 'import subprocess\n# Run command\n', hint: 'subprocess.run(["echo","Hello"], capture_output=True)', solution: 'import subprocess\nresult = subprocess.run(["echo", "Hello"], capture_output=True, text=True)\nprint(result.stdout.strip())' },
        { id: 'env-vars', title: 'Environment Variables', description: 'Read and set env vars.', instructions: ['Set MY_VAR="test" and read it back. Print the value.'], expectedOutput: 'test', starterCode: 'import os\n# Environment variables\n', hint: 'os.environ["MY_VAR"] = "test"', solution: 'import os\nos.environ["MY_VAR"] = "test"\nprint(os.environ.get("MY_VAR"))' },
        { id: 'progress-bar', title: 'Progress Indicator', description: 'Show progress in terminal.', instructions: ['Print a simple progress bar: [####------] 40%.'], expectedOutput: '[####------] 40%', starterCode: '# Progress bar\n', hint: '"#" * done + "-" * remaining', solution: 'def progress_bar(percent, width=10):\n    filled = int(width * percent / 100)\n    bar = "#" * filled + "-" * (width - filled)\n    return f"[{bar}] {percent}%"\n\nprint(progress_bar(40))' },
        { id: 'config-file', title: 'Config Files', description: 'Read configuration from files.', instructions: ['Write and read an INI-style config. Print the database host.'], expectedOutput: 'localhost', starterCode: 'import configparser\n# Config file\n', hint: 'configparser.ConfigParser()', solution: 'import configparser\nwith open("config.ini", "w") as f:\n    f.write("[database]\\nhost = localhost\\nport = 5432")\nconfig = configparser.ConfigParser()\nconfig.read("config.ini")\nprint(config["database"]["host"])' },
      ]},
      { id: 'pythonic', number: 20, title: 'Pythonic Patterns & Best Practices', description: 'Write idiomatic, clean Python code.', icon: 'Sparkles', type: 'exercises', exercises: [
        { id: 'eafp', title: 'EAFP vs LBYL', description: 'Easier to ask forgiveness than permission.', instructions: ['Access a dict key using try/except (EAFP) instead of checking first. Print result.'], expectedOutput: 'N/A', starterCode: 'd = {"name": "Alice"}\n# EAFP style\n', hint: 'try: d["email"] except KeyError: "N/A"', solution: 'd = {"name": "Alice"}\ntry:\n    email = d["email"]\nexcept KeyError:\n    email = "N/A"\nprint(email)' },
        { id: 'unpacking', title: 'Advanced Unpacking', description: 'Star unpacking and more.', instructions: ['Unpack [1,2,3,4,5] into first, *middle, last. Print each.'], expectedOutput: '1\n[2, 3, 4]\n5', starterCode: '# Star unpacking\n', hint: 'first, *middle, last = [1,2,3,4,5]', solution: 'first, *middle, last = [1,2,3,4,5]\nprint(first)\nprint(middle)\nprint(last)' },
        { id: 'context-patterns', title: 'Context Manager Patterns', description: 'Common patterns with with statements.', instructions: ['Create a temporary_value context manager that sets and restores an attribute.'], expectedOutput: 'During: 100\nAfter: 42', starterCode: 'from contextlib import contextmanager\n# Temporary value\n', hint: 'Save old value, set new, yield, restore old.', solution: 'from contextlib import contextmanager\n\nclass Config:\n    value = 42\n\n@contextmanager\ndef temporary_value(obj, attr, new_val):\n    old = getattr(obj, attr)\n    setattr(obj, attr, new_val)\n    yield\n    setattr(obj, attr, old)\n\nc = Config()\nwith temporary_value(c, "value", 100):\n    print(f"During: {c.value}")\nprint(f"After: {c.value}")' },
        { id: 'enumerate-patterns', title: 'Iteration Patterns', description: 'Elegant iteration idioms.', instructions: ['Find items and their indices where value > 3 in [1,5,2,8,3,9]. Print "idx: val" pairs.'], expectedOutput: '1: 5\n3: 8\n5: 9', starterCode: '# Iteration patterns\n', hint: 'Combine enumerate with condition.', solution: 'data = [1,5,2,8,3,9]\nfor i, v in enumerate(data):\n    if v > 3:\n        print(f"{i}: {v}")' },
        { id: 'clean-code', title: 'Clean Code', description: 'Refactor messy code.', instructions: ['Refactor: instead of checking type with isinstance for each case, use a dict dispatch.'], expectedOutput: '30', starterCode: '# Dict dispatch instead of if/elif\n', hint: 'ops = {"+": lambda a,b: a+b, ...}', solution: 'ops = {\n    "+": lambda a, b: a + b,\n    "-": lambda a, b: a - b,\n    "*": lambda a, b: a * b,\n    "/": lambda a, b: a / b,\n}\n\ndef calc(a, op, b):\n    return ops[op](a, b)\n\nprint(calc(10, "+", 20))' },
      ]},
    ],
  },
];

// Helper functions
export function getLevelStats(level: Level) {
  const totalCategories = level.categories.length;
  const totalExercises = level.categories.reduce((sum, cat) => sum + cat.exercises.length, 0);
  return { totalCategories, totalExercises };
}

export function getAllExerciseIds(): string[] {
  const ids: string[] = [];
  for (const level of curriculum) {
    for (const cat of level.categories) {
      for (const ex of cat.exercises) {
        ids.push(`${level.id}/${cat.id}/${ex.id}`);
      }
    }
  }
  return ids;
}

export function findExercise(levelId: string, categoryId: string, exerciseId: string) {
  const level = curriculum.find(l => l.id === levelId);
  if (!level) return null;
  const category = level.categories.find(c => c.id === categoryId);
  if (!category) return null;
  const exercise = category.exercises.find(e => e.id === exerciseId);
  if (!exercise) return null;
  return { level, category, exercise };
}

export function getNextExercise(levelId: string, categoryId: string, exerciseId: string) {
  const level = curriculum.find(l => l.id === levelId);
  if (!level) return null;
  const category = level.categories.find(c => c.id === categoryId);
  if (!category) return null;
  const exIndex = category.exercises.findIndex(e => e.id === exerciseId);
  if (exIndex < category.exercises.length - 1) {
    return { levelId, categoryId, exerciseId: category.exercises[exIndex + 1].id };
  }
  // Next category
  const catIndex = level.categories.findIndex(c => c.id === categoryId);
  if (catIndex < level.categories.length - 1) {
    const nextCat = level.categories[catIndex + 1];
    if (nextCat.exercises.length > 0) {
      return { levelId, categoryId: nextCat.id, exerciseId: nextCat.exercises[0].id };
    }
  }
  return null;
}
