// PyMaster — Complete Python Curriculum
// AUTO-GENERATED — Do not edit manually

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
  icon: string;
  type: 'reading' | 'exercises';
  sections?: string[];
  lesson?: string;
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

export function getLevelStats(level: Level) {
  const totalExercises = level.categories.reduce((sum, cat) => sum + cat.exercises.length, 0);
  return { totalExercises };
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
  const catIdx = level.categories.findIndex(c => c.id === categoryId);
  if (catIdx === -1) return null;
  const category = level.categories[catIdx];
  const exIdx = category.exercises.findIndex(e => e.id === exerciseId);
  if (exIdx < category.exercises.length - 1) {
    return { levelId, categoryId, exerciseId: category.exercises[exIdx + 1].id };
  }
  if (catIdx < level.categories.length - 1) {
    const nextCat = level.categories[catIdx + 1];
    if (nextCat.exercises.length > 0) {
      return { levelId, categoryId: nextCat.id, exerciseId: nextCat.exercises[0].id };
    }
  }
  const lvlIdx = curriculum.findIndex(l => l.id === levelId);
  if (lvlIdx < curriculum.length - 1) {
    const nextLevel = curriculum[lvlIdx + 1];
    for (const cat of nextLevel.categories) {
      if (cat.exercises.length > 0) {
        return { levelId: nextLevel.id, categoryId: cat.id, exerciseId: cat.exercises[0].id };
      }
    }
  }
  return null;
}

export const curriculum: Level[] = [
  {
    id: 'foundations',
    title: 'Foundations',
    subtitle: 'Your First Steps',
    description: 'Master Python\'s core syntax: variables, data types, operators, strings, control flow, and lists.',
    icon: 'Sprout',
    color: 'emerald',
    categories: [
      {
        id: 'intro',
        number: 1,
        title: 'Introduction to Python',
        description: 'Discover what Python is and set up your environment.',
        icon: 'BookOpen',
        type: 'reading',
        sections: ['What is Python?', 'Python vs Other Languages', 'Installing Python', 'Running Scripts', 'The Python REPL'],
        exercises: [],
      },
      {
        id: 'print',
        number: 2,
        title: 'Printing & Output',
        description: 'Display information using print().',
        icon: 'Printer',
        type: 'exercises',
        lesson: `Python communicates with you through the \`print()\` function. It's the most basic and essential tool — every programmer uses it thousands of times.

## What is print()?

\`print()\` is a **built-in function** that displays text or values on the screen. Think of it as Python's way of talking to you.

\`\`\`python
print("Hello, World!")
\`\`\`
>>> Hello, World!

That's it! You just wrote your first Python program.

## Printing Different Things

You can print text (strings), numbers, or any value:

\`\`\`python
print("I am learning Python")    # Text (string)
print(42)                         # Integer
print(3.14)                       # Float (decimal)
print(True)                       # Boolean
\`\`\`
>>> I am learning Python
>>> 42
>>> 3.14
>>> True

## Multiple Values

Use commas to print several things at once. Python adds a space between them:

\`\`\`python
print("My age is", 25)
print("A", "B", "C")
\`\`\`
>>> My age is 25
>>> A B C

## Custom Separator (sep)

Change what goes between values with \`sep\`:

\`\`\`python
print("2024", "01", "15", sep="-")
print("A", "B", "C", sep=" -> ")
\`\`\`
>>> 2024-01-15
>>> A -> B -> C

## Custom Ending (end)

By default, \`print()\` adds a newline at the end. Change it with \`end\`:

\`\`\`python
print("Hello", end=" ")
print("World")
\`\`\`
>>> Hello World

💡 This is useful when you want to print things on the same line.

## Printing Empty Lines

Call \`print()\` with no arguments:

\`\`\`python
print("Line 1")
print()
print("Line 3")
\`\`\`
>>> Line 1
>>>
>>> Line 3

## Escape Characters

Use backslash \`\\\` for special characters inside strings:
- \`\\n\` — new line
- \`\\t\` — tab
- \`\\\\\` — literal backslash

\`\`\`python
print("Hello\\nWorld")
print("Name:\\tAlice")
\`\`\`
>>> Hello
>>> World
>>> Name:	Alice

## Common Mistakes

⚠️ Don't forget the parentheses! \`print "hello"\` is Python 2 syntax and won't work.

⚠️ Strings need quotes: \`print(hello)\` looks for a variable named \`hello\`. Use \`print("hello")\` for text.

⚠️ Mismatched quotes: \`print("hello')\` won't work — use matching quote types.

💡 Use \`print()\` liberally when debugging — print variable values to see what's happening in your code.`,
        exercises: [
          {
            id: 'print-1',
            title: 'Hello World',
            description: 'Print the classic first program message.',
            instructions: ['Use the print() function to display exactly: Hello, World!'],
            starterCode: '',
            solution: 'print("Hello, World!")',
            hint: 'Use print() with the text in quotes.',
            expectedOutput: 'Hello, World!',
          },
          {
            id: 'print-2',
            title: 'Print Multiple Values',
            description: 'Print several values in one statement.',
            instructions: ['Print your name and age using a single print() call', 'Output should be: Alice 25'],
            starterCode: '',
            solution: 'print("Alice", 25)',
            hint: 'Separate values with commas inside print().',
            expectedOutput: 'Alice 25',
          },
          {
            id: 'print-3',
            title: 'Custom Separator',
            description: 'Use the sep parameter.',
            instructions: ['Print 2024, 01, 15 separated by dashes using sep', 'Output: 2024-01-15'],
            starterCode: '',
            solution: 'print("2024", "01", "15", sep="-")',
            hint: 'Use sep="-" as a parameter.',
            expectedOutput: '2024-01-15',
          },
          {
            id: 'print-4',
            title: 'Same Line Printing',
            description: 'Use the end parameter.',
            instructions: ['Print \'Hello\' and \'World\' on the same line using two print statements', 'Use end parameter on the first print'],
            starterCode: '',
            solution: 'print("Hello", end=" ")\nprint("World")',
            hint: 'Use end=" " to prevent the newline.',
            expectedOutput: 'Hello World',
          },
          {
            id: 'print-5',
            title: 'Escape Characters',
            description: 'Use special characters in strings.',
            instructions: ['Print \'Hello\' and \'World\' on separate lines using a single print() and \\n'],
            starterCode: '',
            solution: 'print("Hello\\nWorld")',
            hint: 'Use \\n inside the string for a newline.',
            expectedOutput: 'Hello\nWorld',
          }
        ],
      },
      {
        id: 'comments',
        number: 3,
        title: 'Comments & Documentation',
        description: 'Write notes in your code that Python ignores.',
        icon: 'MessageSquare',
        type: 'exercises',
        lesson: `Comments are notes you write in your code **for humans to read**. Python completely ignores them — they don't affect how your program runs.

## Why Use Comments?

- **Explain your thinking**: Tell others (and future you) WHY you wrote something
- **Document complex logic**: Make tricky parts understandable
- **Temporarily disable code**: "Comment out" lines you don't want to run

## Single-Line Comments

Use the \`#\` symbol. Everything after \`#\` on that line is ignored:

\`\`\`python
# This is a comment
print("Hello")  # This prints a greeting
\`\`\`
>>> Hello

## Multi-Line Comments

Use multiple \`#\` lines:

\`\`\`python
# This function calculates the total
# including tax and discounts
# for all items in the cart
total = 100
\`\`\`

## Docstrings

Triple-quoted strings are used as documentation, especially for functions:

\`\`\`python
def greet(name):
    """Greet a user by name."""
    print(f"Hello, {name}!")
\`\`\`

## Commenting Out Code

Temporarily disable lines without deleting them:

\`\`\`python
print("Step 1")
# print("Step 2")  # Skipping for now
print("Step 3")
\`\`\`
>>> Step 1
>>> Step 3

## Best Practices

💡 Explain WHY, not WHAT: \`# Apply 8% sales tax\` is better than \`# multiply by 1.08\`

💡 Keep comments updated when you change code.

⚠️ Don't state the obvious: \`x = 5  # set x to 5\` is useless.

⚠️ Forgetting \`#\` causes a SyntaxError — Python tries to run your comment as code.`,
        exercises: [
          {
            id: 'comments-1',
            title: 'Single Line Comment',
            description: 'Add a comment to your code.',
            instructions: ['Write a comment saying \'My first program\' then print \'Hello!\''],
            starterCode: '',
            solution: '# My first program\nprint(\'Hello!\')',
            hint: 'Start a line with # to make it a comment.',
            expectedOutput: 'Hello!',
          },
          {
            id: 'comments-2',
            title: 'Inline Comments',
            description: 'Add comments at the end of code lines.',
            instructions: ['Create age = 25 with an inline comment \'user age\'', 'Print the age'],
            starterCode: '',
            solution: 'age = 25  # user age\nprint(age)',
            hint: 'Add # after the code on the same line.',
            expectedOutput: '25',
          },
          {
            id: 'comments-3',
            title: 'Comment Out Code',
            description: 'Disable a line using a comment.',
            instructions: ['Comment out the second print so only \'Hello\' and \'World\' print'],
            starterCode: 'print(\'Hello\')\nprint(\'Python\')\nprint(\'World\')',
            solution: 'print(\'Hello\')\n# print(\'Python\')\nprint(\'World\')',
            hint: 'Put # at the beginning of the line to disable.',
            expectedOutput: 'Hello\nWorld',
          },
          {
            id: 'comments-4',
            title: 'Multi-Line Comments',
            description: 'Write comments spanning multiple lines.',
            instructions: ['Write a 2-line comment describing a calculator', 'Then print \'Calculator Ready\''],
            starterCode: '',
            solution: '# Simple calculator program\n# Performs basic math\nprint(\'Calculator Ready\')',
            hint: 'Use # at the start of each comment line.',
            expectedOutput: 'Calculator Ready',
          },
          {
            id: 'comments-5',
            title: 'Docstrings',
            description: 'Use triple-quoted strings as documentation.',
            instructions: ['Create a triple-quoted docstring saying \'My Python script\'', 'Then print \'Running!\''],
            starterCode: '',
            solution: '"""My Python script"""\nprint(\'Running!\')',
            hint: 'Use triple double-quotes: """text"""',
            expectedOutput: 'Running!',
          }
        ],
      },
      {
        id: 'variables',
        number: 4,
        title: 'Variables & Assignment',
        description: 'Store and manage data using named containers.',
        icon: 'Box',
        type: 'exercises',
        lesson: `A variable is a **named container** that stores a value. Think of it as a labeled box — you give it a name, put something inside, and can retrieve or change it later.

## Creating Variables

Use the \`=\` sign (the **assignment operator**):

\`\`\`python
name = "Alice"
age = 25
price = 9.99
is_student = True
\`\`\`

## Using Variables

Use the variable name to access its value:

\`\`\`python
name = "Bob"
print(name)
print("Hello,", name)
\`\`\`
>>> Bob
>>> Hello, Bob

## Changing Variables

Variables can be **reassigned**:

\`\`\`python
score = 0
print(score)
score = 100
print(score)
\`\`\`
>>> 0
>>> 100

## Naming Rules

**Must follow:**
- Start with a letter or underscore: \`name\`, \`_count\`
- Only letters, numbers, underscores: \`my_var2\`
- Cannot be a Python keyword: \`if\`, \`for\`, \`class\` are reserved
- Case-sensitive: \`Name\` and \`name\` are different

**Best practices:**
- Use descriptive names: \`user_age\` not \`x\`
- Use snake_case: \`first_name\` not \`firstName\`

## Multiple Assignment

\`\`\`python
x, y, z = 1, 2, 3
print(x, y, z)
\`\`\`
>>> 1 2 3

Same value to multiple variables:
\`\`\`python
a = b = c = 0
print(a, b, c)
\`\`\`
>>> 0 0 0

## Dynamic Typing

Python figures out the type automatically:

\`\`\`python
x = 5        # int
x = "hello"  # now it's a string
print(x)
\`\`\`
>>> hello

## Swapping Variables

Python makes this elegant:
\`\`\`python
a, b = 1, 2
a, b = b, a
print(a, b)
\`\`\`
>>> 2 1

## Common Mistakes

⚠️ Using a variable before defining it causes \`NameError\`.

⚠️ Spaces in names: \`my name = "Alice"\` is invalid — use underscores.

⚠️ Starting with a number: \`2name = "Bob"\` is invalid.

⚠️ Confusing \`=\` (assignment) and \`==\` (comparison).`,
        exercises: [
          {
            id: 'var-1',
            title: 'Create Variables',
            description: 'Create and print variables.',
            instructions: ['Create name = \'Python\' and version = 3', 'Print both on separate lines'],
            starterCode: '',
            solution: 'name = \'Python\'\nversion = 3\nprint(name)\nprint(version)',
            hint: 'Use = to assign values.',
            expectedOutput: 'Python\n3',
          },
          {
            id: 'var-2',
            title: 'Reassign Variables',
            description: 'Change a variable\'s value.',
            instructions: ['Create x = 10, print it', 'Change x to 20, print it again'],
            starterCode: '',
            solution: 'x = 10\nprint(x)\nx = 20\nprint(x)',
            hint: 'Use = again to change the value.',
            expectedOutput: '10\n20',
          },
          {
            id: 'var-3',
            title: 'Multiple Assignment',
            description: 'Assign multiple variables at once.',
            instructions: ['Assign a=1, b=2, c=3 in one line', 'Print all three'],
            starterCode: '',
            solution: 'a, b, c = 1, 2, 3\nprint(a, b, c)',
            hint: 'Separate names and values with commas.',
            expectedOutput: '1 2 3',
          },
          {
            id: 'var-4',
            title: 'Swap Variables',
            description: 'Swap two variable values.',
            instructions: ['Start with x=\'hello\', y=\'world\'', 'Swap them and print each on its own line'],
            starterCode: '',
            solution: 'x = \'hello\'\ny = \'world\'\nx, y = y, x\nprint(x)\nprint(y)',
            hint: 'Python allows x, y = y, x to swap.',
            expectedOutput: 'world\nhello',
          },
          {
            id: 'var-5',
            title: 'Descriptive Names',
            description: 'Use good variable names.',
            instructions: ['Create user_age = 30 and user_name = \'Alice\'', 'Print: Alice is 30 years old'],
            starterCode: '',
            solution: 'user_age = 30\nuser_name = \'Alice\'\nprint(user_name, \'is\', user_age, \'years old\')',
            hint: 'Use snake_case for names.',
            expectedOutput: 'Alice is 30 years old',
          }
        ],
      },
      {
        id: 'data-types',
        number: 5,
        title: 'Data Types',
        description: 'Understand the different kinds of data Python can work with.',
        icon: 'Layers',
        type: 'exercises',
        lesson: `Every value in Python has a **type** that determines what operations you can do with it.

## The Basic Types

| Type | Name | Example |
|------|------|---------|
| \`int\` | Integer | \`42\` |
| \`float\` | Float | \`3.14\` |
| \`str\` | String | \`"hello"\` |
| \`bool\` | Boolean | \`True\` |
| \`NoneType\` | None | \`None\` |

## Checking Types with type()

\`\`\`python
print(type(42))
print(type(3.14))
print(type("hello"))
print(type(True))
print(type(None))
\`\`\`
>>> <class 'int'>
>>> <class 'float'>
>>> <class 'str'>
>>> <class 'bool'>
>>> <class 'NoneType'>

## Integers (int)

Whole numbers, positive or negative:

\`\`\`python
age = 25
temp = -10
big = 1_000_000  # underscores for readability
print(age, temp, big)
\`\`\`
>>> 25 -10 1000000

## Floats (float)

Numbers with decimal points:

\`\`\`python
pi = 3.14159
price = 9.99
print(pi, price)
\`\`\`
>>> 3.14159 9.99

⚠️ Float arithmetic can be slightly imprecise: \`0.1 + 0.2\` gives \`0.30000000000000004\`

## Strings (str)

Text in quotes (single or double):

\`\`\`python
name = "Alice"
greeting = 'Hello!'
print(name, greeting)
\`\`\`
>>> Alice Hello!

## Booleans (bool)

Only \`True\` or \`False\` (capital letters!):

\`\`\`python
is_active = True
is_done = False
print(is_active, is_done)
\`\`\`
>>> True False

## None

Represents "nothing" or "no value":

\`\`\`python
result = None
print(result)
\`\`\`
>>> None

## Type Conversion (Casting)

Convert between types with \`int()\`, \`float()\`, \`str()\`, \`bool()\`:

\`\`\`python
x = int("42")        # str -> int
y = float("3.14")    # str -> float
z = str(100)          # int -> str
w = bool(1)           # int -> bool
print(x, y, z, w)
\`\`\`
>>> 42 3.14 100 True

## Truthiness

Every value has a boolean interpretation:
- **Falsy**: \`0\`, \`0.0\`, \`""\`, \`None\`, \`False\`, empty collections
- **Truthy**: everything else

\`\`\`python
print(bool(0), bool(42))
print(bool(""), bool("hi"))
\`\`\`
>>> False True
>>> False True

## Common Mistakes

⚠️ \`"42"\` is a string, not a number — convert before doing math.

⚠️ Division always returns float: \`10 / 2\` gives \`5.0\`, not \`5\`.

⚠️ \`True\` and \`"True"\` are different types.`,
        exercises: [
          {
            id: 'dt-1',
            title: 'Check Data Types',
            description: 'Use type() to identify types.',
            instructions: ['Print the type of 42, 3.14, \'hello\', True, None — each on its own line'],
            starterCode: '',
            solution: 'print(type(42))\nprint(type(3.14))\nprint(type(\'hello\'))\nprint(type(True))\nprint(type(None))',
            hint: 'Wrap each value in type() inside print().',
            expectedOutputContains: ['<class \'int\'>', '<class \'float\'>', '<class \'str\'>', '<class \'bool\'>', '<class \'NoneType\'>'],
          },
          {
            id: 'dt-2',
            title: 'Convert to Integer',
            description: 'Convert strings and floats to int.',
            instructions: ['Convert \'100\' to int and print it', 'Convert 9.7 to int and print it'],
            starterCode: '',
            solution: 'print(int(\'100\'))\nprint(int(9.7))',
            hint: 'int() truncates floats.',
            expectedOutput: '100\n9',
          },
          {
            id: 'dt-3',
            title: 'Convert to String',
            description: 'Convert numbers to strings.',
            instructions: ['Convert 42 to a string, concatenate with \' is the answer\', print result'],
            starterCode: '',
            solution: 'print(str(42) + \' is the answer\')',
            hint: 'Use str() then + to join.',
            expectedOutput: '42 is the answer',
          },
          {
            id: 'dt-4',
            title: 'Boolean Conversion',
            description: 'Understand truthy and falsy.',
            instructions: ['Print bool() of: 1, 0, \'hello\', \'\', None — each on its own line'],
            starterCode: '',
            solution: 'print(bool(1))\nprint(bool(0))\nprint(bool(\'hello\'))\nprint(bool(\'\'))\nprint(bool(None))',
            hint: 'bool() converts any value to True or False.',
            expectedOutput: 'True\nFalse\nTrue\nFalse\nFalse',
          },
          {
            id: 'dt-5',
            title: 'Type Juggling',
            description: 'Convert between types for computation.',
            instructions: ['Start with age_str = \'25\'', 'Convert to int, add 5, convert back to str', 'Print result + \' years old\''],
            starterCode: '',
            solution: 'age_str = \'25\'\nresult = str(int(age_str) + 5) + \' years old\'\nprint(result)',
            hint: 'int() for math, str() for concatenation.',
            expectedOutput: '30 years old',
          }
        ],
      },
      {
        id: 'numbers',
        number: 6,
        title: 'Numbers & Arithmetic',
        description: 'Perform calculations with Python\'s math operators.',
        icon: 'Calculator',
        type: 'exercises',
        lesson: `Python handles math naturally. You have two number types: **int** (whole) and **float** (decimal).

## Arithmetic Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| \`+\` | Addition | \`5 + 3\` | \`8\` |
| \`-\` | Subtraction | \`10 - 4\` | \`6\` |
| \`*\` | Multiplication | \`3 * 7\` | \`21\` |
| \`/\` | Division | \`15 / 4\` | \`3.75\` |
| \`//\` | Floor Division | \`15 // 4\` | \`3\` |
| \`%\` | Modulo (remainder) | \`15 % 4\` | \`3\` |
| \`**\` | Exponent | \`2 ** 3\` | \`8\` |

## Division Details

Regular \`/\` always returns float:
\`\`\`python
print(10 / 2)
\`\`\`
>>> 5.0

Floor \`//\` rounds down:
\`\`\`python
print(10 // 3)
\`\`\`
>>> 3

Modulo \`%\` gives remainder:
\`\`\`python
print(10 % 3)
\`\`\`
>>> 1

## Order of Operations (PEMDAS)

\`\`\`python
print(2 + 3 * 4)     # Multiplication first
print((2 + 3) * 4)   # Parentheses first
\`\`\`
>>> 14
>>> 20

## Augmented Assignment

\`\`\`python
x = 10
x += 5   # x = 15
x *= 2   # x = 30
x -= 6   # x = 24
print(x)
\`\`\`
>>> 24

## Built-in Math Functions

\`\`\`python
print(abs(-42))
print(round(3.14159, 2))
print(min(3, 1, 4))
print(max(3, 1, 4))
\`\`\`
>>> 42
>>> 3.14
>>> 1
>>> 4

## The math Module

\`\`\`python
import math
print(math.sqrt(16))
print(math.pi)
\`\`\`
>>> 4.0
>>> 3.141592653589793

## Common Mistakes

⚠️ \`10 / 3\` gives \`3.333...\` not \`3\` — use \`//\` for integer division.

⚠️ \`x / 0\` raises \`ZeroDivisionError\`.

💡 Use parentheses when in doubt about operator precedence.`,
        exercises: [
          {
            id: 'num-1',
            title: 'Basic Arithmetic',
            description: 'Perform math operations.',
            instructions: ['Print 15 + 27', 'Print 100 - 37', 'Print 8 * 6'],
            starterCode: '',
            solution: 'print(15 + 27)\nprint(100 - 37)\nprint(8 * 6)',
            hint: 'Use print() with math expressions.',
            expectedOutput: '42\n63\n48',
          },
          {
            id: 'num-2',
            title: 'Floor Division & Modulo',
            description: 'Use // and % operators.',
            instructions: ['Print 17 // 5', 'Print 17 % 5'],
            starterCode: '',
            solution: 'print(17 // 5)\nprint(17 % 5)',
            hint: '// gives quotient, % gives remainder.',
            expectedOutput: '3\n2',
          },
          {
            id: 'num-3',
            title: 'Exponents',
            description: 'Use the ** operator.',
            instructions: ['Print 2 ** 10', 'Print 144 ** 0.5'],
            starterCode: '',
            solution: 'print(2 ** 10)\nprint(144 ** 0.5)',
            hint: '** raises to a power; 0.5 = square root.',
            expectedOutput: '1024\n12.0',
          },
          {
            id: 'num-4',
            title: 'Augmented Assignment',
            description: 'Use shorthand operators.',
            instructions: ['Start with score = 0', 'Add 10 (+=), multiply by 3 (*=), subtract 5 (-=)', 'Print the result'],
            starterCode: '',
            solution: 'score = 0\nscore += 10\nscore *= 3\nscore -= 5\nprint(score)',
            hint: 'Apply operators in order: 0+10=10, 10*3=30, 30-5=25.',
            expectedOutput: '25',
          },
          {
            id: 'num-5',
            title: 'Built-in Math',
            description: 'Use abs, round, min, max.',
            instructions: ['Print abs(-15)', 'Print round(3.14159, 2)', 'Print min(5,2,8,1,9)', 'Print max(5,2,8,1,9)'],
            starterCode: '',
            solution: 'print(abs(-15))\nprint(round(3.14159, 2))\nprint(min(5, 2, 8, 1, 9))\nprint(max(5, 2, 8, 1, 9))',
            hint: 'These are all built-in functions.',
            expectedOutput: '15\n3.14\n1\n9',
          }
        ],
      },
      {
        id: 'strings-basics',
        number: 7,
        title: 'String Basics',
        description: 'Work with text data in Python.',
        icon: 'Type',
        type: 'exercises',
        lesson: `Strings are sequences of characters — they represent **text** in Python.

## Creating Strings

Use single or double quotes:
\`\`\`python
name = "Alice"
greeting = 'Hello!'
empty = ""
print(name, greeting)
\`\`\`
>>> Alice Hello!

## Multi-line Strings

Use triple quotes:
\`\`\`python
message = """This is
a multi-line
string"""
print(message)
\`\`\`
>>> This is
>>> a multi-line
>>> string

## String Length

Use \`len()\`:
\`\`\`python
word = "Python"
print(len(word))
\`\`\`
>>> 6

## String Concatenation

Join strings with \`+\`:
\`\`\`python
first = "Hello"
second = "World"
result = first + " " + second
print(result)
\`\`\`
>>> Hello World

⚠️ You can only concatenate strings with strings: \`"age: " + 25\` fails. Use \`str(25)\` first.

## String Repetition

Repeat with \`*\`:
\`\`\`python
print("Ha" * 3)
print("-" * 20)
\`\`\`
>>> HaHaHa
>>> --------------------

## Checking Substrings

Use \`in\` and \`not in\`:
\`\`\`python
print("Py" in "Python")
print("Java" in "Python")
\`\`\`
>>> True
>>> False

## String Comparison

Strings compare alphabetically:
\`\`\`python
print("apple" < "banana")
print("abc" == "abc")
\`\`\`
>>> True
>>> True

## Common Escape Characters

- \`\\n\` — newline
- \`\\t\` — tab
- \`\\\\\` — backslash
- \`\\'\` — single quote
- \`\\"\` — double quote

## Common Mistakes

⚠️ Mixing quotes: \`"hello'\` — must match opening and closing quotes.

⚠️ Concatenating string + number: use \`str()\` to convert the number first.

💡 Use \`len()\` to check string length before operations.`,
        exercises: [
          {
            id: 'sb-1',
            title: 'Create Strings',
            description: 'Create and print strings.',
            instructions: ['Create greeting = \'Hello, Python!\'', 'Print it and its length'],
            starterCode: '',
            solution: 'greeting = \'Hello, Python!\'\nprint(greeting)\nprint(len(greeting))',
            hint: 'Use len() to get the length.',
            expectedOutput: 'Hello, Python!\n14',
          },
          {
            id: 'sb-2',
            title: 'Concatenation',
            description: 'Join strings together.',
            instructions: ['Create first = \'Hello\' and second = \'World\'', 'Join them with a space and print'],
            starterCode: '',
            solution: 'first = \'Hello\'\nsecond = \'World\'\nprint(first + \' \' + second)',
            hint: 'Use + to join strings. Add \' \' for the space.',
            expectedOutput: 'Hello World',
          },
          {
            id: 'sb-3',
            title: 'Repetition',
            description: 'Repeat strings with *.',
            instructions: ['Print \'Ha\' repeated 4 times', 'Print a line of 30 dashes'],
            starterCode: '',
            solution: 'print(\'Ha\' * 4)\nprint(\'-\' * 30)',
            hint: 'Use * with a number to repeat.',
            expectedOutput: 'HaHaHaHa\n------------------------------',
          },
          {
            id: 'sb-4',
            title: 'String Membership',
            description: 'Check if text contains a substring.',
            instructions: ['Check if \'thon\' is in \'Python\' and print the result', 'Check if \'Java\' is in \'Python\' and print the result'],
            starterCode: '',
            solution: 'print(\'thon\' in \'Python\')\nprint(\'Java\' in \'Python\')',
            hint: 'Use the \'in\' keyword.',
            expectedOutput: 'True\nFalse',
          },
          {
            id: 'sb-5',
            title: 'Multi-line Strings',
            description: 'Create strings spanning multiple lines.',
            instructions: ['Create a multi-line string with triple quotes containing:', 'Line 1: Hello', 'Line 2: World', 'Print it'],
            starterCode: '',
            solution: 'msg = """Hello\nWorld"""\nprint(msg)',
            hint: 'Use triple quotes for multi-line strings.',
            expectedOutput: 'Hello\nWorld',
          }
        ],
      },
      {
        id: 'string-methods',
        number: 8,
        title: 'String Methods',
        description: 'Transform and analyze text with built-in methods.',
        icon: 'Wand2',
        type: 'exercises',
        lesson: `Strings come with dozens of built-in **methods** — functions you call on a string to transform or analyze it.

## Case Methods

\`\`\`python
text = "Hello World"
print(text.upper())
print(text.lower())
print(text.title())
print(text.capitalize())
print(text.swapcase())
\`\`\`
>>> HELLO WORLD
>>> hello world
>>> Hello World
>>> Hello world
>>> hELLO wORLD

## Searching

\`\`\`python
text = "Hello World"
print(text.find("World"))    # Index where found
print(text.find("Python"))   # -1 if not found
print(text.count("l"))       # Count occurrences
print(text.startswith("He"))
print(text.endswith("ld"))
\`\`\`
>>> 6
>>> -1
>>> 3
>>> True
>>> True

## Replacing

\`\`\`python
text = "Hello World"
print(text.replace("World", "Python"))
\`\`\`
>>> Hello Python

## Stripping Whitespace

\`\`\`python
text = "  Hello  "
print(text.strip())     # Both sides
print(text.lstrip())    # Left only
print(text.rstrip())    # Right only
\`\`\`
>>> Hello
>>> Hello  
>>>   Hello

## Splitting and Joining

\`\`\`python
sentence = "one two three"
words = sentence.split()
print(words)

joined = "-".join(words)
print(joined)
\`\`\`
>>> ['one', 'two', 'three']
>>> one-two-three

Split by a specific character:
\`\`\`python
date = "2024-01-15"
parts = date.split("-")
print(parts)
\`\`\`
>>> ['2024', '01', '15']

## Checking Content

\`\`\`python
print("hello123".isalnum())    # Letters and numbers only
print("hello".isalpha())       # Letters only
print("123".isdigit())         # Digits only
print("  ".isspace())          # Whitespace only
\`\`\`
>>> True
>>> True
>>> True
>>> True

💡 All string methods return a NEW string — they never modify the original.

⚠️ \`find()\` returns -1 if not found, while \`index()\` raises an error.`,
        exercises: [
          {
            id: 'sm-1',
            title: 'Case Conversion',
            description: 'Convert string case.',
            instructions: ['Create text = \'hello world\'', 'Print it in uppercase and title case'],
            starterCode: '',
            solution: 'text = \'hello world\'\nprint(text.upper())\nprint(text.title())',
            hint: 'Use .upper() and .title() methods.',
            expectedOutput: 'HELLO WORLD\nHello World',
          },
          {
            id: 'sm-2',
            title: 'Find and Replace',
            description: 'Search and replace in strings.',
            instructions: ['Create msg = \'I like Java\'', 'Replace \'Java\' with \'Python\' and print'],
            starterCode: '',
            solution: 'msg = \'I like Java\'\nprint(msg.replace(\'Java\', \'Python\'))',
            hint: 'Use .replace(old, new).',
            expectedOutput: 'I like Python',
          },
          {
            id: 'sm-3',
            title: 'Strip Whitespace',
            description: 'Remove extra spaces.',
            instructions: ['Create text = \'  Hello, World!  \'', 'Print the stripped version'],
            starterCode: '',
            solution: 'text = \'  Hello, World!  \'\nprint(text.strip())',
            hint: 'Use .strip() to remove leading and trailing spaces.',
            expectedOutput: 'Hello, World!',
          },
          {
            id: 'sm-4',
            title: 'Split a String',
            description: 'Break a string into parts.',
            instructions: ['Split \'apple,banana,cherry\' by commas', 'Print the resulting list'],
            starterCode: '',
            solution: 'print(\'apple,banana,cherry\'.split(\',\'))',
            hint: 'Use .split(\',\') to split by commas.',
            expectedOutput: '[\'apple\', \'banana\', \'cherry\']',
          },
          {
            id: 'sm-5',
            title: 'Join Strings',
            description: 'Combine a list into a string.',
            instructions: ['Create words = [\'Hello\', \'World\']', 'Join with a space and print'],
            starterCode: '',
            solution: 'words = [\'Hello\', \'World\']\nprint(\' \'.join(words))',
            hint: 'Use \' \'.join(list) to combine.',
            expectedOutput: 'Hello World',
          }
        ],
      },
      {
        id: 'string-fmt',
        number: 9,
        title: 'String Formatting',
        description: 'Build dynamic strings with variables and expressions.',
        icon: 'AlignLeft',
        type: 'exercises',
        lesson: `String formatting lets you embed variables and expressions inside strings. Python offers several ways to do this.

## f-strings (Recommended — Python 3.6+)

Prefix the string with \`f\` and use \`{variable}\` inside:

\`\`\`python
name = "Alice"
age = 25
print(f"My name is {name} and I am {age} years old")
\`\`\`
>>> My name is Alice and I am 25 years old

You can put **any expression** inside the braces:
\`\`\`python
print(f"2 + 3 = {2 + 3}")
print(f"Name uppercase: {'alice'.upper()}")
\`\`\`
>>> 2 + 3 = 5
>>> Name uppercase: ALICE

## Formatting Numbers

\`\`\`python
pi = 3.14159
print(f"Pi is {pi:.2f}")          # 2 decimal places
print(f"Big: {1000000:,}")        # Thousands separator
print(f"Percent: {0.85:.1%}")     # Percentage
print(f"Padded: {42:05d}")        # Zero-padded
\`\`\`
>>> Pi is 3.14
>>> Big: 1,000,000
>>> Percent: 85.0%
>>> Padded: 00042

## .format() Method

\`\`\`python
print("Hello, {}!".format("World"))
print("{} is {} years old".format("Alice", 25))
print("{name} is {age}".format(name="Bob", age=30))
\`\`\`
>>> Hello, World!
>>> Alice is 25 years old
>>> Bob is 30

## % Operator (Old Style)

\`\`\`python
print("Hello, %s!" % "World")
print("%s is %d years old" % ("Alice", 25))
\`\`\`
>>> Hello, World!
>>> Alice is 25 years old

💡 f-strings are the most readable and modern approach — use them by default.

⚠️ Don't forget the \`f\` prefix: \`"{name}"\` prints literally \`{name}\`, not the variable value.

💡 f-strings can contain any valid Python expression: \`f"{len('hello')}"\` works.`,
        exercises: [
          {
            id: 'sf-1',
            title: 'Basic f-string',
            description: 'Use f-strings with variables.',
            instructions: ['Create name=\'Python\' and version=3', 'Print \'I love Python 3\' using an f-string'],
            starterCode: '',
            solution: 'name = \'Python\'\nversion = 3\nprint(f\'I love {name} {version}\')',
            hint: 'Use f\'text {variable}\' syntax.',
            expectedOutput: 'I love Python 3',
          },
          {
            id: 'sf-2',
            title: 'Expressions in f-strings',
            description: 'Embed calculations in strings.',
            instructions: ['Print \'The sum of 7 and 8 is 15\' using an f-string with a calculation'],
            starterCode: '',
            solution: 'print(f\'The sum of 7 and 8 is {7 + 8}\')',
            hint: 'Put the expression inside {} in the f-string.',
            expectedOutput: 'The sum of 7 and 8 is 15',
          },
          {
            id: 'sf-3',
            title: 'Format Decimals',
            description: 'Control decimal places.',
            instructions: ['Set pi = 3.14159', 'Print it rounded to 2 decimal places using f-string formatting'],
            starterCode: '',
            solution: 'pi = 3.14159\nprint(f\'Pi is {pi:.2f}\')',
            hint: 'Use :.2f inside the braces for 2 decimal places.',
            expectedOutput: 'Pi is 3.14',
          },
          {
            id: 'sf-4',
            title: 'Format with .format()',
            description: 'Use the .format() method.',
            instructions: ['Print \'Hello, Alice!\' using .format()'],
            starterCode: '',
            solution: 'print(\'Hello, {}!\'.format(\'Alice\'))',
            hint: 'Use {} as placeholder and .format(value).',
            expectedOutput: 'Hello, Alice!',
          },
          {
            id: 'sf-5',
            title: 'Number Formatting',
            description: 'Format large numbers.',
            instructions: ['Set n = 1234567', 'Print it with comma separators using f-string'],
            starterCode: '',
            solution: 'n = 1234567\nprint(f\'{n:,}\')',
            hint: 'Use :, inside the braces.',
            expectedOutput: '1,234,567',
          }
        ],
      },
      {
        id: 'string-idx',
        number: 10,
        title: 'String Indexing & Slicing',
        description: 'Access individual characters and substrings.',
        icon: 'Scissors',
        type: 'exercises',
        lesson: `Strings are **sequences** — each character has a position (index) starting from 0.

## Indexing

\`\`\`python
text = "Python"
print(text[0])   # First character
print(text[1])   # Second character
print(text[-1])  # Last character
print(text[-2])  # Second to last
\`\`\`
>>> P
>>> y
>>> n
>>> o

## Slicing

Extract a substring with \`[start:end]\` (end is exclusive):

\`\`\`python
text = "Python"
print(text[0:3])   # Characters 0, 1, 2
print(text[2:5])   # Characters 2, 3, 4
print(text[:3])    # From start to 3
print(text[3:])    # From 3 to end
print(text[:])     # Full copy
\`\`\`
>>> Pyt
>>> tho
>>> Pyt
>>> hon
>>> Python

## Step (Stride)

Add a third value \`[start:end:step]\`:

\`\`\`python
text = "Python"
print(text[::2])    # Every 2nd character
print(text[::-1])   # Reverse the string
\`\`\`
>>> Pto
>>> nohtyP

## Strings Are Immutable

You **cannot** change individual characters:
\`\`\`python
text = "Python"
# text[0] = "J"  # TypeError!
# Instead, create a new string:
text = "J" + text[1:]
print(text)
\`\`\`
>>> Jython

## Practical Examples

\`\`\`python
email = "user@example.com"
username = email[:email.find("@")]
domain = email[email.find("@")+1:]
print(username)
print(domain)
\`\`\`
>>> user
>>> example.com

⚠️ Indexing past the string length raises \`IndexError\`, but slicing does not.

💡 Negative indices count from the end: \`-1\` is the last character.`,
        exercises: [
          {
            id: 'si-1',
            title: 'Basic Indexing',
            description: 'Access characters by position.',
            instructions: ['Create word = \'Python\'', 'Print the first and last character'],
            starterCode: '',
            solution: 'word = \'Python\'\nprint(word[0])\nprint(word[-1])',
            hint: 'Use [0] for first and [-1] for last.',
            expectedOutput: 'P\nn',
          },
          {
            id: 'si-2',
            title: 'Basic Slicing',
            description: 'Extract substrings.',
            instructions: ['Create text = \'Hello, World!\'', 'Print the first 5 characters'],
            starterCode: '',
            solution: 'text = \'Hello, World!\'\nprint(text[:5])',
            hint: 'Use [:5] to get characters 0 through 4.',
            expectedOutput: 'Hello',
          },
          {
            id: 'si-3',
            title: 'Reverse a String',
            description: 'Use slicing to reverse.',
            instructions: ['Reverse the string \'Python\' using slicing and print it'],
            starterCode: '',
            solution: 'print(\'Python\'[::-1])',
            hint: 'Use [::-1] to reverse.',
            expectedOutput: 'nohtyP',
          },
          {
            id: 'si-4',
            title: 'Every Other Character',
            description: 'Use step in slicing.',
            instructions: ['Print every other character of \'abcdefgh\''],
            starterCode: '',
            solution: 'print(\'abcdefgh\'[::2])',
            hint: 'Use [::2] for every 2nd character.',
            expectedOutput: 'aceg',
          },
          {
            id: 'si-5',
            title: 'Extract Domain',
            description: 'Slice to get parts of a string.',
            instructions: ['Create email = \'user@example.com\'', 'Extract and print the domain (after @)'],
            starterCode: '',
            solution: 'email = \'user@example.com\'\nprint(email[email.find(\'@\')+1:])',
            hint: 'Find @ position, then slice from there +1 to end.',
            expectedOutput: 'example.com',
          }
        ],
      },
      {
        id: 'input',
        number: 11,
        title: 'User Input & Casting',
        description: 'Read input from users and convert data types.',
        icon: 'Keyboard',
        type: 'exercises',
        lesson: `The \`input()\` function lets your program ask the user for information.

## Basic Input

\`\`\`python
name = input("What is your name? ")
print("Hello,", name)
\`\`\`
>>> What is your name? Alice
>>> Hello, Alice

\`input()\` always returns a **string**, even if the user types a number.

## Converting Input

Since \`input()\` returns a string, convert for math:

\`\`\`python
age = int(input("Enter your age: "))
print("Next year you'll be", age + 1)
\`\`\`
>>> Enter your age: 25
>>> Next year you'll be 26

\`\`\`python
price = float(input("Enter price: "))
tax = price * 0.08
print(f"Tax: \${tax:.2f}")
\`\`\`

## Multiple Inputs

\`\`\`python
first = input("First name: ")
last = input("Last name: ")
print(f"Full name: {first} {last}")
\`\`\`

## Input on One Line with split()

\`\`\`python
x, y = input("Enter two numbers: ").split()
x, y = int(x), int(y)
print(f"Sum: {x + y}")
\`\`\`

## Common Patterns

Validate input type:
\`\`\`python
text = input("Enter a number: ")
if text.isdigit():
    number = int(text)
    print(f"Your number: {number}")
else:
    print("That's not a valid number!")
\`\`\`

## Common Mistakes

⚠️ Forgetting to convert: \`int(input(...))\` not just \`input(...)\` for math.

⚠️ \`int("3.14")\` fails — use \`float()\` for decimals, then \`int()\` if needed.

💡 Always strip input: \`input().strip()\` removes accidental whitespace.`,
        exercises: [
          {
            id: 'inp-1',
            title: 'Simple Input',
            description: 'Read and use user input.',
            instructions: ['Ask \'Enter your name: \' and store in a variable', 'Print \'Hello, [name]!\''],
            starterCode: '',
            solution: 'name = input(\'Enter your name: \')\nprint(f\'Hello, {name}!\')',
            hint: 'Use input() with a prompt string.',
            expectedOutputContains: ['Hello,'],
          },
          {
            id: 'inp-2',
            title: 'Numeric Input',
            description: 'Convert input to numbers.',
            instructions: ['Ask \'Enter a number: \' and convert to int', 'Print the number doubled'],
            starterCode: '',
            solution: 'num = int(input(\'Enter a number: \'))\nprint(num * 2)',
            hint: 'Wrap input() with int() to convert.',
            expectedOutput: '',
          },
          {
            id: 'inp-3',
            title: 'Float Input',
            description: 'Work with decimal input.',
            instructions: ['Ask for a temperature in Celsius', 'Convert to Fahrenheit (C * 9/5 + 32) and print'],
            starterCode: '',
            solution: 'c = float(input(\'Temperature in Celsius: \'))\nf = c * 9/5 + 32\nprint(f)',
            hint: 'Use float() to convert and apply the formula.',
            expectedOutput: '',
          },
          {
            id: 'inp-4',
            title: 'Multiple Inputs',
            description: 'Get several pieces of data.',
            instructions: ['Ask for first name and last name separately', 'Print full name'],
            starterCode: '',
            solution: 'first = input(\'First name: \')\nlast = input(\'Last name: \')\nprint(first + \' \' + last)',
            hint: 'Use input() twice and concatenate.',
            expectedOutput: '',
          },
          {
            id: 'inp-5',
            title: 'Input Validation',
            description: 'Check if input is valid.',
            instructions: ['Ask \'Enter a number: \'', 'If it\'s all digits, print the int version', 'Otherwise print \'Not a number\''],
            starterCode: '',
            solution: 'text = input(\'Enter a number: \')\nif text.isdigit():\n    print(int(text))\nelse:\n    print(\'Not a number\')',
            hint: 'Use .isdigit() to check if the string is numeric.',
            expectedOutput: '',
          }
        ],
      },
      {
        id: 'booleans',
        number: 12,
        title: 'Boolean Logic',
        description: 'Work with True/False values and logical operators.',
        icon: 'ToggleLeft',
        type: 'exercises',
        lesson: `Booleans represent one of two values: \`True\` or \`False\`. They're the foundation of all decision-making in code.

## Boolean Values

\`\`\`python
is_active = True
is_done = False
print(is_active, is_done)
print(type(True))
\`\`\`
>>> True False
>>> <class 'bool'>

## Comparison Operators

These produce boolean results:

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| \`==\` | Equal | \`5 == 5\` | \`True\` |
| \`!=\` | Not equal | \`5 != 3\` | \`True\` |
| \`<\` | Less than | \`3 < 5\` | \`True\` |
| \`>\` | Greater than | \`5 > 3\` | \`True\` |
| \`<=\` | Less or equal | \`5 <= 5\` | \`True\` |
| \`>=\` | Greater or equal | \`3 >= 5\` | \`False\` |

\`\`\`python
print(10 == 10)
print(10 != 5)
print(3 > 7)
\`\`\`
>>> True
>>> True
>>> False

## Logical Operators

Combine boolean values:

\`\`\`python
print(True and True)    # Both must be True
print(True and False)
print(True or False)    # At least one True
print(False or False)
print(not True)         # Flip the value
print(not False)
\`\`\`
>>> True
>>> False
>>> True
>>> False
>>> False
>>> True

## Practical Example

\`\`\`python
age = 20
has_id = True
can_enter = age >= 18 and has_id
print(f"Can enter: {can_enter}")
\`\`\`
>>> Can enter: True

## Truthiness

All values have a boolean interpretation:
- **Falsy**: \`False\`, \`0\`, \`0.0\`, \`""\`, \`None\`, \`[]\`, \`{}\`
- **Truthy**: everything else

\`\`\`python
print(bool(0))
print(bool(42))
print(bool(""))
print(bool("hi"))
\`\`\`
>>> False
>>> True
>>> False
>>> True

## Short-Circuit Evaluation

\`and\` and \`or\` stop as soon as the result is known:
\`\`\`python
print(False and print("skipped"))   # Second part never runs
print(True or print("skipped"))     # Second part never runs
\`\`\`
>>> False
>>> True

⚠️ \`=\` assigns, \`==\` compares — don't mix them up!

⚠️ \`True\` and \`False\` are capitalized — \`true\` and \`false\` cause NameError.`,
        exercises: [
          {
            id: 'bool-1',
            title: 'Comparisons',
            description: 'Use comparison operators.',
            instructions: ['Print whether 10 == 10', 'Print whether 5 > 8', 'Print whether 3 != 4'],
            starterCode: '',
            solution: 'print(10 == 10)\nprint(5 > 8)\nprint(3 != 4)',
            hint: 'Use ==, >, != operators.',
            expectedOutput: 'True\nFalse\nTrue',
          },
          {
            id: 'bool-2',
            title: 'Logical AND',
            description: 'Combine conditions with and.',
            instructions: ['Set age = 20 and has_ticket = True', 'Print whether both age >= 18 AND has_ticket'],
            starterCode: '',
            solution: 'age = 20\nhas_ticket = True\nprint(age >= 18 and has_ticket)',
            hint: 'Use \'and\' between two conditions.',
            expectedOutput: 'True',
          },
          {
            id: 'bool-3',
            title: 'Logical OR',
            description: 'Combine conditions with or.',
            instructions: ['Set is_member = False and has_coupon = True', 'Print whether either is True'],
            starterCode: '',
            solution: 'is_member = False\nhas_coupon = True\nprint(is_member or has_coupon)',
            hint: 'Use \'or\' between conditions.',
            expectedOutput: 'True',
          },
          {
            id: 'bool-4',
            title: 'Logical NOT',
            description: 'Negate a boolean.',
            instructions: ['Set is_raining = True', 'Print the opposite using not'],
            starterCode: '',
            solution: 'is_raining = True\nprint(not is_raining)',
            hint: 'Use \'not\' before the value.',
            expectedOutput: 'False',
          },
          {
            id: 'bool-5',
            title: 'Complex Logic',
            description: 'Combine multiple operators.',
            instructions: ['Set x = 15', 'Print whether x is between 10 and 20 (inclusive) using \'and\''],
            starterCode: '',
            solution: 'x = 15\nprint(x >= 10 and x <= 20)',
            hint: 'Check x >= 10 and x <= 20.',
            expectedOutput: 'True',
          }
        ],
      },
      {
        id: 'conditionals',
        number: 13,
        title: 'Conditional Branching',
        description: 'Make decisions in your code with if/elif/else.',
        icon: 'GitBranch',
        type: 'exercises',
        lesson: `Conditionals let your program make **decisions** — run different code based on different situations.

## if Statement

\`\`\`python
age = 20
if age >= 18:
    print("You are an adult")
\`\`\`
>>> You are an adult

The indented code only runs if the condition is \`True\`.

## if/else

\`\`\`python
temperature = 35
if temperature > 30:
    print("It's hot!")
else:
    print("It's nice")
\`\`\`
>>> It's hot!

## if/elif/else

Check multiple conditions in order:

\`\`\`python
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"
print(f"Grade: {grade}")
\`\`\`
>>> Grade: B

💡 Python checks conditions **top to bottom** and runs the **first** matching block.

## Nested Conditionals

\`\`\`python
age = 20
has_id = True
if age >= 18:
    if has_id:
        print("Welcome!")
    else:
        print("Need ID")
else:
    print("Too young")
\`\`\`
>>> Welcome!

## Conditional Expressions (Ternary)

One-line if/else:

\`\`\`python
age = 20
status = "adult" if age >= 18 else "minor"
print(status)
\`\`\`
>>> adult

## Multiple Conditions

\`\`\`python
x = 15
if x > 10 and x < 20:
    print("Between 10 and 20")
\`\`\`
>>> Between 10 and 20

## Common Mistakes

⚠️ Don't forget the colon \`:\` after the condition.

⚠️ Indentation matters! The indented block is what's controlled by the \`if\`.

⚠️ Use \`==\` for comparison, not \`=\` (assignment).

💡 Keep conditions simple. If they're complex, store them in a descriptive variable.`,
        exercises: [
          {
            id: 'cond-1',
            title: 'Simple if',
            description: 'Write a basic if statement.',
            instructions: ['Set x = 10', 'If x > 5, print \'Big number\''],
            starterCode: '',
            solution: 'x = 10\nif x > 5:\n    print(\'Big number\')',
            hint: 'Use if with a condition followed by indented code.',
            expectedOutput: 'Big number',
          },
          {
            id: 'cond-2',
            title: 'if/else',
            description: 'Add an alternative branch.',
            instructions: ['Set n = 7', 'If n is even print \'Even\', otherwise print \'Odd\''],
            starterCode: '',
            solution: 'n = 7\nif n % 2 == 0:\n    print(\'Even\')\nelse:\n    print(\'Odd\')',
            hint: 'Use % 2 == 0 to check if even.',
            expectedOutput: 'Odd',
          },
          {
            id: 'cond-3',
            title: 'if/elif/else',
            description: 'Handle multiple conditions.',
            instructions: ['Set score = 75', 'Print \'A\' if >= 90, \'B\' if >= 80, \'C\' if >= 70, else \'F\''],
            starterCode: '',
            solution: 'score = 75\nif score >= 90:\n    print(\'A\')\nelif score >= 80:\n    print(\'B\')\nelif score >= 70:\n    print(\'C\')\nelse:\n    print(\'F\')',
            hint: 'Use elif for additional conditions.',
            expectedOutput: 'C',
          },
          {
            id: 'cond-4',
            title: 'Ternary Expression',
            description: 'Use a one-line conditional.',
            instructions: ['Set age = 16', 'Use a ternary to set status to \'adult\' if age >= 18 else \'minor\'', 'Print status'],
            starterCode: '',
            solution: 'age = 16\nstatus = \'adult\' if age >= 18 else \'minor\'\nprint(status)',
            hint: 'Use: value_if_true if condition else value_if_false.',
            expectedOutput: 'minor',
          },
          {
            id: 'cond-5',
            title: 'Combined Conditions',
            description: 'Use and/or in conditions.',
            instructions: ['Set temp = 25', 'If temp >= 20 and temp <= 30, print \'Perfect weather\'', 'Otherwise print \'Not ideal\''],
            starterCode: '',
            solution: 'temp = 25\nif temp >= 20 and temp <= 30:\n    print(\'Perfect weather\')\nelse:\n    print(\'Not ideal\')',
            hint: 'Use \'and\' to combine conditions.',
            expectedOutput: 'Perfect weather',
          }
        ],
      },
      {
        id: 'while',
        number: 14,
        title: 'While Loops',
        description: 'Repeat actions while a condition is true.',
        icon: 'RefreshCw',
        type: 'exercises',
        lesson: `A \`while\` loop repeats a block of code **as long as a condition is True**.

## Basic While Loop

\`\`\`python
count = 0
while count < 5:
    print(count)
    count += 1
\`\`\`
>>> 0
>>> 1
>>> 2
>>> 3
>>> 4

## How It Works

1. Check the condition
2. If True, run the indented block
3. Go back to step 1
4. If False, skip the block and continue

## Counting Patterns

Count up:
\`\`\`python
i = 1
while i <= 3:
    print(f"Step {i}")
    i += 1
\`\`\`
>>> Step 1
>>> Step 2
>>> Step 3

Count down:
\`\`\`python
n = 3
while n > 0:
    print(n)
    n -= 1
print("Go!")
\`\`\`
>>> 3
>>> 2
>>> 1
>>> Go!

## Accumulator Pattern

\`\`\`python
total = 0
i = 1
while i <= 5:
    total += i
    i += 1
print(f"Sum: {total}")
\`\`\`
>>> Sum: 15

## while with else

The \`else\` block runs when the condition becomes False (not on \`break\`):

\`\`\`python
i = 0
while i < 3:
    print(i)
    i += 1
else:
    print("Done!")
\`\`\`
>>> 0
>>> 1
>>> 2
>>> Done!

## Infinite Loops

⚠️ If the condition never becomes False, the loop runs forever:

\`\`\`python
# DON'T DO THIS:
# while True:
#     print("forever")
\`\`\`

Always make sure something changes to eventually make the condition False.

💡 Use \`while True\` with \`break\` for input validation loops.

⚠️ Don't forget to update the loop variable (e.g., \`count += 1\`) or you'll loop forever.`,
        exercises: [
          {
            id: 'while-1',
            title: 'Count to 5',
            description: 'Write a basic counting loop.',
            instructions: ['Use a while loop to print numbers 1 through 5'],
            starterCode: '',
            solution: 'i = 1\nwhile i <= 5:\n    print(i)\n    i += 1',
            hint: 'Start i at 1, loop while i <= 5, increment each time.',
            expectedOutput: '1\n2\n3\n4\n5',
          },
          {
            id: 'while-2',
            title: 'Countdown',
            description: 'Count backwards.',
            instructions: ['Count down from 5 to 1 using a while loop', 'Print \'Blast off!\' after the loop'],
            starterCode: '',
            solution: 'n = 5\nwhile n >= 1:\n    print(n)\n    n -= 1\nprint(\'Blast off!\')',
            hint: 'Start high, decrement each iteration.',
            expectedOutput: '5\n4\n3\n2\n1\nBlast off!',
          },
          {
            id: 'while-3',
            title: 'Sum Calculator',
            description: 'Accumulate a total.',
            instructions: ['Sum numbers from 1 to 10 using a while loop', 'Print the result'],
            starterCode: '',
            solution: 'total = 0\ni = 1\nwhile i <= 10:\n    total += i\n    i += 1\nprint(total)',
            hint: 'Add each number to a running total.',
            expectedOutput: '55',
          },
          {
            id: 'while-4',
            title: 'Power of 2',
            description: 'Double until a limit.',
            instructions: ['Start with n = 1', 'Double n while it\'s less than 100', 'Print each value'],
            starterCode: '',
            solution: 'n = 1\nwhile n < 100:\n    print(n)\n    n *= 2',
            hint: 'Multiply n by 2 each iteration.',
            expectedOutput: '1\n2\n4\n8\n16\n32\n64',
          },
          {
            id: 'while-5',
            title: 'While with Condition',
            description: 'Use a meaningful condition.',
            instructions: ['Start with text = \'Python\'', 'Print and remove the last character while len > 0'],
            starterCode: '',
            solution: 'text = \'Python\'\nwhile len(text) > 0:\n    print(text)\n    text = text[:-1]',
            hint: 'Use slicing [:-1] to remove the last character.',
            expectedOutput: 'Python\nPytho\nPyth\nPyt\nPy\nP',
          }
        ],
      },
      {
        id: 'for',
        number: 15,
        title: 'For Loops',
        description: 'Iterate over sequences and ranges.',
        icon: 'Repeat',
        type: 'exercises',
        lesson: `A \`for\` loop iterates over a **sequence** (list, string, range, etc.), running code once for each item.

## Basic For Loop

\`\`\`python
for letter in "Python":
    print(letter)
\`\`\`
>>> P
>>> y
>>> t
>>> h
>>> o
>>> n

## Using range()

\`range()\` generates a sequence of numbers:

\`\`\`python
for i in range(5):    # 0, 1, 2, 3, 4
    print(i)
\`\`\`
>>> 0
>>> 1
>>> 2
>>> 3
>>> 4

Range with start, stop, step:
\`\`\`python
for i in range(1, 6):       # 1 to 5
    print(i, end=" ")
print()
for i in range(0, 10, 2):   # Even numbers
    print(i, end=" ")
\`\`\`
>>> 1 2 3 4 5
>>> 0 2 4 6 8

## Iterating Over Lists

\`\`\`python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")
\`\`\`
>>> I like apple
>>> I like banana
>>> I like cherry

## enumerate() — Get Index and Value

\`\`\`python
colors = ["red", "green", "blue"]
for i, color in enumerate(colors):
    print(f"{i}: {color}")
\`\`\`
>>> 0: red
>>> 1: green
>>> 2: blue

## Nested For Loops

\`\`\`python
for i in range(3):
    for j in range(3):
        print(f"({i},{j})", end=" ")
    print()
\`\`\`
>>> (0,0) (0,1) (0,2)
>>> (1,0) (1,1) (1,2)
>>> (2,0) (2,1) (2,2)

## for with else

\`\`\`python
for n in range(2, 5):
    print(n)
else:
    print("Loop completed")
\`\`\`
>>> 2
>>> 3
>>> 4
>>> Loop completed

💡 Use \`for\` when you know how many iterations you need, \`while\` when you don't.

⚠️ Don't modify a list while iterating over it — iterate over a copy instead.`,
        exercises: [
          {
            id: 'for-1',
            title: 'Basic Range Loop',
            description: 'Loop with range().',
            instructions: ['Print numbers 1 to 5 using a for loop with range()'],
            starterCode: '',
            solution: 'for i in range(1, 6):\n    print(i)',
            hint: 'range(1, 6) gives 1, 2, 3, 4, 5.',
            expectedOutput: '1\n2\n3\n4\n5',
          },
          {
            id: 'for-2',
            title: 'Loop Over String',
            description: 'Iterate through characters.',
            instructions: ['Print each character of \'Hello\' on a separate line'],
            starterCode: '',
            solution: 'for ch in \'Hello\':\n    print(ch)',
            hint: 'A for loop iterates over each character.',
            expectedOutput: 'H\ne\nl\nl\no',
          },
          {
            id: 'for-3',
            title: 'Sum with For',
            description: 'Calculate a sum using a loop.',
            instructions: ['Sum all numbers from 1 to 100 using a for loop', 'Print the result'],
            starterCode: '',
            solution: 'total = 0\nfor i in range(1, 101):\n    total += i\nprint(total)',
            hint: 'Accumulate into a total variable.',
            expectedOutput: '5050',
          },
          {
            id: 'for-4',
            title: 'Enumerate',
            description: 'Get index and value.',
            instructions: ['Create fruits = [\'apple\', \'banana\', \'cherry\']', 'Print each with its index using enumerate'],
            starterCode: '',
            solution: 'fruits = [\'apple\', \'banana\', \'cherry\']\nfor i, fruit in enumerate(fruits):\n    print(f\'{i}: {fruit}\')',
            hint: 'enumerate() gives (index, value) pairs.',
            expectedOutput: '0: apple\n1: banana\n2: cherry',
          },
          {
            id: 'for-5',
            title: 'Range with Step',
            description: 'Use range with a step value.',
            instructions: ['Print even numbers from 0 to 10 (inclusive) using range with step 2'],
            starterCode: '',
            solution: 'for i in range(0, 11, 2):\n    print(i)',
            hint: 'range(start, stop, step) — use step=2.',
            expectedOutput: '0\n2\n4\n6\n8\n10',
          }
        ],
      },
      {
        id: 'loop-ctrl',
        number: 16,
        title: 'Loop Control',
        description: 'Control loop flow with break, continue, and pass.',
        icon: 'Sliders',
        type: 'exercises',
        lesson: `Python provides three statements to control loop behavior: \`break\`, \`continue\`, and \`pass\`.

## break — Exit the Loop

Immediately stops the loop:

\`\`\`python
for i in range(10):
    if i == 5:
        break
    print(i)
\`\`\`
>>> 0
>>> 1
>>> 2
>>> 3
>>> 4

## continue — Skip Current Iteration

Jumps to the next iteration:

\`\`\`python
for i in range(6):
    if i == 3:
        continue
    print(i)
\`\`\`
>>> 0
>>> 1
>>> 2
>>> 4
>>> 5

## pass — Do Nothing

A placeholder that does nothing (useful for empty blocks):

\`\`\`python
for i in range(5):
    if i == 3:
        pass  # TODO: handle this case
    print(i)
\`\`\`
>>> 0
>>> 1
>>> 2
>>> 3
>>> 4

## Finding Items with break

\`\`\`python
numbers = [4, 7, 2, 9, 1, 5]
for num in numbers:
    if num > 8:
        print(f"Found: {num}")
        break
\`\`\`
>>> Found: 9

## Skip Specific Values with continue

\`\`\`python
for i in range(1, 6):
    if i % 2 == 0:
        continue
    print(i)
\`\`\`
>>> 1
>>> 3
>>> 5

💡 \`break\` exits only the **innermost** loop in nested loops.

⚠️ Overusing \`break\` and \`continue\` can make code hard to follow. Consider restructuring if you have many.`,
        exercises: [
          {
            id: 'lc-1',
            title: 'Break on Condition',
            description: 'Stop a loop early.',
            instructions: ['Loop through range(1, 11)', 'Break when you reach 6', 'Print each number before breaking'],
            starterCode: '',
            solution: 'for i in range(1, 11):\n    if i == 6:\n        break\n    print(i)',
            hint: 'Use if and break inside the loop.',
            expectedOutput: '1\n2\n3\n4\n5',
          },
          {
            id: 'lc-2',
            title: 'Skip Even Numbers',
            description: 'Use continue to skip.',
            instructions: ['Print only odd numbers from 1 to 10 using continue'],
            starterCode: '',
            solution: 'for i in range(1, 11):\n    if i % 2 == 0:\n        continue\n    print(i)',
            hint: 'Use continue when i is even.',
            expectedOutput: '1\n3\n5\n7\n9',
          },
          {
            id: 'lc-3',
            title: 'Find First Match',
            description: 'Search with break.',
            instructions: ['Find the first number > 50 in [10, 30, 60, 20, 80]', 'Print it and stop'],
            starterCode: '',
            solution: 'nums = [10, 30, 60, 20, 80]\nfor n in nums:\n    if n > 50:\n        print(n)\n        break',
            hint: 'Check condition and break when found.',
            expectedOutput: '60',
          },
          {
            id: 'lc-4',
            title: 'Skip Specific Value',
            description: 'Skip one value with continue.',
            instructions: ['Print all numbers 1-5 except 3 using continue'],
            starterCode: '',
            solution: 'for i in range(1, 6):\n    if i == 3:\n        continue\n    print(i)',
            hint: 'Use continue when i == 3.',
            expectedOutput: '1\n2\n4\n5',
          },
          {
            id: 'lc-5',
            title: 'Break in While',
            description: 'Use break in a while loop.',
            instructions: ['Write a while True loop that prints numbers 1-5 then breaks'],
            starterCode: '',
            solution: 'i = 1\nwhile True:\n    print(i)\n    if i == 5:\n        break\n    i += 1',
            hint: 'Increment and break when reaching 5.',
            expectedOutput: '1\n2\n3\n4\n5',
          }
        ],
      },
      {
        id: 'errors',
        number: 17,
        title: 'Basic Error Handling',
        description: 'Handle errors gracefully with try/except.',
        icon: 'ShieldAlert',
        type: 'exercises',
        lesson: `Errors (exceptions) happen when Python can't execute your code. Instead of crashing, you can **catch** errors and handle them.

## Common Error Types

- \`SyntaxError\` — invalid Python syntax
- \`NameError\` — using an undefined variable
- \`TypeError\` — wrong type for an operation
- \`ValueError\` — right type but wrong value
- \`ZeroDivisionError\` — dividing by zero
- \`IndexError\` — index out of range

## try/except

\`\`\`python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
\`\`\`
>>> Cannot divide by zero!

## Catching Multiple Errors

\`\`\`python
try:
    num = int("abc")
except ValueError:
    print("Not a valid number!")
except TypeError:
    print("Wrong type!")
\`\`\`
>>> Not a valid number!

## Generic except

Catch any error (use sparingly):

\`\`\`python
try:
    x = 1 / 0
except Exception as e:
    print(f"Error: {e}")
\`\`\`
>>> Error: division by zero

## try/except/else/finally

\`\`\`python
try:
    result = 10 / 2
except ZeroDivisionError:
    print("Error!")
else:
    print(f"Result: {result}")  # Runs if NO error
finally:
    print("Done")               # ALWAYS runs
\`\`\`
>>> Result: 5.0
>>> Done

## Raising Errors

Create your own errors:
\`\`\`python
age = -5
if age < 0:
    raise ValueError("Age cannot be negative")
\`\`\`

⚠️ Don't use bare \`except:\` — it catches everything including keyboard interrupts.

💡 Catch specific exceptions whenever possible.

💡 Use \`finally\` for cleanup code (closing files, connections, etc.).`,
        exercises: [
          {
            id: 'err-1',
            title: 'Catch ZeroDivision',
            description: 'Handle division by zero.',
            instructions: ['Try dividing 10 by 0', 'Catch ZeroDivisionError and print \'Cannot divide by zero!\''],
            starterCode: '',
            solution: 'try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print(\'Cannot divide by zero!\')',
            hint: 'Use try/except ZeroDivisionError.',
            expectedOutput: 'Cannot divide by zero!',
          },
          {
            id: 'err-2',
            title: 'Catch ValueError',
            description: 'Handle invalid conversion.',
            instructions: ['Try converting \'hello\' to int', 'Catch ValueError and print \'Invalid number!\''],
            starterCode: '',
            solution: 'try:\n    num = int(\'hello\')\nexcept ValueError:\n    print(\'Invalid number!\')',
            hint: 'int() raises ValueError for non-numeric strings.',
            expectedOutput: 'Invalid number!',
          },
          {
            id: 'err-3',
            title: 'try/except/else',
            description: 'Use else with try/except.',
            instructions: ['Try converting \'42\' to int', 'On error print \'Error\'', 'On success print the number'],
            starterCode: '',
            solution: 'try:\n    num = int(\'42\')\nexcept ValueError:\n    print(\'Error\')\nelse:\n    print(num)',
            hint: 'The else block runs when no exception occurs.',
            expectedOutput: '42',
          },
          {
            id: 'err-4',
            title: 'Finally Block',
            description: 'Use finally for guaranteed execution.',
            instructions: ['Try dividing 10 by 2', 'Print the result in else', 'Print \'Done\' in finally'],
            starterCode: '',
            solution: 'try:\n    result = 10 / 2\nexcept ZeroDivisionError:\n    print(\'Error\')\nelse:\n    print(result)\nfinally:\n    print(\'Done\')',
            hint: 'finally always executes.',
            expectedOutput: '5.0\nDone',
          },
          {
            id: 'err-5',
            title: 'Multiple Exceptions',
            description: 'Handle different error types.',
            instructions: ['Try converting a value and dividing', 'Catch both ValueError and ZeroDivisionError'],
            starterCode: '',
            solution: 'try:\n    x = int(\'10\')\n    y = x / 0\nexcept ValueError:\n    print(\'Bad value\')\nexcept ZeroDivisionError:\n    print(\'Cannot divide by zero\')',
            hint: 'List multiple except blocks.',
            expectedOutput: 'Cannot divide by zero',
          }
        ],
      },
      {
        id: 'lists-b',
        number: 18,
        title: 'Lists Basics',
        description: 'Store collections of items in ordered, mutable lists.',
        icon: 'List',
        type: 'exercises',
        lesson: `A list is an **ordered, mutable collection** of items. Lists are one of Python's most useful data types.

## Creating Lists

\`\`\`python
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]
empty = []
print(fruits)
\`\`\`
>>> ['apple', 'banana', 'cherry']

## Accessing Items (Indexing)

\`\`\`python
colors = ["red", "green", "blue"]
print(colors[0])     # First item
print(colors[-1])    # Last item
\`\`\`
>>> red
>>> blue

## Modifying Items

Lists are **mutable** — you can change items:

\`\`\`python
fruits = ["apple", "banana", "cherry"]
fruits[1] = "mango"
print(fruits)
\`\`\`
>>> ['apple', 'mango', 'cherry']

## List Length

\`\`\`python
items = [1, 2, 3, 4]
print(len(items))
\`\`\`
>>> 4

## Slicing Lists

Same syntax as strings:

\`\`\`python
nums = [0, 1, 2, 3, 4, 5]
print(nums[1:4])
print(nums[:3])
print(nums[3:])
print(nums[::-1])
\`\`\`
>>> [1, 2, 3]
>>> [0, 1, 2]
>>> [3, 4, 5]
>>> [5, 4, 3, 2, 1, 0]

## Checking Membership

\`\`\`python
fruits = ["apple", "banana", "cherry"]
print("banana" in fruits)
print("grape" in fruits)
\`\`\`
>>> True
>>> False

## Iterating Over Lists

\`\`\`python
colors = ["red", "green", "blue"]
for color in colors:
    print(color)
\`\`\`
>>> red
>>> green
>>> blue

## Nested Lists

\`\`\`python
matrix = [[1, 2], [3, 4], [5, 6]]
print(matrix[0])
print(matrix[1][0])
\`\`\`
>>> [1, 2]
>>> 3

⚠️ Index starts at 0, not 1.

⚠️ Accessing an index that doesn't exist raises \`IndexError\`.

💡 Use negative indices to count from the end: \`[-1]\` is the last item.`,
        exercises: [
          {
            id: 'lb-1',
            title: 'Create a List',
            description: 'Create and print a list.',
            instructions: ['Create a list of 3 fruits', 'Print the list'],
            starterCode: '',
            solution: 'fruits = [\'apple\', \'banana\', \'cherry\']\nprint(fruits)',
            hint: 'Use square brackets with items separated by commas.',
            expectedOutput: '[\'apple\', \'banana\', \'cherry\']',
          },
          {
            id: 'lb-2',
            title: 'Access Elements',
            description: 'Get items by index.',
            instructions: ['Create nums = [10, 20, 30, 40, 50]', 'Print the first and last elements'],
            starterCode: '',
            solution: 'nums = [10, 20, 30, 40, 50]\nprint(nums[0])\nprint(nums[-1])',
            hint: 'Use [0] for first and [-1] for last.',
            expectedOutput: '10\n50',
          },
          {
            id: 'lb-3',
            title: 'Modify a List',
            description: 'Change an element.',
            instructions: ['Create colors = [\'red\', \'green\', \'blue\']', 'Change \'green\' to \'yellow\'', 'Print the list'],
            starterCode: '',
            solution: 'colors = [\'red\', \'green\', \'blue\']\ncolors[1] = \'yellow\'\nprint(colors)',
            hint: 'Assign to an index: list[1] = new_value.',
            expectedOutput: '[\'red\', \'yellow\', \'blue\']',
          },
          {
            id: 'lb-4',
            title: 'List Slicing',
            description: 'Extract a portion of a list.',
            instructions: ['Create nums = [0, 1, 2, 3, 4, 5]', 'Print elements from index 2 to 4'],
            starterCode: '',
            solution: 'nums = [0, 1, 2, 3, 4, 5]\nprint(nums[2:5])',
            hint: 'Use [start:end] — end is exclusive.',
            expectedOutput: '[2, 3, 4]',
          },
          {
            id: 'lb-5',
            title: 'Loop Over List',
            description: 'Iterate through items.',
            instructions: ['Create items = [\'a\', \'b\', \'c\']', 'Print each item using a for loop'],
            starterCode: '',
            solution: 'items = [\'a\', \'b\', \'c\']\nfor item in items:\n    print(item)',
            hint: 'Use: for item in list:',
            expectedOutput: 'a\nb\nc',
          }
        ],
      },
      {
        id: 'lists-m',
        number: 19,
        title: 'List Methods',
        description: 'Add, remove, and manipulate list items.',
        icon: 'ListPlus',
        type: 'exercises',
        lesson: `Lists have many built-in methods for adding, removing, and organizing items.

## Adding Items

\`\`\`python
fruits = ["apple"]
fruits.append("banana")       # Add to end
fruits.insert(0, "mango")     # Add at index
fruits.extend(["cherry", "grape"])  # Add multiple
print(fruits)
\`\`\`
>>> ['mango', 'apple', 'banana', 'cherry', 'grape']

## Removing Items

\`\`\`python
fruits = ["apple", "banana", "cherry", "banana"]
fruits.remove("banana")   # Remove first occurrence
print(fruits)

last = fruits.pop()        # Remove & return last
print(last)

item = fruits.pop(0)       # Remove & return at index
print(item)
print(fruits)
\`\`\`
>>> ['apple', 'cherry', 'banana']
>>> banana
>>> apple
>>> ['cherry']

## Sorting

\`\`\`python
nums = [3, 1, 4, 1, 5]
nums.sort()            # Sort in place
print(nums)
nums.sort(reverse=True)
print(nums)
\`\`\`
>>> [1, 1, 3, 4, 5]
>>> [5, 4, 3, 1, 1]

\`sorted()\` returns a new list (doesn't modify original):
\`\`\`python
original = [3, 1, 2]
new_list = sorted(original)
print(original)
print(new_list)
\`\`\`
>>> [3, 1, 2]
>>> [1, 2, 3]

## Other Useful Methods

\`\`\`python
nums = [1, 2, 3, 2, 1]
print(nums.count(2))      # Count occurrences
print(nums.index(3))      # Find index of value
nums.reverse()             # Reverse in place
print(nums)
\`\`\`
>>> 2
>>> 2
>>> [1, 2, 3, 2, 1]

## Copying Lists

\`\`\`python
original = [1, 2, 3]
copy = original.copy()     # or list(original) or original[:]
copy.append(4)
print(original)
print(copy)
\`\`\`
>>> [1, 2, 3]
>>> [1, 2, 3, 4]

⚠️ \`new = old\` does NOT copy — both point to the same list. Use \`.copy()\`.

💡 \`.sort()\` modifies in place and returns \`None\`. Use \`sorted()\` to keep the original.`,
        exercises: [
          {
            id: 'lm-1',
            title: 'Append and Extend',
            description: 'Add items to a list.',
            instructions: ['Start with nums = [1, 2]', 'Append 3', 'Extend with [4, 5]', 'Print the list'],
            starterCode: '',
            solution: 'nums = [1, 2]\nnums.append(3)\nnums.extend([4, 5])\nprint(nums)',
            hint: '.append() adds one item, .extend() adds multiple.',
            expectedOutput: '[1, 2, 3, 4, 5]',
          },
          {
            id: 'lm-2',
            title: 'Remove Items',
            description: 'Remove items from a list.',
            instructions: ['Create fruits = [\'apple\', \'banana\', \'cherry\']', 'Remove \'banana\'', 'Print the list'],
            starterCode: '',
            solution: 'fruits = [\'apple\', \'banana\', \'cherry\']\nfruits.remove(\'banana\')\nprint(fruits)',
            hint: 'Use .remove(value) to remove by value.',
            expectedOutput: '[\'apple\', \'cherry\']',
          },
          {
            id: 'lm-3',
            title: 'Sort a List',
            description: 'Sort items in order.',
            instructions: ['Create nums = [5, 2, 8, 1, 9]', 'Sort it and print'],
            starterCode: '',
            solution: 'nums = [5, 2, 8, 1, 9]\nnums.sort()\nprint(nums)',
            hint: 'Use .sort() to sort in place.',
            expectedOutput: '[1, 2, 5, 8, 9]',
          },
          {
            id: 'lm-4',
            title: 'Pop Items',
            description: 'Remove and use the last item.',
            instructions: ['Create stack = [1, 2, 3, 4]', 'Pop the last item and print it', 'Print remaining list'],
            starterCode: '',
            solution: 'stack = [1, 2, 3, 4]\nlast = stack.pop()\nprint(last)\nprint(stack)',
            hint: '.pop() removes and returns the last item.',
            expectedOutput: '4\n[1, 2, 3]',
          },
          {
            id: 'lm-5',
            title: 'Count and Index',
            description: 'Find information about list items.',
            instructions: ['Create nums = [1, 3, 5, 3, 7, 3]', 'Print how many times 3 appears', 'Print the index of the first 3'],
            starterCode: '',
            solution: 'nums = [1, 3, 5, 3, 7, 3]\nprint(nums.count(3))\nprint(nums.index(3))',
            hint: 'Use .count() and .index().',
            expectedOutput: '3\n1',
          }
        ],
      },
      {
        id: 'lists-a',
        number: 20,
        title: 'List Comprehensions',
        description: 'Create lists with concise, powerful syntax.',
        icon: 'Layers',
        type: 'exercises',
        lesson: `List comprehensions provide a concise way to create lists from existing sequences.

## Basic Syntax

\`\`\`python
# [expression for item in iterable]
squares = [x**2 for x in range(5)]
print(squares)
\`\`\`
>>> [0, 1, 4, 9, 16]

This is equivalent to:
\`\`\`python
squares = []
for x in range(5):
    squares.append(x**2)
\`\`\`

## With Condition (Filtering)

\`\`\`python
# [expression for item in iterable if condition]
evens = [x for x in range(10) if x % 2 == 0]
print(evens)
\`\`\`
>>> [0, 2, 4, 6, 8]

## Transforming Strings

\`\`\`python
words = ["hello", "world", "python"]
upper_words = [w.upper() for w in words]
print(upper_words)
\`\`\`
>>> ['HELLO', 'WORLD', 'PYTHON']

## With if/else

\`\`\`python
labels = ["even" if x % 2 == 0 else "odd" for x in range(5)]
print(labels)
\`\`\`
>>> ['even', 'odd', 'even', 'odd', 'even']

## Nested Comprehensions

\`\`\`python
pairs = [(x, y) for x in range(3) for y in range(3) if x != y]
print(pairs)
\`\`\`
>>> [(0, 1), (0, 2), (1, 0), (1, 2), (2, 0), (2, 1)]

## Flattening a 2D List

\`\`\`python
matrix = [[1, 2], [3, 4], [5, 6]]
flat = [num for row in matrix for num in row]
print(flat)
\`\`\`
>>> [1, 2, 3, 4, 5, 6]

💡 List comprehensions are typically faster and more Pythonic than loops with \`.append()\`.

⚠️ Keep them simple — if a comprehension is hard to read, use a regular for loop instead.

💡 You can also have dict comprehensions \`{k: v for ...}\` and set comprehensions \`{x for ...}\`.`,
        exercises: [
          {
            id: 'la-1',
            title: 'Basic Comprehension',
            description: 'Create a list with comprehension.',
            instructions: ['Create a list of squares of numbers 1 through 5', 'Print the list'],
            starterCode: '',
            solution: 'squares = [x**2 for x in range(1, 6)]\nprint(squares)',
            hint: 'Use [expression for x in range()].',
            expectedOutput: '[1, 4, 9, 16, 25]',
          },
          {
            id: 'la-2',
            title: 'Filter with Comprehension',
            description: 'Add a condition.',
            instructions: ['Create a list of even numbers from 1 to 20', 'Print the list'],
            starterCode: '',
            solution: 'evens = [x for x in range(1, 21) if x % 2 == 0]\nprint(evens)',
            hint: 'Add \'if condition\' at the end.',
            expectedOutput: '[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]',
          },
          {
            id: 'la-3',
            title: 'Transform Strings',
            description: 'Convert strings in a list.',
            instructions: ['Create words = [\'hello\', \'world\']', 'Make a new list with each word capitalized', 'Print it'],
            starterCode: '',
            solution: 'words = [\'hello\', \'world\']\nresult = [w.capitalize() for w in words]\nprint(result)',
            hint: 'Use w.capitalize() as the expression.',
            expectedOutput: '[\'Hello\', \'World\']',
          },
          {
            id: 'la-4',
            title: 'if/else Comprehension',
            description: 'Use conditional expression.',
            instructions: ['Create a list labeling numbers 1-6 as \'even\' or \'odd\'', 'Print it'],
            starterCode: '',
            solution: 'labels = [\'even\' if x % 2 == 0 else \'odd\' for x in range(1, 7)]\nprint(labels)',
            hint: 'Put the if/else BEFORE \'for\'.',
            expectedOutput: '[\'odd\', \'even\', \'odd\', \'even\', \'odd\', \'even\']',
          },
          {
            id: 'la-5',
            title: 'Flatten a Matrix',
            description: 'Flatten a 2D list.',
            instructions: ['Create matrix = [[1, 2, 3], [4, 5, 6]]', 'Flatten it to [1, 2, 3, 4, 5, 6] using comprehension'],
            starterCode: '',
            solution: 'matrix = [[1, 2, 3], [4, 5, 6]]\nflat = [n for row in matrix for n in row]\nprint(flat)',
            hint: 'Use nested for: for row in matrix for n in row.',
            expectedOutput: '[1, 2, 3, 4, 5, 6]',
          }
        ],
      }
    ],
  },
  {
    id: 'functions',
    title: 'Functions',
    subtitle: 'Master Reusable Code',
    description: 'Learn to write clean, reusable code with functions, closures, recursion, and higher-order patterns.',
    icon: 'Blocks',
    color: 'blue',
    categories: [
      {
        id: 'func-def',
        number: 1,
        title: 'Defining Functions',
        description: 'Create reusable blocks of code with def.',
        icon: 'Code',
        type: 'exercises',
        lesson: `Functions are **reusable blocks of code** that perform a specific task. They help you organize code, avoid repetition, and make programs easier to understand.

## Defining a Function

Use the \`def\` keyword:

\`\`\`python
def greet():
    print("Hello, World!")

greet()   # Call the function
greet()   # Call it again
\`\`\`
>>> Hello, World!
>>> Hello, World!

## Functions with Parameters

\`\`\`python
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")
greet("Bob")
\`\`\`
>>> Hello, Alice!
>>> Hello, Bob!

## Return Values

Functions can send back a result with \`return\`:

\`\`\`python
def add(a, b):
    return a + b

result = add(3, 5)
print(result)
\`\`\`
>>> 8

Without \`return\`, a function returns \`None\`:
\`\`\`python
def say_hi():
    print("Hi!")

result = say_hi()
print(result)
\`\`\`
>>> Hi!
>>> None

## Multiple Return Values

\`\`\`python
def min_max(numbers):
    return min(numbers), max(numbers)

lo, hi = min_max([3, 1, 4, 1, 5])
print(f"Min: {lo}, Max: {hi}")
\`\`\`
>>> Min: 1, Max: 5

## Docstrings

Document your functions:
\`\`\`python
def square(n):
    """Return the square of n."""
    return n ** 2

print(square(4))
\`\`\`
>>> 16

## Common Mistakes

⚠️ Don't forget the colon \`:\` after the \`def\` line.

⚠️ Indentation defines the function body — all code must be indented.

⚠️ Calling a function before defining it causes \`NameError\`.

💡 Keep functions short and focused — each should do ONE thing well.`,
        exercises: [
          {
            id: 'fd-1',
            title: 'Simple Function',
            description: 'Define and call a function.',
            instructions: ['Define a function called hello that prints \'Hello!\'', 'Call it'],
            starterCode: '',
            solution: 'def hello():\n    print(\'Hello!\')\n\nhello()',
            hint: 'Use def name(): and indent the body.',
            expectedOutput: 'Hello!',
          },
          {
            id: 'fd-2',
            title: 'Function with Parameter',
            description: 'Pass data to a function.',
            instructions: ['Define greet(name) that prints \'Hello, [name]!\'', 'Call it with \'Alice\''],
            starterCode: '',
            solution: 'def greet(name):\n    print(f\'Hello, {name}!\')\n\ngreet(\'Alice\')',
            hint: 'Put the parameter name in parentheses.',
            expectedOutput: 'Hello, Alice!',
          },
          {
            id: 'fd-3',
            title: 'Return Value',
            description: 'Return a result from a function.',
            instructions: ['Define double(n) that returns n * 2', 'Print double(7)'],
            starterCode: '',
            solution: 'def double(n):\n    return n * 2\n\nprint(double(7))',
            hint: 'Use return to send back a value.',
            expectedOutput: '14',
          },
          {
            id: 'fd-4',
            title: 'Two Parameters',
            description: 'Use multiple parameters.',
            instructions: ['Define add(a, b) that returns the sum', 'Print add(10, 20)'],
            starterCode: '',
            solution: 'def add(a, b):\n    return a + b\n\nprint(add(10, 20))',
            hint: 'Separate parameters with commas.',
            expectedOutput: '30',
          },
          {
            id: 'fd-5',
            title: 'Multiple Returns',
            description: 'Return multiple values.',
            instructions: ['Define stats(nums) that returns (min, max, sum) of a list', 'Call with [4, 2, 7, 1] and print results'],
            starterCode: '',
            solution: 'def stats(nums):\n    return min(nums), max(nums), sum(nums)\n\nlo, hi, total = stats([4, 2, 7, 1])\nprint(lo, hi, total)',
            hint: 'Return multiple values separated by commas.',
            expectedOutput: '1 7 14',
          }
        ],
      },
      {
        id: 'params',
        number: 2,
        title: 'Parameters & Arguments',
        description: 'Master default, keyword, and variable-length arguments.',
        icon: 'Settings',
        type: 'exercises',
        lesson: `Parameters define what data a function accepts. Python offers flexible ways to pass arguments.

## Positional Arguments

Arguments matched by position:

\`\`\`python
def power(base, exp):
    return base ** exp

print(power(2, 3))    # base=2, exp=3
\`\`\`
>>> 8

## Default Parameters

Provide fallback values:

\`\`\`python
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")
greet("Bob", "Hi")
\`\`\`
>>> Hello, Alice!
>>> Hi, Bob!

## Keyword Arguments

Specify by name (order doesn't matter):

\`\`\`python
def profile(name, age, city):
    print(f"{name}, {age}, from {city}")

profile(age=25, city="Paris", name="Alice")
\`\`\`
>>> Alice, 25, from Paris

## *args — Variable Positional Arguments

Accept any number of positional arguments:

\`\`\`python
def total(*args):
    return sum(args)

print(total(1, 2, 3))
print(total(10, 20))
\`\`\`
>>> 6
>>> 30

## **kwargs — Variable Keyword Arguments

Accept any number of keyword arguments:

\`\`\`python
def info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

info(name="Alice", age=25)
\`\`\`
>>> name: Alice
>>> age: 25

## Combining All Types

Order: positional, *args, keyword, **kwargs:

\`\`\`python
def func(a, b, *args, key="default", **kwargs):
    print(a, b, args, key, kwargs)

func(1, 2, 3, 4, key="custom", x=10)
\`\`\`
>>> 1 2 (3, 4) custom {'x': 10}

⚠️ Default parameters with mutable values (lists, dicts) are shared between calls — use \`None\` instead.

💡 Use keyword arguments for clarity when a function has many parameters.`,
        exercises: [
          {
            id: 'params-1',
            title: 'Default Parameters',
            description: 'Use default values.',
            instructions: ['Define greet(name, greeting=\'Hello\') that prints \'[greeting], [name]!\'', 'Call with just \'Alice\', then with \'Bob\' and \'Hi\''],
            starterCode: '',
            solution: 'def greet(name, greeting=\'Hello\'):\n    print(f\'{greeting}, {name}!\')\n\ngreet(\'Alice\')\ngreet(\'Bob\', \'Hi\')',
            hint: 'Put the default value after = in the parameter.',
            expectedOutput: 'Hello, Alice!\nHi, Bob!',
          },
          {
            id: 'params-2',
            title: 'Keyword Arguments',
            description: 'Pass arguments by name.',
            instructions: ['Define describe(name, age, city) that prints all three', 'Call using keyword arguments in any order'],
            starterCode: '',
            solution: 'def describe(name, age, city):\n    print(f\'{name} is {age} from {city}\')\n\ndescribe(city=\'Paris\', name=\'Alice\', age=25)',
            hint: 'Use parameter_name=value when calling.',
            expectedOutput: 'Alice is 25 from Paris',
          },
          {
            id: 'params-3',
            title: '*args',
            description: 'Accept variable arguments.',
            instructions: ['Define add_all(*args) that returns the sum', 'Print add_all(1,2,3,4,5)'],
            starterCode: '',
            solution: 'def add_all(*args):\n    return sum(args)\n\nprint(add_all(1, 2, 3, 4, 5))',
            hint: '*args collects extra positional arguments as a tuple.',
            expectedOutput: '15',
          },
          {
            id: 'params-4',
            title: '**kwargs',
            description: 'Accept keyword arguments.',
            instructions: ['Define show_info(**kwargs) that prints each key-value pair', 'Call with name=\'Alice\', role=\'dev\''],
            starterCode: '',
            solution: 'def show_info(**kwargs):\n    for k, v in kwargs.items():\n        print(f\'{k}: {v}\')\n\nshow_info(name=\'Alice\', role=\'dev\')',
            hint: '**kwargs collects keyword arguments as a dict.',
            expectedOutput: 'name: Alice\nrole: dev',
          },
          {
            id: 'params-5',
            title: 'Mixed Parameters',
            description: 'Combine parameter types.',
            instructions: ['Define func(x, y, z=10) that returns x + y + z', 'Print func(1, 2) and func(1, 2, 3)'],
            starterCode: '',
            solution: 'def func(x, y, z=10):\n    return x + y + z\n\nprint(func(1, 2))\nprint(func(1, 2, 3))',
            hint: 'z uses its default if not provided.',
            expectedOutput: '13\n6',
          }
        ],
      },
      {
        id: 'scope',
        number: 3,
        title: 'Variable Scope',
        description: 'Understand where variables are accessible.',
        icon: 'Layers',
        type: 'exercises',
        lesson: `**Scope** determines where a variable is accessible. Python has four scopes: Local, Enclosing, Global, Built-in (LEGB rule).

## Local Scope

Variables created inside a function are **local** — only accessible within that function:

\`\`\`python
def my_func():
    x = 10    # local variable
    print(x)

my_func()
# print(x)  # NameError! x doesn't exist here
\`\`\`
>>> 10

## Global Scope

Variables created outside functions are **global**:

\`\`\`python
name = "Alice"    # global

def greet():
    print(f"Hello, {name}")

greet()
\`\`\`
>>> Hello, Alice

## The global Keyword

To **modify** a global variable inside a function:

\`\`\`python
count = 0

def increment():
    global count
    count += 1

increment()
increment()
print(count)
\`\`\`
>>> 2

Without \`global\`, Python creates a new local variable instead.

## Enclosing Scope (Nested Functions)

\`\`\`python
def outer():
    msg = "Hello"
    def inner():
        print(msg)    # Accesses enclosing scope
    inner()

outer()
\`\`\`
>>> Hello

## The nonlocal Keyword

Modify an enclosing variable:

\`\`\`python
def counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

c = counter()
print(c())
print(c())
\`\`\`
>>> 1
>>> 2

## LEGB Rule

Python looks up variables in this order:
1. **L**ocal — inside current function
2. **E**nclosing — in outer function(s)
3. **G**lobal — module level
4. **B**uilt-in — Python's built-in names

⚠️ Avoid excessive use of \`global\` — it makes code harder to debug.

💡 Functions should primarily communicate through parameters and return values.`,
        exercises: [
          {
            id: 'scope-1',
            title: 'Local Variables',
            description: 'Understand local scope.',
            instructions: ['Define a function that creates x = 5 and prints it', 'Call the function'],
            starterCode: '',
            solution: 'def my_func():\n    x = 5\n    print(x)\n\nmy_func()',
            hint: 'Variables inside functions are local.',
            expectedOutput: '5',
          },
          {
            id: 'scope-2',
            title: 'Global Variables',
            description: 'Access global variables.',
            instructions: ['Create global name = \'Python\'', 'Define a function that prints it', 'Call the function'],
            starterCode: '',
            solution: 'name = \'Python\'\ndef show():\n    print(name)\n\nshow()',
            hint: 'Functions can read global variables.',
            expectedOutput: 'Python',
          },
          {
            id: 'scope-3',
            title: 'Global Keyword',
            description: 'Modify a global variable.',
            instructions: ['Create count = 0 globally', 'Define increment() that adds 1 using global', 'Call it 3 times and print count'],
            starterCode: '',
            solution: 'count = 0\ndef increment():\n    global count\n    count += 1\n\nincrement()\nincrement()\nincrement()\nprint(count)',
            hint: 'Use \'global\' keyword to modify global variables.',
            expectedOutput: '3',
          },
          {
            id: 'scope-4',
            title: 'Enclosing Scope',
            description: 'Access outer function variables.',
            instructions: ['Define outer() with msg=\'Hello\'', 'Inside it define inner() that prints msg', 'Call inner() from outer(), then call outer()'],
            starterCode: '',
            solution: 'def outer():\n    msg = \'Hello\'\n    def inner():\n        print(msg)\n    inner()\n\nouter()',
            hint: 'Inner functions can access enclosing variables.',
            expectedOutput: 'Hello',
          },
          {
            id: 'scope-5',
            title: 'Nonlocal Keyword',
            description: 'Modify enclosing variables.',
            instructions: ['Create a make_counter() that returns an increment function', 'The inner function should use nonlocal to modify count', 'Call the counter twice and print each result'],
            starterCode: '',
            solution: 'def make_counter():\n    count = 0\n    def increment():\n        nonlocal count\n        count += 1\n        return count\n    return increment\n\nc = make_counter()\nprint(c())\nprint(c())',
            hint: 'Use \'nonlocal\' to modify the enclosing variable.',
            expectedOutput: '1\n2',
          }
        ],
      },
      {
        id: 'lambda',
        number: 4,
        title: 'Lambda Functions',
        description: 'Create small anonymous functions in one line.',
        icon: 'Zap',
        type: 'exercises',
        lesson: `Lambda functions are **small, anonymous functions** defined in a single expression.

## Syntax

\`\`\`python
# lambda parameters: expression
square = lambda x: x ** 2
print(square(5))
\`\`\`
>>> 25

Equivalent to:
\`\`\`python
def square(x):
    return x ** 2
\`\`\`

## Multiple Parameters

\`\`\`python
add = lambda a, b: a + b
print(add(3, 4))
\`\`\`
>>> 7

## Common Use: Sorting

\`\`\`python
students = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]
students.sort(key=lambda s: s[1])
print(students)
\`\`\`
>>> [('Charlie', 78), ('Alice', 85), ('Bob', 92)]

## With map()

Apply a function to every item:
\`\`\`python
nums = [1, 2, 3, 4]
doubled = list(map(lambda x: x * 2, nums))
print(doubled)
\`\`\`
>>> [2, 4, 6, 8]

## With filter()

Keep items that match a condition:
\`\`\`python
nums = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, nums))
print(evens)
\`\`\`
>>> [2, 4, 6]

## When to Use Lambdas

- As a quick \`key\` function for sorting
- As arguments to \`map()\`, \`filter()\`, \`reduce()\`
- For simple one-line operations

⚠️ Lambdas can only contain a single expression — no statements, no assignments.

⚠️ Don't assign lambdas to variables for reuse — define a proper function instead.

💡 If a lambda is hard to read, use a regular \`def\` function.`,
        exercises: [
          {
            id: 'lam-1',
            title: 'Basic Lambda',
            description: 'Create a simple lambda.',
            instructions: ['Create a lambda that doubles a number', 'Print the result of calling it with 7'],
            starterCode: '',
            solution: 'double = lambda x: x * 2\nprint(double(7))',
            hint: 'lambda x: expression.',
            expectedOutput: '14',
          },
          {
            id: 'lam-2',
            title: 'Lambda with Two Args',
            description: 'Use multiple parameters.',
            instructions: ['Create a lambda that adds two numbers', 'Print the result of calling it with 10 and 20'],
            starterCode: '',
            solution: 'add = lambda a, b: a + b\nprint(add(10, 20))',
            hint: 'lambda a, b: a + b.',
            expectedOutput: '30',
          },
          {
            id: 'lam-3',
            title: 'Sort with Lambda',
            description: 'Use lambda as a sort key.',
            instructions: ['Sort [(\'b\', 2), (\'a\', 1), (\'c\', 3)] by the second element', 'Print the sorted list'],
            starterCode: '',
            solution: 'data = [(\'b\', 2), (\'a\', 1), (\'c\', 3)]\ndata.sort(key=lambda x: x[1])\nprint(data)',
            hint: 'Use key=lambda x: x[1] in sort().',
            expectedOutput: '[(\'a\', 1), (\'b\', 2), (\'c\', 3)]',
          },
          {
            id: 'lam-4',
            title: 'Map with Lambda',
            description: 'Transform a list.',
            instructions: ['Use map() with a lambda to square [1, 2, 3, 4, 5]', 'Print the result as a list'],
            starterCode: '',
            solution: 'result = list(map(lambda x: x**2, [1, 2, 3, 4, 5]))\nprint(result)',
            hint: 'map(function, iterable) applies function to each item.',
            expectedOutput: '[1, 4, 9, 16, 25]',
          },
          {
            id: 'lam-5',
            title: 'Filter with Lambda',
            description: 'Filter a list.',
            instructions: ['Use filter() to keep only numbers > 5 from [2, 8, 3, 10, 1, 7]', 'Print as a list'],
            starterCode: '',
            solution: 'result = list(filter(lambda x: x > 5, [2, 8, 3, 10, 1, 7]))\nprint(result)',
            hint: 'filter(function, iterable) keeps items where function returns True.',
            expectedOutput: '[8, 10, 7]',
          }
        ],
      },
      {
        id: 'recursion',
        number: 5,
        title: 'Recursion',
        description: 'Solve problems by having functions call themselves.',
        icon: 'GitFork',
        type: 'exercises',
        lesson: `Recursion is when a function **calls itself** to solve a problem by breaking it into smaller sub-problems.

## How It Works

Every recursive function needs:
1. **Base case** — when to stop
2. **Recursive case** — the function calls itself with a smaller problem

\`\`\`python
def countdown(n):
    if n <= 0:          # Base case
        print("Go!")
    else:               # Recursive case
        print(n)
        countdown(n - 1)

countdown(3)
\`\`\`
>>> 3
>>> 2
>>> 1
>>> Go!

## Classic Example: Factorial

\`5! = 5 * 4 * 3 * 2 * 1 = 120\`

\`\`\`python
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))
\`\`\`
>>> 120

## Fibonacci Sequence

\`\`\`python
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

for i in range(7):
    print(fib(i), end=" ")
\`\`\`
>>> 0 1 1 2 3 5 8

## Sum of a List

\`\`\`python
def list_sum(lst):
    if not lst:
        return 0
    return lst[0] + list_sum(lst[1:])

print(list_sum([1, 2, 3, 4]))
\`\`\`
>>> 10

## Recursion Limit

Python limits recursion depth (default ~1000):
\`\`\`python
import sys
print(sys.getrecursionlimit())
\`\`\`
>>> 1000

⚠️ Always have a base case — without it, you get infinite recursion and a \`RecursionError\`.

⚠️ Recursion uses more memory than loops (each call adds to the call stack).

💡 For simple iterations, loops are usually better. Use recursion for naturally recursive problems (trees, fractals, divide-and-conquer).`,
        exercises: [
          {
            id: 'rec-1',
            title: 'Factorial',
            description: 'Compute factorial recursively.',
            instructions: ['Write a recursive function factorial(n)', 'Print factorial(6)'],
            starterCode: '',
            solution: 'def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(6))',
            hint: 'Base case: n <= 1 returns 1. Recursive: n * factorial(n-1).',
            expectedOutput: '720',
          },
          {
            id: 'rec-2',
            title: 'Sum to N',
            description: 'Sum numbers 1 to n recursively.',
            instructions: ['Write recursive sum_to(n) that sums 1 to n', 'Print sum_to(10)'],
            starterCode: '',
            solution: 'def sum_to(n):\n    if n <= 0:\n        return 0\n    return n + sum_to(n - 1)\n\nprint(sum_to(10))',
            hint: 'Base case: n <= 0 returns 0.',
            expectedOutput: '55',
          },
          {
            id: 'rec-3',
            title: 'Countdown',
            description: 'Print a countdown recursively.',
            instructions: ['Write recursive countdown(n) that prints n down to 1, then \'Go!\''],
            starterCode: '',
            solution: 'def countdown(n):\n    if n <= 0:\n        print(\'Go!\')\n    else:\n        print(n)\n        countdown(n - 1)\n\ncountdown(3)',
            hint: 'Print n, then call countdown(n-1).',
            expectedOutput: '3\n2\n1\nGo!',
          },
          {
            id: 'rec-4',
            title: 'Power Function',
            description: 'Calculate power recursively.',
            instructions: ['Write recursive power(base, exp) that computes base^exp', 'Print power(2, 8)'],
            starterCode: '',
            solution: 'def power(base, exp):\n    if exp == 0:\n        return 1\n    return base * power(base, exp - 1)\n\nprint(power(2, 8))',
            hint: 'Base case: exp == 0 returns 1.',
            expectedOutput: '256',
          },
          {
            id: 'rec-5',
            title: 'Reverse String',
            description: 'Reverse a string recursively.',
            instructions: ['Write recursive reverse(s) that reverses a string', 'Print reverse(\'Python\')'],
            starterCode: '',
            solution: 'def reverse(s):\n    if len(s) <= 1:\n        return s\n    return reverse(s[1:]) + s[0]\n\nprint(reverse(\'Python\'))',
            hint: 'Take first char, put it at end of reversed rest.',
            expectedOutput: 'nohtyP',
          }
        ],
      },
      {
        id: 'closures',
        number: 6,
        title: 'Closures',
        description: 'Functions that remember their enclosing scope.',
        icon: 'Lock',
        type: 'exercises',
        lesson: `A **closure** is a function that remembers values from its enclosing scope, even after that scope has finished executing.

## What is a Closure?

\`\`\`python
def make_greeter(greeting):
    def greet(name):
        return f"{greeting}, {name}!"
    return greet

hello = make_greeter("Hello")
hi = make_greeter("Hi")
print(hello("Alice"))
print(hi("Bob"))
\`\`\`
>>> Hello, Alice!
>>> Hi, Bob!

The inner function \`greet\` remembers \`greeting\` even after \`make_greeter\` has returned.

## How Closures Work

Three conditions:
1. A nested (inner) function
2. The inner function references a variable from the outer function
3. The outer function returns the inner function

## Practical Example: Counter

\`\`\`python
def make_counter(start=0):
    count = start
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

counter = make_counter()
print(counter())
print(counter())
print(counter())
\`\`\`
>>> 1
>>> 2
>>> 3

## Closure as a Multiplier Factory

\`\`\`python
def multiplier(factor):
    def multiply(x):
        return x * factor
    return multiply

double = multiplier(2)
triple = multiplier(3)
print(double(5))
print(triple(5))
\`\`\`
>>> 10
>>> 15

## Checking Closure Variables

\`\`\`python
def outer(x):
    def inner():
        return x
    return inner

fn = outer(42)
print(fn.__closure__[0].cell_contents)
\`\`\`
>>> 42

💡 Closures are great for creating function factories and maintaining state without classes.

⚠️ Use \`nonlocal\` if you need to modify the enclosed variable, not just read it.`,
        exercises: [
          {
            id: 'clo-1',
            title: 'Basic Closure',
            description: 'Create a simple closure.',
            instructions: ['Write make_greeter(greeting) that returns a function taking name', 'The inner function returns \'{greeting}, {name}!\'', 'Test with make_greeter(\'Hello\')(\'World\')'],
            starterCode: '',
            solution: 'def make_greeter(greeting):\n    def greet(name):\n        return f\'{greeting}, {name}!\'\n    return greet\n\nprint(make_greeter(\'Hello\')(\'World\'))',
            hint: 'Return the inner function from the outer function.',
            expectedOutput: 'Hello, World!',
          },
          {
            id: 'clo-2',
            title: 'Multiplier Factory',
            description: 'Create functions dynamically.',
            instructions: ['Write multiplier(n) that returns a function multiplying by n', 'Create a tripler and print tripler(7)'],
            starterCode: '',
            solution: 'def multiplier(n):\n    def multiply(x):\n        return x * n\n    return multiply\n\ntripler = multiplier(3)\nprint(tripler(7))',
            hint: 'The inner function uses n from the enclosing scope.',
            expectedOutput: '21',
          },
          {
            id: 'clo-3',
            title: 'Counter Closure',
            description: 'Maintain state with closures.',
            instructions: ['Write make_counter() returning an increment function', 'Call it 3 times, printing each result'],
            starterCode: '',
            solution: 'def make_counter():\n    count = 0\n    def increment():\n        nonlocal count\n        count += 1\n        return count\n    return increment\n\nc = make_counter()\nprint(c())\nprint(c())\nprint(c())',
            hint: 'Use nonlocal to modify the enclosed variable.',
            expectedOutput: '1\n2\n3',
          },
          {
            id: 'clo-4',
            title: 'Adder Factory',
            description: 'Create an adder function.',
            instructions: ['Write make_adder(n) returning a function that adds n', 'Create add5 = make_adder(5), print add5(10)'],
            starterCode: '',
            solution: 'def make_adder(n):\n    def add(x):\n        return x + n\n    return add\n\nadd5 = make_adder(5)\nprint(add5(10))',
            hint: 'The inner function adds n to its argument.',
            expectedOutput: '15',
          },
          {
            id: 'clo-5',
            title: 'Power Factory',
            description: 'Create a power function factory.',
            instructions: ['Write make_power(exp) returning a function that raises to exp', 'Create square and cube, print square(4) and cube(3)'],
            starterCode: '',
            solution: 'def make_power(exp):\n    def power(base):\n        return base ** exp\n    return power\n\nsquare = make_power(2)\ncube = make_power(3)\nprint(square(4))\nprint(cube(3))',
            hint: 'The inner function uses exp from the outer scope.',
            expectedOutput: '16\n27',
          }
        ],
      },
      {
        id: 'higher',
        number: 7,
        title: 'Higher-Order Functions',
        description: 'Functions that take or return other functions.',
        icon: 'ArrowUpDown',
        type: 'exercises',
        lesson: `A **higher-order function** either takes a function as an argument or returns a function. They're a key concept in functional programming.

## Functions as Arguments

\`\`\`python
def apply(func, value):
    return func(value)

print(apply(abs, -42))
print(apply(str, 123))
\`\`\`
>>> 42
>>> 123

## map() — Transform Every Item

\`\`\`python
nums = [1, 2, 3, 4]
result = list(map(str, nums))
print(result)
\`\`\`
>>> ['1', '2', '3', '4']

## filter() — Keep Matching Items

\`\`\`python
nums = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, nums))
print(evens)
\`\`\`
>>> [2, 4, 6]

## sorted() with key

\`\`\`python
words = ["banana", "apple", "cherry"]
by_length = sorted(words, key=len)
print(by_length)
\`\`\`
>>> ['apple', 'banana', 'cherry']

## reduce() — Accumulate to One Value

\`\`\`python
from functools import reduce
nums = [1, 2, 3, 4, 5]
total = reduce(lambda a, b: a + b, nums)
print(total)
\`\`\`
>>> 15

## Returning Functions

\`\`\`python
def make_validator(min_len):
    def validate(s):
        return len(s) >= min_len
    return validate

check = make_validator(5)
print(check("Hi"))
print(check("Hello!"))
\`\`\`
>>> False
>>> True

## Composing Functions

\`\`\`python
def compose(f, g):
    def combined(x):
        return f(g(x))
    return combined

add1 = lambda x: x + 1
double = lambda x: x * 2
add1_then_double = compose(double, add1)
print(add1_then_double(5))
\`\`\`
>>> 12

💡 Higher-order functions let you write more abstract, reusable code.

⚠️ List comprehensions are often clearer than map/filter for simple cases.`,
        exercises: [
          {
            id: 'ho-1',
            title: 'Apply Function',
            description: 'Pass a function as argument.',
            instructions: ['Write apply_twice(func, x) that applies func to x, then to the result', 'Use it to double 3 twice (3 -> 6 -> 12)'],
            starterCode: '',
            solution: 'def apply_twice(func, x):\n    return func(func(x))\n\nprint(apply_twice(lambda x: x * 2, 3))',
            hint: 'Call func on x, then func on the result.',
            expectedOutput: '12',
          },
          {
            id: 'ho-2',
            title: 'Map Transform',
            description: 'Use map to transform data.',
            instructions: ['Convert [\'1\', \'2\', \'3\'] to integers using map', 'Print as a list'],
            starterCode: '',
            solution: 'result = list(map(int, [\'1\', \'2\', \'3\']))\nprint(result)',
            hint: 'map(function, iterable) applies function to each item.',
            expectedOutput: '[1, 2, 3]',
          },
          {
            id: 'ho-3',
            title: 'Filter Data',
            description: 'Use filter to select items.',
            instructions: ['Filter words longer than 4 chars from [\'hi\', \'hello\', \'hey\', \'world\']'],
            starterCode: '',
            solution: 'words = [\'hi\', \'hello\', \'hey\', \'world\']\nresult = list(filter(lambda w: len(w) > 4, words))\nprint(result)',
            hint: 'filter keeps items where the function returns True.',
            expectedOutput: '[\'hello\', \'world\']',
          },
          {
            id: 'ho-4',
            title: 'Custom Sort',
            description: 'Sort with a key function.',
            instructions: ['Sort [(\'Alice\', 85), (\'Bob\', 92), (\'Eve\', 78)] by score (second element)'],
            starterCode: '',
            solution: 'data = [(\'Alice\', 85), (\'Bob\', 92), (\'Eve\', 78)]\nresult = sorted(data, key=lambda x: x[1])\nprint(result)',
            hint: 'Use key parameter with a lambda.',
            expectedOutput: '[(\'Eve\', 78), (\'Alice\', 85), (\'Bob\', 92)]',
          },
          {
            id: 'ho-5',
            title: 'Reduce',
            description: 'Accumulate with reduce.',
            instructions: ['Use reduce to find the product of [1, 2, 3, 4, 5]'],
            starterCode: '',
            solution: 'from functools import reduce\nresult = reduce(lambda a, b: a * b, [1, 2, 3, 4, 5])\nprint(result)',
            hint: 'reduce applies function cumulatively.',
            expectedOutput: '120',
          }
        ],
      },
      {
        id: 'builtins',
        number: 8,
        title: 'Built-in Functions Deep Dive',
        description: 'Master Python\'s most useful built-in functions.',
        icon: 'Wrench',
        type: 'exercises',
        lesson: `Python has many powerful built-in functions. Mastering them makes your code shorter and clearer.

## zip() — Pair Up Iterables

\`\`\`python
names = ["Alice", "Bob", "Charlie"]
scores = [85, 92, 78]
for name, score in zip(names, scores):
    print(f"{name}: {score}")
\`\`\`
>>> Alice: 85
>>> Bob: 92
>>> Charlie: 78

## any() and all()

\`\`\`python
nums = [1, 0, 3, 0, 5]
print(any(nums))     # At least one truthy?
print(all(nums))     # All truthy?
print(any(x > 4 for x in nums))
print(all(x > 0 for x in nums))
\`\`\`
>>> True
>>> False
>>> True
>>> False

## isinstance()

\`\`\`python
print(isinstance(42, int))
print(isinstance("hi", str))
print(isinstance(42, (int, float)))   # Check multiple types
\`\`\`
>>> True
>>> True
>>> True

## enumerate()

\`\`\`python
for i, char in enumerate("ABC"):
    print(f"{i}: {char}")
\`\`\`
>>> 0: A
>>> 1: B
>>> 2: C

## reversed() and sum()

\`\`\`python
print(list(reversed([1, 2, 3])))
print(sum([1, 2, 3, 4, 5]))
print(sum([1, 2, 3], 10))   # Start from 10
\`\`\`
>>> [3, 2, 1]
>>> 15
>>> 16

## chr() and ord()

\`\`\`python
print(chr(65))    # Number to character
print(ord('A'))   # Character to number
\`\`\`
>>> A
>>> 65

💡 Always check if a built-in exists before writing your own version.

💡 \`zip()\` stops at the shortest iterable. Use \`itertools.zip_longest\` for all items.`,
        exercises: [
          {
            id: 'bi-1',
            title: 'Zip Lists',
            description: 'Pair up two lists.',
            instructions: ['Zip names=[\'a\',\'b\',\'c\'] with nums=[1,2,3]', 'Print each pair'],
            starterCode: '',
            solution: 'names = [\'a\', \'b\', \'c\']\nnums = [1, 2, 3]\nfor n, num in zip(names, nums):\n    print(f\'{n}: {num}\')',
            hint: 'zip() pairs items from two iterables.',
            expectedOutput: 'a: 1\nb: 2\nc: 3',
          },
          {
            id: 'bi-2',
            title: 'Any and All',
            description: 'Check collections with any/all.',
            instructions: ['Check if any number in [0, 0, 1, 0] is truthy', 'Check if all numbers in [1, 2, 3] are truthy'],
            starterCode: '',
            solution: 'print(any([0, 0, 1, 0]))\nprint(all([1, 2, 3]))',
            hint: 'any() returns True if any item is truthy.',
            expectedOutput: 'True\nTrue',
          },
          {
            id: 'bi-3',
            title: 'Enumerate',
            description: 'Get indices while iterating.',
            instructions: ['Enumerate [\'x\', \'y\', \'z\'] starting from 1', 'Print each index and value'],
            starterCode: '',
            solution: 'for i, val in enumerate([\'x\', \'y\', \'z\'], 1):\n    print(f\'{i}: {val}\')',
            hint: 'enumerate(iterable, start) gives (index, value) pairs.',
            expectedOutput: '1: x\n2: y\n3: z',
          },
          {
            id: 'bi-4',
            title: 'isinstance Check',
            description: 'Check variable types.',
            instructions: ['Print whether 42 is an int', 'Print whether \'hi\' is an int'],
            starterCode: '',
            solution: 'print(isinstance(42, int))\nprint(isinstance(\'hi\', int))',
            hint: 'isinstance(value, type) returns True/False.',
            expectedOutput: 'True\nFalse',
          },
          {
            id: 'bi-5',
            title: 'Sum with Start',
            description: 'Use sum with a start value.',
            instructions: ['Sum [10, 20, 30] starting from 100', 'Print the result'],
            starterCode: '',
            solution: 'print(sum([10, 20, 30], 100))',
            hint: 'sum(iterable, start) adds start to the total.',
            expectedOutput: '160',
          }
        ],
      }
    ],
  },
  {
    id: 'data-structures',
    title: 'Data Structures',
    subtitle: 'Organize Your Data',
    description: 'Master tuples, dictionaries, sets, nested structures, and the collections module.',
    icon: 'Database',
    color: 'violet',
    categories: [
      {
        id: 'tuples',
        number: 1,
        title: 'Tuples & Immutability',
        description: 'Work with fixed, unchangeable sequences.',
        icon: 'Lock',
        type: 'exercises',
        lesson: `Tuples are **ordered, immutable sequences**. Once created, they cannot be changed.

## Creating Tuples

\`\`\`python
point = (3, 4)
colors = ("red", "green", "blue")
single = (42,)      # Note the comma for single-item tuple
empty = ()
print(point, colors)
\`\`\`
>>> (3, 4) ('red', 'green', 'blue')

## Accessing Items

Same indexing as lists:
\`\`\`python
t = (10, 20, 30, 40)
print(t[0])
print(t[-1])
print(t[1:3])
\`\`\`
>>> 10
>>> 40
>>> (20, 30)

## Immutability

\`\`\`python
t = (1, 2, 3)
# t[0] = 10  # TypeError! Can't modify
\`\`\`

## Why Use Tuples?

- **Safer**: can't accidentally change data
- **Faster**: slightly more efficient than lists
- **Hashable**: can be used as dict keys or in sets
- **Unpacking**: elegant variable assignment

## Tuple Unpacking

\`\`\`python
point = (3, 4)
x, y = point
print(f"x={x}, y={y}")
\`\`\`
>>> x=3, y=4

\`\`\`python
first, *rest = (1, 2, 3, 4, 5)
print(first)
print(rest)
\`\`\`
>>> 1
>>> [2, 3, 4, 5]

## Named Tuples

\`\`\`python
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(3, 4)
print(p.x, p.y)
\`\`\`
>>> 3 4

## Tuple Methods

Only two: \`count()\` and \`index()\`:
\`\`\`python
t = (1, 2, 3, 2, 1)
print(t.count(2))
print(t.index(3))
\`\`\`
>>> 2
>>> 2

💡 Use tuples for data that shouldn't change (coordinates, RGB colors, database records).

⚠️ \`(42)\` is just an integer in parentheses — use \`(42,)\` for a single-item tuple.`,
        exercises: [
          {
            id: 'tup-1',
            title: 'Create Tuples',
            description: 'Create and access tuples.',
            instructions: ['Create a tuple with (1, 2, 3)', 'Print the first and last element'],
            starterCode: '',
            solution: 't = (1, 2, 3)\nprint(t[0])\nprint(t[-1])',
            hint: 'Use indexing like lists.',
            expectedOutput: '1\n3',
          },
          {
            id: 'tup-2',
            title: 'Tuple Unpacking',
            description: 'Unpack tuple values.',
            instructions: ['Create point = (5, 10)', 'Unpack into x and y', 'Print x and y'],
            starterCode: '',
            solution: 'point = (5, 10)\nx, y = point\nprint(x)\nprint(y)',
            hint: 'Assign variables in order.',
            expectedOutput: '5\n10',
          },
          {
            id: 'tup-3',
            title: 'Star Unpacking',
            description: 'Use * to capture remaining items.',
            instructions: ['Unpack (1,2,3,4,5) into first and *rest', 'Print both'],
            starterCode: '',
            solution: 'first, *rest = (1, 2, 3, 4, 5)\nprint(first)\nprint(rest)',
            hint: '*rest captures remaining items as a list.',
            expectedOutput: '1\n[2, 3, 4, 5]',
          },
          {
            id: 'tup-4',
            title: 'Tuple Methods',
            description: 'Use count and index.',
            instructions: ['Create t = (1, 3, 5, 3, 7, 3)', 'Print how many 3s and the index of 5'],
            starterCode: '',
            solution: 't = (1, 3, 5, 3, 7, 3)\nprint(t.count(3))\nprint(t.index(5))',
            hint: 'Use .count() and .index().',
            expectedOutput: '3\n2',
          },
          {
            id: 'tup-5',
            title: 'Named Tuple',
            description: 'Create named tuples.',
            instructions: ['Create a Point namedtuple with x, y fields', 'Create point (3, 4) and print x and y'],
            starterCode: '',
            solution: 'from collections import namedtuple\nPoint = namedtuple(\'Point\', [\'x\', \'y\'])\np = Point(3, 4)\nprint(p.x)\nprint(p.y)',
            hint: 'namedtuple(\'Name\', [\'field1\', \'field2\']).',
            expectedOutput: '3\n4',
          }
        ],
      },
      {
        id: 'dicts',
        number: 2,
        title: 'Dictionaries Basics',
        description: 'Store key-value pairs for fast lookups.',
        icon: 'BookOpen',
        type: 'exercises',
        lesson: `Dictionaries store data as **key-value pairs**. They're one of Python's most powerful data structures.

## Creating Dictionaries

\`\`\`python
person = {"name": "Alice", "age": 25, "city": "Paris"}
print(person)
\`\`\`
>>> {'name': 'Alice', 'age': 25, 'city': 'Paris'}

## Accessing Values

\`\`\`python
person = {"name": "Alice", "age": 25}
print(person["name"])
print(person.get("age"))
print(person.get("email", "N/A"))   # Default if missing
\`\`\`
>>> Alice
>>> 25
>>> N/A

## Adding & Modifying

\`\`\`python
d = {"a": 1}
d["b"] = 2       # Add new key
d["a"] = 10      # Modify existing
print(d)
\`\`\`
>>> {'a': 10, 'b': 2}

## Removing Items

\`\`\`python
d = {"a": 1, "b": 2, "c": 3}
del d["b"]
popped = d.pop("c")
print(d)
print(popped)
\`\`\`
>>> {'a': 1}
>>> 3

## Checking Keys

\`\`\`python
d = {"name": "Alice"}
print("name" in d)
print("age" in d)
\`\`\`
>>> True
>>> False

## Dictionary Length

\`\`\`python
d = {"a": 1, "b": 2, "c": 3}
print(len(d))
\`\`\`
>>> 3

⚠️ Keys must be immutable (strings, numbers, tuples). Lists cannot be keys.

⚠️ \`d["missing_key"]\` raises \`KeyError\`. Use \`.get()\` for safe access.

💡 Dictionaries are unordered in Python < 3.7, ordered by insertion in 3.7+.`,
        exercises: [
          {
            id: 'dict-1',
            title: 'Create a Dict',
            description: 'Create and access a dictionary.',
            instructions: ['Create person = {\'name\': \'Alice\', \'age\': 25}', 'Print the name'],
            starterCode: '',
            solution: 'person = {\'name\': \'Alice\', \'age\': 25}\nprint(person[\'name\'])',
            hint: 'Use dict[\'key\'] to access values.',
            expectedOutput: 'Alice',
          },
          {
            id: 'dict-2',
            title: 'Add and Modify',
            description: 'Change dictionary contents.',
            instructions: ['Create d = {\'x\': 1}', 'Add key \'y\' with value 2', 'Change \'x\' to 10', 'Print the dict'],
            starterCode: '',
            solution: 'd = {\'x\': 1}\nd[\'y\'] = 2\nd[\'x\'] = 10\nprint(d)',
            hint: 'Assign to a key to add or modify.',
            expectedOutput: '{\'x\': 10, \'y\': 2}',
          },
          {
            id: 'dict-3',
            title: 'Safe Access',
            description: 'Use get() for safe lookups.',
            instructions: ['Create d = {\'a\': 1}', 'Print d.get(\'a\')', 'Print d.get(\'b\', \'missing\')'],
            starterCode: '',
            solution: 'd = {\'a\': 1}\nprint(d.get(\'a\'))\nprint(d.get(\'b\', \'missing\'))',
            hint: '.get(key, default) returns default if key missing.',
            expectedOutput: '1\nmissing',
          },
          {
            id: 'dict-4',
            title: 'Remove Items',
            description: 'Delete from a dictionary.',
            instructions: ['Create d = {\'a\':1, \'b\':2, \'c\':3}', 'Remove \'b\' using pop and print the popped value', 'Print remaining dict'],
            starterCode: '',
            solution: 'd = {\'a\': 1, \'b\': 2, \'c\': 3}\nval = d.pop(\'b\')\nprint(val)\nprint(d)',
            hint: 'Use .pop(key) to remove and return the value.',
            expectedOutput: '2\n{\'a\': 1, \'c\': 3}',
          },
          {
            id: 'dict-5',
            title: 'Check Membership',
            description: 'Test if keys exist.',
            instructions: ['Create d = {\'x\': 1, \'y\': 2}', 'Print whether \'x\' is in d', 'Print whether \'z\' is in d'],
            starterCode: '',
            solution: 'd = {\'x\': 1, \'y\': 2}\nprint(\'x\' in d)\nprint(\'z\' in d)',
            hint: 'Use \'key in dict\' to check.',
            expectedOutput: 'True\nFalse',
          }
        ],
      },
      {
        id: 'dict-adv',
        number: 3,
        title: 'Dictionaries Iteration & Methods',
        description: 'Iterate over and manipulate dictionaries effectively.',
        icon: 'RotateCcw',
        type: 'exercises',
        lesson: `Master dictionary iteration patterns and useful methods.

## Iterating Over Dictionaries

\`\`\`python
d = {"a": 1, "b": 2, "c": 3}

# Keys (default)
for key in d:
    print(key, end=" ")
print()

# Values
for val in d.values():
    print(val, end=" ")
print()

# Key-value pairs
for key, val in d.items():
    print(f"{key}={val}", end=" ")
\`\`\`
>>> a b c
>>> 1 2 3
>>> a=1 b=2 c=3

## Dictionary Comprehensions

\`\`\`python
squares = {x: x**2 for x in range(5)}
print(squares)
\`\`\`
>>> {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

## Merging Dictionaries

\`\`\`python
a = {"x": 1, "y": 2}
b = {"y": 3, "z": 4}
merged = {**a, **b}     # Python 3.5+
print(merged)

# Or use |= in Python 3.9+
a |= b
print(a)
\`\`\`
>>> {'x': 1, 'y': 3, 'z': 4}
>>> {'x': 1, 'y': 3, 'z': 4}

## setdefault()

\`\`\`python
d = {"a": 1}
d.setdefault("b", 2)   # Sets only if missing
d.setdefault("a", 99)  # a exists, no change
print(d)
\`\`\`
>>> {'a': 1, 'b': 2}

## Counting Pattern

\`\`\`python
text = "hello"
counts = {}
for char in text:
    counts[char] = counts.get(char, 0) + 1
print(counts)
\`\`\`
>>> {'h': 1, 'e': 1, 'l': 2, 'o': 1}

💡 Use \`.items()\` for most iteration — gives you both key and value.

💡 Dict comprehensions are concise for transforming or filtering dicts.`,
        exercises: [
          {
            id: 'da-1',
            title: 'Iterate Keys and Values',
            description: 'Loop through a dictionary.',
            instructions: ['Create d = {\'a\':1, \'b\':2, \'c\':3}', 'Print each key-value pair as \'key: value\''],
            starterCode: '',
            solution: 'd = {\'a\': 1, \'b\': 2, \'c\': 3}\nfor k, v in d.items():\n    print(f\'{k}: {v}\')',
            hint: 'Use .items() to get key-value pairs.',
            expectedOutput: 'a: 1\nb: 2\nc: 3',
          },
          {
            id: 'da-2',
            title: 'Dict Comprehension',
            description: 'Create dicts with comprehensions.',
            instructions: ['Create a dict mapping numbers 1-5 to their cubes', 'Print it'],
            starterCode: '',
            solution: 'cubes = {x: x**3 for x in range(1, 6)}\nprint(cubes)',
            hint: 'Use {key: value for x in range()}.',
            expectedOutput: '{1: 1, 2: 8, 3: 27, 4: 64, 5: 125}',
          },
          {
            id: 'da-3',
            title: 'Merge Dicts',
            description: 'Combine two dictionaries.',
            instructions: ['Merge {\'a\':1,\'b\':2} and {\'c\':3,\'d\':4}', 'Print the result'],
            starterCode: '',
            solution: 'a = {\'a\': 1, \'b\': 2}\nb = {\'c\': 3, \'d\': 4}\nmerged = {**a, **b}\nprint(merged)',
            hint: 'Use {**dict1, **dict2} to merge.',
            expectedOutput: '{\'a\': 1, \'b\': 2, \'c\': 3, \'d\': 4}',
          },
          {
            id: 'da-4',
            title: 'Count Characters',
            description: 'Count occurrences with a dict.',
            instructions: ['Count each character in \'banana\'', 'Print the counts dict'],
            starterCode: '',
            solution: 'counts = {}\nfor c in \'banana\':\n    counts[c] = counts.get(c, 0) + 1\nprint(counts)',
            hint: 'Use .get(key, 0) + 1 to count.',
            expectedOutput: '{\'b\': 1, \'a\': 3, \'n\': 2}',
          },
          {
            id: 'da-5',
            title: 'Filter Dict',
            description: 'Filter a dict with comprehension.',
            instructions: ['From {\'a\':1,\'b\':5,\'c\':3,\'d\':8}, keep only items where value > 3'],
            starterCode: '',
            solution: 'd = {\'a\': 1, \'b\': 5, \'c\': 3, \'d\': 8}\nresult = {k: v for k, v in d.items() if v > 3}\nprint(result)',
            hint: 'Add \'if condition\' to the comprehension.',
            expectedOutput: '{\'b\': 5, \'d\': 8}',
          }
        ],
      },
      {
        id: 'sets',
        number: 4,
        title: 'Sets & Frozensets',
        description: 'Work with unique, unordered collections.',
        icon: 'CircleDot',
        type: 'exercises',
        lesson: `Sets are **unordered collections of unique elements**. They're perfect for removing duplicates and set math.

## Creating Sets

\`\`\`python
fruits = {"apple", "banana", "cherry"}
from_list = set([1, 2, 2, 3, 3])
empty = set()    # NOT {} — that's an empty dict!
print(from_list)
\`\`\`
>>> {1, 2, 3}

## Adding and Removing

\`\`\`python
s = {1, 2, 3}
s.add(4)
s.discard(2)    # No error if missing
s.remove(1)     # Error if missing
print(s)
\`\`\`
>>> {3, 4}

## Set Operations

\`\`\`python
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a | b)     # Union
print(a & b)     # Intersection
print(a - b)     # Difference
print(a ^ b)     # Symmetric difference
\`\`\`
>>> {1, 2, 3, 4, 5, 6}
>>> {3, 4}
>>> {1, 2}
>>> {1, 2, 5, 6}

## Subsets and Supersets

\`\`\`python
a = {1, 2, 3}
b = {1, 2, 3, 4, 5}
print(a.issubset(b))
print(b.issuperset(a))
\`\`\`
>>> True
>>> True

## Frozensets

Immutable sets — can be used as dict keys:
\`\`\`python
fs = frozenset([1, 2, 3])
print(fs)
\`\`\`
>>> frozenset({1, 2, 3})

## Set Comprehensions

\`\`\`python
squares = {x**2 for x in range(5)}
print(squares)
\`\`\`
>>> {0, 1, 4, 9, 16}

💡 Sets are very fast for membership testing: \`x in my_set\` is O(1).

⚠️ Sets are unordered — you can't index them with \`s[0]\`.`,
        exercises: [
          {
            id: 'set-1',
            title: 'Remove Duplicates',
            description: 'Use sets to deduplicate.',
            instructions: ['Create a set from [1,2,2,3,3,3,4]', 'Print the result'],
            starterCode: '',
            solution: 's = set([1, 2, 2, 3, 3, 3, 4])\nprint(s)',
            hint: 'set() removes duplicates.',
            expectedOutputContains: ['1', '2', '3', '4'],
          },
          {
            id: 'set-2',
            title: 'Set Union',
            description: 'Combine two sets.',
            instructions: ['Create a={1,2,3} and b={3,4,5}', 'Print their union'],
            starterCode: '',
            solution: 'a = {1, 2, 3}\nb = {3, 4, 5}\nprint(a | b)',
            hint: 'Use | for union.',
            expectedOutputContains: ['1', '2', '3', '4', '5'],
          },
          {
            id: 'set-3',
            title: 'Set Intersection',
            description: 'Find common elements.',
            instructions: ['Create a={1,2,3,4} and b={3,4,5,6}', 'Print their intersection'],
            starterCode: '',
            solution: 'a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a & b)',
            hint: 'Use & for intersection.',
            expectedOutputContains: ['3', '4'],
          },
          {
            id: 'set-4',
            title: 'Set Difference',
            description: 'Find unique elements.',
            instructions: ['Create a={1,2,3,4,5} and b={3,4,5,6,7}', 'Print elements in a but not in b'],
            starterCode: '',
            solution: 'a = {1, 2, 3, 4, 5}\nb = {3, 4, 5, 6, 7}\nprint(a - b)',
            hint: 'Use - for difference.',
            expectedOutputContains: ['1', '2'],
          },
          {
            id: 'set-5',
            title: 'Set Comprehension',
            description: 'Create sets with comprehensions.',
            instructions: ['Create a set of even numbers from 0-9 using a comprehension', 'Print it'],
            starterCode: '',
            solution: 'evens = {x for x in range(10) if x % 2 == 0}\nprint(evens)',
            hint: 'Use {expression for x in range() if condition}.',
            expectedOutputContains: ['0', '2', '4', '6', '8'],
          }
        ],
      },
      {
        id: 'nested',
        number: 5,
        title: 'Nested Data Structures',
        description: 'Work with complex, multi-level data.',
        icon: 'Network',
        type: 'exercises',
        lesson: `Real-world data is often nested — lists of dicts, dicts of lists, etc.

## Lists of Dictionaries

\`\`\`python
students = [
    {"name": "Alice", "grade": 90},
    {"name": "Bob", "grade": 85},
    {"name": "Charlie", "grade": 92}
]
for s in students:
    print(f"{s['name']}: {s['grade']}")
\`\`\`
>>> Alice: 90
>>> Bob: 85
>>> Charlie: 92

## Dictionary of Lists

\`\`\`python
scores = {
    "math": [90, 85, 92],
    "science": [88, 91, 79]
}
for subject, grades in scores.items():
    avg = sum(grades) / len(grades)
    print(f"{subject}: {avg:.1f}")
\`\`\`
>>> math: 89.0
>>> science: 86.0

## Nested Dictionaries

\`\`\`python
users = {
    "alice": {"age": 25, "city": "Paris"},
    "bob": {"age": 30, "city": "London"}
}
print(users["alice"]["city"])
\`\`\`
>>> Paris

## 2D Lists (Matrices)

\`\`\`python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print(matrix[1][2])   # Row 1, Col 2
\`\`\`
>>> 6

## Accessing Deeply Nested Data

\`\`\`python
data = {"results": [{"name": "test", "scores": [95, 87]}]}
print(data["results"][0]["scores"][1])
\`\`\`
>>> 87

💡 Use helper functions to navigate deep structures.

⚠️ Be careful with references — modifying a nested list affects all references to it.`,
        exercises: [
          {
            id: 'nest-1',
            title: 'List of Dicts',
            description: 'Access data in list of dicts.',
            instructions: ['Create students = [{\'name\':\'Alice\',\'score\':90}, {\'name\':\'Bob\',\'score\':85}]', 'Print each name and score'],
            starterCode: '',
            solution: 'students = [{\'name\': \'Alice\', \'score\': 90}, {\'name\': \'Bob\', \'score\': 85}]\nfor s in students:\n    print(f"{s[\'name\']}: {s[\'score\']}")',
            hint: 'Loop through the list, access each dict\'s keys.',
            expectedOutput: 'Alice: 90\nBob: 85',
          },
          {
            id: 'nest-2',
            title: 'Dict of Lists',
            description: 'Work with lists inside dicts.',
            instructions: ['Create grades = {\'math\': [90, 85], \'sci\': [88, 92]}', 'Print the average of math grades'],
            starterCode: '',
            solution: 'grades = {\'math\': [90, 85], \'sci\': [88, 92]}\navg = sum(grades[\'math\']) / len(grades[\'math\'])\nprint(avg)',
            hint: 'Access the list by key, then compute.',
            expectedOutput: '87.5',
          },
          {
            id: 'nest-3',
            title: 'Nested Dict',
            description: 'Access nested dictionary values.',
            instructions: ['Create config = {\'db\': {\'host\': \'localhost\', \'port\': 5432}}', 'Print the port'],
            starterCode: '',
            solution: 'config = {\'db\': {\'host\': \'localhost\', \'port\': 5432}}\nprint(config[\'db\'][\'port\'])',
            hint: 'Chain bracket access: d[\'a\'][\'b\'].',
            expectedOutput: '5432',
          },
          {
            id: 'nest-4',
            title: '2D List',
            description: 'Work with a matrix.',
            instructions: ['Create a 3x3 matrix [[1,2,3],[4,5,6],[7,8,9]]', 'Print the center element'],
            starterCode: '',
            solution: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]\nprint(matrix[1][1])',
            hint: 'Row index first, then column.',
            expectedOutput: '5',
          },
          {
            id: 'nest-5',
            title: 'Transform Nested Data',
            description: 'Process complex structures.',
            instructions: ['From students = [{\'name\':\'Alice\',\'score\':90},{\'name\':\'Bob\',\'score\':85}]', 'Create a list of just names and print it'],
            starterCode: '',
            solution: 'students = [{\'name\': \'Alice\', \'score\': 90}, {\'name\': \'Bob\', \'score\': 85}]\nnames = [s[\'name\'] for s in students]\nprint(names)',
            hint: 'Use a list comprehension.',
            expectedOutput: '[\'Alice\', \'Bob\']',
          }
        ],
      },
      {
        id: 'unpack',
        number: 6,
        title: 'Unpacking & Star Expressions',
        description: 'Destructure sequences elegantly.',
        icon: 'Unplug',
        type: 'exercises',
        lesson: `Python's unpacking lets you assign sequence elements to variables in powerful ways.

## Basic Unpacking

\`\`\`python
a, b, c = [1, 2, 3]
print(a, b, c)
\`\`\`
>>> 1 2 3

## Star Unpacking (*) — Capture Rest

\`\`\`python
first, *middle, last = [1, 2, 3, 4, 5]
print(first)
print(middle)
print(last)
\`\`\`
>>> 1
>>> [2, 3, 4]
>>> 5

## Swap Values

\`\`\`python
a, b = 1, 2
a, b = b, a
print(a, b)
\`\`\`
>>> 2 1

## Unpacking in Function Calls

\`\`\`python
def add(a, b, c):
    return a + b + c

nums = [1, 2, 3]
print(add(*nums))    # Unpack list as args

config = {"a": 1, "b": 2, "c": 3}
print(add(**config))  # Unpack dict as kwargs
\`\`\`
>>> 6
>>> 6

## Nested Unpacking

\`\`\`python
(a, b), (c, d) = [1, 2], [3, 4]
print(a, b, c, d)
\`\`\`
>>> 1 2 3 4

## Ignoring Values

\`\`\`python
_, important, _ = (1, 42, 3)
print(important)

first, *_ = [1, 2, 3, 4, 5]
print(first)
\`\`\`
>>> 42
>>> 1

💡 Use \`_\` for values you want to discard.

⚠️ The number of variables must match the sequence length (unless using *).`,
        exercises: [
          {
            id: 'unp-1',
            title: 'Basic Unpack',
            description: 'Unpack a list into variables.',
            instructions: ['Unpack [10, 20, 30] into a, b, c', 'Print them'],
            starterCode: '',
            solution: 'a, b, c = [10, 20, 30]\nprint(a, b, c)',
            hint: 'Match variable count to items.',
            expectedOutput: '10 20 30',
          },
          {
            id: 'unp-2',
            title: 'Star Capture',
            description: 'Use * to capture remaining items.',
            instructions: ['Unpack [1,2,3,4,5] into first and *rest', 'Print both'],
            starterCode: '',
            solution: 'first, *rest = [1, 2, 3, 4, 5]\nprint(first)\nprint(rest)',
            hint: '* captures remaining items as a list.',
            expectedOutput: '1\n[2, 3, 4, 5]',
          },
          {
            id: 'unp-3',
            title: 'Head and Tail',
            description: 'Get first, middle, and last.',
            instructions: ['Unpack [1,2,3,4,5] into head, *middle, tail', 'Print all three'],
            starterCode: '',
            solution: 'head, *middle, tail = [1, 2, 3, 4, 5]\nprint(head)\nprint(middle)\nprint(tail)',
            hint: 'Put * in the middle position.',
            expectedOutput: '1\n[2, 3, 4]\n5',
          },
          {
            id: 'unp-4',
            title: 'Unpack in Call',
            description: 'Splat a list into function args.',
            instructions: ['Define add(a,b,c) returning sum', 'Call with *[10,20,30] and print'],
            starterCode: '',
            solution: 'def add(a, b, c):\n    return a + b + c\n\nprint(add(*[10, 20, 30]))',
            hint: 'Use * to unpack a list as arguments.',
            expectedOutput: '60',
          },
          {
            id: 'unp-5',
            title: 'Ignore Values',
            description: 'Use _ for unwanted values.',
            instructions: ['Unpack (1, 42, 3) ignoring first and last', 'Print only the middle value'],
            starterCode: '',
            solution: '_, important, _ = (1, 42, 3)\nprint(important)',
            hint: 'Use _ for values you don\'t need.',
            expectedOutput: '42',
          }
        ],
      },
      {
        id: 'sorting',
        number: 7,
        title: 'Sorting & Custom Sort',
        description: 'Sort data with flexible criteria.',
        icon: 'ArrowUpDown',
        type: 'exercises',
        lesson: `Python offers powerful, flexible sorting with \`sorted()\` and \`.sort()\`.

## Basic Sorting

\`\`\`python
nums = [3, 1, 4, 1, 5]
print(sorted(nums))         # Returns new list
print(sorted(nums, reverse=True))
\`\`\`
>>> [1, 1, 3, 4, 5]
>>> [5, 4, 3, 1, 1]

## sort() vs sorted()

- \`list.sort()\` — modifies in place, returns None
- \`sorted(iterable)\` — returns a new sorted list

\`\`\`python
a = [3, 1, 2]
b = sorted(a)
print(a)   # Unchanged
print(b)
a.sort()
print(a)   # Now sorted
\`\`\`
>>> [3, 1, 2]
>>> [1, 2, 3]
>>> [1, 2, 3]

## Custom Sort with key

\`\`\`python
words = ["banana", "pie", "apple"]
print(sorted(words, key=len))
\`\`\`
>>> ['pie', 'apple', 'banana']

## Sort Complex Data

\`\`\`python
students = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]
print(sorted(students, key=lambda s: s[1]))
\`\`\`
>>> [('Charlie', 78), ('Alice', 85), ('Bob', 92)]

## Sort by Multiple Criteria

\`\`\`python
data = [("Alice", 85), ("Bob", 85), ("Charlie", 92)]
result = sorted(data, key=lambda x: (-x[1], x[0]))
print(result)
\`\`\`
>>> [('Charlie', 92), ('Alice', 85), ('Bob', 85)]

## Stable Sort

Python's sort is **stable** — equal elements keep their original order.

💡 Use \`key\` instead of custom comparison functions — it's faster and cleaner.

💡 Negate numeric values for reverse sort on specific fields: \`key=lambda x: -x[1]\`.`,
        exercises: [
          {
            id: 'sort-1',
            title: 'Basic Sort',
            description: 'Sort a list of numbers.',
            instructions: ['Sort [5, 2, 8, 1, 9] and print the result'],
            starterCode: '',
            solution: 'print(sorted([5, 2, 8, 1, 9]))',
            hint: 'Use sorted() for a new sorted list.',
            expectedOutput: '[1, 2, 5, 8, 9]',
          },
          {
            id: 'sort-2',
            title: 'Reverse Sort',
            description: 'Sort in descending order.',
            instructions: ['Sort [3, 1, 4, 1, 5] in reverse order and print'],
            starterCode: '',
            solution: 'print(sorted([3, 1, 4, 1, 5], reverse=True))',
            hint: 'Use reverse=True.',
            expectedOutput: '[5, 4, 3, 1, 1]',
          },
          {
            id: 'sort-3',
            title: 'Sort by Length',
            description: 'Use a key function.',
            instructions: ['Sort [\'banana\', \'pie\', \'apple\', \'hi\'] by length'],
            starterCode: '',
            solution: 'print(sorted([\'banana\', \'pie\', \'apple\', \'hi\'], key=len))',
            hint: 'Use key=len.',
            expectedOutput: '[\'hi\', \'pie\', \'apple\', \'banana\']',
          },
          {
            id: 'sort-4',
            title: 'Sort Tuples',
            description: 'Sort by specific element.',
            instructions: ['Sort [(\'c\',3),(\'a\',1),(\'b\',2)] by the second element'],
            starterCode: '',
            solution: 'data = [(\'c\', 3), (\'a\', 1), (\'b\', 2)]\nprint(sorted(data, key=lambda x: x[1]))',
            hint: 'Use key=lambda x: x[1].',
            expectedOutput: '[(\'a\', 1), (\'b\', 2), (\'c\', 3)]',
          },
          {
            id: 'sort-5',
            title: 'Sort Dicts',
            description: 'Sort a list of dicts.',
            instructions: ['Sort [{\'n\':\'Bob\',\'a\':30},{\'n\':\'Alice\',\'a\':25}] by age', 'Print names in order'],
            starterCode: '',
            solution: 'people = [{\'n\': \'Bob\', \'a\': 30}, {\'n\': \'Alice\', \'a\': 25}]\nfor p in sorted(people, key=lambda x: x[\'a\']):\n    print(p[\'n\'])',
            hint: 'Use key=lambda x: x[\'a\'].',
            expectedOutput: 'Alice\nBob',
          }
        ],
      },
      {
        id: 'collections',
        number: 8,
        title: 'Collections Module',
        description: 'Specialized container types for common patterns.',
        icon: 'Archive',
        type: 'exercises',
        lesson: `The \`collections\` module provides specialized alternatives to Python's built-in containers.

## Counter — Count Things

\`\`\`python
from collections import Counter
text = "abracadabra"
c = Counter(text)
print(c)
print(c.most_common(3))
\`\`\`
>>> Counter({'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1})
>>> [('a', 5), ('b', 2), ('r', 2)]

## defaultdict — Dict with Default Values

\`\`\`python
from collections import defaultdict
dd = defaultdict(list)
dd["fruits"].append("apple")
dd["fruits"].append("banana")
dd["vegs"].append("carrot")
print(dict(dd))
\`\`\`
>>> {'fruits': ['apple', 'banana'], 'vegs': ['carrot']}

## deque — Double-Ended Queue

\`\`\`python
from collections import deque
d = deque([1, 2, 3])
d.appendleft(0)
d.append(4)
print(d)
d.popleft()
print(d)
\`\`\`
>>> deque([0, 1, 2, 3, 4])
>>> deque([1, 2, 3, 4])

## OrderedDict

Remembers insertion order (less needed since Python 3.7+):
\`\`\`python
from collections import OrderedDict
od = OrderedDict()
od["first"] = 1
od["second"] = 2
print(od)
\`\`\`
>>> OrderedDict([('first', 1), ('second', 2)])

## namedtuple

Already covered in the Tuples section — gives names to tuple positions.

## ChainMap

\`\`\`python
from collections import ChainMap
defaults = {"color": "red", "size": "M"}
custom = {"color": "blue"}
combined = ChainMap(custom, defaults)
print(combined["color"])
print(combined["size"])
\`\`\`
>>> blue
>>> M

💡 \`Counter\` is incredibly useful for frequency analysis.

💡 \`defaultdict\` eliminates "if key not in dict" patterns.`,
        exercises: [
          {
            id: 'col-1',
            title: 'Counter',
            description: 'Count element frequencies.',
            instructions: ['Count characters in \'mississippi\'', 'Print the 2 most common'],
            starterCode: '',
            solution: 'from collections import Counter\nc = Counter(\'mississippi\')\nprint(c.most_common(2))',
            hint: 'Use Counter(string).most_common(n).',
            expectedOutput: '[(\'s\', 4), (\'i\', 4)]',
          },
          {
            id: 'col-2',
            title: 'defaultdict',
            description: 'Use default values for missing keys.',
            instructions: ['Group words by first letter using defaultdict(list)', 'Words: [\'apple\',\'ant\',\'banana\',\'berry\']', 'Print the dict'],
            starterCode: '',
            solution: 'from collections import defaultdict\ndd = defaultdict(list)\nfor w in [\'apple\', \'ant\', \'banana\', \'berry\']:\n    dd[w[0]].append(w)\nprint(dict(dd))',
            hint: 'defaultdict(list) auto-creates empty lists.',
            expectedOutput: '{\'a\': [\'apple\', \'ant\'], \'b\': [\'banana\', \'berry\']}',
          },
          {
            id: 'col-3',
            title: 'deque Operations',
            description: 'Use a double-ended queue.',
            instructions: ['Create a deque from [1,2,3]', 'Add 0 to left, 4 to right', 'Print the deque'],
            starterCode: '',
            solution: 'from collections import deque\nd = deque([1, 2, 3])\nd.appendleft(0)\nd.append(4)\nprint(d)',
            hint: 'Use .appendleft() and .append().',
            expectedOutput: 'deque([0, 1, 2, 3, 4])',
          },
          {
            id: 'col-4',
            title: 'Counter Arithmetic',
            description: 'Combine counters.',
            instructions: ['Create counters for \'aab\' and \'abc\'', 'Print their sum'],
            starterCode: '',
            solution: 'from collections import Counter\na = Counter(\'aab\')\nb = Counter(\'abc\')\nprint(a + b)',
            hint: 'Counter + Counter adds counts.',
            expectedOutput: 'Counter({\'a\': 3, \'b\': 2, \'c\': 1})',
          },
          {
            id: 'col-5',
            title: 'defaultdict Counter',
            description: 'Count with defaultdict.',
            instructions: ['Count word lengths in [\'hi\',\'hello\',\'hey\',\'world\'] using defaultdict(int)'],
            starterCode: '',
            solution: 'from collections import defaultdict\ncounts = defaultdict(int)\nfor w in [\'hi\', \'hello\', \'hey\', \'world\']:\n    counts[len(w)] += 1\nprint(dict(counts))',
            hint: 'defaultdict(int) starts at 0.',
            expectedOutput: '{2: 1, 5: 2, 3: 1}',
          }
        ],
      }
    ],
  },
  {
    id: 'oop',
    title: 'Object-Oriented Programming',
    subtitle: 'Model the World',
    description: 'Build classes, use inheritance, polymorphism, magic methods, and learn key design patterns.',
    icon: 'Boxes',
    color: 'orange',
    categories: [
      {
        id: 'classes',
        number: 1,
        title: 'Classes & Objects',
        description: 'Create your own data types with classes.',
        icon: 'Box',
        type: 'exercises',
        lesson: `Classes let you create your own **data types** that bundle data and behavior together.

## Defining a Class

\`\`\`python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        return f"{self.name} says Woof!"

dog = Dog("Rex", 3)
print(dog.name)
print(dog.bark())
\`\`\`
>>> Rex
>>> Rex says Woof!

## The __init__ Method

\`__init__\` is the **constructor** — it runs when you create an object:

\`\`\`python
class Circle:
    def __init__(self, radius):
        self.radius = radius
        self.area = 3.14159 * radius ** 2

c = Circle(5)
print(f"Radius: {c.radius}, Area: {c.area:.2f}")
\`\`\`
>>> Radius: 5, Area: 78.54

## self

\`self\` refers to the **current instance**. Every method must have \`self\` as its first parameter:

\`\`\`python
class Counter:
    def __init__(self):
        self.count = 0

    def increment(self):
        self.count += 1

    def get_count(self):
        return self.count

c = Counter()
c.increment()
c.increment()
print(c.get_count())
\`\`\`
>>> 2

## Instance vs Class Attributes

\`\`\`python
class Car:
    wheels = 4          # Class attribute (shared)

    def __init__(self, color):
        self.color = color  # Instance attribute (unique)

car1 = Car("red")
car2 = Car("blue")
print(car1.wheels, car1.color)
print(car2.wheels, car2.color)
\`\`\`
>>> 4 red
>>> 4 blue

## String Representation

\`\`\`python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"Point({self.x}, {self.y})"

p = Point(3, 4)
print(p)
\`\`\`
>>> Point(3, 4)

⚠️ Don't forget \`self\` — it's the first parameter of every method.

⚠️ \`__init__\` doesn't return a value — it initializes the object in place.

💡 Classes model real-world entities: Dog, Car, User, Order, etc.`,
        exercises: [
          {
            id: 'cls-1',
            title: 'Basic Class',
            description: 'Define a simple class.',
            instructions: ['Create a Person class with name and age attributes', 'Create a person and print their name'],
            starterCode: '',
            solution: 'class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\np = Person(\'Alice\', 25)\nprint(p.name)',
            hint: 'Use __init__(self, ...) to set attributes.',
            expectedOutput: 'Alice',
          },
          {
            id: 'cls-2',
            title: 'Methods',
            description: 'Add behavior to a class.',
            instructions: ['Create a Rectangle class with width and height', 'Add an area() method', 'Print the area of a 5x3 rectangle'],
            starterCode: '',
            solution: 'class Rectangle:\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    def area(self):\n        return self.width * self.height\n\nr = Rectangle(5, 3)\nprint(r.area())',
            hint: 'Methods are functions inside the class.',
            expectedOutput: '15',
          },
          {
            id: 'cls-3',
            title: 'Class Attribute',
            description: 'Use shared class attributes.',
            instructions: ['Create Dog class with class attribute species = \'Canine\'', 'Create two dogs and print species for each'],
            starterCode: '',
            solution: 'class Dog:\n    species = \'Canine\'\n    def __init__(self, name):\n        self.name = name\n\nd1 = Dog(\'Rex\')\nd2 = Dog(\'Buddy\')\nprint(d1.species)\nprint(d2.species)',
            hint: 'Class attributes are shared by all instances.',
            expectedOutput: 'Canine\nCanine',
          },
          {
            id: 'cls-4',
            title: '__str__ Method',
            description: 'Define string representation.',
            instructions: ['Create a Point class with __str__ returning \'Point(x, y)\'', 'Print a Point(3, 4)'],
            starterCode: '',
            solution: 'class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    def __str__(self):\n        return f\'Point({self.x}, {self.y})\'\n\nprint(Point(3, 4))',
            hint: '__str__ defines what print() shows.',
            expectedOutput: 'Point(3, 4)',
          },
          {
            id: 'cls-5',
            title: 'Counter Class',
            description: 'Build a stateful class.',
            instructions: ['Create Counter with increment(), decrement(), get_count()', 'Start at 0, increment twice, decrement once, print count'],
            starterCode: '',
            solution: 'class Counter:\n    def __init__(self):\n        self.count = 0\n    def increment(self):\n        self.count += 1\n    def decrement(self):\n        self.count -= 1\n    def get_count(self):\n        return self.count\n\nc = Counter()\nc.increment()\nc.increment()\nc.decrement()\nprint(c.get_count())',
            hint: 'Track state with self.count.',
            expectedOutput: '1',
          }
        ],
      },
      {
        id: 'inheritance',
        number: 2,
        title: 'Inheritance',
        description: 'Build new classes from existing ones.',
        icon: 'GitBranch',
        type: 'exercises',
        lesson: `Inheritance lets a class **inherit attributes and methods** from another class, promoting code reuse.

## Basic Inheritance

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return f"{self.name} makes a sound"

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

d = Dog("Rex")
c = Cat("Whiskers")
print(d.speak())
print(c.speak())
\`\`\`
>>> Rex says Woof!
>>> Whiskers says Meow!

## super() — Call Parent Methods

\`\`\`python
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

class Manager(Employee):
    def __init__(self, name, salary, department):
        super().__init__(name, salary)
        self.department = department

m = Manager("Alice", 90000, "Engineering")
print(f"{m.name} manages {m.department}")
\`\`\`
>>> Alice manages Engineering

## isinstance() and issubclass()

\`\`\`python
d = Dog("Rex")
print(isinstance(d, Dog))
print(isinstance(d, Animal))
print(issubclass(Dog, Animal))
\`\`\`
>>> True
>>> True
>>> True

## Multiple Inheritance

\`\`\`python
class Flyable:
    def fly(self):
        return "Flying!"

class Swimmable:
    def swim(self):
        return "Swimming!"

class Duck(Flyable, Swimmable):
    pass

d = Duck()
print(d.fly())
print(d.swim())
\`\`\`
>>> Flying!
>>> Swimming!

## Method Resolution Order (MRO)

\`\`\`python
print(Duck.__mro__)
\`\`\`

💡 Use inheritance for "is-a" relationships: a Dog IS an Animal.

⚠️ Avoid deep inheritance chains — prefer composition (has-a) over inheritance (is-a) when possible.`,
        exercises: [
          {
            id: 'inh-1',
            title: 'Basic Inheritance',
            description: 'Create a child class.',
            instructions: ['Create Animal with name and speak() returning \'Some sound\'', 'Create Dog(Animal) overriding speak() with \'Woof!\'', 'Print Dog(\'Rex\').speak()'],
            starterCode: '',
            solution: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return \'Some sound\'\n\nclass Dog(Animal):\n    def speak(self):\n        return \'Woof!\'\n\nprint(Dog(\'Rex\').speak())',
            hint: 'Put parent class in parentheses: class Dog(Animal).',
            expectedOutput: 'Woof!',
          },
          {
            id: 'inh-2',
            title: 'Using super()',
            description: 'Call parent constructor.',
            instructions: ['Create Shape with color', 'Create Circle(Shape) adding radius via super()', 'Print color and radius'],
            starterCode: '',
            solution: 'class Shape:\n    def __init__(self, color):\n        self.color = color\n\nclass Circle(Shape):\n    def __init__(self, color, radius):\n        super().__init__(color)\n        self.radius = radius\n\nc = Circle(\'red\', 5)\nprint(c.color)\nprint(c.radius)',
            hint: 'Use super().__init__() to call parent\'s __init__.',
            expectedOutput: 'red\n5',
          },
          {
            id: 'inh-3',
            title: 'Override Method',
            description: 'Override a parent method.',
            instructions: ['Create Vehicle with describe() returning \'A vehicle\'', 'Create Car(Vehicle) overriding to return \'A car\''],
            starterCode: '',
            solution: 'class Vehicle:\n    def describe(self):\n        return \'A vehicle\'\n\nclass Car(Vehicle):\n    def describe(self):\n        return \'A car\'\n\nprint(Car().describe())',
            hint: 'Define the same method name in the child class.',
            expectedOutput: 'A car',
          },
          {
            id: 'inh-4',
            title: 'isinstance Check',
            description: 'Check inheritance relationships.',
            instructions: ['Create Animal and Dog(Animal)', 'Check if Dog(\'Rex\') is instance of both Dog and Animal'],
            starterCode: '',
            solution: 'class Animal:\n    pass\n\nclass Dog(Animal):\n    pass\n\nd = Dog()\nprint(isinstance(d, Dog))\nprint(isinstance(d, Animal))',
            hint: 'isinstance checks the full inheritance chain.',
            expectedOutput: 'True\nTrue',
          },
          {
            id: 'inh-5',
            title: 'Extend Parent',
            description: 'Add new methods in child class.',
            instructions: ['Create Animal with name', 'Create Dog(Animal) adding fetch() returning \'[name] fetches!\'', 'Test it'],
            starterCode: '',
            solution: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(Animal):\n    def fetch(self):\n        return f\'{self.name} fetches!\'\n\nprint(Dog(\'Rex\').fetch())',
            hint: 'Child classes can add new methods.',
            expectedOutput: 'Rex fetches!',
          }
        ],
      },
      {
        id: 'polymorphism',
        number: 3,
        title: 'Polymorphism & Abstraction',
        description: 'Write code that works with many types.',
        icon: 'Shapes',
        type: 'exercises',
        lesson: `Polymorphism means **different types respond to the same interface**. It lets you write flexible, generic code.

## Duck Typing

Python uses "duck typing" — if it walks like a duck and quacks like a duck, it IS a duck:

\`\`\`python
class Dog:
    def speak(self):
        return "Woof!"

class Cat:
    def speak(self):
        return "Meow!"

def animal_sound(animal):
    print(animal.speak())

animal_sound(Dog())
animal_sound(Cat())
\`\`\`
>>> Woof!
>>> Meow!

## Abstract Base Classes

Force subclasses to implement certain methods:

\`\`\`python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        return 3.14159 * self.radius ** 2

# Shape()  # TypeError! Can't instantiate abstract class
c = Circle(5)
print(f"{c.area():.2f}")
\`\`\`
>>> 78.54

## Polymorphic Functions

\`\`\`python
def total_area(shapes):
    return sum(s.area() for s in shapes)

class Square(Shape):
    def __init__(self, side):
        self.side = side
    def area(self):
        return self.side ** 2

shapes = [Circle(5), Square(4)]
print(total_area(shapes))
\`\`\`

## Operator Overloading

\`\`\`python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    def __str__(self):
        return f"Vector({self.x}, {self.y})"

v = Vector(1, 2) + Vector(3, 4)
print(v)
\`\`\`
>>> Vector(4, 6)

💡 Program to interfaces, not implementations — depend on what objects DO, not what they ARE.

💡 Use ABC when you want to enforce a contract on subclasses.`,
        exercises: [
          {
            id: 'poly-1',
            title: 'Duck Typing',
            description: 'Write polymorphic code.',
            instructions: ['Create Dog and Cat classes each with speak()', 'Write a function that calls speak() on any animal', 'Test with both'],
            starterCode: '',
            solution: 'class Dog:\n    def speak(self):\n        return \'Woof!\'\nclass Cat:\n    def speak(self):\n        return \'Meow!\'\n\ndef make_speak(animal):\n    print(animal.speak())\n\nmake_speak(Dog())\nmake_speak(Cat())',
            hint: 'The function just calls .speak() without checking type.',
            expectedOutput: 'Woof!\nMeow!',
          },
          {
            id: 'poly-2',
            title: 'Abstract Class',
            description: 'Use ABC to enforce methods.',
            instructions: ['Create abstract Shape with area() method', 'Create Rectangle(Shape) implementing area()', 'Print area of 4x5 rectangle'],
            starterCode: '',
            solution: 'from abc import ABC, abstractmethod\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\nclass Rectangle(Shape):\n    def __init__(self, w, h):\n        self.w = w\n        self.h = h\n    def area(self):\n        return self.w * self.h\nprint(Rectangle(4, 5).area())',
            hint: 'Use @abstractmethod decorator.',
            expectedOutput: '20',
          },
          {
            id: 'poly-3',
            title: 'Polymorphic Loop',
            description: 'Process different types uniformly.',
            instructions: ['Create Circle(r) and Square(s) with area() methods', 'Loop through a list of shapes and print each area'],
            starterCode: '',
            solution: 'class Circle:\n    def __init__(self, r):\n        self.r = r\n    def area(self):\n        return 3.14 * self.r ** 2\nclass Square:\n    def __init__(self, s):\n        self.s = s\n    def area(self):\n        return self.s ** 2\n\nfor shape in [Circle(1), Square(2)]:\n    print(shape.area())',
            hint: 'Both classes share the same method name.',
            expectedOutput: '3.14\n4',
          },
          {
            id: 'poly-4',
            title: '__add__ Override',
            description: 'Make objects addable.',
            instructions: ['Create a Money class with amount', 'Override __add__ to add amounts', 'Print Money(10) + Money(20)'],
            starterCode: '',
            solution: 'class Money:\n    def __init__(self, amount):\n        self.amount = amount\n    def __add__(self, other):\n        return Money(self.amount + other.amount)\n    def __str__(self):\n        return str(self.amount)\n\nprint(Money(10) + Money(20))',
            hint: 'Return a new Money object from __add__.',
            expectedOutput: '30',
          },
          {
            id: 'poly-5',
            title: 'len() Support',
            description: 'Make objects work with len().',
            instructions: ['Create Playlist with a songs list', 'Override __len__ to return number of songs'],
            starterCode: '',
            solution: 'class Playlist:\n    def __init__(self, songs):\n        self.songs = songs\n    def __len__(self):\n        return len(self.songs)\n\np = Playlist([\'A\', \'B\', \'C\'])\nprint(len(p))',
            hint: 'Define __len__(self) returning the count.',
            expectedOutput: '3',
          }
        ],
      },
      {
        id: 'magic',
        number: 4,
        title: 'Magic Methods',
        description: 'Customize how objects behave with special methods.',
        icon: 'Sparkles',
        type: 'exercises',
        lesson: `Magic methods (dunder methods) let you define how objects behave with Python's built-in operations.

## Common Magic Methods

| Method | Triggered by | Purpose |
|--------|-------------|---------|
| \`__init__\` | \`Class()\` | Constructor |
| \`__str__\` | \`str()\`, \`print()\` | Human-readable string |
| \`__repr__\` | \`repr()\` | Developer-readable string |
| \`__len__\` | \`len()\` | Length |
| \`__getitem__\` | \`obj[key]\` | Index access |
| \`__eq__\` | \`==\` | Equality |
| \`__lt__\` | \`<\` | Less than |
| \`__add__\` | \`+\` | Addition |
| \`__contains__\` | \`in\` | Membership test |
| \`__iter__\` | \`for x in obj\` | Iteration |

## __repr__ vs __str__

\`\`\`python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __repr__(self):
        return f"Point({self.x}, {self.y})"
    def __str__(self):
        return f"({self.x}, {self.y})"

p = Point(3, 4)
print(str(p))
print(repr(p))
\`\`\`
>>> (3, 4)
>>> Point(3, 4)

## Comparison Methods

\`\`\`python
class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade
    def __eq__(self, other):
        return self.grade == other.grade
    def __lt__(self, other):
        return self.grade < other.grade

a = Student("Alice", 90)
b = Student("Bob", 85)
print(a == b)
print(a > b)
\`\`\`
>>> False
>>> True

## __getitem__ — Make Objects Indexable

\`\`\`python
class Fibonacci:
    def __getitem__(self, n):
        a, b = 0, 1
        for _ in range(n):
            a, b = b, a + b
        return a

fib = Fibonacci()
print(fib[6])
\`\`\`
>>> 8

💡 Implement \`__repr__\` for all classes — it helps with debugging.

💡 If you define \`__eq__\`, also define \`__hash__\` if objects need to be in sets/dicts.`,
        exercises: [
          {
            id: 'mag-1',
            title: '__repr__',
            description: 'Define repr for debugging.',
            instructions: ['Create Book with title, author', 'Add __repr__ returning "Book(\'title\', \'author\')"', 'Print repr of a book'],
            starterCode: '',
            solution: 'class Book:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\n    def __repr__(self):\n        return f"Book(\'{self.title}\', \'{self.author}\')"\n\nprint(repr(Book(\'1984\', \'Orwell\')))',
            hint: '__repr__ should return a string that could recreate the object.',
            expectedOutput: 'Book(\'1984\', \'Orwell\')',
          },
          {
            id: 'mag-2',
            title: '__eq__',
            description: 'Define equality comparison.',
            instructions: ['Create Point with x, y', 'Add __eq__ comparing both coordinates', 'Test if Point(1,2) == Point(1,2)'],
            starterCode: '',
            solution: 'class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y\n\nprint(Point(1, 2) == Point(1, 2))',
            hint: 'Compare both x and y in __eq__.',
            expectedOutput: 'True',
          },
          {
            id: 'mag-3',
            title: '__len__ and __getitem__',
            description: 'Make an indexable container.',
            instructions: ['Create Sentence storing words as a list', 'Add __len__ and __getitem__', 'Print len and first word of \'Hello World\''],
            starterCode: '',
            solution: 'class Sentence:\n    def __init__(self, text):\n        self.words = text.split()\n    def __len__(self):\n        return len(self.words)\n    def __getitem__(self, i):\n        return self.words[i]\n\ns = Sentence(\'Hello World\')\nprint(len(s))\nprint(s[0])',
            hint: 'Delegate to self.words in both methods.',
            expectedOutput: '2\nHello',
          },
          {
            id: 'mag-4',
            title: '__contains__',
            description: 'Support the \'in\' operator.',
            instructions: ['Create WordList storing a list of words', 'Add __contains__ to check membership', 'Test if \'hello\' in WordList([\'hello\',\'world\'])'],
            starterCode: '',
            solution: 'class WordList:\n    def __init__(self, words):\n        self.words = words\n    def __contains__(self, word):\n        return word in self.words\n\nwl = WordList([\'hello\', \'world\'])\nprint(\'hello\' in wl)\nprint(\'python\' in wl)',
            hint: '__contains__ should return True/False.',
            expectedOutput: 'True\nFalse',
          },
          {
            id: 'mag-5',
            title: '__add__ and __mul__',
            description: 'Support + and * operators.',
            instructions: ['Create Vector with x, y', 'Add __add__ for vector addition', 'Add __mul__ for scalar multiplication', 'Print Vector(1,2) + Vector(3,4)'],
            starterCode: '',
            solution: 'class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n    def __mul__(self, scalar):\n        return Vector(self.x * scalar, self.y * scalar)\n    def __str__(self):\n        return f\'({self.x}, {self.y})\'\n\nprint(Vector(1, 2) + Vector(3, 4))',
            hint: 'Return new Vector objects from operators.',
            expectedOutput: '(4, 6)',
          }
        ],
      },
      {
        id: 'properties',
        number: 5,
        title: 'Properties & Encapsulation',
        description: 'Control attribute access with properties.',
        icon: 'Shield',
        type: 'exercises',
        lesson: `Properties let you add **getters, setters, and validation** to attributes while keeping clean syntax.

## The Problem

Without properties, there's no validation:
\`\`\`python
class Circle:
    def __init__(self, radius):
        self.radius = radius  # No validation!

c = Circle(-5)  # Negative radius — makes no sense!
\`\`\`

## Using @property

\`\`\`python
class Circle:
    def __init__(self, radius):
        self.radius = radius   # Uses the setter

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius must be non-negative")
        self._radius = value

    @property
    def area(self):
        return 3.14159 * self._radius ** 2

c = Circle(5)
print(c.radius)
print(f"{c.area:.2f}")
\`\`\`
>>> 5
>>> 78.54

## Read-Only Properties

Only define a getter:

\`\`\`python
class Person:
    def __init__(self, first, last):
        self.first = first
        self.last = last

    @property
    def full_name(self):
        return f"{self.first} {self.last}"

p = Person("Alice", "Smith")
print(p.full_name)
# p.full_name = "Bob"  # AttributeError — read-only!
\`\`\`
>>> Alice Smith

## Naming Convention

- \`_variable\` — "private by convention" (don't access directly)
- \`__variable\` — name-mangled (harder to access)
- \`variable\` — public

💡 Use properties when you need validation or computed attributes.

💡 Start with simple attributes; add properties later if needed (Python's uniform access).`,
        exercises: [
          {
            id: 'prop-1',
            title: 'Basic Property',
            description: 'Create a read-only property.',
            instructions: ['Create a Rectangle with width, height', 'Add a read-only area property', 'Print the area'],
            starterCode: '',
            solution: 'class Rectangle:\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    @property\n    def area(self):\n        return self.width * self.height\n\nr = Rectangle(4, 5)\nprint(r.area)',
            hint: 'Use @property decorator on a method.',
            expectedOutput: '20',
          },
          {
            id: 'prop-2',
            title: 'Property with Setter',
            description: 'Add validation to attributes.',
            instructions: ['Create Temperature with celsius property', 'Validate that celsius >= -273.15 in setter', 'Print the temperature'],
            starterCode: '',
            solution: 'class Temperature:\n    def __init__(self, celsius):\n        self.celsius = celsius\n    @property\n    def celsius(self):\n        return self._celsius\n    @celsius.setter\n    def celsius(self, value):\n        if value < -273.15:\n            raise ValueError(\'Too cold!\')\n        self._celsius = value\n\nt = Temperature(25)\nprint(t.celsius)',
            hint: 'Use @name.setter for the setter.',
            expectedOutput: '25',
          },
          {
            id: 'prop-3',
            title: 'Computed Property',
            description: 'Property from other attributes.',
            instructions: ['Create Person with first and last name', 'Add full_name property returning \'first last\'', 'Print it'],
            starterCode: '',
            solution: 'class Person:\n    def __init__(self, first, last):\n        self.first = first\n        self.last = last\n    @property\n    def full_name(self):\n        return f\'{self.first} {self.last}\'\n\nprint(Person(\'Alice\', \'Smith\').full_name)',
            hint: 'The property computes from other attributes.',
            expectedOutput: 'Alice Smith',
          },
          {
            id: 'prop-4',
            title: 'Private Attributes',
            description: 'Use naming conventions.',
            instructions: ['Create BankAccount with _balance (private)', 'Add balance property (getter only) and deposit method', 'Deposit 100, print balance'],
            starterCode: '',
            solution: 'class BankAccount:\n    def __init__(self):\n        self._balance = 0\n    @property\n    def balance(self):\n        return self._balance\n    def deposit(self, amount):\n        self._balance += amount\n\nacc = BankAccount()\nacc.deposit(100)\nprint(acc.balance)',
            hint: '_balance is private; expose via property.',
            expectedOutput: '100',
          },
          {
            id: 'prop-5',
            title: 'Deleter',
            description: 'Add a property deleter.',
            instructions: ['Create User with name property including getter, setter, and deleter', 'Deleter should set name to \'Anonymous\''],
            starterCode: '',
            solution: 'class User:\n    def __init__(self, name):\n        self._name = name\n    @property\n    def name(self):\n        return self._name\n    @name.setter\n    def name(self, value):\n        self._name = value\n    @name.deleter\n    def name(self):\n        self._name = \'Anonymous\'\n\nu = User(\'Alice\')\ndel u.name\nprint(u.name)',
            hint: 'Use @name.deleter for the delete behavior.',
            expectedOutput: 'Anonymous',
          }
        ],
      },
      {
        id: 'dataclasses',
        number: 6,
        title: 'Dataclasses',
        description: 'Auto-generate class boilerplate for data containers.',
        icon: 'FileCode',
        type: 'exercises',
        lesson: `Dataclasses automatically generate \`__init__\`, \`__repr__\`, \`__eq__\`, and more. Available since Python 3.7.

## Basic Dataclass

\`\`\`python
from dataclasses import dataclass

@dataclass
class Point:
    x: float
    y: float

p = Point(3, 4)
print(p)
print(p == Point(3, 4))
\`\`\`
>>> Point(x=3, y=4)
>>> True

Compare to writing this manually — dataclass saves you from writing __init__, __repr__, and __eq__!

## Default Values

\`\`\`python
@dataclass
class Config:
    host: str = "localhost"
    port: int = 8080
    debug: bool = False

c = Config()
print(c)
\`\`\`
>>> Config(host='localhost', port=8080, debug=False)

## Frozen Dataclasses (Immutable)

\`\`\`python
@dataclass(frozen=True)
class Color:
    r: int
    g: int
    b: int

red = Color(255, 0, 0)
print(red)
# red.r = 100  # FrozenInstanceError!
\`\`\`
>>> Color(r=255, g=0, b=0)

## Post-Init Processing

\`\`\`python
from dataclasses import dataclass, field

@dataclass
class Circle:
    radius: float
    area: float = field(init=False)

    def __post_init__(self):
        self.area = 3.14159 * self.radius ** 2

c = Circle(5)
print(f"Area: {c.area:.2f}")
\`\`\`
>>> Area: 78.54

## field() for Complex Defaults

\`\`\`python
@dataclass
class Student:
    name: str
    grades: list = field(default_factory=list)

s = Student("Alice")
s.grades.append(90)
print(s)
\`\`\`
>>> Student(name='Alice', grades=[90])

⚠️ Use \`field(default_factory=list)\` for mutable defaults, not \`grades: list = []\`.

💡 Use \`@dataclass(frozen=True)\` for immutable value objects.

💡 Dataclasses work great with type hints and static analysis tools.`,
        exercises: [
          {
            id: 'dc-1',
            title: 'Basic Dataclass',
            description: 'Create a simple dataclass.',
            instructions: ['Create a Point dataclass with x and y fields', 'Print Point(3, 4)'],
            starterCode: '',
            solution: 'from dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: float\n    y: float\n\nprint(Point(3, 4))',
            hint: 'Use @dataclass decorator and type-annotated fields.',
            expectedOutput: 'Point(x=3, y=4)',
          },
          {
            id: 'dc-2',
            title: 'Default Values',
            description: 'Add defaults to fields.',
            instructions: ['Create Config dataclass with host=\'localhost\', port=8080', 'Print Config()'],
            starterCode: '',
            solution: 'from dataclasses import dataclass\n\n@dataclass\nclass Config:\n    host: str = \'localhost\'\n    port: int = 8080\n\nprint(Config())',
            hint: 'Add = default_value after the type.',
            expectedOutput: 'Config(host=\'localhost\', port=8080)',
          },
          {
            id: 'dc-3',
            title: 'Frozen Dataclass',
            description: 'Create an immutable dataclass.',
            instructions: ['Create a frozen Color dataclass with r, g, b', 'Print Color(255, 0, 0)'],
            starterCode: '',
            solution: 'from dataclasses import dataclass\n\n@dataclass(frozen=True)\nclass Color:\n    r: int\n    g: int\n    b: int\n\nprint(Color(255, 0, 0))',
            hint: 'Use @dataclass(frozen=True).',
            expectedOutput: 'Color(r=255, g=0, b=0)',
          },
          {
            id: 'dc-4',
            title: 'Equality',
            description: 'Test dataclass equality.',
            instructions: ['Create Point dataclass', 'Check if Point(1,2) == Point(1,2) and Point(1,2) == Point(3,4)'],
            starterCode: '',
            solution: 'from dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: int\n    y: int\n\nprint(Point(1, 2) == Point(1, 2))\nprint(Point(1, 2) == Point(3, 4))',
            hint: 'Dataclasses auto-generate __eq__.',
            expectedOutput: 'True\nFalse',
          },
          {
            id: 'dc-5',
            title: 'Field with Factory',
            description: 'Use default_factory for mutable defaults.',
            instructions: ['Create Student with name and grades (default empty list)', 'Add a grade and print'],
            starterCode: '',
            solution: 'from dataclasses import dataclass, field\n\n@dataclass\nclass Student:\n    name: str\n    grades: list = field(default_factory=list)\n\ns = Student(\'Alice\')\ns.grades.append(95)\nprint(s)',
            hint: 'Use field(default_factory=list) for mutable defaults.',
            expectedOutput: 'Student(name=\'Alice\', grades=[95])',
          }
        ],
      },
      {
        id: 'enums',
        number: 7,
        title: 'Enums',
        description: 'Define named constants with enumeration classes.',
        icon: 'List',
        type: 'exercises',
        lesson: `Enums define a set of **named constants**, making code more readable and less error-prone.

## Basic Enum

\`\`\`python
from enum import Enum

class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3

print(Color.RED)
print(Color.RED.name)
print(Color.RED.value)
\`\`\`
>>> Color.RED
>>> RED
>>> 1

## Using Enums

\`\`\`python
class Status(Enum):
    PENDING = "pending"
    ACTIVE = "active"
    CLOSED = "closed"

order_status = Status.ACTIVE
if order_status == Status.ACTIVE:
    print("Order is active")
\`\`\`
>>> Order is active

## Iterating Over Enums

\`\`\`python
class Direction(Enum):
    NORTH = "N"
    SOUTH = "S"
    EAST = "E"
    WEST = "W"

for d in Direction:
    print(f"{d.name}: {d.value}")
\`\`\`
>>> NORTH: N
>>> SOUTH: S
>>> EAST: E
>>> WEST: W

## Auto Values

\`\`\`python
from enum import Enum, auto

class Priority(Enum):
    LOW = auto()
    MEDIUM = auto()
    HIGH = auto()

print(list(Priority))
\`\`\`
>>> [<Priority.LOW: 1>, <Priority.MEDIUM: 2>, <Priority.HIGH: 3>]

## IntEnum

\`\`\`python
from enum import IntEnum

class Size(IntEnum):
    SMALL = 1
    MEDIUM = 2
    LARGE = 3

print(Size.LARGE > Size.SMALL)
\`\`\`
>>> True

💡 Use enums instead of magic strings or numbers: \`Status.ACTIVE\` is clearer than \`"active"\`.

⚠️ Enum members are singletons — \`Color.RED is Color.RED\` is always True.`,
        exercises: [
          {
            id: 'enum-1',
            title: 'Basic Enum',
            description: 'Create a simple enum.',
            instructions: ['Create a Color enum with RED=1, GREEN=2, BLUE=3', 'Print Color.RED and its value'],
            starterCode: '',
            solution: 'from enum import Enum\n\nclass Color(Enum):\n    RED = 1\n    GREEN = 2\n    BLUE = 3\n\nprint(Color.RED)\nprint(Color.RED.value)',
            hint: 'Define class Color(Enum) with named constants.',
            expectedOutput: 'Color.RED\n1',
          },
          {
            id: 'enum-2',
            title: 'String Enum',
            description: 'Use string values.',
            instructions: ['Create Status enum with ACTIVE=\'active\', INACTIVE=\'inactive\'', 'Compare a status to Status.ACTIVE'],
            starterCode: '',
            solution: 'from enum import Enum\n\nclass Status(Enum):\n    ACTIVE = \'active\'\n    INACTIVE = \'inactive\'\n\ns = Status.ACTIVE\nprint(s == Status.ACTIVE)',
            hint: 'Use string values for enum members.',
            expectedOutput: 'True',
          },
          {
            id: 'enum-3',
            title: 'Iterate Enum',
            description: 'Loop through enum members.',
            instructions: ['Create Direction enum with N, S, E, W', 'Print each name'],
            starterCode: '',
            solution: 'from enum import Enum\n\nclass Direction(Enum):\n    N = \'North\'\n    S = \'South\'\n    E = \'East\'\n    W = \'West\'\n\nfor d in Direction:\n    print(d.name)',
            hint: 'Use for d in EnumClass: to iterate.',
            expectedOutput: 'N\nS\nE\nW',
          },
          {
            id: 'enum-4',
            title: 'Auto Values',
            description: 'Use auto() for values.',
            instructions: ['Create Priority enum with LOW, MEDIUM, HIGH using auto()', 'Print each member\'s value'],
            starterCode: '',
            solution: 'from enum import Enum, auto\n\nclass Priority(Enum):\n    LOW = auto()\n    MEDIUM = auto()\n    HIGH = auto()\n\nfor p in Priority:\n    print(f\'{p.name}: {p.value}\')',
            hint: 'auto() assigns automatic values.',
            expectedOutput: 'LOW: 1\nMEDIUM: 2\nHIGH: 3',
          },
          {
            id: 'enum-5',
            title: 'Enum in Function',
            description: 'Use enums as parameters.',
            instructions: ['Create Season enum', 'Write a function that returns activities based on season', 'Test with SUMMER'],
            starterCode: '',
            solution: 'from enum import Enum\n\nclass Season(Enum):\n    SPRING = 1\n    SUMMER = 2\n    FALL = 3\n    WINTER = 4\n\ndef activity(season):\n    if season == Season.SUMMER:\n        return \'Swimming\'\n    return \'Reading\'\n\nprint(activity(Season.SUMMER))',
            hint: 'Compare enum members with ==.',
            expectedOutput: 'Swimming',
          }
        ],
      },
      {
        id: 'patterns',
        number: 8,
        title: 'OOP Design Patterns',
        description: 'Common solutions to recurring design problems.',
        icon: 'Lightbulb',
        type: 'exercises',
        lesson: `Design patterns are **reusable solutions** to common programming problems. Here are essential patterns in Python.

## Singleton — One Instance Only

\`\`\`python
class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

a = Singleton()
b = Singleton()
print(a is b)
\`\`\`
>>> True

## Factory — Create Objects Without Specifying Class

\`\`\`python
class Dog:
    def speak(self):
        return "Woof!"

class Cat:
    def speak(self):
        return "Meow!"

def animal_factory(animal_type):
    animals = {"dog": Dog, "cat": Cat}
    return animals[animal_type]()

pet = animal_factory("dog")
print(pet.speak())
\`\`\`
>>> Woof!

## Observer — Notify on Changes

\`\`\`python
class EventSystem:
    def __init__(self):
        self._listeners = {}

    def on(self, event, callback):
        self._listeners.setdefault(event, []).append(callback)

    def emit(self, event, data=None):
        for cb in self._listeners.get(event, []):
            cb(data)

events = EventSystem()
events.on("greet", lambda name: print(f"Hello, {name}!"))
events.emit("greet", "Alice")
\`\`\`
>>> Hello, Alice!

## Strategy — Swap Algorithms

\`\`\`python
class Sorter:
    def __init__(self, strategy):
        self.strategy = strategy

    def sort(self, data):
        return self.strategy(data)

ascending = Sorter(sorted)
descending = Sorter(lambda x: sorted(x, reverse=True))
print(ascending.sort([3, 1, 2]))
print(descending.sort([3, 1, 2]))
\`\`\`
>>> [1, 2, 3]
>>> [3, 2, 1]

💡 Don't over-engineer — use patterns when they solve a real problem.

💡 Python's first-class functions often make patterns simpler than in Java/C++.`,
        exercises: [
          {
            id: 'pat-1',
            title: 'Singleton',
            description: 'Ensure only one instance.',
            instructions: ['Create a Singleton class using __new__', 'Verify two instances are the same object'],
            starterCode: '',
            solution: 'class Singleton:\n    _instance = None\n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance\n\na = Singleton()\nb = Singleton()\nprint(a is b)',
            hint: 'Override __new__ to control instance creation.',
            expectedOutput: 'True',
          },
          {
            id: 'pat-2',
            title: 'Factory',
            description: 'Create objects via a factory.',
            instructions: ['Create a shape_factory(type) returning Circle or Square', 'Test with \'circle\''],
            starterCode: '',
            solution: 'class Circle:\n    def describe(self):\n        return \'Circle\'\nclass Square:\n    def describe(self):\n        return \'Square\'\n\ndef shape_factory(shape_type):\n    shapes = {\'circle\': Circle, \'square\': Square}\n    return shapes[shape_type]()\n\nprint(shape_factory(\'circle\').describe())',
            hint: 'Map type names to classes in a dict.',
            expectedOutput: 'Circle',
          },
          {
            id: 'pat-3',
            title: 'Observer',
            description: 'Implement event notifications.',
            instructions: ['Create EventSystem with on() and emit()', 'Register a listener and emit an event'],
            starterCode: '',
            solution: 'class EventSystem:\n    def __init__(self):\n        self._listeners = {}\n    def on(self, event, cb):\n        self._listeners.setdefault(event, []).append(cb)\n    def emit(self, event, data=None):\n        for cb in self._listeners.get(event, []):\n            cb(data)\n\nes = EventSystem()\nes.on(\'hello\', lambda name: print(f\'Hi {name}!\'))\nes.emit(\'hello\', \'Alice\')',
            hint: 'Store callbacks in a dict of lists.',
            expectedOutput: 'Hi Alice!',
          },
          {
            id: 'pat-4',
            title: 'Strategy',
            description: 'Swap algorithms at runtime.',
            instructions: ['Create Formatter that takes a strategy function', 'Test with upper and lower strategies'],
            starterCode: '',
            solution: 'class Formatter:\n    def __init__(self, strategy):\n        self.strategy = strategy\n    def format(self, text):\n        return self.strategy(text)\n\nupper = Formatter(str.upper)\nlower = Formatter(str.lower)\nprint(upper.format(\'hello\'))\nprint(lower.format(\'HELLO\'))',
            hint: 'Pass different functions as the strategy.',
            expectedOutput: 'HELLO\nhello',
          },
          {
            id: 'pat-5',
            title: 'Builder',
            description: 'Build objects step by step.',
            instructions: ['Create QueryBuilder with select(), where(), build() methods', 'Chain calls and print the result'],
            starterCode: '',
            solution: 'class QueryBuilder:\n    def __init__(self):\n        self._select = \'*\'\n        self._where = \'\'\n    def select(self, fields):\n        self._select = fields\n        return self\n    def where(self, condition):\n        self._where = condition\n        return self\n    def build(self):\n        q = f\'SELECT {self._select}\'\n        if self._where:\n            q += f\' WHERE {self._where}\'\n        return q\n\nq = QueryBuilder().select(\'name\').where(\'age > 18\').build()\nprint(q)',
            hint: 'Return self from each method for chaining.',
            expectedOutput: 'SELECT name WHERE age > 18',
          }
        ],
      }
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced Python',
    subtitle: 'Master the Language',
    description: 'Decorators, generators, context managers, async, type hints, metaclasses, and more.',
    icon: 'Flame',
    color: 'red',
    categories: [
      {
        id: 'decorators',
        number: 1,
        title: 'Decorators',
        description: 'Modify function behavior without changing their code.',
        icon: 'Wand2',
        type: 'exercises',
        lesson: `Decorators **wrap a function** to modify its behavior without changing its source code.

## Basic Decorator

\`\`\`python
def my_decorator(func):
    def wrapper():
        print("Before")
        func()
        print("After")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
\`\`\`
>>> Before
>>> Hello!
>>> After

The \`@my_decorator\` syntax is equivalent to \`say_hello = my_decorator(say_hello)\`.

## Decorators with Arguments (functools.wraps)

\`\`\`python
from functools import wraps

def log_call(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        result = func(*args, **kwargs)
        print(f"Returned: {result}")
        return result
    return wrapper

@log_call
def add(a, b):
    return a + b

print(add(3, 4))
\`\`\`
>>> Calling add
>>> Returned: 7
>>> 7

## Timing Decorator

\`\`\`python
import time
from functools import wraps

def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        elapsed = time.time() - start
        print(f"{func.__name__} took {elapsed:.4f}s")
        return result
    return wrapper
\`\`\`

## Decorator with Parameters

\`\`\`python
def repeat(n):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for _ in range(n):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(3)
def greet():
    print("Hello!")

greet()
\`\`\`
>>> Hello!
>>> Hello!
>>> Hello!

## Class-Based Decorators

\`\`\`python
class CountCalls:
    def __init__(self, func):
        self.func = func
        self.count = 0
    def __call__(self, *args, **kwargs):
        self.count += 1
        return self.func(*args, **kwargs)

@CountCalls
def my_func():
    print("Called!")

my_func()
my_func()
print(f"Call count: {my_func.count}")
\`\`\`
>>> Called!
>>> Called!
>>> Call count: 2

💡 Always use \`@functools.wraps\` to preserve the original function's metadata.

⚠️ Stacking decorators applies them bottom-up: the lowest decorator wraps first.`,
        exercises: [
          {
            id: 'dec-1',
            title: 'Basic Decorator',
            description: 'Create a simple decorator.',
            instructions: ['Create a decorator that prints \'Start\' before and \'End\' after', 'Apply it to a function that prints \'Running\''],
            starterCode: '',
            solution: 'def wrap(func):\n    def wrapper():\n        print(\'Start\')\n        func()\n        print(\'End\')\n    return wrapper\n\n@wrap\ndef run():\n    print(\'Running\')\n\nrun()',
            hint: 'The decorator returns a wrapper function.',
            expectedOutput: 'Start\nRunning\nEnd',
          },
          {
            id: 'dec-2',
            title: 'Decorator with Args',
            description: 'Handle function arguments.',
            instructions: ['Create a logging decorator that prints the function name and args', 'Apply to an add(a,b) function'],
            starterCode: '',
            solution: 'from functools import wraps\ndef log(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        print(f\'Calling {func.__name__}{args}\')\n        return func(*args, **kwargs)\n    return wrapper\n\n@log\ndef add(a, b):\n    return a + b\n\nprint(add(3, 4))',
            hint: 'Use *args and **kwargs in the wrapper.',
            expectedOutput: 'Calling add(3, 4)\n7',
          },
          {
            id: 'dec-3',
            title: 'Repeat Decorator',
            description: 'Create a parameterized decorator.',
            instructions: ['Create repeat(n) decorator that calls the function n times', 'Apply @repeat(3) to a greet function'],
            starterCode: '',
            solution: 'from functools import wraps\ndef repeat(n):\n    def decorator(func):\n        @wraps(func)\n        def wrapper(*a, **kw):\n            for _ in range(n):\n                func(*a, **kw)\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef greet():\n    print(\'Hi!\')\n\ngreet()',
            hint: 'Three levels of nesting for parameterized decorators.',
            expectedOutput: 'Hi!\nHi!\nHi!',
          },
          {
            id: 'dec-4',
            title: 'Return Value',
            description: 'Preserve return values.',
            instructions: ['Create a decorator that doubles the return value', 'Apply to a function returning 5'],
            starterCode: '',
            solution: 'from functools import wraps\ndef double_result(func):\n    @wraps(func)\n    def wrapper(*a, **kw):\n        return func(*a, **kw) * 2\n    return wrapper\n\n@double_result\ndef get_five():\n    return 5\n\nprint(get_five())',
            hint: 'Modify the return value in the wrapper.',
            expectedOutput: '10',
          },
          {
            id: 'dec-5',
            title: 'Class Decorator',
            description: 'Use a class as a decorator.',
            instructions: ['Create CountCalls class decorator tracking call count', 'Call decorated function twice, print count'],
            starterCode: '',
            solution: 'class CountCalls:\n    def __init__(self, func):\n        self.func = func\n        self.count = 0\n    def __call__(self, *args, **kwargs):\n        self.count += 1\n        return self.func(*args, **kwargs)\n\n@CountCalls\ndef hello():\n    print(\'Hello\')\n\nhello()\nhello()\nprint(hello.count)',
            hint: 'Use __call__ to make the class callable.',
            expectedOutput: 'Hello\nHello\n2',
          }
        ],
      },
      {
        id: 'generators',
        number: 2,
        title: 'Generators & Iterators',
        description: 'Create memory-efficient sequences with yield.',
        icon: 'Zap',
        type: 'exercises',
        lesson: `Generators produce values **one at a time** using \`yield\`, saving memory compared to building entire lists.

## Generator Functions

\`\`\`python
def count_up(n):
    i = 1
    while i <= n:
        yield i
        i += 1

for num in count_up(5):
    print(num, end=" ")
\`\`\`
>>> 1 2 3 4 5

## How yield Works

Each \`yield\` **pauses** the function and produces a value. Next call resumes from where it paused:

\`\`\`python
def simple():
    yield 1
    yield 2
    yield 3

gen = simple()
print(next(gen))
print(next(gen))
print(next(gen))
\`\`\`
>>> 1
>>> 2
>>> 3

## Generator Expressions

Like list comprehensions but lazy:

\`\`\`python
squares = (x**2 for x in range(5))
print(list(squares))
\`\`\`
>>> [0, 1, 4, 9, 16]

## Memory Efficiency

\`\`\`python
# List: stores ALL values in memory
big_list = [x**2 for x in range(1000000)]

# Generator: computes ONE at a time
big_gen = (x**2 for x in range(1000000))
\`\`\`

## Infinite Generators

\`\`\`python
def infinite_counter(start=0):
    n = start
    while True:
        yield n
        n += 1

counter = infinite_counter()
print(next(counter))
print(next(counter))
print(next(counter))
\`\`\`
>>> 0
>>> 1
>>> 2

## yield from

Delegate to another generator:

\`\`\`python
def flatten(nested):
    for item in nested:
        if isinstance(item, list):
            yield from flatten(item)
        else:
            yield item

print(list(flatten([1, [2, 3], [4, [5]]])))
\`\`\`
>>> [1, 2, 3, 4, 5]

## The Iterator Protocol

Any object with \`__iter__\` and \`__next__\` is an iterator:

\`\`\`python
class Countdown:
    def __init__(self, n):
        self.n = n
    def __iter__(self):
        return self
    def __next__(self):
        if self.n <= 0:
            raise StopIteration
        self.n -= 1
        return self.n + 1

print(list(Countdown(3)))
\`\`\`
>>> [3, 2, 1]

💡 Use generators for large datasets, file processing, and pipelines.

⚠️ Generators are exhausted after one pass — you can't reuse them.`,
        exercises: [
          {
            id: 'gen-1',
            title: 'Basic Generator',
            description: 'Create a generator function.',
            instructions: ['Write a generator that yields 1, 2, 3', 'Print all values using a loop'],
            starterCode: '',
            solution: 'def one_two_three():\n    yield 1\n    yield 2\n    yield 3\n\nfor n in one_two_three():\n    print(n)',
            hint: 'Use yield to produce each value.',
            expectedOutput: '1\n2\n3',
          },
          {
            id: 'gen-2',
            title: 'Range Generator',
            description: 'Recreate range with a generator.',
            instructions: ['Write my_range(start, stop) generator', 'Print values from my_range(1, 6)'],
            starterCode: '',
            solution: 'def my_range(start, stop):\n    while start < stop:\n        yield start\n        start += 1\n\nfor i in my_range(1, 6):\n    print(i)',
            hint: 'Use while loop with yield.',
            expectedOutput: '1\n2\n3\n4\n5',
          },
          {
            id: 'gen-3',
            title: 'Generator Expression',
            description: 'Use a generator expression.',
            instructions: ['Create a generator expression for squares of 1-5', 'Print sum of the generator'],
            starterCode: '',
            solution: 'gen = (x**2 for x in range(1, 6))\nprint(sum(gen))',
            hint: 'Use () instead of [] for a generator expression.',
            expectedOutput: '55',
          },
          {
            id: 'gen-4',
            title: 'Fibonacci Generator',
            description: 'Generate Fibonacci numbers.',
            instructions: ['Write a generator that yields the first n Fibonacci numbers', 'Print first 7'],
            starterCode: '',
            solution: 'def fib(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\n\nprint(list(fib(7)))',
            hint: 'yield a, then update a, b = b, a+b.',
            expectedOutput: '[0, 1, 1, 2, 3, 5, 8]',
          },
          {
            id: 'gen-5',
            title: 'Custom Iterator',
            description: 'Implement the iterator protocol.',
            instructions: ['Create a Squares class implementing __iter__ and __next__', 'Iterate over squares of 1-4'],
            starterCode: '',
            solution: 'class Squares:\n    def __init__(self, n):\n        self.n = n\n        self.i = 1\n    def __iter__(self):\n        return self\n    def __next__(self):\n        if self.i > self.n:\n            raise StopIteration\n        val = self.i ** 2\n        self.i += 1\n        return val\n\nprint(list(Squares(4)))',
            hint: 'Raise StopIteration when done.',
            expectedOutput: '[1, 4, 9, 16]',
          }
        ],
      },
      {
        id: 'context',
        number: 3,
        title: 'Context Managers',
        description: 'Manage resources safely with with statements.',
        icon: 'Shield',
        type: 'exercises',
        lesson: `Context managers ensure resources are properly **acquired and released**, even if errors occur.

## The with Statement

\`\`\`python
with open("example.txt", "w") as f:
    f.write("Hello!")
# File is automatically closed here, even if an error occurred
\`\`\`

## Creating Context Managers with __enter__/__exit__

\`\`\`python
class Timer:
    def __enter__(self):
        import time
        self.start = time.time()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        import time
        elapsed = time.time() - self.start
        print(f"Elapsed: {elapsed:.4f}s")
        return False  # Don't suppress exceptions

with Timer():
    total = sum(range(1000000))
\`\`\`

## Using contextlib

\`\`\`python
from contextlib import contextmanager

@contextmanager
def tag(name):
    print(f"<{name}>")
    yield
    print(f"</{name}>")

with tag("div"):
    print("Hello")
\`\`\`
>>> <div>
>>> Hello
>>> </div>

## Context Managers for Cleanup

\`\`\`python
@contextmanager
def temp_value(obj, attr, value):
    old = getattr(obj, attr)
    setattr(obj, attr, value)
    try:
        yield
    finally:
        setattr(obj, attr, old)
\`\`\`

## Multiple Context Managers

\`\`\`python
# Python 3.10+
# with (open("in.txt") as fin, open("out.txt", "w") as fout):
#     fout.write(fin.read())
\`\`\`

## suppress() — Ignore Specific Errors

\`\`\`python
from contextlib import suppress

with suppress(FileNotFoundError):
    with open("nonexistent.txt") as f:
        data = f.read()
print("Continued safely")
\`\`\`
>>> Continued safely

💡 Always use \`with\` for files, database connections, locks, and network connections.

💡 Use \`contextlib.contextmanager\` for simple cases — it's less boilerplate than a class.`,
        exercises: [
          {
            id: 'ctx-1',
            title: 'Basic Context Manager',
            description: 'Create a class-based context manager.',
            instructions: ['Create Greeter that prints \'Hello\' on enter and \'Goodbye\' on exit', 'Use it with a with statement'],
            starterCode: '',
            solution: 'class Greeter:\n    def __enter__(self):\n        print(\'Hello\')\n        return self\n    def __exit__(self, *args):\n        print(\'Goodbye\')\n        return False\n\nwith Greeter():\n    print(\'Inside\')',
            hint: 'Define __enter__ and __exit__ methods.',
            expectedOutput: 'Hello\nInside\nGoodbye',
          },
          {
            id: 'ctx-2',
            title: 'contextmanager Decorator',
            description: 'Use @contextmanager.',
            instructions: ['Create a tag(name) context manager using @contextmanager', 'It should print opening and closing HTML tags'],
            starterCode: '',
            solution: 'from contextlib import contextmanager\n\n@contextmanager\ndef tag(name):\n    print(f\'<{name}>\')\n    yield\n    print(f\'</{name}>\')\n\nwith tag(\'p\'):\n    print(\'Hello\')',
            hint: 'yield separates setup from cleanup.',
            expectedOutput: '<p>\nHello\n</p>',
          },
          {
            id: 'ctx-3',
            title: 'Return Value',
            description: 'Return a value from __enter__.',
            instructions: ['Create Connector that returns a connection string', 'Use it with \'as conn\''],
            starterCode: '',
            solution: 'class Connector:\n    def __enter__(self):\n        print(\'Connected\')\n        return \'conn_123\'\n    def __exit__(self, *args):\n        print(\'Disconnected\')\n\nwith Connector() as conn:\n    print(conn)',
            hint: '__enter__ returns the value used with \'as\'.',
            expectedOutput: 'Connected\nconn_123\nDisconnected',
          },
          {
            id: 'ctx-4',
            title: 'Generator Context Manager',
            description: 'Use yield with value.',
            instructions: ['Create managed_list() that yields a list and prints its length on exit'],
            starterCode: '',
            solution: 'from contextlib import contextmanager\n\n@contextmanager\ndef managed_list():\n    lst = []\n    yield lst\n    print(f\'Final length: {len(lst)}\')\n\nwith managed_list() as items:\n    items.append(\'a\')\n    items.append(\'b\')\n    print(items)',
            hint: 'yield the list, print after.',
            expectedOutput: '[\'a\', \'b\']\nFinal length: 2',
          },
          {
            id: 'ctx-5',
            title: 'Error Handling',
            description: 'Handle errors in context manager.',
            instructions: ['Create a context manager that catches ValueError', 'Return True from __exit__ to suppress the error'],
            starterCode: '',
            solution: 'class SafeBlock:\n    def __enter__(self):\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        if exc_type is ValueError:\n            print(f\'Caught: {exc_val}\')\n            return True\n        return False\n\nwith SafeBlock():\n    raise ValueError(\'test error\')\nprint(\'Continued\')',
            hint: 'Return True from __exit__ to suppress the exception.',
            expectedOutput: 'Caught: test error\nContinued',
          }
        ],
      },
      {
        id: 'typehints',
        number: 4,
        title: 'Type Hints & Annotations',
        description: 'Add type information to make code clearer and safer.',
        icon: 'FileCode',
        type: 'exercises',
        lesson: `Type hints tell **humans and tools** what types your code expects. Python doesn't enforce them at runtime.

## Basic Type Hints

\`\`\`python
name: str = "Alice"
age: int = 25
price: float = 9.99
active: bool = True

def greet(name: str) -> str:
    return f"Hello, {name}!"

print(greet("World"))
\`\`\`
>>> Hello, World!

## Function Annotations

\`\`\`python
def add(a: int, b: int) -> int:
    return a + b

def process(items: list[str]) -> None:
    for item in items:
        print(item)
\`\`\`

## Common Types from typing

\`\`\`python
from typing import Optional, Union

def find(name: str) -> Optional[int]:  # int or None
    return None

def process(value: Union[int, str]) -> str:  # int or str
    return str(value)
\`\`\`

## Collection Types

\`\`\`python
from typing import Dict, List, Tuple, Set

scores: Dict[str, int] = {"Alice": 90}
names: List[str] = ["Alice", "Bob"]
point: Tuple[int, int] = (3, 4)
tags: Set[str] = {"python", "coding"}
\`\`\`

Python 3.9+: use built-in types directly:
\`\`\`python
scores: dict[str, int] = {"Alice": 90}
names: list[str] = ["Alice", "Bob"]
\`\`\`

## Callable Types

\`\`\`python
from typing import Callable

def apply(func: Callable[[int, int], int], a: int, b: int) -> int:
    return func(a, b)

print(apply(lambda a, b: a + b, 3, 4))
\`\`\`
>>> 7

## TypeAlias and NewType

\`\`\`python
from typing import TypeAlias, NewType

Vector: TypeAlias = list[float]
UserId = NewType('UserId', int)
\`\`\`

💡 Type hints improve readability and enable IDE autocompletion.

💡 Use \`mypy\` to check types statically: \`mypy your_script.py\`

⚠️ Type hints are NOT enforced at runtime — they're for documentation and tooling.`,
        exercises: [
          {
            id: 'th-1',
            title: 'Basic Annotations',
            description: 'Add type hints to functions.',
            instructions: ['Write add(a: int, b: int) -> int', 'Print add(3, 4)'],
            starterCode: '',
            solution: 'def add(a: int, b: int) -> int:\n    return a + b\n\nprint(add(3, 4))',
            hint: 'Add : type after parameters, -> type after ).',
            expectedOutput: '7',
          },
          {
            id: 'th-2',
            title: 'Optional Type',
            description: 'Use Optional for nullable values.',
            instructions: ['Write find_user(name: str) -> Optional[str]', 'Return None if name is \'unknown\', else return name.upper()'],
            starterCode: '',
            solution: 'from typing import Optional\n\ndef find_user(name: str) -> Optional[str]:\n    if name == \'unknown\':\n        return None\n    return name.upper()\n\nprint(find_user(\'alice\'))\nprint(find_user(\'unknown\'))',
            hint: 'Optional[X] means X or None.',
            expectedOutput: 'ALICE\nNone',
          },
          {
            id: 'th-3',
            title: 'List Type',
            description: 'Type hint for lists.',
            instructions: ['Write average(nums: list[float]) -> float', 'Test with [1, 2, 3, 4, 5]'],
            starterCode: '',
            solution: 'def average(nums: list[float]) -> float:\n    return sum(nums) / len(nums)\n\nprint(average([1, 2, 3, 4, 5]))',
            hint: 'Use list[type] for list type hints.',
            expectedOutput: '3.0',
          },
          {
            id: 'th-4',
            title: 'Dict Type',
            description: 'Type hint for dictionaries.',
            instructions: ['Write count_chars(s: str) -> dict[str, int]', 'Test with \'hello\''],
            starterCode: '',
            solution: 'def count_chars(s: str) -> dict[str, int]:\n    result: dict[str, int] = {}\n    for c in s:\n        result[c] = result.get(c, 0) + 1\n    return result\n\nprint(count_chars(\'hello\'))',
            hint: 'Use dict[key_type, value_type].',
            expectedOutput: '{\'h\': 1, \'e\': 1, \'l\': 2, \'o\': 1}',
          },
          {
            id: 'th-5',
            title: 'Callable Type',
            description: 'Type hint for function parameters.',
            instructions: ['Write apply(func: Callable[[int], int], val: int) -> int', 'Test with a doubler function'],
            starterCode: '',
            solution: 'from typing import Callable\n\ndef apply(func: Callable[[int], int], val: int) -> int:\n    return func(val)\n\nprint(apply(lambda x: x * 2, 5))',
            hint: 'Callable[[arg_types], return_type].',
            expectedOutput: '10',
          }
        ],
      },
      {
        id: 'async',
        number: 5,
        title: 'Async & Await',
        description: 'Write non-blocking concurrent code.',
        icon: 'Timer',
        type: 'exercises',
        lesson: `Async programming lets you run tasks **concurrently** without threads, ideal for I/O-bound operations.

## Basic Async Function

\`\`\`python
import asyncio

async def greet(name):
    print(f"Hello, {name}!")

asyncio.run(greet("Alice"))
\`\`\`
>>> Hello, Alice!

## await — Wait for Async Operations

\`\`\`python
import asyncio

async def slow_task(name, seconds):
    print(f"{name} starting...")
    await asyncio.sleep(seconds)
    print(f"{name} done!")

asyncio.run(slow_task("Task", 1))
\`\`\`
>>> Task starting...
>>> Task done!

## Running Tasks Concurrently

\`\`\`python
import asyncio

async def task(name, seconds):
    await asyncio.sleep(seconds)
    return f"{name} completed"

async def main():
    results = await asyncio.gather(
        task("A", 2),
        task("B", 1),
        task("C", 3)
    )
    for r in results:
        print(r)

asyncio.run(main())
\`\`\`
>>> A completed
>>> B completed
>>> C completed

## Async Context Managers

\`\`\`python
class AsyncConnection:
    async def __aenter__(self):
        print("Connected")
        return self
    async def __aexit__(self, *args):
        print("Disconnected")
\`\`\`

## Async Generators

\`\`\`python
async def async_range(n):
    for i in range(n):
        await asyncio.sleep(0.1)
        yield i
\`\`\`

## When to Use Async

- **I/O-bound**: network requests, file operations, database queries
- **NOT for CPU-bound**: heavy computation (use multiprocessing instead)

💡 \`asyncio.gather()\` runs multiple coroutines concurrently.

⚠️ You can't call \`await\` outside an \`async\` function.

⚠️ Don't mix sync and async code carelessly — use \`asyncio.run()\` as the entry point.`,
        exercises: [
          {
            id: 'async-1',
            title: 'Basic Async',
            description: 'Write an async function.',
            instructions: ['Create an async greet(name) that prints \'Hello, [name]!\'', 'Run it with asyncio.run()'],
            starterCode: '',
            solution: 'import asyncio\n\nasync def greet(name):\n    print(f\'Hello, {name}!\')\n\nasyncio.run(greet(\'World\'))',
            hint: 'Use async def and asyncio.run().',
            expectedOutput: 'Hello, World!',
          },
          {
            id: 'async-2',
            title: 'Await Sleep',
            description: 'Use await with asyncio.sleep.',
            instructions: ['Create async countdown() printing 3, 2, 1, Go!', 'Use await asyncio.sleep(0) between each'],
            starterCode: '',
            solution: 'import asyncio\n\nasync def countdown():\n    for i in range(3, 0, -1):\n        print(i)\n        await asyncio.sleep(0)\n    print(\'Go!\')\n\nasyncio.run(countdown())',
            hint: 'await asyncio.sleep() yields control.',
            expectedOutput: '3\n2\n1\nGo!',
          },
          {
            id: 'async-3',
            title: 'Return Values',
            description: 'Get results from async functions.',
            instructions: ['Create async compute(n) returning n * 2', 'Run it and print result'],
            starterCode: '',
            solution: 'import asyncio\n\nasync def compute(n):\n    return n * 2\n\nasync def main():\n    result = await compute(21)\n    print(result)\n\nasyncio.run(main())',
            hint: 'await the coroutine to get its return value.',
            expectedOutput: '42',
          },
          {
            id: 'async-4',
            title: 'Gather',
            description: 'Run tasks concurrently.',
            instructions: ['Create 3 async tasks returning different strings', 'Use gather to run them and print results'],
            starterCode: '',
            solution: 'import asyncio\n\nasync def task(name):\n    return f\'{name} done\'\n\nasync def main():\n    results = await asyncio.gather(task(\'A\'), task(\'B\'), task(\'C\'))\n    for r in results:\n        print(r)\n\nasyncio.run(main())',
            hint: 'asyncio.gather() runs coroutines concurrently.',
            expectedOutput: 'A done\nB done\nC done',
          },
          {
            id: 'async-5',
            title: 'Async with Pattern',
            description: 'Combine async concepts.',
            instructions: ['Create an async function that gathers two tasks', 'Each task returns its name uppercased'],
            starterCode: '',
            solution: 'import asyncio\n\nasync def upper(name):\n    return name.upper()\n\nasync def main():\n    results = await asyncio.gather(upper(\'hello\'), upper(\'world\'))\n    print(\' \'.join(results))\n\nasyncio.run(main())',
            hint: 'Combine gather with simple async functions.',
            expectedOutput: 'HELLO WORLD',
          }
        ],
      },
      {
        id: 'threading',
        number: 6,
        title: 'Threading & Multiprocessing',
        description: 'Run code in parallel with threads and processes.',
        icon: 'Cpu',
        type: 'exercises',
        lesson: `Python offers **threading** for I/O-bound and **multiprocessing** for CPU-bound parallelism.

## Threading Basics

\`\`\`python
import threading

def worker(name):
    print(f"Worker {name} running")

t = threading.Thread(target=worker, args=("A",))
t.start()
t.join()   # Wait for thread to finish
print("Done")
\`\`\`
>>> Worker A running
>>> Done

## Multiple Threads

\`\`\`python
import threading

def task(n):
    print(f"Task {n}")

threads = []
for i in range(3):
    t = threading.Thread(target=task, args=(i,))
    threads.append(t)
    t.start()

for t in threads:
    t.join()
\`\`\`

## ThreadPoolExecutor

\`\`\`python
from concurrent.futures import ThreadPoolExecutor

def square(n):
    return n ** 2

with ThreadPoolExecutor(max_workers=3) as pool:
    results = pool.map(square, [1, 2, 3, 4, 5])
    print(list(results))
\`\`\`
>>> [1, 4, 9, 16, 25]

## The GIL

Python's **Global Interpreter Lock** means threads can't run Python code truly in parallel. For CPU-bound tasks, use **multiprocessing**:

\`\`\`python
from multiprocessing import Pool

def heavy_task(n):
    return sum(range(n))

if __name__ == "__main__":
    with Pool(4) as p:
        results = p.map(heavy_task, [100000, 200000])
    print(results)
\`\`\`

## ProcessPoolExecutor

\`\`\`python
from concurrent.futures import ProcessPoolExecutor

def cube(n):
    return n ** 3

with ProcessPoolExecutor() as pool:
    results = list(pool.map(cube, range(5)))
    print(results)
\`\`\`

## Thread Safety

Use locks to prevent race conditions:
\`\`\`python
lock = threading.Lock()
counter = 0

def increment():
    global counter
    with lock:
        counter += 1
\`\`\`

💡 Use threads for I/O (network, files), processes for CPU-heavy work.

⚠️ The GIL prevents true parallel execution of Python threads.`,
        exercises: [
          {
            id: 'thr-1',
            title: 'Basic Thread',
            description: 'Create and run a thread.',
            instructions: ['Create a thread that prints \'Hello from thread\'', 'Start and join it'],
            starterCode: '',
            solution: 'import threading\n\ndef worker():\n    print(\'Hello from thread\')\n\nt = threading.Thread(target=worker)\nt.start()\nt.join()',
            hint: 'Use threading.Thread(target=function).',
            expectedOutput: 'Hello from thread',
          },
          {
            id: 'thr-2',
            title: 'Thread with Args',
            description: 'Pass arguments to a thread.',
            instructions: ['Create a thread calling greet(\'Python\')', 'Start and join'],
            starterCode: '',
            solution: 'import threading\n\ndef greet(name):\n    print(f\'Hello, {name}!\')\n\nt = threading.Thread(target=greet, args=(\'Python\',))\nt.start()\nt.join()',
            hint: 'Use args=(value,) for thread arguments.',
            expectedOutput: 'Hello, Python!',
          },
          {
            id: 'thr-3',
            title: 'ThreadPoolExecutor',
            description: 'Use a thread pool.',
            instructions: ['Use ThreadPoolExecutor to square numbers 1-5', 'Print results as a list'],
            starterCode: '',
            solution: 'from concurrent.futures import ThreadPoolExecutor\n\ndef square(n):\n    return n ** 2\n\nwith ThreadPoolExecutor() as pool:\n    results = list(pool.map(square, range(1, 6)))\nprint(results)',
            hint: 'pool.map() applies function to each item.',
            expectedOutput: '[1, 4, 9, 16, 25]',
          },
          {
            id: 'thr-4',
            title: 'Future Results',
            description: 'Get results from threads.',
            instructions: ['Submit a task to ThreadPoolExecutor', 'Get and print the result'],
            starterCode: '',
            solution: 'from concurrent.futures import ThreadPoolExecutor\n\ndef compute(n):\n    return n * 10\n\nwith ThreadPoolExecutor() as pool:\n    future = pool.submit(compute, 5)\n    print(future.result())',
            hint: 'Use pool.submit() and future.result().',
            expectedOutput: '50',
          },
          {
            id: 'thr-5',
            title: 'Thread Lock',
            description: 'Use a lock for thread safety.',
            instructions: ['Create a counter incremented by 2 threads using a lock'],
            starterCode: '',
            solution: 'import threading\n\nlock = threading.Lock()\ncounter = 0\n\ndef increment(n):\n    global counter\n    for _ in range(n):\n        with lock:\n            counter += 1\n\nt1 = threading.Thread(target=increment, args=(100,))\nt2 = threading.Thread(target=increment, args=(100,))\nt1.start()\nt2.start()\nt1.join()\nt2.join()\nprint(counter)',
            hint: 'Use \'with lock:\' to protect shared state.',
            expectedOutput: '200',
          }
        ],
      },
      {
        id: 'itertools',
        number: 7,
        title: 'Itertools & Functools',
        description: 'Powerful tools for iteration and function manipulation.',
        icon: 'Infinity',
        type: 'exercises',
        lesson: `The \`itertools\` and \`functools\` modules provide efficient tools for working with iterators and functions.

## itertools — Iterator Building Blocks

### chain — Combine Iterables

\`\`\`python
from itertools import chain
result = list(chain([1, 2], [3, 4], [5]))
print(result)
\`\`\`
>>> [1, 2, 3, 4, 5]

### product — Cartesian Product

\`\`\`python
from itertools import product
pairs = list(product("AB", "12"))
print(pairs)
\`\`\`
>>> [('A', '1'), ('A', '2'), ('B', '1'), ('B', '2')]

### combinations and permutations

\`\`\`python
from itertools import combinations, permutations
print(list(combinations("ABC", 2)))
print(list(permutations("AB")))
\`\`\`
>>> [('A', 'B'), ('A', 'C'), ('B', 'C')]
>>> [('A', 'B'), ('B', 'A')]

### groupby

\`\`\`python
from itertools import groupby
data = [("a", 1), ("a", 2), ("b", 3)]
for key, group in groupby(data, key=lambda x: x[0]):
    print(key, list(group))
\`\`\`
>>> a [('a', 1), ('a', 2)]
>>> b [('b', 3)]

### islice — Lazy Slicing

\`\`\`python
from itertools import islice
print(list(islice(range(100), 5, 10)))
\`\`\`
>>> [5, 6, 7, 8, 9]

## functools — Function Tools

### lru_cache — Memoization

\`\`\`python
from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n < 2:
        return n
    return fib(n-1) + fib(n-2)

print(fib(30))
\`\`\`
>>> 832040

### partial — Pre-fill Arguments

\`\`\`python
from functools import partial
double = partial(pow, exp=1)
multiply_by_10 = partial(int.__mul__, 10)
print(multiply_by_10(5))
\`\`\`
>>> 50

### reduce

\`\`\`python
from functools import reduce
product = reduce(lambda a, b: a * b, [1, 2, 3, 4])
print(product)
\`\`\`
>>> 24

💡 \`lru_cache\` can dramatically speed up recursive functions.

💡 \`chain\` is great for treating multiple sequences as one.`,
        exercises: [
          {
            id: 'it-1',
            title: 'Chain Iterables',
            description: 'Combine sequences.',
            instructions: ['Chain [1,2], [3,4], [5,6] together', 'Print as a list'],
            starterCode: '',
            solution: 'from itertools import chain\nprint(list(chain([1, 2], [3, 4], [5, 6])))',
            hint: 'chain() joins multiple iterables.',
            expectedOutput: '[1, 2, 3, 4, 5, 6]',
          },
          {
            id: 'it-2',
            title: 'Combinations',
            description: 'Generate combinations.',
            instructions: ['Generate all 2-letter combinations from \'ABCD\'', 'Print as list'],
            starterCode: '',
            solution: 'from itertools import combinations\nprint(list(combinations(\'ABCD\', 2)))',
            hint: 'combinations(iterable, r) gives r-length combos.',
            expectedOutput: '[(\'A\', \'B\'), (\'A\', \'C\'), (\'A\', \'D\'), (\'B\', \'C\'), (\'B\', \'D\'), (\'C\', \'D\')]',
          },
          {
            id: 'it-3',
            title: 'Product',
            description: 'Generate cartesian product.',
            instructions: ['Generate product of [1,2] and [\'a\',\'b\']'],
            starterCode: '',
            solution: 'from itertools import product\nprint(list(product([1, 2], [\'a\', \'b\'])))',
            hint: 'product gives all possible pairs.',
            expectedOutput: '[(1, \'a\'), (1, \'b\'), (2, \'a\'), (2, \'b\')]',
          },
          {
            id: 'it-4',
            title: 'lru_cache',
            description: 'Memoize a function.',
            instructions: ['Write a cached Fibonacci function', 'Print fib(10)'],
            starterCode: '',
            solution: 'from functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef fib(n):\n    if n < 2:\n        return n\n    return fib(n-1) + fib(n-2)\n\nprint(fib(10))',
            hint: '@lru_cache stores previous results.',
            expectedOutput: '55',
          },
          {
            id: 'it-5',
            title: 'Reduce',
            description: 'Fold a sequence into one value.',
            instructions: ['Use reduce to find the product of [1,2,3,4,5]'],
            starterCode: '',
            solution: 'from functools import reduce\nprint(reduce(lambda a, b: a * b, [1, 2, 3, 4, 5]))',
            hint: 'reduce applies function cumulatively.',
            expectedOutput: '120',
          }
        ],
      },
      {
        id: 'meta',
        number: 8,
        title: 'Metaclasses & Descriptors',
        description: 'Control class creation and attribute access at a deep level.',
        icon: 'Cog',
        type: 'exercises',
        lesson: `Metaclasses and descriptors are advanced features that let you customize **how classes are created** and **how attributes work**.

## What is a Metaclass?

A metaclass is the **class of a class**. Just as objects are instances of classes, classes are instances of metaclasses.

\`\`\`python
class MyMeta(type):
    def __new__(mcs, name, bases, namespace):
        print(f"Creating class: {name}")
        return super().__new__(mcs, name, bases, namespace)

class MyClass(metaclass=MyMeta):
    pass
\`\`\`
>>> Creating class: MyClass

## Practical Metaclass: Registry

\`\`\`python
class Registry(type):
    _classes = {}
    def __new__(mcs, name, bases, namespace):
        cls = super().__new__(mcs, name, bases, namespace)
        if name != 'Base':
            mcs._classes[name] = cls
        return cls

class Base(metaclass=Registry):
    pass

class Dog(Base):
    pass

class Cat(Base):
    pass

print(Registry._classes)
\`\`\`
>>> {'Dog': <class 'Dog'>, 'Cat': <class 'Cat'>}

## Descriptors

Descriptors control attribute access via \`__get__\`, \`__set__\`, \`__delete__\`:

\`\`\`python
class Positive:
    def __set_name__(self, owner, name):
        self.name = name

    def __get__(self, obj, objtype=None):
        return getattr(obj, f'_{self.name}', 0)

    def __set__(self, obj, value):
        if value < 0:
            raise ValueError(f"{self.name} must be positive")
        setattr(obj, f'_{self.name}', value)

class Account:
    balance = Positive()

a = Account()
a.balance = 100
print(a.balance)
\`\`\`
>>> 100

## __init_subclass__

A simpler alternative to metaclasses (Python 3.6+):

\`\`\`python
class Plugin:
    _plugins = []

    def __init_subclass__(cls, **kwargs):
        super().__init_subclass__(**kwargs)
        Plugin._plugins.append(cls)

class PDFPlugin(Plugin):
    pass

class CSVPlugin(Plugin):
    pass

print([p.__name__ for p in Plugin._plugins])
\`\`\`
>>> ['PDFPlugin', 'CSVPlugin']

## __class_getitem__

Make classes subscriptable (for generic types):

\`\`\`python
class Box:
    def __class_getitem__(cls, item):
        return f"Box[{item.__name__}]"

print(Box[int])
\`\`\`
>>> Box[int]

💡 \`__init_subclass__\` covers most use cases where you'd want a metaclass.

⚠️ Metaclasses are powerful but complex — use them sparingly.

💡 Descriptors are how \`property\`, \`classmethod\`, and \`staticmethod\` work internally.`,
        exercises: [
          {
            id: 'meta-1',
            title: '__init_subclass__',
            description: 'Auto-register subclasses.',
            instructions: ['Create a Plugin base class with __init_subclass__ that collects plugins', 'Create two plugins and print the list'],
            starterCode: '',
            solution: 'class Plugin:\n    _plugins = []\n    def __init_subclass__(cls, **kwargs):\n        super().__init_subclass__(**kwargs)\n        Plugin._plugins.append(cls.__name__)\n\nclass PDF(Plugin): pass\nclass CSV(Plugin): pass\n\nprint(Plugin._plugins)',
            hint: '__init_subclass__ is called when a class is subclassed.',
            expectedOutput: '[\'PDF\', \'CSV\']',
          },
          {
            id: 'meta-2',
            title: 'Simple Descriptor',
            description: 'Create a descriptor class.',
            instructions: ['Create a Positive descriptor that rejects negative values', 'Use it in a class and print a valid value'],
            starterCode: '',
            solution: 'class Positive:\n    def __set_name__(self, owner, name):\n        self.name = \'_\' + name\n    def __get__(self, obj, objtype=None):\n        return getattr(obj, self.name, 0)\n    def __set__(self, obj, value):\n        if value < 0:\n            raise ValueError(\'Must be positive\')\n        setattr(obj, self.name, value)\n\nclass Item:\n    price = Positive()\n\ni = Item()\ni.price = 10\nprint(i.price)',
            hint: 'Implement __get__ and __set__.',
            expectedOutput: '10',
          },
          {
            id: 'meta-3',
            title: 'Basic Metaclass',
            description: 'Create a simple metaclass.',
            instructions: ['Create a metaclass that prints when a class is created', 'Define a class using it'],
            starterCode: '',
            solution: 'class MyMeta(type):\n    def __new__(mcs, name, bases, ns):\n        print(f\'Creating {name}\')\n        return super().__new__(mcs, name, bases, ns)\n\nclass Foo(metaclass=MyMeta):\n    pass',
            hint: 'Override __new__ in the metaclass.',
            expectedOutput: 'Creating Foo',
          },
          {
            id: 'meta-4',
            title: 'Enforce Method',
            description: 'Metaclass that validates classes.',
            instructions: ['Create a metaclass requiring subclasses to have a \'run\' method', 'Create a valid class with run()'],
            starterCode: '',
            solution: 'class RequireRun(type):\n    def __new__(mcs, name, bases, ns):\n        if bases and \'run\' not in ns:\n            raise TypeError(f\'{name} must define run()\')\n        return super().__new__(mcs, name, bases, ns)\n\nclass Base(metaclass=RequireRun):\n    pass\n\nclass Worker(Base):\n    def run(self):\n        return \'running\'\n\nprint(Worker().run())',
            hint: 'Check namespace in __new__.',
            expectedOutput: 'running',
          },
          {
            id: 'meta-5',
            title: '__class_getitem__',
            description: 'Make a class subscriptable.',
            instructions: ['Create TypedBox with __class_getitem__ returning a string', 'Print TypedBox[int]'],
            starterCode: '',
            solution: 'class TypedBox:\n    def __class_getitem__(cls, item):\n        return f\'TypedBox[{item.__name__}]\'\n\nprint(TypedBox[int])',
            hint: '__class_getitem__ handles Class[Type] syntax.',
            expectedOutput: 'TypedBox[int]',
          }
        ],
      }
    ],
  },
  {
    id: 'stdlib',
    title: 'The Standard Library',
    subtitle: 'Python\'s Built-in Power',
    description: 'Master Python\'s built-in modules for file paths, dates, regex, logging, and more.',
    icon: 'Library',
    color: 'teal',
    categories: [
      {
        id: 'os-pathlib',
        number: 1,
        title: 'OS & Path Operations',
        description: 'Navigate the filesystem with os and pathlib',
        icon: 'FolderOpen',
        type: 'exercises',
        lesson: `The \`os\` and \`pathlib\` modules let you **interact with the operating system** — navigate directories, manipulate file paths, check if files exist, and manage environment variables. \`pathlib\` is the modern, object-oriented way to handle paths.

## The os Module

The \`os\` module provides functions for interacting with the operating system:

\`\`\`python
import os

# Get current working directory
print(os.getcwd())
>>> /home/user/projects

# List files in a directory
print(os.listdir('.'))
>>> ['file1.py', 'file2.txt', 'data']

# Check if a path exists
print(os.path.exists('file1.py'))
>>> True

# Join paths (OS-independent)
path = os.path.join('data', 'files', 'report.csv')
print(path)
>>> data/files/report.csv
\`\`\`

## Environment Variables

\`\`\`python
import os

# Get an environment variable
home = os.environ.get('HOME', '/default/path')
print(home)
>>> /home/user

# Get with a default
debug = os.environ.get('DEBUG', 'false')
print(debug)
>>> false
\`\`\`

## The pathlib Module (Modern Approach)

\`pathlib\` treats paths as **objects** instead of strings:

\`\`\`python
from pathlib import Path

# Create a path object
p = Path('data') / 'files' / 'report.csv'
print(p)
>>> data/files/report.csv

# Path properties
print(p.name)       # report.csv
print(p.stem)       # report
print(p.suffix)     # .csv
print(p.parent)     # data/files
\`\`\`

## Useful pathlib Methods

\`\`\`python
from pathlib import Path

p = Path('example.txt')

# Check existence
print(p.exists())
>>> False

# Get home directory
home = Path.home()
print(type(home))
>>> <class 'pathlib.PosixPath'>

# Iterate directory contents
for item in Path('.').iterdir():
    print(item)
\`\`\`

## os.path vs pathlib Comparison

| os.path | pathlib |
|---------|---------|
| \`os.path.join(a, b)\` | \`Path(a) / b\` |
| \`os.path.basename(p)\` | \`p.name\` |
| \`os.path.dirname(p)\` | \`p.parent\` |
| \`os.path.splitext(p)\` | \`p.suffix\` |
| \`os.path.exists(p)\` | \`p.exists()\` |

💡 Prefer \`pathlib\` for new code — it's cleaner and more Pythonic.

⚠️ Remember that path separators differ between OS: \`/\` on Unix, \`\\\\\` on Windows. Both \`os.path.join()\` and \`pathlib\` handle this automatically.

⚠️ Don't hardcode paths with string concatenation like \`'data' + '/' + 'file.txt'\` — use \`os.path.join()\` or \`pathlib\` instead.`,
        exercises: [
          {
            id: 'os-path-1',
            title: 'Path Components',
            description: 'Extract components from a file path using pathlib.',
            instructions: ['Create a Path object from \'projects/web/app/main.py\'', 'Print the file name, stem, suffix, and parent'],
            starterCode: '',
            solution: 'from pathlib import Path\n\np = Path("projects/web/app/main.py")\nprint(f"Name: {p.name}")\nprint(f"Stem: {p.stem}")\nprint(f"Suffix: {p.suffix}")\nprint(f"Parent: {p.parent}")',
            hint: 'Use Path object properties: .name, .stem, .suffix, .parent',
            expectedOutput: 'Name: main.py\nStem: main\nSuffix: .py\nParent: projects/web/app',
          },
          {
            id: 'os-path-2',
            title: 'Building Paths',
            description: 'Build paths using pathlib\'s / operator.',
            instructions: ['Build a path: base=\'home\', then \'user\', \'docs\', \'report.pdf\'', 'Print the full path and whether it\'s absolute'],
            starterCode: '',
            solution: 'from pathlib import Path\n\np = Path("home") / "user" / "docs" / "report.pdf"\nprint(f"Path: {p}")\nprint(f"Is absolute: {p.is_absolute()}")',
            hint: 'Use the / operator to join Path objects',
            expectedOutput: 'Path: home/user/docs/report.pdf\nIs absolute: False',
          },
          {
            id: 'os-path-3',
            title: 'Environment Variables',
            description: 'Read and work with environment variables.',
            instructions: ['Use os.environ.get to read \'HOME\' with default \'/tmp\'', 'Read \'LANG\' with default \'en_US\'', 'Print both values'],
            starterCode: '',
            solution: 'import os\n\nhome = os.environ.get("HOME", "/tmp")\nlang = os.environ.get("LANG", "en_US")\nprint(f"Home: {home}")\nprint(f"Lang: {lang}")',
            hint: 'Use os.environ.get(key, default)',
            expectedOutputContains: ['Home:', 'Lang:'],
          },
          {
            id: 'os-path-4',
            title: 'Path Manipulation',
            description: 'Change file extensions and parents using pathlib.',
            instructions: ['Start with Path(\'data/report.csv\')', 'Create a new path with .json extension using with_suffix', 'Create a new path with name \'summary.csv\' using with_name', 'Print both new paths'],
            starterCode: '',
            solution: 'from pathlib import Path\n\np = Path("data/report.csv")\njson_path = p.with_suffix(".json")\nsummary_path = p.with_name("summary.csv")\nprint(f"JSON: {json_path}")\nprint(f"Summary: {summary_path}")',
            hint: 'Use .with_suffix() and .with_name() methods',
            expectedOutput: 'JSON: data/report.json\nSummary: data/summary.csv',
          },
          {
            id: 'os-path-5',
            title: 'Path Parts',
            description: 'Decompose a complex path into all its parts.',
            instructions: ['Create Path(\'/usr/local/bin/python3\')', 'Print the parts tuple', 'Print each ancestor using .parents'],
            starterCode: '',
            solution: 'from pathlib import Path\n\np = Path("/usr/local/bin/python3")\nprint(f"Parts: {p.parts}")\nfor i, parent in enumerate(p.parents):\n    print(f"Parent {i}: {parent}")',
            hint: 'Use .parts for tuple of components, .parents for ancestor paths',
            expectedOutputContains: ['Parts:', 'Parent 0:', 'Parent 1:'],
          }
        ],
      },
      {
        id: 'datetime-mod',
        number: 2,
        title: 'Date & Time',
        description: 'Work with dates, times, and durations',
        icon: 'Clock',
        type: 'exercises',
        lesson: `The \`datetime\` module lets you work with **dates, times, and durations** in Python. Essential for logging, scheduling, data analysis, and any time-related computation.

## Creating Dates and Times

\`\`\`python
from datetime import date, time, datetime

# Today's date
today = date.today()
print(today)
>>> 2024-03-15

# Specific date
birthday = date(1995, 6, 20)
print(birthday)
>>> 1995-06-20

# Current date and time
now = datetime.now()
print(now)
>>> 2024-03-15 14:30:45.123456

# Specific datetime
event = datetime(2024, 12, 25, 18, 0, 0)
print(event)
>>> 2024-12-25 18:00:00
\`\`\`

## Accessing Components

\`\`\`python
from datetime import datetime

now = datetime(2024, 3, 15, 14, 30)
print(f"Year: {now.year}")
print(f"Month: {now.month}")
print(f"Day: {now.day}")
print(f"Hour: {now.hour}")
print(f"Minute: {now.minute}")
>>> Year: 2024
>>> Month: 3
>>> Day: 15
>>> Hour: 14
>>> Minute: 30
\`\`\`

## Formatting Dates (strftime)

Convert datetime to string:

\`\`\`python
from datetime import datetime

dt = datetime(2024, 3, 15, 14, 30)
print(dt.strftime("%Y-%m-%d"))
>>> 2024-03-15

print(dt.strftime("%B %d, %Y"))
>>> March 15, 2024

print(dt.strftime("%I:%M %p"))
>>> 02:30 PM
\`\`\`

**Common format codes:** \`%Y\`=4-digit year, \`%m\`=month, \`%d\`=day, \`%H\`=24h hour, \`%I\`=12h hour, \`%M\`=minute, \`%S\`=second, \`%B\`=month name, \`%A\`=weekday name, \`%p\`=AM/PM

## Parsing Dates (strptime)

Convert string to datetime:

\`\`\`python
from datetime import datetime

dt = datetime.strptime("2024-03-15", "%Y-%m-%d")
print(dt)
>>> 2024-03-15 00:00:00

dt2 = datetime.strptime("March 15, 2024", "%B %d, %Y")
print(dt2.date())
>>> 2024-03-15
\`\`\`

## Time Differences (timedelta)

\`\`\`python
from datetime import datetime, timedelta

now = datetime(2024, 3, 15)
future = now + timedelta(days=30)
print(future)
>>> 2024-04-14 00:00:00

# Difference between dates
d1 = datetime(2024, 1, 1)
d2 = datetime(2024, 12, 31)
diff = d2 - d1
print(f"{diff.days} days")
>>> 365 days
\`\`\`

💡 \`timedelta\` supports: days, seconds, microseconds, milliseconds, minutes, hours, weeks.

⚠️ \`strptime\` will raise ValueError if the string doesn't match the format exactly.

⚠️ Be careful with time zones! \`datetime.now()\` returns local time. For UTC, use \`datetime.utcnow()\` or \`datetime.now(timezone.utc)\`.`,
        exercises: [
          {
            id: 'datetime-1',
            title: 'Date Formatting',
            description: 'Format dates in different ways.',
            instructions: ['Create datetime(2024, 7, 4, 15, 30)', 'Print in format: \'July 04, 2024\'', 'Print in format: \'04/07/2024\'', 'Print in format: \'03:30 PM\''],
            starterCode: '',
            solution: 'from datetime import datetime\n\ndt = datetime(2024, 7, 4, 15, 30)\nprint(dt.strftime("%B %d, %Y"))\nprint(dt.strftime("%d/%m/%Y"))\nprint(dt.strftime("%I:%M %p"))',
            hint: 'Use strftime with format codes: %B for month name, %d for day, %Y for year, %I for 12-hour, %M for minute, %p for AM/PM',
            expectedOutput: 'July 04, 2024\n04/07/2024\n03:30 PM',
          },
          {
            id: 'datetime-2',
            title: 'Date Parsing',
            description: 'Parse date strings into datetime objects.',
            instructions: ['Parse \'2024-06-15\' using strptime', 'Parse \'March 20, 2023\' using strptime', 'Print both as \'DD/MM/YYYY\''],
            starterCode: '',
            solution: 'from datetime import datetime\n\nd1 = datetime.strptime("2024-06-15", "%Y-%m-%d")\nd2 = datetime.strptime("March 20, 2023", "%B %d, %Y")\nprint(d1.strftime("%d/%m/%Y"))\nprint(d2.strftime("%d/%m/%Y"))',
            hint: 'Use datetime.strptime(string, format) to parse',
            expectedOutput: '15/06/2024\n20/03/2023',
          },
          {
            id: 'datetime-3',
            title: 'Time Deltas',
            description: 'Calculate date differences and future dates.',
            instructions: ['Start with date 2024-01-01', 'Add 100 days using timedelta', 'Print the resulting date', 'Calculate days between 2024-01-01 and 2024-12-31'],
            starterCode: '',
            solution: 'from datetime import datetime, timedelta\n\nstart = datetime(2024, 1, 1)\nfuture = start + timedelta(days=100)\nprint(f"100 days later: {future.strftime("%Y-%m-%d")}")\n\nend = datetime(2024, 12, 31)\ndiff = end - start\nprint(f"Days in 2024: {diff.days}")',
            hint: 'Use timedelta(days=N) to add days, subtract datetimes to get difference',
            expectedOutput: '100 days later: 2024-04-10\nDays in 2024: 365',
          },
          {
            id: 'datetime-4',
            title: 'Age Calculator',
            description: 'Calculate age from a birthdate.',
            instructions: ['Define birthdate as 2000-05-15', 'Define today as 2024-03-15', 'Calculate the age in years (handle month/day)', 'Print the age'],
            starterCode: '',
            solution: 'from datetime import date\n\nbirthdate = date(2000, 5, 15)\ntoday = date(2024, 3, 15)\n\nage = today.year - birthdate.year\nif (today.month, today.day) < (birthdate.month, birthdate.day):\n    age -= 1\n\nprint(f"Age: {age} years")',
            hint: 'Subtract years, then check if birthday hasn\'t occurred yet this year',
            expectedOutput: 'Age: 23 years',
          },
          {
            id: 'datetime-5',
            title: 'Weekday Counter',
            description: 'Count specific weekdays between two dates.',
            instructions: ['Count all Mondays between 2024-01-01 and 2024-03-31', 'Print the count'],
            starterCode: '',
            solution: 'from datetime import date, timedelta\n\nstart = date(2024, 1, 1)\nend = date(2024, 3, 31)\n\nmondays = 0\ncurrent = start\nwhile current <= end:\n    if current.weekday() == 0:  # Monday\n        mondays += 1\n    current += timedelta(days=1)\n\nprint(f"Mondays: {mondays}")',
            hint: 'Use .weekday() where Monday=0, iterate with timedelta(days=1)',
            expectedOutput: 'Mondays: 13',
          }
        ],
      },
      {
        id: 'regex',
        number: 3,
        title: 'Regular Expressions',
        description: 'Pattern matching and text manipulation with re',
        icon: 'Search',
        type: 'exercises',
        lesson: `Regular expressions (regex) are **powerful pattern-matching tools** for searching, extracting, and manipulating text. Python's \`re\` module provides full regex support.

## Basic Pattern Matching

\`\`\`python
import re

text = "My phone is 123-456-7890"
match = re.search(r'\\d{3}-\\d{3}-\\d{4}', text)
if match:
    print(match.group())
>>> 123-456-7890
\`\`\`

## Common Patterns

| Pattern | Matches |
|---------|---------|
| \`\\d\` | Any digit (0-9) |
| \`\\w\` | Word character (letter, digit, underscore) |
| \`\\s\` | Whitespace (space, tab, newline) |
| \`.\` | Any character except newline |
| \`\\D\`, \`\\W\`, \`\\S\` | Opposite of above |

## Quantifiers

| Quantifier | Meaning |
|-----------|---------|
| \`*\` | 0 or more |
| \`+\` | 1 or more |
| \`?\` | 0 or 1 |
| \`{n}\` | Exactly n |
| \`{n,m}\` | Between n and m |

## Key re Functions

\`\`\`python
import re

text = "I have 3 cats and 5 dogs"

# findall - find all matches
numbers = re.findall(r'\\d+', text)
print(numbers)
>>> ['3', '5']

# sub - replace matches
result = re.sub(r'\\d+', 'N', text)
print(result)
>>> I have N cats and N dogs

# split - split by pattern
parts = re.split(r'\\s+', "hello   world   python")
print(parts)
>>> ['hello', 'world', 'python']
\`\`\`

## Groups — Extracting Parts

\`\`\`python
import re

text = "Contact: john@example.com"
match = re.search(r'(\\w+)@(\\w+)\\.(\\w+)', text)
if match:
    print(f"Full: {match.group()}")
    print(f"User: {match.group(1)}")
    print(f"Domain: {match.group(2)}")
>>> Full: john@example.com
>>> User: john
>>> Domain: example
\`\`\`

## Named Groups

\`\`\`python
import re

text = "2024-03-15"
match = re.search(r'(?P<year>\\d{4})-(?P<month>\\d{2})-(?P<day>\\d{2})', text)
if match:
    print(match.group('year'))
    print(match.group('month'))
>>> 2024
>>> 03
\`\`\`

💡 Always use **raw strings** (\`r'...'\`) for regex patterns to avoid issues with backslashes.

⚠️ \`re.match()\` only matches at the START of the string. Use \`re.search()\` to find anywhere.

⚠️ By default, \`.\` does NOT match newlines. Use \`re.DOTALL\` flag if needed.`,
        exercises: [
          {
            id: 'regex-1',
            title: 'Find All Numbers',
            description: 'Extract all numbers from a string.',
            instructions: ['Use re.findall to extract all numbers from \'Order 42: 3 items at $9.99 each\'', 'Print the list of numbers found'],
            starterCode: '',
            solution: 'import re\n\ntext = "Order 42: 3 items at $9.99 each"\nnumbers = re.findall(r\'\\d+\\.?\\d*\', text)\nprint(numbers)',
            hint: 'Use re.findall with pattern r\'\\d+\\.?\\d*\' to match integers and decimals',
            expectedOutput: '[\'42\', \'3\', \'9.99\']',
          },
          {
            id: 'regex-2',
            title: 'Email Validator',
            description: 'Check if strings are valid email formats.',
            instructions: ['Write a function is_valid_email(email) using re.match', 'Test with \'user@example.com\', \'bad@\', \'test@site.org\'', 'Print results for each'],
            starterCode: '',
            solution: 'import re\n\ndef is_valid_email(email):\n    pattern = r\'^[\\w.+-]+@[\\w-]+\\.[\\w.]+$\'\n    return bool(re.match(pattern, email))\n\nemails = ["user@example.com", "bad@", "test@site.org"]\nfor email in emails:\n    print(f"{email}: {is_valid_email(email)}")',
            hint: 'Use re.match with anchors ^ and $ for full string matching',
            expectedOutput: 'user@example.com: True\nbad@: False\ntest@site.org: True',
          },
          {
            id: 'regex-3',
            title: 'Text Substitution',
            description: 'Replace patterns in text using re.sub.',
            instructions: ['Replace all phone numbers (XXX-XXX-XXXX) with \'[REDACTED]\'', 'Test with \'Call 555-123-4567 or 555-987-6543\''],
            starterCode: '',
            solution: 'import re\n\ntext = "Call 555-123-4567 or 555-987-6543"\nresult = re.sub(r\'\\d{3}-\\d{3}-\\d{4}\', \'[REDACTED]\', text)\nprint(result)',
            hint: 'Use re.sub(pattern, replacement, text)',
            expectedOutput: 'Call [REDACTED] or [REDACTED]',
          },
          {
            id: 'regex-4',
            title: 'Extract Groups',
            description: 'Use groups to extract parts of a date string.',
            instructions: ['Parse dates in \'DD/MM/YYYY\' format from \'15/03/2024 and 20/12/2023\'', 'Use findall with groups to extract day, month, year tuples', 'Print each tuple'],
            starterCode: '',
            solution: 'import re\n\ntext = "15/03/2024 and 20/12/2023"\ndates = re.findall(r\'(\\d{2})/(\\d{2})/(\\d{4})\', text)\nfor day, month, year in dates:\n    print(f"Day={day}, Month={month}, Year={year}")',
            hint: 'Use parentheses in findall to capture groups',
            expectedOutput: 'Day=15, Month=03, Year=2024\nDay=20, Month=12, Year=2023',
          },
          {
            id: 'regex-5',
            title: 'Word Frequency with Regex',
            description: 'Use regex to tokenize and count words.',
            instructions: ['Extract all words (letters only) from \'Hello, World! Hello, Python!\'', 'Convert to lowercase and count occurrences', 'Print sorted by count descending'],
            starterCode: '',
            solution: 'import re\nfrom collections import Counter\n\ntext = "Hello, World! Hello, Python!"\nwords = re.findall(r\'[a-zA-Z]+\', text)\nwords_lower = [w.lower() for w in words]\ncounts = Counter(words_lower)\nfor word, count in counts.most_common():\n    print(f"{word}: {count}")',
            hint: 'Use re.findall(r\'[a-zA-Z]+\', text) to extract words, then Counter',
            expectedOutput: 'hello: 2\nworld: 1\npython: 1',
          }
        ],
      },
      {
        id: 'logging-mod',
        number: 4,
        title: 'Logging',
        description: 'Professional logging for Python applications',
        icon: 'FileText',
        type: 'exercises',
        lesson: `The \`logging\` module provides a **flexible framework for emitting log messages** from Python programs. Unlike \`print()\`, logging lets you control severity levels, output destinations, and formatting.

## Why Logging Instead of print()?

- **Severity levels** — distinguish info from warnings from errors
- **Configurable output** — console, files, or both
- **Production-ready** — easily disable debug messages in production
- **Formatted timestamps** — automatic date/time in messages

## Basic Usage

\`\`\`python
import logging

logging.basicConfig(level=logging.DEBUG)

logging.debug("Debugging details")
logging.info("General information")
logging.warning("Something unexpected")
logging.error("Something failed")
logging.critical("System is down!")
>>> DEBUG:root:Debugging details
>>> INFO:root:General information
>>> WARNING:root:Something unexpected
>>> ERROR:root:Something failed
>>> CRITICAL:root:System is down!
\`\`\`

## Log Levels (in order of severity)

| Level | Value | Use Case |
|-------|-------|----------|
| DEBUG | 10 | Detailed diagnostic info |
| INFO | 20 | Confirmation things work |
| WARNING | 30 | Something unexpected (default) |
| ERROR | 40 | Something failed |
| CRITICAL | 50 | Program can't continue |

## Custom Formatting

\`\`\`python
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)

logging.info("Server started")
>>> 2024-03-15 14:30:00 - INFO - Server started
\`\`\`

## Named Loggers

\`\`\`python
import logging

logger = logging.getLogger('myapp')
logger.setLevel(logging.DEBUG)

handler = logging.StreamHandler()
handler.setFormatter(logging.Formatter('%(name)s - %(levelname)s - %(message)s'))
logger.addHandler(handler)

logger.info("Application started")
>>> myapp - INFO - Application started
\`\`\`

💡 Use \`__name__\` as the logger name: \`logger = logging.getLogger(__name__)\` — this creates a hierarchy matching your package structure.

⚠️ Call \`logging.basicConfig()\` only once, at the start of your program. Calling it multiple times has no effect (unless you set \`force=True\`).

⚠️ Don't use f-strings in logging calls. Use \`logging.info("Value: %s", value)\` — this is more efficient because formatting is skipped if the level is filtered out.`,
        exercises: [
          {
            id: 'logging-1',
            title: 'Basic Logging',
            description: 'Set up basic logging with different levels.',
            instructions: ['Configure logging at DEBUG level', 'Log one message at each level: debug, info, warning, error, critical'],
            starterCode: '',
            solution: 'import logging\nimport sys\n\nlogging.basicConfig(level=logging.DEBUG, stream=sys.stdout, format="%(levelname)s: %(message)s", force=True)\n\nlogging.debug("Debug message")\nlogging.info("Info message")\nlogging.warning("Warning message")\nlogging.error("Error message")\nlogging.critical("Critical message")',
            hint: 'Use logging.basicConfig(level=logging.DEBUG) then call each logging function',
            expectedOutput: 'DEBUG: Debug message\nINFO: Info message\nWARNING: Warning message\nERROR: Error message\nCRITICAL: Critical message',
          },
          {
            id: 'logging-2',
            title: 'Custom Format',
            description: 'Create a custom log format.',
            instructions: ['Configure logging with format: \'LEVEL | message\'', 'Set level to INFO', 'Log an info and a debug message (debug should not appear)'],
            starterCode: '',
            solution: 'import logging\nimport sys\n\nlogging.basicConfig(level=logging.INFO, stream=sys.stdout, format="%(levelname)s | %(message)s", force=True)\n\nlogging.info("This should appear")\nlogging.debug("This should NOT appear")',
            hint: 'Use format parameter in basicConfig. Messages below the set level are filtered.',
            expectedOutput: 'INFO | This should appear',
          },
          {
            id: 'logging-3',
            title: 'Named Logger',
            description: 'Create and use a named logger.',
            instructions: ['Create a logger named \'myapp\'', 'Add a StreamHandler with format \'myapp - LEVEL - message\'', 'Log an info and warning message'],
            starterCode: '',
            solution: 'import logging\nimport sys\n\nlogger = logging.getLogger("myapp")\nlogger.setLevel(logging.DEBUG)\nlogger.handlers.clear()\n\nhandler = logging.StreamHandler(sys.stdout)\nhandler.setFormatter(logging.Formatter("%(name)s - %(levelname)s - %(message)s"))\nlogger.addHandler(handler)\n\nlogger.info("Started")\nlogger.warning("Low memory")',
            hint: 'Use logging.getLogger(\'name\'), create StreamHandler, set Formatter',
            expectedOutput: 'myapp - INFO - Started\nmyapp - WARNING - Low memory',
          },
          {
            id: 'logging-4',
            title: 'Log with Variables',
            description: 'Log messages with variable data.',
            instructions: ['Create a logger', 'Log user login events with username and status', 'Use %-style formatting (not f-strings)'],
            starterCode: '',
            solution: 'import logging\nimport sys\n\nlogging.basicConfig(level=logging.INFO, stream=sys.stdout, format="%(levelname)s: %(message)s", force=True)\n\nusers = [("alice", "success"), ("bob", "failed"), ("charlie", "success")]\nfor user, status in users:\n    logging.info("Login attempt: user=%s status=%s", user, status)',
            hint: 'Use logging.info(\'message %s\', variable) style',
            expectedOutput: 'INFO: Login attempt: user=alice status=success\nINFO: Login attempt: user=bob status=failed\nINFO: Login attempt: user=charlie status=success',
          },
          {
            id: 'logging-5',
            title: 'Log Exception Info',
            description: 'Log exceptions with traceback information.',
            instructions: ['Try to convert \'abc\' to int inside a try/except', 'Use logging.exception() to log the error with traceback', 'Print \'Recovered\' after the except block'],
            starterCode: '',
            solution: 'import logging\nimport sys\n\nlogging.basicConfig(level=logging.DEBUG, stream=sys.stdout, format="%(levelname)s: %(message)s", force=True)\n\ntry:\n    value = int("abc")\nexcept ValueError:\n    logging.exception("Conversion failed")\n\nprint("Recovered")',
            hint: 'Use logging.exception() inside except block — it auto-includes traceback',
            expectedOutputContains: ['ERROR: Conversion failed', 'ValueError', 'Recovered'],
          }
        ],
      },
      {
        id: 'argparse-mod',
        number: 5,
        title: 'Command-Line Arguments',
        description: 'Build CLI interfaces with argparse',
        icon: 'Terminal',
        type: 'exercises',
        lesson: `The \`argparse\` module makes it easy to write **user-friendly command-line interfaces**. It automatically generates help messages, handles type conversion, and validates input.

## Basic ArgumentParser

\`\`\`python
import argparse

parser = argparse.ArgumentParser(description='Greet someone')
parser.add_argument('name', help='Name to greet')
parser.add_argument('--greeting', default='Hello', help='Greeting to use')

args = parser.parse_args(['World'])
print(f"{args.greeting}, {args.name}!")
>>> Hello, World!
\`\`\`

## Positional vs Optional Arguments

\`\`\`python
import argparse

parser = argparse.ArgumentParser()

# Positional (required)
parser.add_argument('filename', help='File to process')

# Optional (start with -- or -)
parser.add_argument('-v', '--verbose', action='store_true', help='Verbose output')
parser.add_argument('-n', '--count', type=int, default=1, help='Number of times')

args = parser.parse_args(['data.txt', '-v', '-n', '3'])
print(f"File: {args.filename}")
print(f"Verbose: {args.verbose}")
print(f"Count: {args.count}")
>>> File: data.txt
>>> Verbose: True
>>> Count: 3
\`\`\`

## Argument Types and Choices

\`\`\`python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--level', type=int, choices=[1, 2, 3], default=1)
parser.add_argument('--mode', choices=['fast', 'slow'], default='fast')

args = parser.parse_args(['--level', '2', '--mode', 'slow'])
print(f"Level: {args.level}, Mode: {args.mode}")
>>> Level: 2, Mode: slow
\`\`\`

## Mutually Exclusive Arguments

\`\`\`python
import argparse

parser = argparse.ArgumentParser()
group = parser.add_mutually_exclusive_group()
group.add_argument('--verbose', action='store_true')
group.add_argument('--quiet', action='store_true')

args = parser.parse_args(['--verbose'])
print(f"Verbose: {args.verbose}, Quiet: {args.quiet}")
>>> Verbose: True, Quiet: False
\`\`\`

💡 Use \`parse_args([...])\` with a list for testing. In real scripts, \`parse_args()\` with no arguments reads from \`sys.argv\`.

⚠️ Argument names with dashes (\`--my-arg\`) become underscored attributes (\`args.my_arg\`).`,
        exercises: [
          {
            id: 'argparse-1',
            title: 'Simple Parser',
            description: 'Create a basic argument parser.',
            instructions: ['Create a parser with description \'Calculator\'', 'Add positional args \'a\' and \'b\' (type=float)', 'Add optional \'--operation\' with default \'add\'', 'Parse [\'3\', \'4\', \'--operation\', \'add\'] and print results'],
            starterCode: '',
            solution: 'import argparse\n\nparser = argparse.ArgumentParser(description="Calculator")\nparser.add_argument("a", type=float)\nparser.add_argument("b", type=float)\nparser.add_argument("--operation", default="add")\n\nargs = parser.parse_args(["3", "4", "--operation", "add"])\nprint(f"a={args.a}, b={args.b}, op={args.operation}")',
            hint: 'Use parser.add_argument with type= for positional, --name for optional',
            expectedOutput: 'a=3.0, b=4.0, op=add',
          },
          {
            id: 'argparse-2',
            title: 'Boolean Flags',
            description: 'Use store_true for flag arguments.',
            instructions: ['Create parser with --verbose and --debug flags (action=\'store_true\')', 'Parse [\'--verbose\'] and show both flags'],
            starterCode: '',
            solution: 'import argparse\n\nparser = argparse.ArgumentParser()\nparser.add_argument("--verbose", action="store_true")\nparser.add_argument("--debug", action="store_true")\n\nargs = parser.parse_args(["--verbose"])\nprint(f"Verbose: {args.verbose}")\nprint(f"Debug: {args.debug}")',
            hint: 'Use action=\'store_true\' — flag present = True, absent = False',
            expectedOutput: 'Verbose: True\nDebug: False',
          },
          {
            id: 'argparse-3',
            title: 'Choices and Types',
            description: 'Restrict arguments to specific values.',
            instructions: ['Add --color with choices [\'red\', \'green\', \'blue\']', 'Add --size with type=int and choices [1, 2, 3]', 'Parse [\'--color\', \'green\', \'--size\', \'2\']'],
            starterCode: '',
            solution: 'import argparse\n\nparser = argparse.ArgumentParser()\nparser.add_argument("--color", choices=["red", "green", "blue"], default="red")\nparser.add_argument("--size", type=int, choices=[1, 2, 3], default=1)\n\nargs = parser.parse_args(["--color", "green", "--size", "2"])\nprint(f"Color: {args.color}")\nprint(f"Size: {args.size}")',
            hint: 'Use choices= parameter to restrict allowed values',
            expectedOutput: 'Color: green\nSize: 2',
          },
          {
            id: 'argparse-4',
            title: 'Multiple Values',
            description: 'Accept multiple values for one argument.',
            instructions: ['Add --files that accepts one or more values (nargs=\'+\')', 'Parse [\'--files\', \'a.py\', \'b.py\', \'c.py\']', 'Print each file'],
            starterCode: '',
            solution: 'import argparse\n\nparser = argparse.ArgumentParser()\nparser.add_argument("--files", nargs="+", required=True)\n\nargs = parser.parse_args(["--files", "a.py", "b.py", "c.py"])\nfor f in args.files:\n    print(f"File: {f}")',
            hint: 'Use nargs=\'+\' for one or more values, nargs=\'*\' for zero or more',
            expectedOutput: 'File: a.py\nFile: b.py\nFile: c.py',
          },
          {
            id: 'argparse-5',
            title: 'Subcommands',
            description: 'Build a CLI with subcommands.',
            instructions: ['Create a parser with subparsers', 'Add \'greet\' subcommand with --name argument', 'Add \'calc\' subcommand with --expr argument', 'Parse [\'greet\', \'--name\', \'Alice\'] and handle it'],
            starterCode: '',
            solution: 'import argparse\n\nparser = argparse.ArgumentParser()\nsubparsers = parser.add_subparsers(dest="command")\n\ngreet_parser = subparsers.add_parser("greet")\ngreet_parser.add_argument("--name", required=True)\n\ncalc_parser = subparsers.add_parser("calc")\ncalc_parser.add_argument("--expr", required=True)\n\nargs = parser.parse_args(["greet", "--name", "Alice"])\nif args.command == "greet":\n    print(f"Hello, {args.name}!")\nelif args.command == "calc":\n    print(f"Result: {eval(args.expr)}")',
            hint: 'Use parser.add_subparsers(dest=\'command\') then add_parser for each subcommand',
            expectedOutput: 'Hello, Alice!',
          }
        ],
      },
      {
        id: 'json-mod',
        number: 6,
        title: 'JSON Processing',
        description: 'Encode and decode JSON data',
        icon: 'Braces',
        type: 'exercises',
        lesson: `The \`json\` module lets you **encode and decode JSON data** — the most common data format for web APIs, configuration files, and data exchange.

## JSON Basics

JSON (JavaScript Object Notation) maps naturally to Python:
| JSON | Python |
|------|--------|
| object \`{}\` | dict |
| array \`[]\` | list |
| string \`""\` | str |
| number | int/float |
| true/false | True/False |
| null | None |

## Encoding: Python → JSON String

\`\`\`python
import json

data = {"name": "Alice", "age": 30, "scores": [95, 87, 92]}
json_string = json.dumps(data)
print(json_string)
>>> {"name": "Alice", "age": 30, "scores": [95, 87, 92]}

# Pretty-print
print(json.dumps(data, indent=2))
>>> {
>>>   "name": "Alice",
>>>   "age": 30,
>>>   "scores": [95, 87, 92]
>>> }
\`\`\`

## Decoding: JSON String → Python

\`\`\`python
import json

json_string = '{"city": "Paris", "population": 2161000}'
data = json.loads(json_string)
print(data["city"])
print(type(data))
>>> Paris
>>> <class 'dict'>
\`\`\`

## Working with Nested Data

\`\`\`python
import json

data = {
    "users": [
        {"name": "Alice", "active": True},
        {"name": "Bob", "active": False}
    ],
    "count": 2
}

json_str = json.dumps(data, indent=2)
parsed = json.loads(json_str)
for user in parsed["users"]:
    status = "active" if user["active"] else "inactive"
    print(f"{user['name']}: {status}")
>>> Alice: active
>>> Bob: inactive
\`\`\`

## Handling Special Types

\`\`\`python
import json
from datetime import datetime

# Custom encoder for non-serializable types
def custom_encoder(obj):
    if isinstance(obj, datetime):
        return obj.isoformat()
    raise TypeError(f"Not serializable: {type(obj)}")

data = {"event": "meeting", "time": datetime(2024, 3, 15, 14, 30)}
print(json.dumps(data, default=custom_encoder))
>>> {"event": "meeting", "time": "2024-03-15T14:30:00"}
\`\`\`

💡 Use \`json.dumps(data, indent=2)\` for human-readable output.

⚠️ JSON keys must be strings. \`json.dumps({1: "one"})\` converts int keys to strings.

⚠️ \`json.dumps\` raises \`TypeError\` for non-serializable objects (datetime, set, etc.). Use \`default=\` parameter.`,
        exercises: [
          {
            id: 'json-1',
            title: 'Encode and Decode',
            description: 'Convert between Python objects and JSON strings.',
            instructions: ['Create a dict with name, age, and hobbies (list)', 'Convert to JSON string with indent=2', 'Parse it back and print the hobbies'],
            starterCode: '',
            solution: 'import json\n\ndata = {"name": "Alice", "age": 25, "hobbies": ["reading", "coding", "hiking"]}\njson_str = json.dumps(data, indent=2)\nprint(json_str)\n\nparsed = json.loads(json_str)\nprint(f"Hobbies: {parsed[\'hobbies\']}")',
            hint: 'Use json.dumps() to encode, json.loads() to decode',
            expectedOutputContains: ['"name": "Alice"', '"hobbies"', 'Hobbies: [\'reading\', \'coding\', \'hiking\']'],
          },
          {
            id: 'json-2',
            title: 'Nested JSON',
            description: 'Work with nested JSON structures.',
            instructions: ['Create a JSON string with nested school data (school name, students list with name/grade)', 'Parse it and print each student\'s name and grade'],
            starterCode: '',
            solution: 'import json\n\njson_str = \'\'\'{\n    "school": "Python Academy",\n    "students": [\n        {"name": "Alice", "grade": 95},\n        {"name": "Bob", "grade": 87},\n        {"name": "Charlie", "grade": 91}\n    ]\n}\'\'\'\n\ndata = json.loads(json_str)\nprint(f"School: {data[\'school\']}")\nfor s in data["students"]:\n    print(f"  {s[\'name\']}: {s[\'grade\']}")',
            hint: 'Parse with json.loads then navigate the nested structure',
            expectedOutput: 'School: Python Academy\n  Alice: 95\n  Bob: 87\n  Charlie: 91',
          },
          {
            id: 'json-3',
            title: 'JSON Sort and Filter',
            description: 'Sort and filter JSON data.',
            instructions: ['Given a list of products as JSON with name, price, in_stock fields', 'Parse it, filter to in_stock=True, sort by price', 'Print filtered sorted results'],
            starterCode: '',
            solution: 'import json\n\njson_str = \'\'\'[\n    {"name": "Laptop", "price": 999, "in_stock": true},\n    {"name": "Mouse", "price": 25, "in_stock": true},\n    {"name": "Monitor", "price": 300, "in_stock": false},\n    {"name": "Keyboard", "price": 75, "in_stock": true}\n]\'\'\'\n\nproducts = json.loads(json_str)\navailable = [p for p in products if p["in_stock"]]\navailable.sort(key=lambda p: p["price"])\nfor p in available:\n    print(f"{p[\'name\']}: ${p[\'price\']}")',
            hint: 'Filter with list comprehension, sort with .sort(key=lambda)',
            expectedOutput: 'Mouse: $25\nKeyboard: $75\nLaptop: $999',
          },
          {
            id: 'json-4',
            title: 'Custom Serialization',
            description: 'Handle non-serializable types.',
            instructions: ['Create a dict with a set and a tuple', 'Write a custom default function to handle them', 'Serialize to JSON and print'],
            starterCode: '',
            solution: 'import json\n\ndef custom_default(obj):\n    if isinstance(obj, set):\n        return sorted(list(obj))\n    if isinstance(obj, tuple):\n        return list(obj)\n    raise TypeError(f"Not serializable: {type(obj)}")\n\ndata = {"tags": {"python", "coding", "fun"}, "coords": (10, 20)}\nresult = json.dumps(data, default=custom_default, indent=2)\nprint(result)',
            hint: 'Use the default= parameter in json.dumps to handle special types',
            expectedOutputContains: ['"tags"', '"coords"', 'python'],
          },
          {
            id: 'json-5',
            title: 'JSON Transformation',
            description: 'Transform JSON data structure.',
            instructions: ['Parse a list of {first, last, email} dicts', 'Transform to a dict keyed by email with full_name value', 'Output the new structure as JSON'],
            starterCode: '',
            solution: 'import json\n\npeople_json = \'\'\'[\n    {"first": "Alice", "last": "Smith", "email": "alice@example.com"},\n    {"first": "Bob", "last": "Jones", "email": "bob@example.com"}\n]\'\'\'\n\npeople = json.loads(people_json)\nby_email = {p["email"]: f"{p[\'first\']} {p[\'last\']}" for p in people}\nprint(json.dumps(by_email, indent=2))',
            hint: 'Use a dict comprehension to restructure the data',
            expectedOutputContains: ['alice@example.com', 'Alice Smith', 'bob@example.com', 'Bob Jones'],
          }
        ],
      },
      {
        id: 'math-random',
        number: 7,
        title: 'Math & Random',
        description: 'Mathematical operations and random generation',
        icon: 'Dice1',
        type: 'exercises',
        lesson: `The \`math\` and \`random\` modules provide **mathematical functions and random number generation**. The \`statistics\` module adds basic statistical operations.

## The math Module

\`\`\`python
import math

# Constants
print(math.pi)       # 3.141592653589793
print(math.e)        # 2.718281828459045

# Rounding
print(math.floor(3.7))   # 3
print(math.ceil(3.2))    # 4

# Powers and roots
print(math.sqrt(16))     # 4.0
print(math.pow(2, 10))   # 1024.0

# Logarithms
print(math.log(math.e))  # 1.0 (natural log)
print(math.log10(100))   # 2.0

# Trigonometry (radians)
print(math.sin(math.pi / 2))  # 1.0
print(math.degrees(math.pi))  # 180.0
\`\`\`

## The random Module

\`\`\`python
import random

# Set seed for reproducibility
random.seed(42)

# Random float [0, 1)
print(random.random())

# Random integer in range [a, b] inclusive
print(random.randint(1, 10))

# Random choice from sequence
colors = ['red', 'green', 'blue']
print(random.choice(colors))

# Shuffle a list in-place
nums = [1, 2, 3, 4, 5]
random.shuffle(nums)
print(nums)

# Sample without replacement
print(random.sample(range(1, 50), 6))
\`\`\`

## The statistics Module

\`\`\`python
import statistics

data = [4, 8, 6, 5, 3, 7, 9, 2]

print(statistics.mean(data))      # 5.5
print(statistics.median(data))    # 5.5
print(statistics.stdev(data))     # ~2.449
print(statistics.mode([1, 2, 2, 3]))  # 2
\`\`\`

💡 Use \`random.seed(N)\` when you need **reproducible** random sequences — great for testing.

⚠️ The \`random\` module is NOT cryptographically secure. For security (passwords, tokens), use \`secrets\` module instead.

⚠️ \`math.sqrt()\` raises ValueError for negative numbers. Use \`cmath.sqrt()\` for complex results.`,
        exercises: [
          {
            id: 'math-random-1',
            title: 'Math Operations',
            description: 'Use math module for calculations.',
            instructions: ['Calculate the hypotenuse of a right triangle with sides 3 and 4', 'Calculate the area of a circle with radius 5', 'Print both results rounded to 2 decimal places'],
            starterCode: '',
            solution: 'import math\n\nhyp = math.sqrt(3**2 + 4**2)\narea = math.pi * 5**2\nprint(f"Hypotenuse: {hyp:.2f}")\nprint(f"Circle area: {area:.2f}")',
            hint: 'Use math.sqrt() for hypotenuse, math.pi * r**2 for circle area',
            expectedOutput: 'Hypotenuse: 5.00\nCircle area: 78.54',
          },
          {
            id: 'math-random-2',
            title: 'Random Sampling',
            description: 'Generate and sample random data.',
            instructions: ['Set random.seed(42)', 'Generate a list of 10 random integers between 1-100', 'Sample 3 items without replacement', 'Print both lists'],
            starterCode: '',
            solution: 'import random\n\nrandom.seed(42)\nnums = [random.randint(1, 100) for _ in range(10)]\nprint(f"Numbers: {nums}")\n\nsample = random.sample(nums, 3)\nprint(f"Sample: {sample}")',
            hint: 'Use random.seed() for reproducibility, randint for random ints, sample for sampling',
            expectedOutputContains: ['Numbers:', 'Sample:'],
          },
          {
            id: 'math-random-3',
            title: 'Statistics Basics',
            description: 'Calculate basic statistics.',
            instructions: ['Given data = [23, 45, 12, 67, 34, 89, 56, 28]', 'Calculate and print mean, median, standard deviation', 'Find min and max'],
            starterCode: '',
            solution: 'import statistics\n\ndata = [23, 45, 12, 67, 34, 89, 56, 28]\nprint(f"Mean: {statistics.mean(data):.2f}")\nprint(f"Median: {statistics.median(data):.2f}")\nprint(f"Stdev: {statistics.stdev(data):.2f}")\nprint(f"Min: {min(data)}, Max: {max(data)}")',
            hint: 'Use statistics.mean(), statistics.median(), statistics.stdev()',
            expectedOutput: 'Mean: 44.25\nMedian: 39.50\nStdev: 25.15\nMin: 12, Max: 89',
          },
          {
            id: 'math-random-4',
            title: 'Dice Simulator',
            description: 'Simulate rolling dice.',
            instructions: ['Set random.seed(0)', 'Simulate rolling 2 dice 1000 times', 'Count how often the sum is 7', 'Print the count and percentage'],
            starterCode: '',
            solution: 'import random\n\nrandom.seed(0)\n\ncount_7 = 0\nrolls = 1000\nfor _ in range(rolls):\n    total = random.randint(1, 6) + random.randint(1, 6)\n    if total == 7:\n        count_7 += 1\n\nprint(f"Sum of 7: {count_7} times")\nprint(f"Percentage: {count_7/rolls*100:.1f}%")',
            hint: 'Roll two dice with randint(1,6), sum them, count 7s',
            expectedOutputContains: ['Sum of 7:', 'Percentage:'],
          },
          {
            id: 'math-random-5',
            title: 'Password Generator',
            description: 'Generate random passwords.',
            instructions: ['Set random.seed(99)', 'Generate a 12-character password using letters, digits, and !@#$%', 'Print the password and its length'],
            starterCode: '',
            solution: 'import random\nimport string\n\nrandom.seed(99)\n\nchars = string.ascii_letters + string.digits + "!@#$%"\npassword = "".join(random.choice(chars) for _ in range(12))\nprint(f"Password: {password}")\nprint(f"Length: {len(password)}")',
            hint: 'Use string.ascii_letters + string.digits for character pool, random.choice to pick',
            expectedOutputContains: ['Password:', 'Length: 12'],
          }
        ],
      },
      {
        id: 'functools-mod',
        number: 8,
        title: 'Functools Deep Dive',
        description: 'Higher-order functions and functional patterns',
        icon: 'Cog',
        type: 'exercises',
        lesson: `The \`functools\` module provides **higher-order functions** that act on or return other functions. Essential for functional programming patterns, decorators, and optimization.

## functools.partial — Pre-fill Arguments

\`\`\`python
from functools import partial

def power(base, exponent):
    return base ** exponent

square = partial(power, exponent=2)
cube = partial(power, exponent=3)

print(square(5))   # 25
print(cube(3))     # 27
\`\`\`

## functools.reduce — Accumulate Values

\`\`\`python
from functools import reduce

numbers = [1, 2, 3, 4, 5]

# Sum (equivalent to sum())
total = reduce(lambda a, b: a + b, numbers)
print(total)
>>> 15

# Product
product = reduce(lambda a, b: a * b, numbers)
print(product)
>>> 120

# With initial value
result = reduce(lambda a, b: a + b, numbers, 100)
print(result)
>>> 115
\`\`\`

## functools.wraps — Preserve Function Metadata

\`\`\`python
from functools import wraps

def my_decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print("Before call")
        result = func(*args, **kwargs)
        print("After call")
        return result
    return wrapper

@my_decorator
def greet(name):
    \\"\\"\\"Greet someone.\\"\\"\\"
    return f"Hello, {name}!"

print(greet.__name__)
print(greet.__doc__)
>>> greet
>>> Greet someone.
\`\`\`

Without \`@wraps\`, the name would be 'wrapper' and the docstring would be lost.

## functools.lru_cache — Memoization

\`\`\`python
from functools import lru_cache

@lru_cache(maxsize=128)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(50))
>>> 12586269025

print(fibonacci.cache_info())
>>> CacheInfo(hits=48, misses=51, maxsize=128, currsize=51)
\`\`\`

## functools.total_ordering — Auto-generate Comparisons

\`\`\`python
from functools import total_ordering

@total_ordering
class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade
    def __eq__(self, other):
        return self.grade == other.grade
    def __lt__(self, other):
        return self.grade < other.grade

s1 = Student("Alice", 90)
s2 = Student("Bob", 85)
print(s1 > s2)   # True — auto-generated!
print(s1 >= s2)   # True
\`\`\`

💡 \`lru_cache\` can dramatically speed up recursive functions with overlapping subproblems.

⚠️ \`lru_cache\` only works with **hashable** arguments (no lists, dicts, sets).

⚠️ \`reduce\` can be hard to read — often a for loop is clearer for complex reductions.`,
        exercises: [
          {
            id: 'functools-1',
            title: 'Partial Functions',
            description: 'Use partial to create specialized functions.',
            instructions: ['Create a multiply(a, b) function', 'Use partial to create double (multiply by 2) and triple (multiply by 3)', 'Test with value 7'],
            starterCode: '',
            solution: 'from functools import partial\n\ndef multiply(a, b):\n    return a * b\n\ndouble = partial(multiply, b=2)\ntriple = partial(multiply, b=3)\n\nprint(f"Double 7: {double(7)}")\nprint(f"Triple 7: {triple(7)}")',
            hint: 'Use partial(func, keyword=value) to pre-fill arguments',
            expectedOutput: 'Double 7: 14\nTriple 7: 21',
          },
          {
            id: 'functools-2',
            title: 'Reduce Operations',
            description: 'Use reduce for aggregate calculations.',
            instructions: ['Use reduce to find the maximum in [3, 1, 4, 1, 5, 9, 2, 6]', 'Use reduce to concatenate [\'Hello\', \' \', \'World\', \'!\']', 'Print both results'],
            starterCode: '',
            solution: 'from functools import reduce\n\nnums = [3, 1, 4, 1, 5, 9, 2, 6]\nmax_val = reduce(lambda a, b: a if a > b else b, nums)\nprint(f"Max: {max_val}")\n\nwords = ["Hello", " ", "World", "!"]\nsentence = reduce(lambda a, b: a + b, words)\nprint(f"Sentence: {sentence}")',
            hint: 'reduce takes a 2-argument function and applies it cumulatively',
            expectedOutput: 'Max: 9\nSentence: Hello World!',
          },
          {
            id: 'functools-3',
            title: 'LRU Cache',
            description: 'Speed up recursion with caching.',
            instructions: ['Implement fibonacci with @lru_cache', 'Calculate fibonacci(30)', 'Print the result and cache_info'],
            starterCode: '',
            solution: 'from functools import lru_cache\n\n@lru_cache(maxsize=256)\ndef fib(n):\n    if n < 2:\n        return n\n    return fib(n - 1) + fib(n - 2)\n\nresult = fib(30)\nprint(f"fib(30) = {result}")\ninfo = fib.cache_info()\nprint(f"Cache hits: {info.hits}")\nprint(f"Cache misses: {info.misses}")',
            hint: 'Decorate with @lru_cache, use .cache_info() to check stats',
            expectedOutputContains: ['fib(30) = 832040', 'Cache hits:', 'Cache misses:'],
          },
          {
            id: 'functools-4',
            title: 'Wraps Decorator',
            description: 'Use @wraps to preserve function metadata.',
            instructions: ['Create a timer decorator that prints \'Calling <func_name>\'', 'Use @wraps to preserve metadata', 'Apply to a function and verify __name__ is preserved'],
            starterCode: '',
            solution: 'from functools import wraps\n\ndef timer(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        print(f"Calling {func.__name__}")\n        return func(*args, **kwargs)\n    return wrapper\n\n@timer\ndef add(a, b):\n    """Add two numbers."""\n    return a + b\n\nresult = add(3, 4)\nprint(f"Result: {result}")\nprint(f"Name: {add.__name__}")\nprint(f"Doc: {add.__doc__}")',
            hint: 'Use @wraps(func) on the inner wrapper function',
            expectedOutput: 'Calling add\nResult: 7\nName: add\nDoc: Add two numbers.',
          },
          {
            id: 'functools-5',
            title: 'Total Ordering',
            description: 'Auto-generate comparison methods.',
            instructions: ['Create a Product class with name and price', 'Use @total_ordering, implement __eq__ and __lt__ by price', 'Create 3 products and sort them, print sorted list'],
            starterCode: '',
            solution: 'from functools import total_ordering\n\n@total_ordering\nclass Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n    def __eq__(self, other):\n        return self.price == other.price\n    def __lt__(self, other):\n        return self.price < other.price\n    def __repr__(self):\n        return f"{self.name}(${self.price})"\n\nproducts = [Product("Laptop", 999), Product("Mouse", 25), Product("Keyboard", 75)]\nproducts.sort()\nfor p in products:\n    print(p)',
            hint: 'Implement __eq__ and __lt__, @total_ordering generates the rest',
            expectedOutput: 'Mouse($25)\nKeyboard($75)\nLaptop($999)',
          }
        ],
      }
    ],
  },
  {
    id: 'file-io',
    title: 'File I/O & Data Formats',
    subtitle: 'Read, Write & Process',
    description: 'Read, write, and process files in multiple formats including CSV, JSON, XML, and binary.',
    icon: 'FileInput',
    color: 'cyan',
    categories: [
      {
        id: 'file-basics',
        number: 1,
        title: 'Reading & Writing Files',
        description: 'Open, read, write files with Python',
        icon: 'File',
        type: 'exercises',
        lesson: `Reading and writing files is fundamental to almost every Python program. Python makes it easy with the built-in \`open()\` function and the \`with\` statement for safe file handling.

## Opening Files

\`\`\`python
# Basic syntax
file = open('example.txt', 'r')  # 'r' = read mode
content = file.read()
file.close()
\`\`\`

## The with Statement (Recommended)

\`\`\`python
with open('example.txt', 'r') as f:
    content = f.read()
# File is automatically closed here, even if an error occurs
\`\`\`

## File Modes

| Mode | Description |
|------|-------------|
| \`'r'\` | Read (default) — file must exist |
| \`'w'\` | Write — creates or **overwrites** |
| \`'a'\` | Append — adds to end |
| \`'x'\` | Exclusive create — fails if exists |
| \`'b'\` | Binary mode (add to others: \`'rb'\`) |
| \`'t'\` | Text mode (default) |

## Reading Methods

\`\`\`python
from io import StringIO

f = StringIO("Line 1\\nLine 2\\nLine 3\\n")

# Read entire file
content = f.read()
print(repr(content))
>>> 'Line 1\\nLine 2\\nLine 3\\n'

f.seek(0)  # Reset position

# Read line by line
for line in f:
    print(line.strip())
>>> Line 1
>>> Line 2
>>> Line 3

f.seek(0)

# Read all lines as list
lines = f.readlines()
print(lines)
>>> ['Line 1\\n', 'Line 2\\n', 'Line 3\\n']
\`\`\`

## Writing Files

\`\`\`python
from io import StringIO

f = StringIO()
f.write("Hello, World!\\n")
f.write("Second line\\n")

# writelines — no newlines added automatically
f.writelines(["Third\\n", "Fourth\\n"])

print(f.getvalue())
>>> Hello, World!
>>> Second line
>>> Third
>>> Fourth
\`\`\`

## Using StringIO for In-Memory Files

\`\`\`python
from io import StringIO

# StringIO acts like a file but lives in memory
buffer = StringIO()
buffer.write("test data\\n")
buffer.write("more data\\n")

# Read back
buffer.seek(0)
print(buffer.read())
>>> test data
>>> more data
\`\`\`

💡 Always use \`with\` statement — it guarantees the file is closed even if exceptions occur.

⚠️ Mode \`'w'\` **completely overwrites** the file. Use \`'a'\` to append instead.

⚠️ Remember to call \`.strip()\` on lines read from files to remove trailing \`\\n\`.`,
        exercises: [
          {
            id: 'file-basics-1',
            title: 'StringIO Read/Write',
            description: 'Use StringIO as an in-memory file.',
            instructions: ['Create a StringIO object', 'Write 3 lines to it', 'Seek to start and read all content', 'Print the content'],
            starterCode: '',
            solution: 'from io import StringIO\n\nbuffer = StringIO()\nbuffer.write("Python\\n")\nbuffer.write("is\\n")\nbuffer.write("awesome\\n")\n\nbuffer.seek(0)\ncontent = buffer.read()\nprint(content)',
            hint: 'Use StringIO(), write to it, seek(0), then read()',
            expectedOutput: 'Python\nis\nawesome\n',
          },
          {
            id: 'file-basics-2',
            title: 'Line Processing',
            description: 'Process text line by line.',
            instructions: ['Create StringIO with \'apple:3\\nbanana:5\\ncherry:2\'', 'Read each line, split by \':\', print item and count'],
            starterCode: '',
            solution: 'from io import StringIO\n\ndata = StringIO("apple:3\\nbanana:5\\ncherry:2")\nfor line in data:\n    item, count = line.strip().split(":")\n    print(f"{item} -> {count}")',
            hint: 'Iterate over the file object, split each line',
            expectedOutput: 'apple -> 3\nbanana -> 5\ncherry -> 2',
          },
          {
            id: 'file-basics-3',
            title: 'Write and Read Back',
            description: 'Write data then read it back.',
            instructions: ['Write a list of numbers (1-5) to StringIO, one per line', 'Seek to start, read lines, compute their sum'],
            starterCode: '',
            solution: 'from io import StringIO\n\nbuffer = StringIO()\nfor i in range(1, 6):\n    buffer.write(f"{i}\\n")\n\nbuffer.seek(0)\ntotal = sum(int(line.strip()) for line in buffer)\nprint(f"Sum: {total}")',
            hint: 'Write numbers with write(), seek(0), read with a loop',
            expectedOutput: 'Sum: 15',
          },
          {
            id: 'file-basics-4',
            title: 'File Mode Simulation',
            description: 'Simulate append mode with StringIO.',
            instructions: ['Create StringIO with initial content \'Line 1\\n\'', 'Seek to end and append \'Line 2\\n\' and \'Line 3\\n\'', 'Read all and print'],
            starterCode: '',
            solution: 'from io import StringIO\n\nbuffer = StringIO("Line 1\\n")\nbuffer.seek(0, 2)  # Seek to end\nbuffer.write("Line 2\\n")\nbuffer.write("Line 3\\n")\n\nbuffer.seek(0)\nfor i, line in enumerate(buffer, 1):\n    print(f"{i}: {line.strip()}")',
            hint: 'seek(0, 2) moves to end of stream, like append mode',
            expectedOutput: '1: Line 1\n2: Line 2\n3: Line 3',
          },
          {
            id: 'file-basics-5',
            title: 'Word Counter',
            description: 'Count words in a text stream.',
            instructions: ['Create StringIO with a multi-line paragraph', 'Count total lines, words, and characters', 'Print all three counts'],
            starterCode: '',
            solution: 'from io import StringIO\n\ntext = """Python is a great language.\nIt is easy to learn.\nMany people love Python."""\n\nbuffer = StringIO(text)\nlines = 0\nwords = 0\nchars = 0\nfor line in buffer:\n    lines += 1\n    words += len(line.split())\n    chars += len(line)\n\nprint(f"Lines: {lines}")\nprint(f"Words: {words}")\nprint(f"Characters: {chars}")',
            hint: 'Iterate lines, split each to count words, len for chars',
            expectedOutput: 'Lines: 3\nWords: 15\nCharacters: 68',
          }
        ],
      },
      {
        id: 'csv-files',
        number: 2,
        title: 'CSV Files',
        description: 'Read and write CSV data',
        icon: 'Table',
        type: 'exercises',
        lesson: `The \`csv\` module lets you read and write **CSV (Comma-Separated Values)** files — one of the most common data exchange formats. It handles quoting, escaping, and different delimiters automatically.

## Reading CSV with csv.reader

\`\`\`python
import csv
from io import StringIO

data = StringIO("name,age,city\\nAlice,30,Paris\\nBob,25,London")
reader = csv.reader(data)

for row in reader:
    print(row)
>>> ['name', 'age', 'city']
>>> ['Alice', '30', 'Paris']
>>> ['Bob', '25', 'London']
\`\`\`

## DictReader — Rows as Dictionaries

\`\`\`python
import csv
from io import StringIO

data = StringIO("name,age,city\\nAlice,30,Paris\\nBob,25,London")
reader = csv.DictReader(data)

for row in reader:
    print(f"{row['name']} is {row['age']} from {row['city']}")
>>> Alice is 30 from Paris
>>> Bob is 25 from London
\`\`\`

## Writing CSV

\`\`\`python
import csv
from io import StringIO

output = StringIO()
writer = csv.writer(output)
writer.writerow(['name', 'score'])
writer.writerow(['Alice', 95])
writer.writerow(['Bob', 87])

print(output.getvalue())
>>> name,score
>>> Alice,95
>>> Bob,87
\`\`\`

## DictWriter — Write from Dictionaries

\`\`\`python
import csv
from io import StringIO

output = StringIO()
fields = ['name', 'score']
writer = csv.DictWriter(output, fieldnames=fields)
writer.writeheader()
writer.writerow({'name': 'Alice', 'score': 95})
writer.writerow({'name': 'Bob', 'score': 87})

print(output.getvalue())
\`\`\`

## Custom Delimiters

\`\`\`python
import csv
from io import StringIO

# Tab-separated
data = StringIO("name\\tage\\nAlice\\t30")
reader = csv.reader(data, delimiter='\\t')
for row in reader:
    print(row)
>>> ['name', 'age']
>>> ['Alice', '30']
\`\`\`

💡 \`DictReader\` automatically uses the first row as field names.

⚠️ All values from csv.reader are **strings** — remember to convert numbers with \`int()\` or \`float()\`.

⚠️ Use \`newline=''\` when opening real files: \`open('file.csv', 'w', newline='')\`.`,
        exercises: [
          {
            id: 'csv-1',
            title: 'Read CSV Data',
            description: 'Parse CSV data using csv.reader.',
            instructions: ['Create StringIO with CSV: \'product,price,qty\\nApple,1.5,10\\nBanana,0.75,25\'', 'Read and skip header', 'Print each product with total value (price * qty)'],
            starterCode: '',
            solution: 'import csv\nfrom io import StringIO\n\ndata = StringIO("product,price,qty\\nApple,1.5,10\\nBanana,0.75,25")\nreader = csv.reader(data)\nheader = next(reader)\nfor row in reader:\n    name, price, qty = row[0], float(row[1]), int(row[2])\n    print(f"{name}: ${price * qty:.2f}")',
            hint: 'Use next(reader) to skip header, convert strings to numbers',
            expectedOutput: 'Apple: $15.00\nBanana: $18.75',
          },
          {
            id: 'csv-2',
            title: 'DictReader',
            description: 'Read CSV into dictionaries.',
            instructions: ['Create CSV with name,math,science,english headers', 'Use DictReader to read 3 students', 'Calculate and print each student\'s average'],
            starterCode: '',
            solution: 'import csv\nfrom io import StringIO\n\ndata = StringIO("name,math,science,english\\nAlice,90,85,92\\nBob,78,95,88\\nCharlie,95,90,85")\nreader = csv.DictReader(data)\nfor row in reader:\n    scores = [int(row["math"]), int(row["science"]), int(row["english"])]\n    avg = sum(scores) / len(scores)\n    print(f"{row[\'name\']}: {avg:.1f}")',
            hint: 'DictReader gives you row[\'column_name\'] access',
            expectedOutput: 'Alice: 89.0\nBob: 87.0\nCharlie: 90.0',
          },
          {
            id: 'csv-3',
            title: 'Write CSV',
            description: 'Write data to CSV format.',
            instructions: ['Create a list of student tuples: (name, grade)', 'Write header and rows to StringIO using csv.writer', 'Print the resulting CSV string'],
            starterCode: '',
            solution: 'import csv\nfrom io import StringIO\n\nstudents = [("Alice", 95), ("Bob", 87), ("Charlie", 92)]\n\noutput = StringIO()\nwriter = csv.writer(output)\nwriter.writerow(["name", "grade"])\nfor name, grade in students:\n    writer.writerow([name, grade])\n\nprint(output.getvalue().strip())',
            hint: 'Create csv.writer(buffer), use writerow for each row',
            expectedOutput: 'name,grade\nAlice,95\nBob,87\nCharlie,92',
          },
          {
            id: 'csv-4',
            title: 'DictWriter',
            description: 'Write CSV from dictionaries.',
            instructions: ['Create a list of dicts with city, country, population', 'Use DictWriter to write to StringIO', 'Print the result'],
            starterCode: '',
            solution: 'import csv\nfrom io import StringIO\n\ncities = [\n    {"city": "Paris", "country": "France", "population": 2161},\n    {"city": "London", "country": "UK", "population": 8982},\n    {"city": "Tokyo", "country": "Japan", "population": 13960}\n]\n\noutput = StringIO()\nwriter = csv.DictWriter(output, fieldnames=["city", "country", "population"])\nwriter.writeheader()\nwriter.writerows(cities)\n\nprint(output.getvalue().strip())',
            hint: 'Use DictWriter with fieldnames, writeheader(), writerows()',
            expectedOutput: 'city,country,population\nParis,France,2161\nLondon,UK,8982\nTokyo,Japan,13960',
          },
          {
            id: 'csv-5',
            title: 'CSV Analysis',
            description: 'Analyze CSV data — filter and aggregate.',
            instructions: ['Parse CSV with name,department,salary', 'Find average salary per department', 'Print departments sorted by average salary'],
            starterCode: '',
            solution: 'import csv\nfrom io import StringIO\nfrom collections import defaultdict\n\ndata = StringIO("name,department,salary\\nAlice,Engineering,90000\\nBob,Marketing,60000\\nCharlie,Engineering,95000\\nDiana,Marketing,65000\\nEve,Engineering,85000")\n\nreader = csv.DictReader(data)\ndepts = defaultdict(list)\nfor row in reader:\n    depts[row["department"]].append(int(row["salary"]))\n\nresults = [(d, sum(s)/len(s)) for d, s in depts.items()]\nresults.sort(key=lambda x: x[1], reverse=True)\nfor dept, avg in results:\n    print(f"{dept}: ${avg:,.0f}")',
            hint: 'Group salaries by department using defaultdict(list), then average',
            expectedOutput: 'Engineering: $90,000\nMarketing: $62,500',
          }
        ],
      },
      {
        id: 'json-files',
        number: 3,
        title: 'JSON Files',
        description: 'Read and write JSON data files',
        icon: 'Braces',
        type: 'exercises',
        lesson: `Working with JSON files is one of the most common tasks in Python programming. JSON files are used for configuration, data storage, API responses, and more.

## Reading JSON from a String (as if from a file)

\`\`\`python
import json

json_string = '{"name": "Alice", "scores": [95, 87, 92]}'
data = json.loads(json_string)
print(data['name'])
print(sum(data['scores']) / len(data['scores']))
>>> Alice
>>> 91.33333333333333
\`\`\`

## Writing JSON to a String

\`\`\`python
import json

data = {
    "users": [
        {"name": "Alice", "age": 30},
        {"name": "Bob", "age": 25}
    ]
}

json_str = json.dumps(data, indent=2)
print(json_str)
\`\`\`

## Working with StringIO for File-like Operations

\`\`\`python
import json
from io import StringIO

# Simulate writing to a file
buffer = StringIO()
json.dump({"key": "value"}, buffer)

# Simulate reading from a file
buffer.seek(0)
data = json.load(buffer)
print(data)
>>> {'key': 'value'}
\`\`\`

## Handling Nested JSON

\`\`\`python
import json

config = {
    "database": {
        "host": "localhost",
        "port": 5432,
        "credentials": {
            "user": "admin",
            "password": "secret"
        }
    },
    "debug": True
}

# Access nested values
print(config["database"]["host"])
>>> localhost

# Safe nested access with .get()
timeout = config.get("database", {}).get("timeout", 30)
print(f"Timeout: {timeout}")
>>> Timeout: 30
\`\`\`

💡 \`json.dump()\` writes to a file object; \`json.dumps()\` returns a string. Same for \`load\` vs \`loads\`.

⚠️ JSON doesn't support comments, trailing commas, or single quotes — these will cause parse errors.`,
        exercises: [
          {
            id: 'json-files-1',
            title: 'Parse Nested JSON',
            description: 'Navigate a complex nested JSON structure.',
            instructions: ['Parse the JSON config with database/server/logging sections', 'Print the database host, server port, and log level'],
            starterCode: '',
            solution: 'import json\n\nconfig_str = \'\'\'{\n    "database": {"host": "localhost", "port": 5432, "name": "mydb"},\n    "server": {"host": "0.0.0.0", "port": 8080},\n    "logging": {"level": "INFO", "file": "app.log"}\n}\'\'\'\n\nconfig = json.loads(config_str)\nprint(f"DB Host: {config[\'database\'][\'host\']}")\nprint(f"Server Port: {config[\'server\'][\'port\']}")\nprint(f"Log Level: {config[\'logging\'][\'level\']}")',
            hint: 'Parse with json.loads(), then navigate with dictionary keys',
            expectedOutput: 'DB Host: localhost\nServer Port: 8080\nLog Level: INFO',
          },
          {
            id: 'json-files-2',
            title: 'Build and Serialize',
            description: 'Create a complex data structure and convert to JSON.',
            instructions: ['Create a classroom dict with teacher name and list of student dicts', 'Each student has name, grades (list), and an average', 'Serialize with indent=2 and print'],
            starterCode: '',
            solution: 'import json\n\nclassroom = {\n    "teacher": "Ms. Smith",\n    "students": [\n        {"name": "Alice", "grades": [90, 85, 92], "average": 89.0},\n        {"name": "Bob", "grades": [78, 82, 80], "average": 80.0}\n    ]\n}\n\nprint(json.dumps(classroom, indent=2))',
            hint: 'Build nested dicts/lists, use json.dumps(data, indent=2)',
            expectedOutputContains: ['"teacher": "Ms. Smith"', '"name": "Alice"', '"average": 89.0'],
          },
          {
            id: 'json-files-3',
            title: 'JSON Merge',
            description: 'Merge two JSON objects together.',
            instructions: ['Parse two JSON strings: defaults and overrides', 'Merge them (overrides take precedence)', 'Print the merged result'],
            starterCode: '',
            solution: 'import json\n\ndefaults = json.loads(\'{"color": "blue", "size": 10, "verbose": false}\')\noverrides = json.loads(\'{"size": 20, "verbose": true, "name": "test"}\')\n\nmerged = {**defaults, **overrides}\nprint(json.dumps(merged, indent=2))',
            hint: 'Use dictionary unpacking: {**dict1, **dict2} — later dict wins',
            expectedOutputContains: ['"color": "blue"', '"size": 20', '"verbose": true', '"name": "test"'],
          },
          {
            id: 'json-files-4',
            title: 'JSON dump/load with StringIO',
            description: 'Use json.dump and json.load with file-like objects.',
            instructions: ['Create data dict with list of records', 'Use json.dump to write to StringIO', 'Use json.load to read it back', 'Verify round-trip worked'],
            starterCode: '',
            solution: 'import json\nfrom io import StringIO\n\noriginal = {"records": [{"id": 1, "value": "a"}, {"id": 2, "value": "b"}]}\n\nbuffer = StringIO()\njson.dump(original, buffer, indent=2)\n\nbuffer.seek(0)\nloaded = json.load(buffer)\n\nprint(f"Records: {len(loaded[\'records\'])}")\nprint(f"Match: {original == loaded}")\nfor r in loaded["records"]:\n    print(f"  id={r[\'id\']}, value={r[\'value\']}")',
            hint: 'json.dump writes to file objects, json.load reads from file objects',
            expectedOutput: 'Records: 2\nMatch: True\n  id=1, value=a\n  id=2, value=b',
          },
          {
            id: 'json-files-5',
            title: 'JSON Data Pipeline',
            description: 'Transform JSON data through multiple steps.',
            instructions: ['Parse a JSON array of sales records (product, quantity, unit_price)', 'Calculate total_price for each', 'Group by product, sum totals', 'Output final summary as JSON'],
            starterCode: '',
            solution: 'import json\nfrom collections import defaultdict\n\nsales_json = \'\'\'[\n    {"product": "Widget", "quantity": 5, "unit_price": 10.0},\n    {"product": "Gadget", "quantity": 3, "unit_price": 25.0},\n    {"product": "Widget", "quantity": 8, "unit_price": 10.0},\n    {"product": "Gadget", "quantity": 2, "unit_price": 25.0}\n]\'\'\'\n\nsales = json.loads(sales_json)\ntotals = defaultdict(float)\nfor s in sales:\n    totals[s["product"]] += s["quantity"] * s["unit_price"]\n\nsummary = {k: v for k, v in sorted(totals.items())}\nprint(json.dumps(summary, indent=2))',
            hint: 'Parse, compute, aggregate with defaultdict, then re-serialize',
            expectedOutputContains: ['"Gadget": 125.0', '"Widget": 130.0'],
          }
        ],
      },
      {
        id: 'text-processing',
        number: 4,
        title: 'Text Processing',
        description: 'Process text line by line',
        icon: 'FileText',
        type: 'exercises',
        lesson: `Text processing is about reading, searching, filtering, and transforming text data. Python excels at this with its string methods, file iteration, and encoding support.

## Line-by-Line Processing

\`\`\`python
from io import StringIO

text = StringIO("Error: disk full\\nInfo: backup started\\nWarning: low memory\\nError: timeout")
errors = []
for line in text:
    line = line.strip()
    if line.startswith("Error"):
        errors.append(line)
print(errors)
>>> ['Error: disk full', 'Error: timeout']
\`\`\`

## String Searching

\`\`\`python
text = "The quick brown fox jumps over the lazy dog"

# Find position
print(text.find("fox"))       # 16
print(text.find("cat"))       # -1 (not found)

# Count occurrences
print(text.count("the"))      # 1  (case-sensitive)
print(text.lower().count("the"))  # 2

# Check contains
print("fox" in text)          # True
\`\`\`

## Text Transformations

\`\`\`python
# Replace
text = "Hello World"
print(text.replace("World", "Python"))
>>> Hello Python

# Split and join
csv_line = "apple,banana,cherry"
items = csv_line.split(",")
print(items)
>>> ['apple', 'banana', 'cherry']

print(" | ".join(items))
>>> apple | banana | cherry

# Strip whitespace
messy = "  hello  \\n"
print(repr(messy.strip()))
>>> 'hello'
\`\`\`

## Text Encoding

\`\`\`python
# Encode string to bytes
text = "Hello, 世界"
encoded = text.encode('utf-8')
print(encoded)
>>> b'Hello, \\xe4\\xb8\\x96\\xe7\\x95\\x8c'

# Decode bytes to string
decoded = encoded.decode('utf-8')
print(decoded)
>>> Hello, 世界
\`\`\`

💡 Always specify encoding explicitly when reading text: \`open(f, encoding='utf-8')\`.

⚠️ \`str.find()\` returns -1 when not found (not an exception). Check the return value!

⚠️ String methods return new strings — strings are immutable in Python.`,
        exercises: [
          {
            id: 'text-proc-1',
            title: 'Log Parser',
            description: 'Parse and filter log entries.',
            instructions: ['Process log lines from StringIO', 'Count entries by level (ERROR, WARNING, INFO)', 'Print counts'],
            starterCode: '',
            solution: 'from io import StringIO\n\nlogs = StringIO("""ERROR: Connection failed\nINFO: Server started\nWARNING: Disk 80% full\nERROR: Timeout\nINFO: Request processed\nINFO: Response sent\nWARNING: Memory high""")\n\ncounts = {"ERROR": 0, "WARNING": 0, "INFO": 0}\nfor line in logs:\n    level = line.strip().split(":")[0]\n    if level in counts:\n        counts[level] += 1\n\nfor level, count in counts.items():\n    print(f"{level}: {count}")',
            hint: 'Split each line by \':\', first part is the level',
            expectedOutput: 'ERROR: 2\nWARNING: 2\nINFO: 3',
          },
          {
            id: 'text-proc-2',
            title: 'Text Statistics',
            description: 'Compute statistics about a text.',
            instructions: ['Given a multi-line text', 'Count total characters, words, lines, and unique words', 'Print all stats'],
            starterCode: '',
            solution: 'from io import StringIO\n\ntext = """Python is great for text processing.\nText processing in Python is efficient.\nPython makes everything easier."""\n\nlines = text.strip().split("\\n")\nwords = text.split()\nunique = set(w.lower().strip(".") for w in words)\n\nprint(f"Lines: {len(lines)}")\nprint(f"Words: {len(words)}")\nprint(f"Unique words: {len(unique)}")\nprint(f"Characters: {len(text)}")',
            hint: 'Use split(\'\\n\') for lines, split() for words, set for unique',
            expectedOutput: 'Lines: 3\nWords: 15\nUnique words: 11\nCharacters: 108',
          },
          {
            id: 'text-proc-3',
            title: 'Find and Replace',
            description: 'Perform multiple find-and-replace operations.',
            instructions: ['Given a template string with {name}, {date}, {item} placeholders', 'Replace each placeholder with actual values', 'Print the result'],
            starterCode: '',
            solution: 'template = "Dear {name}, your order for {item} placed on {date} is confirmed."\n\nreplacements = {"name": "Alice", "item": "Python Book", "date": "2024-03-15"}\nresult = template\nfor key, value in replacements.items():\n    result = result.replace("{" + key + "}", value)\n\nprint(result)',
            hint: 'Use str.replace() in a loop, or str.format_map()',
            expectedOutput: 'Dear Alice, your order for Python Book placed on 2024-03-15 is confirmed.',
          },
          {
            id: 'text-proc-4',
            title: 'Column Alignment',
            description: 'Format tabular data with aligned columns.',
            instructions: ['Given a list of (name, role, salary) tuples', 'Print them in aligned columns using str formatting', 'Include a header row'],
            starterCode: '',
            solution: 'data = [\n    ("Alice", "Engineer", 90000),\n    ("Bob", "Designer", 75000),\n    ("Charlie", "Manager", 95000)\n]\n\nprint(f"{\'Name\':<10} {\'Role\':<12} {\'Salary\':>10}")\nprint("-" * 34)\nfor name, role, salary in data:\n    print(f"{name:<10} {role:<12} ${salary:>9,}")',
            hint: 'Use f-string alignment: < for left, > for right, with width',
            expectedOutput: 'Name       Role           Salary\n----------------------------------\nAlice      Engineer      $  90,000\nBob        Designer      $  75,000\nCharlie    Manager       $  95,000',
          },
          {
            id: 'text-proc-5',
            title: 'Encoding Round-Trip',
            description: 'Encode and decode text.',
            instructions: ['Encode \'Hello, Python! 你好\' to utf-8 bytes', 'Print the byte length vs character length', 'Decode back and verify'],
            starterCode: '',
            solution: 'text = "Hello, Python! 你好"\n\nencoded = text.encode("utf-8")\nprint(f"Characters: {len(text)}")\nprint(f"UTF-8 bytes: {len(encoded)}")\n\ndecoded = encoded.decode("utf-8")\nprint(f"Round-trip OK: {decoded == text}")\nprint(f"Text: {decoded}")',
            hint: 'Use .encode(\'utf-8\') and .decode(\'utf-8\'). CJK chars take 3 bytes each in UTF-8',
            expectedOutput: 'Characters: 16\nUTF-8 bytes: 20\nRound-trip OK: True\nText: Hello, Python! 你好',
          }
        ],
      },
      {
        id: 'binary-files',
        number: 5,
        title: 'Binary & Pickle',
        description: 'Work with binary data and serialization',
        icon: 'HardDrive',
        type: 'exercises',
        lesson: `Binary files store raw bytes — images, compiled programs, serialized Python objects. The \`pickle\` module lets you serialize any Python object to bytes and back.

## Binary Mode

\`\`\`python
from io import BytesIO

# Write bytes
buffer = BytesIO()
buffer.write(b"Hello bytes!\\n")
buffer.write(bytes([72, 101, 108, 108, 111]))  # "Hello" in ASCII

buffer.seek(0)
print(buffer.read())
>>> b'Hello bytes!\\nHello'
\`\`\`

## Pickle — Serialize Python Objects

\`\`\`python
import pickle
from io import BytesIO

# Serialize (dump)
data = {"name": "Alice", "scores": [95, 87, 92], "active": True}

buffer = BytesIO()
pickle.dump(data, buffer)

# Deserialize (load)
buffer.seek(0)
loaded = pickle.load(buffer)
print(loaded)
>>> {'name': 'Alice', 'scores': [95, 87, 92], 'active': True}
print(loaded == data)
>>> True
\`\`\`

## Pickle with Complex Objects

\`\`\`python
import pickle
from io import BytesIO

class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade
    def __repr__(self):
        return f"Student({self.name}, {self.grade})"

students = [Student("Alice", 95), Student("Bob", 87)]

buffer = BytesIO()
pickle.dump(students, buffer)

buffer.seek(0)
loaded = pickle.load(buffer)
for s in loaded:
    print(s)
>>> Student(Alice, 95)
>>> Student(Bob, 87)
\`\`\`

## Struct — Pack/Unpack Binary Data

\`\`\`python
import struct

# Pack: convert to bytes
packed = struct.pack('3i', 10, 20, 30)  # 3 integers
print(len(packed), "bytes")
>>> 12 bytes

# Unpack: convert from bytes
values = struct.unpack('3i', packed)
print(values)
>>> (10, 20, 30)
\`\`\`

⚠️ **Never unpickle data from untrusted sources** — pickle can execute arbitrary code during deserialization.

💡 For data exchange between different languages, use JSON or Protocol Buffers instead of pickle.

💡 Use \`BytesIO\` as an in-memory binary file — same API as a real binary file.`,
        exercises: [
          {
            id: 'binary-1',
            title: 'BytesIO Basics',
            description: 'Work with binary data in memory.',
            instructions: ['Create a BytesIO buffer', 'Write byte strings to it', 'Read back and print the content'],
            starterCode: '',
            solution: 'from io import BytesIO\n\nbuffer = BytesIO()\nbuffer.write(b"Header: ")\nbuffer.write(b"Python Binary Data\\n")\nbuffer.write(bytes([80, 75]))\n\nbuffer.seek(0)\ncontent = buffer.read()\nprint(f"Size: {len(content)} bytes")\nprint(f"Content: {content}")',
            hint: 'Use BytesIO like a file, but for bytes. Prefix strings with b',
            expectedOutput: 'Size: 28 bytes\nContent: b\'Header: Python Binary Data\\nPK\'',
          },
          {
            id: 'binary-2',
            title: 'Pickle Dict',
            description: 'Serialize and deserialize a dictionary.',
            instructions: ['Create a dict with mixed types (str, int, list, bool)', 'Pickle to BytesIO, then unpickle', 'Verify the round-trip is identical'],
            starterCode: '',
            solution: 'import pickle\nfrom io import BytesIO\n\noriginal = {\n    "name": "Alice",\n    "age": 30,\n    "hobbies": ["reading", "coding"],\n    "active": True\n}\n\nbuffer = BytesIO()\npickle.dump(original, buffer)\nprint(f"Pickled size: {buffer.tell()} bytes")\n\nbuffer.seek(0)\nloaded = pickle.load(buffer)\nprint(f"Match: {original == loaded}")\nprint(f"Name: {loaded[\'name\']}")\nprint(f"Hobbies: {loaded[\'hobbies\']}")',
            hint: 'Use pickle.dump(obj, file) and pickle.load(file)',
            expectedOutputContains: ['Pickled size:', 'Match: True', 'Name: Alice', 'Hobbies: [\'reading\', \'coding\']'],
          },
          {
            id: 'binary-3',
            title: 'Pickle Custom Objects',
            description: 'Serialize custom class instances.',
            instructions: ['Define a Point class with x, y attributes', 'Create a list of Points', 'Pickle and unpickle them', 'Verify all points survived'],
            starterCode: '',
            solution: 'import pickle\nfrom io import BytesIO\n\nclass Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    def __repr__(self):\n        return f"Point({self.x}, {self.y})"\n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y\n\npoints = [Point(1, 2), Point(3, 4), Point(5, 6)]\n\nbuffer = BytesIO()\npickle.dump(points, buffer)\n\nbuffer.seek(0)\nloaded = pickle.load(buffer)\nfor p in loaded:\n    print(p)\nprint(f"Match: {points == loaded}")',
            hint: 'Custom objects with simple attributes pickle automatically',
            expectedOutput: 'Point(1, 2)\nPoint(3, 4)\nPoint(5, 6)\nMatch: True',
          },
          {
            id: 'binary-4',
            title: 'Struct Packing',
            description: 'Pack and unpack structured binary data.',
            instructions: ['Pack 3 floats and 1 integer using struct', 'Print the packed size', 'Unpack and print the values'],
            starterCode: '',
            solution: 'import struct\n\n# Pack: 3 floats + 1 int\ndata = struct.pack("3fi", 3.14, 2.72, 1.41, 42)\nprint(f"Packed size: {len(data)} bytes")\n\n# Unpack\nvalues = struct.unpack("3fi", data)\nprint(f"Floats: {values[0]:.2f}, {values[1]:.2f}, {values[2]:.2f}")\nprint(f"Integer: {values[3]}")',
            hint: 'struct.pack(format, values...) packs, struct.unpack(format, data) unpacks',
            expectedOutputContains: ['Packed size: 16 bytes', 'Floats: 3.14, 2.72, 1.41', 'Integer: 42'],
          },
          {
            id: 'binary-5',
            title: 'Multiple Pickle Objects',
            description: 'Store multiple objects in one stream.',
            instructions: ['Pickle 3 different objects to same BytesIO', 'Load them back in order', 'Print each one'],
            starterCode: '',
            solution: 'import pickle\nfrom io import BytesIO\n\nbuffer = BytesIO()\npickle.dump("hello", buffer)\npickle.dump([1, 2, 3], buffer)\npickle.dump({"key": "value"}, buffer)\n\nbuffer.seek(0)\nobj1 = pickle.load(buffer)\nobj2 = pickle.load(buffer)\nobj3 = pickle.load(buffer)\n\nprint(f"1: {obj1}")\nprint(f"2: {obj2}")\nprint(f"3: {obj3}")',
            hint: 'You can dump multiple objects sequentially, then load them in the same order',
            expectedOutput: '1: hello\n2: [1, 2, 3]\n3: {\'key\': \'value\'}',
          }
        ],
      },
      {
        id: 'xml-html',
        number: 6,
        title: 'XML & HTML Parsing',
        description: 'Parse XML and HTML documents',
        icon: 'Code',
        type: 'exercises',
        lesson: `Python provides built-in modules for parsing XML and HTML — \`xml.etree.ElementTree\` for XML and \`html.parser\` for HTML. These are essential for processing structured markup data.

## XML with ElementTree

\`\`\`python
import xml.etree.ElementTree as ET

xml_string = '''<library>
    <book id="1">
        <title>Python 101</title>
        <author>John</author>
        <price>29.99</price>
    </book>
    <book id="2">
        <title>Data Science</title>
        <author>Jane</author>
        <price>39.99</price>
    </book>
</library>'''

root = ET.fromstring(xml_string)
for book in root.findall('book'):
    title = book.find('title').text
    author = book.find('author').text
    price = book.find('price').text
    print(f"{title} by {author}: \${price}")
>>> Python 101 by John: $29.99
>>> Data Science by Jane: $39.99
\`\`\`

## Creating XML

\`\`\`python
import xml.etree.ElementTree as ET

root = ET.Element('contacts')
contact = ET.SubElement(root, 'contact', id='1')
ET.SubElement(contact, 'name').text = 'Alice'
ET.SubElement(contact, 'email').text = 'alice@example.com'

xml_str = ET.tostring(root, encoding='unicode')
print(xml_str)
>>> <contacts><contact id="1"><name>Alice</name><email>alice@example.com</email></contact></contacts>
\`\`\`

## HTML Parsing

\`\`\`python
from html.parser import HTMLParser

class MyParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            for name, value in attrs:
                if name == 'href':
                    self.links.append(value)

parser = MyParser()
parser.feed('<a href="https://python.org">Python</a> and <a href="https://docs.python.org">Docs</a>')
print(parser.links)
>>> ['https://python.org', 'https://docs.python.org']
\`\`\`

💡 Use \`ET.fromstring()\` for parsing XML strings, \`ET.parse()\` for files.

⚠️ ElementTree does NOT handle HTML well — HTML is not always valid XML. Use \`html.parser\` for HTML.`,
        exercises: [
          {
            id: 'xml-html-1',
            title: 'Parse XML',
            description: 'Extract data from an XML string.',
            instructions: ['Parse XML with employees (name, department, salary)', 'Print each employee\'s info'],
            starterCode: '',
            solution: 'import xml.etree.ElementTree as ET\n\nxml_data = \'\'\'<company>\n    <employee id="1">\n        <name>Alice</name>\n        <department>Engineering</department>\n        <salary>90000</salary>\n    </employee>\n    <employee id="2">\n        <name>Bob</name>\n        <department>Marketing</department>\n        <salary>70000</salary>\n    </employee>\n</company>\'\'\'\n\nroot = ET.fromstring(xml_data)\nfor emp in root.findall("employee"):\n    name = emp.find("name").text\n    dept = emp.find("department").text\n    salary = emp.find("salary").text\n    print(f"{name} ({dept}): ${salary}")',
            hint: 'Use ET.fromstring(), findall() for elements, .text for content',
            expectedOutput: 'Alice (Engineering): $90000\nBob (Marketing): $70000',
          },
          {
            id: 'xml-html-2',
            title: 'Create XML',
            description: 'Build XML programmatically.',
            instructions: ['Create a menu XML with items (name, price, category)', 'Convert to string and print'],
            starterCode: '',
            solution: 'import xml.etree.ElementTree as ET\n\nroot = ET.Element("menu")\n\nitems = [("Burger", "9.99", "main"), ("Salad", "7.99", "starter"), ("Cake", "5.99", "dessert")]\nfor name, price, cat in items:\n    item = ET.SubElement(root, "item", category=cat)\n    ET.SubElement(item, "name").text = name\n    ET.SubElement(item, "price").text = price\n\nxml_str = ET.tostring(root, encoding="unicode")\nprint(xml_str)',
            hint: 'Use ET.Element(), ET.SubElement(), set .text for values',
            expectedOutputContains: ['<menu>', '<item', 'Burger', '9.99', '</menu>'],
          },
          {
            id: 'xml-html-3',
            title: 'XML with Attributes',
            description: 'Read XML attributes and text.',
            instructions: ['Parse XML with elements that have attributes', 'Print both attributes and text content'],
            starterCode: '',
            solution: 'import xml.etree.ElementTree as ET\n\nxml_data = \'\'\'<catalog>\n    <product id="p1" category="electronics">Laptop</product>\n    <product id="p2" category="books">Python Guide</product>\n    <product id="p3" category="electronics">Mouse</product>\n</catalog>\'\'\'\n\nroot = ET.fromstring(xml_data)\nfor prod in root.findall("product"):\n    pid = prod.get("id")\n    cat = prod.get("category")\n    name = prod.text\n    print(f"[{pid}] {name} ({cat})")',
            hint: 'Use element.get(\'attr_name\') to read attributes',
            expectedOutput: '[p1] Laptop (electronics)\n[p2] Python Guide (books)\n[p3] Mouse (electronics)',
          },
          {
            id: 'xml-html-4',
            title: 'HTML Link Extractor',
            description: 'Extract links from HTML content.',
            instructions: ['Create an HTMLParser subclass that collects all href values from <a> tags', 'Parse HTML with several links', 'Print each link found'],
            starterCode: '',
            solution: 'from html.parser import HTMLParser\n\nclass LinkExtractor(HTMLParser):\n    def __init__(self):\n        super().__init__()\n        self.links = []\n    def handle_starttag(self, tag, attrs):\n        if tag == "a":\n            for name, value in attrs:\n                if name == "href":\n                    self.links.append(value)\n\nhtml = \'\'\'<div>\n    <a href="https://python.org">Python</a>\n    <a href="https://docs.python.org">Docs</a>\n    <p>Text</p>\n    <a href="https://pypi.org">PyPI</a>\n</div>\'\'\'\n\nparser = LinkExtractor()\nparser.feed(html)\nfor link in parser.links:\n    print(link)',
            hint: 'Subclass HTMLParser, override handle_starttag, check for \'a\' tags',
            expectedOutput: 'https://python.org\nhttps://docs.python.org\nhttps://pypi.org',
          },
          {
            id: 'xml-html-5',
            title: 'XML Filter and Transform',
            description: 'Filter XML elements and create new XML.',
            instructions: ['Parse an XML list of products with prices', 'Filter products over $10', 'Create new XML with only filtered products'],
            starterCode: '',
            solution: 'import xml.etree.ElementTree as ET\n\nxml_data = \'\'\'<products>\n    <product><name>Widget</name><price>5.99</price></product>\n    <product><name>Gadget</name><price>15.99</price></product>\n    <product><name>Doohickey</name><price>25.99</price></product>\n    <product><name>Thingamajig</name><price>8.99</price></product>\n</products>\'\'\'\n\nroot = ET.fromstring(xml_data)\nnew_root = ET.Element("expensive_products")\n\nfor prod in root.findall("product"):\n    price = float(prod.find("price").text)\n    if price > 10:\n        new_root.append(prod)\n\nresult = ET.tostring(new_root, encoding="unicode")\nfor prod in ET.fromstring(result).findall("product"):\n    print(f"{prod.find("name").text}: ${prod.find("price").text}")',
            hint: 'Parse, filter by price, build new tree with matching elements',
            expectedOutput: 'Gadget: $15.99\nDoohickey: $25.99',
          }
        ],
      },
      {
        id: 'config-files',
        number: 7,
        title: 'Config Files',
        description: 'Manage application configuration',
        icon: 'Settings',
        type: 'exercises',
        lesson: `Configuration files store application settings. Python supports multiple formats: INI files with \`configparser\`, and environment variables with \`os.environ\`.

## ConfigParser for INI Files

\`\`\`python
import configparser
from io import StringIO

config = configparser.ConfigParser()
config.read_string(\\"\\"\\"
[database]
host = localhost
port = 5432
name = myapp

[server]
debug = true
port = 8080
\\"\\"\\")

print(config['database']['host'])
>>> localhost
print(config.getint('database', 'port'))
>>> 5432
print(config.getboolean('server', 'debug'))
>>> True
\`\`\`

## Creating Config Files

\`\`\`python
import configparser
from io import StringIO

config = configparser.ConfigParser()
config['DEFAULT'] = {'timeout': '30'}
config['database'] = {'host': 'localhost', 'port': '5432'}
config['logging'] = {'level': 'INFO', 'file': 'app.log'}

output = StringIO()
config.write(output)
print(output.getvalue())
\`\`\`

## Fallback Values

\`\`\`python
import configparser

config = configparser.ConfigParser()
config.read_string("[app]\\nname = MyApp")

# With fallback
val = config.get('app', 'version', fallback='1.0.0')
print(val)
>>> 1.0.0
\`\`\`

## Environment Variables as Config

\`\`\`python
import os

# Set for this process
os.environ['APP_MODE'] = 'development'
os.environ['APP_PORT'] = '3000'

mode = os.environ.get('APP_MODE', 'production')
port = int(os.environ.get('APP_PORT', '8080'))
print(f"Mode: {mode}, Port: {port}")
>>> Mode: development, Port: 3000
\`\`\`

💡 The \`[DEFAULT]\` section in ConfigParser provides fallback values for all other sections.

⚠️ ConfigParser values are always strings — use \`getint()\`, \`getfloat()\`, \`getboolean()\` for conversion.

⚠️ Environment variables are also always strings — remember to convert types.`,
        exercises: [
          {
            id: 'config-1',
            title: 'Read INI Config',
            description: 'Parse an INI-format configuration.',
            instructions: ['Create a ConfigParser and read_string with database and app sections', 'Print all settings with their values'],
            starterCode: '',
            solution: 'import configparser\n\nconfig = configparser.ConfigParser()\nconfig.read_string("""\n[database]\nhost = localhost\nport = 5432\nname = mydb\n\n[app]\ndebug = true\nversion = 2.1\n""")\n\nfor section in config.sections():\n    print(f"[{section}]")\n    for key, value in config[section].items():\n        print(f"  {key} = {value}")',
            hint: 'Use config.sections() and config[section].items() to iterate',
            expectedOutput: '[database]\n  host = localhost\n  port = 5432\n  name = mydb\n[app]\n  debug = true\n  version = 2.1',
          },
          {
            id: 'config-2',
            title: 'Type Conversion',
            description: 'Use typed getters for config values.',
            instructions: ['Parse config with int, float, and boolean values', 'Use getint, getfloat, getboolean to read them', 'Print values with their Python types'],
            starterCode: '',
            solution: 'import configparser\n\nconfig = configparser.ConfigParser()\nconfig.read_string("""\n[settings]\nmax_retries = 3\nthreshold = 0.85\nverbose = yes\n""")\n\nretries = config.getint("settings", "max_retries")\nthreshold = config.getfloat("settings", "threshold")\nverbose = config.getboolean("settings", "verbose")\n\nprint(f"retries = {retries} ({type(retries).__name__})")\nprint(f"threshold = {threshold} ({type(threshold).__name__})")\nprint(f"verbose = {verbose} ({type(verbose).__name__})")',
            hint: 'Use getint(), getfloat(), getboolean() instead of regular get()',
            expectedOutput: 'retries = 3 (int)\nthreshold = 0.85 (float)\nverbose = True (bool)',
          },
          {
            id: 'config-3',
            title: 'Write Config',
            description: 'Create and serialize a config file.',
            instructions: ['Create ConfigParser with DEFAULT and two sections', 'Write to StringIO and print the output'],
            starterCode: '',
            solution: 'import configparser\nfrom io import StringIO\n\nconfig = configparser.ConfigParser()\nconfig["DEFAULT"] = {"timeout": "30", "retries": "3"}\nconfig["production"] = {"host": "prod.example.com", "debug": "false"}\nconfig["development"] = {"host": "localhost", "debug": "true"}\n\noutput = StringIO()\nconfig.write(output)\nprint(output.getvalue().strip())',
            hint: 'Set config sections as dicts, use config.write(file_obj)',
            expectedOutputContains: ['[DEFAULT]', '[production]', '[development]', 'timeout = 30', 'host = localhost'],
          },
          {
            id: 'config-4',
            title: 'Fallback Values',
            description: 'Handle missing config keys gracefully.',
            instructions: ['Parse a minimal config', 'Read existing and non-existing keys with fallbacks', 'Print all values'],
            starterCode: '',
            solution: 'import configparser\n\nconfig = configparser.ConfigParser()\nconfig.read_string("[app]\\nname = MyApp")\n\nname = config.get("app", "name", fallback="Unknown")\nversion = config.get("app", "version", fallback="1.0.0")\nport = config.getint("app", "port", fallback=8080)\n\nprint(f"Name: {name}")\nprint(f"Version: {version}")\nprint(f"Port: {port}")',
            hint: 'Use fallback= parameter in get methods for missing keys',
            expectedOutput: 'Name: MyApp\nVersion: 1.0.0\nPort: 8080',
          },
          {
            id: 'config-5',
            title: 'Env Var Config',
            description: 'Use environment variables for configuration.',
            instructions: ['Set environment variables for a simulated app config', 'Read them with defaults', 'Print the configuration'],
            starterCode: '',
            solution: 'import os\n\nos.environ["MYAPP_HOST"] = "0.0.0.0"\nos.environ["MYAPP_PORT"] = "3000"\nos.environ["MYAPP_DEBUG"] = "true"\n\nconfig = {\n    "host": os.environ.get("MYAPP_HOST", "localhost"),\n    "port": int(os.environ.get("MYAPP_PORT", "8080")),\n    "debug": os.environ.get("MYAPP_DEBUG", "false").lower() == "true",\n    "workers": int(os.environ.get("MYAPP_WORKERS", "4")),\n}\n\nfor key, value in config.items():\n    print(f"{key} = {value} ({type(value).__name__})")',
            hint: 'Use os.environ.get with defaults, convert types manually',
            expectedOutput: 'host = 0.0.0.0 (str)\nport = 3000 (int)\ndebug = True (bool)\nworkers = 4 (int)',
          }
        ],
      },
      {
        id: 'zip-archive',
        number: 8,
        title: 'Archives & Compression',
        description: 'Create and extract compressed archives',
        icon: 'Archive',
        type: 'exercises',
        lesson: `Python's standard library includes modules for working with compressed archives: \`zipfile\`, \`gzip\`, and \`tarfile\`. Combined with \`shutil\`, you can create and extract archives easily.

## Creating ZIP Archives (In-Memory)

\`\`\`python
import zipfile
from io import BytesIO

buffer = BytesIO()
with zipfile.ZipFile(buffer, 'w', zipfile.ZIP_DEFLATED) as zf:
    zf.writestr('hello.txt', 'Hello, World!')
    zf.writestr('data/info.txt', 'Some data here')

# List contents
buffer.seek(0)
with zipfile.ZipFile(buffer, 'r') as zf:
    for info in zf.infolist():
        print(f"{info.filename}: {info.file_size} bytes")
>>> hello.txt: 13 bytes
>>> data/info.txt: 14 bytes
\`\`\`

## Reading from ZIP

\`\`\`python
import zipfile
from io import BytesIO

# Create a zip first
buffer = BytesIO()
with zipfile.ZipFile(buffer, 'w') as zf:
    zf.writestr('message.txt', 'Hello from zip!')

# Read it back
buffer.seek(0)
with zipfile.ZipFile(buffer, 'r') as zf:
    content = zf.read('message.txt')
    print(content.decode())
>>> Hello from zip!
\`\`\`

## gzip Compression

\`\`\`python
import gzip

# Compress
data = b"Hello " * 1000
compressed = gzip.compress(data)
print(f"Original: {len(data)} bytes")
print(f"Compressed: {len(compressed)} bytes")
>>> Original: 6000 bytes
>>> Compressed: 29 bytes

# Decompress
decompressed = gzip.decompress(compressed)
print(f"Match: {data == decompressed}")
>>> Match: True
\`\`\`

💡 Use \`zipfile.ZIP_DEFLATED\` for actual compression. Default is \`ZIP_STORED\` (no compression).

⚠️ Always use \`with\` statement with ZipFile to ensure proper closing.

💡 \`gzip.compress/decompress\` work with bytes in memory — no files needed.`,
        exercises: [
          {
            id: 'zip-1',
            title: 'Create In-Memory ZIP',
            description: 'Create a ZIP archive in memory.',
            instructions: ['Create a BytesIO-based ZIP with 3 text files', 'List the contents and sizes'],
            starterCode: '',
            solution: 'import zipfile\nfrom io import BytesIO\n\nbuffer = BytesIO()\nwith zipfile.ZipFile(buffer, "w", zipfile.ZIP_DEFLATED) as zf:\n    zf.writestr("readme.txt", "This is the readme.")\n    zf.writestr("data.txt", "Some important data here.")\n    zf.writestr("config.txt", "setting=value")\n\nbuffer.seek(0)\nwith zipfile.ZipFile(buffer, "r") as zf:\n    for info in zf.infolist():\n        print(f"{info.filename}: {info.file_size} bytes")',
            hint: 'Use ZipFile with BytesIO, writestr to add string content',
            expectedOutput: 'readme.txt: 19 bytes\ndata.txt: 25 bytes\nconfig.txt: 13 bytes',
          },
          {
            id: 'zip-2',
            title: 'Read from ZIP',
            description: 'Extract and read files from a ZIP archive.',
            instructions: ['Create a ZIP with a CSV-like file inside', 'Read the CSV content from the ZIP', 'Parse and print the data'],
            starterCode: '',
            solution: 'import zipfile\nfrom io import BytesIO\n\nbuffer = BytesIO()\nwith zipfile.ZipFile(buffer, "w") as zf:\n    csv_content = "name,score\\nAlice,95\\nBob,87\\nCharlie,92"\n    zf.writestr("scores.csv", csv_content)\n\nbuffer.seek(0)\nwith zipfile.ZipFile(buffer, "r") as zf:\n    content = zf.read("scores.csv").decode()\n    lines = content.strip().split("\\n")\n    header = lines[0]\n    print(header)\n    for line in lines[1:]:\n        name, score = line.split(",")\n        print(f"  {name}: {score}")',
            hint: 'Use zf.read(filename).decode() to get string content from ZIP',
            expectedOutput: 'name,score\n  Alice: 95\n  Bob: 87\n  Charlie: 92',
          },
          {
            id: 'zip-3',
            title: 'gzip Compression',
            description: 'Compress and decompress data with gzip.',
            instructions: ['Create a string repeated 500 times', 'Compress it with gzip', 'Print original vs compressed size', 'Verify decompression matches'],
            starterCode: '',
            solution: 'import gzip\n\noriginal = ("Python is great! " * 500).encode()\ncompressed = gzip.compress(original)\n\nprint(f"Original: {len(original)} bytes")\nprint(f"Compressed: {len(compressed)} bytes")\nprint(f"Ratio: {len(compressed)/len(original)*100:.1f}%")\n\ndecompressed = gzip.decompress(compressed)\nprint(f"Match: {original == decompressed}")',
            hint: 'Use gzip.compress(bytes_data) and gzip.decompress(compressed)',
            expectedOutputContains: ['Original: 9000 bytes', 'Compressed:', 'Ratio:', 'Match: True'],
          },
          {
            id: 'zip-4',
            title: 'ZIP Directory Structure',
            description: 'Create a ZIP with directory structure.',
            instructions: ['Create a ZIP with files in subdirectories', 'List all files showing their paths'],
            starterCode: '',
            solution: 'import zipfile\nfrom io import BytesIO\n\nbuffer = BytesIO()\nwith zipfile.ZipFile(buffer, "w") as zf:\n    zf.writestr("project/README.md", "# My Project")\n    zf.writestr("project/src/main.py", "print(\'hello\')")\n    zf.writestr("project/src/utils.py", "def helper(): pass")\n    zf.writestr("project/tests/test_main.py", "def test(): pass")\n\nbuffer.seek(0)\nwith zipfile.ZipFile(buffer, "r") as zf:\n    for name in zf.namelist():\n        print(name)',
            hint: 'writestr path can include / for directory structure',
            expectedOutput: 'project/README.md\nproject/src/main.py\nproject/src/utils.py\nproject/tests/test_main.py',
          },
          {
            id: 'zip-5',
            title: 'Compression Comparison',
            description: 'Compare compression on different data types.',
            instructions: ['Compress 3 different types of data: random, repetitive, and text', 'Show compression ratio for each'],
            starterCode: '',
            solution: 'import gzip\nimport random\n\nrandom.seed(42)\n\n# Repetitive data (compresses well)\nrepetitive = (b"AAAA" * 1000)\n\n# Text data (compresses moderately)\ntext_data = ("The quick brown fox jumps. " * 100).encode()\n\n# Random-ish data (compresses poorly)\nrandom_data = bytes(random.randint(0, 255) for _ in range(1000))\n\nfor name, data in [("Repetitive", repetitive), ("Text", text_data), ("Random", random_data)]:\n    compressed = gzip.compress(data)\n    ratio = len(compressed) / len(data) * 100\n    print(f"{name}: {len(data)} -> {len(compressed)} bytes ({ratio:.1f}%)")',
            hint: 'Compress each with gzip and compare sizes',
            expectedOutputContains: ['Repetitive:', 'Text:', 'Random:'],
          }
        ],
      }
    ],
  },
  {
    id: 'databases',
    title: 'Databases & SQL',
    subtitle: 'Store & Query Data',
    description: 'Store and query persistent data with SQLite, SQL, and SQLAlchemy ORM.',
    icon: 'Database',
    color: 'indigo',
    categories: [
      {
        id: 'sqlite-basics',
        number: 1,
        title: 'SQLite Basics',
        description: 'Python\'s built-in database',
        icon: 'Database',
        type: 'exercises',
        lesson: `SQLite is a **lightweight database** that comes built into Python — no server needed, no installation required. It stores your entire database in a single file. Perfect for small to medium applications, prototyping, and learning SQL.

## Why SQLite?

Most databases (PostgreSQL, MySQL) need a separate server running. SQLite is different:
- **Zero configuration** — it just works
- **Built into Python** — \`import sqlite3\` and you're ready
- **File-based** — your database is just a \`.db\` file
- **Full SQL support** — same SQL you'd use with any database

## Connecting to a Database

\`\`\`python
import sqlite3

# Creates the file if it doesn't exist
conn = sqlite3.connect('my_database.db')

# Create a cursor to execute SQL
cursor = conn.cursor()

# Always close when done
conn.close()
\`\`\`

💡 Use \`:memory:\` instead of a filename to create a temporary in-memory database — great for testing!

## Creating a Table

\`\`\`python
import sqlite3

conn = sqlite3.connect(':memory:')
cursor = conn.cursor()

cursor.execute('''
    CREATE TABLE students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER,
        grade REAL
    )
''')
conn.commit()
\`\`\`

**Column types in SQLite:**
- \`INTEGER\` — whole numbers
- \`REAL\` — decimal numbers
- \`TEXT\` — strings
- \`BLOB\` — binary data

⚠️ Always call \`conn.commit()\` after making changes, or they'll be lost!

## Inserting Data

\`\`\`python
# Single insert with parameterized query
cursor.execute("INSERT INTO students (name, age, grade) VALUES (?, ?, ?)",
               ("Alice", 20, 15.5))

# Multiple inserts
students = [("Bob", 22, 14.0), ("Charlie", 21, 16.5)]
cursor.executemany("INSERT INTO students (name, age, grade) VALUES (?, ?, ?)", students)
conn.commit()
\`\`\`

⚠️ **Never** use f-strings or string concatenation for SQL queries — it opens you to SQL injection attacks. Always use \`?\` placeholders.

## Querying Data

\`\`\`python
cursor.execute("SELECT name, grade FROM students ORDER BY grade DESC")
for row in cursor.fetchall():
    print(f"{row[0]}: {row[1]}")
>>> Charlie: 16.5
>>> Alice: 15.5
>>> Bob: 14.0
\`\`\`

## Row Factory

\`\`\`python
conn.row_factory = sqlite3.Row
cursor = conn.cursor()
cursor.execute("SELECT * FROM students")
for row in cursor.fetchall():
    print(dict(row))
\`\`\`

💡 Setting \`row_factory = sqlite3.Row\` gives you dictionary-like access to columns by name.`,
        exercises: [
          {
            id: 'sqlite-basics-1',
            title: 'Create and Insert',
            description: 'Create a table and insert data.',
            instructions: ['Create an in-memory database', 'Create a \'products\' table with id, name, price', 'Insert 3 products', 'Query and print all products'],
            starterCode: '',
            solution: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\n\ncursor.execute("""\n    CREATE TABLE products (\n        id INTEGER PRIMARY KEY AUTOINCREMENT,\n        name TEXT NOT NULL,\n        price REAL\n    )\n""")\n\nproducts = [("Widget", 9.99), ("Gadget", 24.99), ("Doohickey", 4.99)]\ncursor.executemany("INSERT INTO products (name, price) VALUES (?, ?)", products)\nconn.commit()\n\ncursor.execute("SELECT id, name, price FROM products")\nfor row in cursor.fetchall():\n    print(f"{row[0]}. {row[1]}: ${row[2]:.2f}")\n\nconn.close()',
            hint: 'Use :memory: for in-memory DB, executemany for batch inserts',
            expectedOutput: '1. Widget: $9.99\n2. Gadget: $24.99\n3. Doohickey: $4.99',
          },
          {
            id: 'sqlite-basics-2',
            title: 'Query with WHERE',
            description: 'Filter data with WHERE clauses.',
            instructions: ['Create a students table with name and grade', 'Insert 5 students', 'Query students with grade > 85', 'Print results'],
            starterCode: '',
            solution: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\n\ncursor.execute("CREATE TABLE students (name TEXT, grade REAL)")\nstudents = [("Alice", 92), ("Bob", 78), ("Charlie", 88), ("Diana", 95), ("Eve", 65)]\ncursor.executemany("INSERT INTO students VALUES (?, ?)", students)\nconn.commit()\n\ncursor.execute("SELECT name, grade FROM students WHERE grade > 85 ORDER BY grade DESC")\nfor row in cursor.fetchall():\n    print(f"{row[0]}: {row[1]}")\n\nconn.close()',
            hint: 'Use WHERE clause with comparison operators',
            expectedOutput: 'Diana: 95.0\nAlice: 92.0\nCharlie: 88.0',
          },
          {
            id: 'sqlite-basics-3',
            title: 'Row Factory',
            description: 'Use Row factory for named column access.',
            instructions: ['Create a table and insert data', 'Set row_factory = sqlite3.Row', 'Access columns by name and print'],
            starterCode: '',
            solution: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\nconn.row_factory = sqlite3.Row\ncursor = conn.cursor()\n\ncursor.execute("CREATE TABLE books (title TEXT, author TEXT, year INTEGER)")\ncursor.executemany("INSERT INTO books VALUES (?, ?, ?)", [\n    ("Python 101", "John", 2020),\n    ("Data Science", "Jane", 2022),\n])\nconn.commit()\n\ncursor.execute("SELECT * FROM books")\nfor row in cursor.fetchall():\n    print(f"{row[\'title\']} by {row[\'author\']} ({row[\'year\']})")\n\nconn.close()',
            hint: 'Set conn.row_factory = sqlite3.Row before creating cursor',
            expectedOutput: 'Python 101 by John (2020)\nData Science by Jane (2022)',
          },
          {
            id: 'sqlite-basics-4',
            title: 'Aggregate Functions',
            description: 'Use SQL aggregate functions.',
            instructions: ['Create a sales table with product and amount', 'Calculate total, average, min, max, and count', 'Print each aggregate'],
            starterCode: '',
            solution: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\n\ncursor.execute("CREATE TABLE sales (product TEXT, amount REAL)")\ndata = [("A", 100), ("B", 250), ("A", 150), ("C", 75), ("B", 300)]\ncursor.executemany("INSERT INTO sales VALUES (?, ?)", data)\nconn.commit()\n\ncursor.execute("SELECT COUNT(*), SUM(amount), AVG(amount), MIN(amount), MAX(amount) FROM sales")\ncount, total, avg, mn, mx = cursor.fetchone()\nprint(f"Count: {count}")\nprint(f"Total: ${total:.2f}")\nprint(f"Average: ${avg:.2f}")\nprint(f"Min: ${mn:.2f}")\nprint(f"Max: ${mx:.2f}")\n\nconn.close()',
            hint: 'Use COUNT, SUM, AVG, MIN, MAX in SQL query',
            expectedOutput: 'Count: 5\nTotal: $875.00\nAverage: $175.00\nMin: $75.00\nMax: $300.00',
          },
          {
            id: 'sqlite-basics-5',
            title: 'Multiple Tables',
            description: 'Create related tables.',
            instructions: ['Create \'authors\' and \'books\' tables', 'Authors have id and name, books have title and author_id', 'Insert data and query books with author names'],
            starterCode: '',
            solution: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\n\ncursor.execute("CREATE TABLE authors (id INTEGER PRIMARY KEY, name TEXT)")\ncursor.execute("CREATE TABLE books (id INTEGER PRIMARY KEY, title TEXT, author_id INTEGER)")\n\ncursor.executemany("INSERT INTO authors VALUES (?, ?)", [(1, "Alice"), (2, "Bob")])\ncursor.executemany("INSERT INTO books VALUES (?, ?, ?)", [\n    (1, "Python Basics", 1), (2, "Web Dev", 2), (3, "Data Science", 1)\n])\nconn.commit()\n\ncursor.execute("""\n    SELECT books.title, authors.name\n    FROM books\n    JOIN authors ON books.author_id = authors.id\n    ORDER BY books.title\n""")\nfor row in cursor.fetchall():\n    print(f"{row[0]} by {row[1]}")\n\nconn.close()',
            hint: 'Use JOIN to combine data from related tables',
            expectedOutput: 'Data Science by Alice\nPython Basics by Alice\nWeb Dev by Bob',
          }
        ],
      },
      {
        id: 'sql-crud',
        number: 2,
        title: 'SQL CRUD Operations',
        description: 'Create, Read, Update, Delete data',
        icon: 'Table',
        type: 'exercises',
        lesson: `CRUD stands for **Create, Read, Update, Delete** — the four fundamental database operations. Mastering these is essential for any data-driven application.

## INSERT (Create)

\`\`\`python
import sqlite3
conn = sqlite3.connect(':memory:')
cursor = conn.cursor()
cursor.execute("CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)")

# Single insert
cursor.execute("INSERT INTO users (name, email) VALUES (?, ?)", ("Alice", "alice@email.com"))

# Batch insert
users = [("Bob", "bob@email.com"), ("Charlie", "charlie@email.com")]
cursor.executemany("INSERT INTO users (name, email) VALUES (?, ?)", users)
conn.commit()

# Get last inserted row id
print(f"Last ID: {cursor.lastrowid}")
\`\`\`

## SELECT (Read)

\`\`\`python
# All rows
cursor.execute("SELECT * FROM users")
all_rows = cursor.fetchall()

# One row
cursor.execute("SELECT * FROM users WHERE id = ?", (1,))
one_row = cursor.fetchone()

# With conditions
cursor.execute("SELECT name FROM users WHERE name LIKE ?", ("A%",))
matching = cursor.fetchall()
\`\`\`

## UPDATE

\`\`\`python
cursor.execute("UPDATE users SET email = ? WHERE name = ?", ("new@email.com", "Alice"))
conn.commit()
print(f"Rows updated: {cursor.rowcount}")
\`\`\`

## DELETE

\`\`\`python
cursor.execute("DELETE FROM users WHERE name = ?", ("Bob",))
conn.commit()
print(f"Rows deleted: {cursor.rowcount}")
\`\`\`

## Checking Changes with rowcount

\`\`\`python
cursor.execute("UPDATE users SET email = ? WHERE name = ?", ("x@y.com", "Nobody"))
print(f"Rows affected: {cursor.rowcount}")
>>> Rows affected: 0
\`\`\`

💡 Always use \`?\` parameter placeholders — never construct SQL strings with f-strings or format().

⚠️ \`fetchone()\` returns \`None\` when no rows match. Always check before accessing columns.

⚠️ Don't forget \`conn.commit()\` after INSERT, UPDATE, or DELETE — changes aren't saved otherwise.`,
        exercises: [
          {
            id: 'sql-crud-1',
            title: 'Insert and Read',
            description: 'Insert records and query them back.',
            instructions: ['Create a contacts table (name, phone, city)', 'Insert 4 contacts', 'Select all from \'Paris\' and print them'],
            starterCode: '',
            solution: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\ncursor.execute("CREATE TABLE contacts (name TEXT, phone TEXT, city TEXT)")\n\ncontacts = [\n    ("Alice", "555-0001", "Paris"),\n    ("Bob", "555-0002", "London"),\n    ("Charlie", "555-0003", "Paris"),\n    ("Diana", "555-0004", "Tokyo"),\n]\ncursor.executemany("INSERT INTO contacts VALUES (?, ?, ?)", contacts)\nconn.commit()\n\ncursor.execute("SELECT name, phone FROM contacts WHERE city = ?", ("Paris",))\nfor row in cursor.fetchall():\n    print(f"{row[0]}: {row[1]}")\n\nconn.close()',
            hint: 'Use WHERE city = ? with parameter tuple',
            expectedOutput: 'Alice: 555-0001\nCharlie: 555-0003',
          },
          {
            id: 'sql-crud-2',
            title: 'Update Records',
            description: 'Modify existing records.',
            instructions: ['Create a products table with name and price', 'Insert 3 products', 'Increase all prices by 10%', 'Print updated prices'],
            starterCode: '',
            solution: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\ncursor.execute("CREATE TABLE products (name TEXT, price REAL)")\ncursor.executemany("INSERT INTO products VALUES (?, ?)", [\n    ("Widget", 10.00), ("Gadget", 20.00), ("Tool", 15.00)\n])\nconn.commit()\n\ncursor.execute("UPDATE products SET price = price * 1.1")\nconn.commit()\nprint(f"Updated {cursor.rowcount} rows")\n\ncursor.execute("SELECT name, price FROM products ORDER BY name")\nfor row in cursor.fetchall():\n    print(f"{row[0]}: ${row[1]:.2f}")\n\nconn.close()',
            hint: 'Use UPDATE SET price = price * 1.1 for percentage increase',
            expectedOutput: 'Updated 3 rows\nGadget: $22.00\nTool: $16.50\nWidget: $11.00',
          },
          {
            id: 'sql-crud-3',
            title: 'Delete Records',
            description: 'Remove records based on conditions.',
            instructions: ['Create a tasks table with title, status, priority', 'Insert 5 tasks with different statuses', 'Delete completed tasks', 'Print remaining tasks'],
            starterCode: '',
            solution: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\ncursor.execute("CREATE TABLE tasks (title TEXT, status TEXT, priority INTEGER)")\ncursor.executemany("INSERT INTO tasks VALUES (?, ?, ?)", [\n    ("Buy groceries", "completed", 1),\n    ("Write report", "pending", 2),\n    ("Call dentist", "completed", 1),\n    ("Fix bug", "pending", 3),\n    ("Read book", "in_progress", 1),\n])\nconn.commit()\n\ncursor.execute("DELETE FROM tasks WHERE status = ?", ("completed",))\nconn.commit()\nprint(f"Deleted {cursor.rowcount} tasks")\n\ncursor.execute("SELECT title, status FROM tasks ORDER BY priority DESC")\nfor row in cursor.fetchall():\n    print(f"  {row[0]} [{row[1]}]")\n\nconn.close()',
            hint: 'DELETE FROM table WHERE condition',
            expectedOutput: 'Deleted 2 tasks\n  Fix bug [pending]\n  Write report [pending]\n  Read book [in_progress]',
          },
          {
            id: 'sql-crud-4',
            title: 'LIKE and Pattern Matching',
            description: 'Search text with LIKE operator.',
            instructions: ['Create a books table', 'Insert books with various titles', 'Search for books containing \'Python\' (case-insensitive)'],
            starterCode: '',
            solution: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\ncursor.execute("CREATE TABLE books (title TEXT, author TEXT)")\ncursor.executemany("INSERT INTO books VALUES (?, ?)", [\n    ("Learning Python", "Mark"),\n    ("JavaScript Guide", "John"),\n    ("Python Cookbook", "David"),\n    ("Data Science with R", "Jane"),\n    ("Advanced Python", "Alice"),\n])\nconn.commit()\n\ncursor.execute("SELECT title, author FROM books WHERE title LIKE ? ORDER BY title", ("%Python%",))\nfor row in cursor.fetchall():\n    print(f"{row[0]} by {row[1]}")\n\nconn.close()',
            hint: 'Use LIKE \'%pattern%\' for contains, \'pattern%\' for starts with',
            expectedOutput: 'Advanced Python by Alice\nLearning Python by Mark\nPython Cookbook by David',
          },
          {
            id: 'sql-crud-5',
            title: 'Upsert Pattern',
            description: 'Insert or update based on existence.',
            instructions: ['Create a settings table with key (unique) and value', 'Implement insert-or-replace for settings', 'Set values, then update one, verify all'],
            starterCode: '',
            solution: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\ncursor.execute("CREATE TABLE settings (key TEXT PRIMARY KEY, value TEXT)")\n\ndef set_setting(cursor, key, value):\n    cursor.execute("INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)", (key, value))\n\nset_setting(cursor, "theme", "dark")\nset_setting(cursor, "language", "en")\nset_setting(cursor, "font_size", "14")\nconn.commit()\n\n# Update theme\nset_setting(cursor, "theme", "light")\nconn.commit()\n\ncursor.execute("SELECT key, value FROM settings ORDER BY key")\nfor row in cursor.fetchall():\n    print(f"{row[0]} = {row[1]}")\n\nconn.close()',
            hint: 'Use INSERT OR REPLACE for upsert behavior in SQLite',
            expectedOutput: 'font_size = 14\nlanguage = en\ntheme = light',
          }
        ],
      },
      {
        id: 'sql-advanced',
        number: 3,
        title: 'Advanced SQL',
        description: 'JOINs, aggregation, and subqueries',
        icon: 'Search',
        type: 'exercises',
        lesson: `Advanced SQL features let you write complex queries: JOINs to combine tables, aggregation with GROUP BY, subqueries for nested logic, and indexes for performance.

## JOINs — Combining Tables

\`\`\`python
import sqlite3

conn = sqlite3.connect(':memory:')
cursor = conn.cursor()

cursor.execute("CREATE TABLE departments (id INTEGER PRIMARY KEY, name TEXT)")
cursor.execute("CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, dept_id INTEGER, salary REAL)")

cursor.executemany("INSERT INTO departments VALUES (?, ?)", [(1, 'Engineering'), (2, 'Marketing')])
cursor.executemany("INSERT INTO employees VALUES (?, ?, ?, ?)", [
    (1, 'Alice', 1, 90000), (2, 'Bob', 2, 70000), (3, 'Charlie', 1, 95000)
])
conn.commit()

# INNER JOIN
cursor.execute('''
    SELECT e.name, d.name, e.salary
    FROM employees e
    JOIN departments d ON e.dept_id = d.id
''')
for row in cursor.fetchall():
    print(f"{row[0]} ({row[1]}): \${row[2]:,.0f}")
>>> Alice (Engineering): $90,000
>>> Bob (Marketing): $70,000
>>> Charlie (Engineering): $95,000
\`\`\`

## GROUP BY with Aggregation

\`\`\`python
cursor.execute('''
    SELECT d.name, COUNT(*) as emp_count, AVG(e.salary) as avg_salary
    FROM employees e
    JOIN departments d ON e.dept_id = d.id
    GROUP BY d.name
    HAVING COUNT(*) > 0
    ORDER BY avg_salary DESC
''')
\`\`\`

## Subqueries

\`\`\`python
# Find employees earning above average
cursor.execute('''
    SELECT name, salary FROM employees
    WHERE salary > (SELECT AVG(salary) FROM employees)
''')
\`\`\`

## Indexes

\`\`\`python
# Create an index for faster lookups
cursor.execute("CREATE INDEX idx_emp_dept ON employees(dept_id)")
cursor.execute("CREATE UNIQUE INDEX idx_emp_name ON employees(name)")
\`\`\`

💡 Use table aliases (\`employees e\`) to keep queries readable.

⚠️ LEFT JOIN includes all rows from the left table even without matches. INNER JOIN (or just JOIN) only includes matching rows.

⚠️ Always add indexes on columns you frequently filter or join on — it can speed up queries 100x+.`,
        exercises: [
          {
            id: 'sql-adv-1',
            title: 'JOIN Tables',
            description: 'Combine data from related tables.',
            instructions: ['Create orders and customers tables', 'Join them to show customer name with their orders'],
            starterCode: '',
            solution: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\n\ncursor.execute("CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT)")\ncursor.execute("CREATE TABLE orders (id INTEGER PRIMARY KEY, customer_id INTEGER, product TEXT, amount REAL)")\n\ncursor.executemany("INSERT INTO customers VALUES (?, ?)", [(1, "Alice"), (2, "Bob"), (3, "Charlie")])\ncursor.executemany("INSERT INTO orders VALUES (?, ?, ?, ?)", [\n    (1, 1, "Laptop", 999), (2, 1, "Mouse", 25), (3, 2, "Keyboard", 75)\n])\nconn.commit()\n\ncursor.execute("""\n    SELECT c.name, o.product, o.amount\n    FROM orders o\n    JOIN customers c ON o.customer_id = c.id\n    ORDER BY c.name, o.product\n""")\nfor row in cursor.fetchall():\n    print(f"{row[0]}: {row[1]} (${row[2]:.2f})")\n\nconn.close()',
            hint: 'Use JOIN ... ON to link tables by foreign key',
            expectedOutput: 'Alice: Laptop ($999.00)\nAlice: Mouse ($25.00)\nBob: Keyboard ($75.00)',
          },
          {
            id: 'sql-adv-2',
            title: 'GROUP BY',
            description: 'Aggregate data with GROUP BY.',
            instructions: ['Create a sales table with salesperson, region, and amount', 'Group by region, show count and total'],
            starterCode: '',
            solution: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\ncursor.execute("CREATE TABLE sales (salesperson TEXT, region TEXT, amount REAL)")\ncursor.executemany("INSERT INTO sales VALUES (?, ?, ?)", [\n    ("Alice", "North", 1000), ("Bob", "South", 1500),\n    ("Charlie", "North", 2000), ("Diana", "South", 800),\n    ("Eve", "North", 1200),\n])\nconn.commit()\n\ncursor.execute("""\n    SELECT region, COUNT(*) as sales_count, SUM(amount) as total\n    FROM sales\n    GROUP BY region\n    ORDER BY total DESC\n""")\nfor row in cursor.fetchall():\n    print(f"{row[0]}: {row[1]} sales, ${row[2]:,.0f} total")\n\nconn.close()',
            hint: 'GROUP BY groups rows, then aggregates apply within each group',
            expectedOutput: 'North: 3 sales, $4,200 total\nSouth: 2 sales, $2,300 total',
          },
          {
            id: 'sql-adv-3',
            title: 'Subqueries',
            description: 'Use subqueries for complex conditions.',
            instructions: ['Create employees table with name, department, salary', 'Find employees earning above average salary', 'Find the department with highest average salary'],
            starterCode: '',
            solution: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\ncursor.execute("CREATE TABLE employees (name TEXT, department TEXT, salary REAL)")\ncursor.executemany("INSERT INTO employees VALUES (?, ?, ?)", [\n    ("Alice", "Engineering", 95000), ("Bob", "Marketing", 65000),\n    ("Charlie", "Engineering", 90000), ("Diana", "Marketing", 70000),\n    ("Eve", "Engineering", 100000),\n])\nconn.commit()\n\ncursor.execute("SELECT AVG(salary) FROM employees")\navg_sal = cursor.fetchone()[0]\nprint(f"Average salary: ${avg_sal:,.0f}")\n\ncursor.execute("""\n    SELECT name, salary FROM employees\n    WHERE salary > (SELECT AVG(salary) FROM employees)\n    ORDER BY salary DESC\n""")\nprint("Above average:")\nfor row in cursor.fetchall():\n    print(f"  {row[0]}: ${row[1]:,.0f}")\n\nconn.close()',
            hint: 'Use a SELECT inside WHERE for subquery: WHERE salary > (SELECT AVG...)',
            expectedOutput: 'Average salary: $84,000\nAbove average:\n  Eve: $100,000\n  Alice: $95,000\n  Charlie: $90,000',
          },
          {
            id: 'sql-adv-4',
            title: 'HAVING Clause',
            description: 'Filter groups with HAVING.',
            instructions: ['Create an orders table', 'Group by customer, filter groups with HAVING total > 100', 'Show qualifying customers'],
            starterCode: '',
            solution: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\ncursor.execute("CREATE TABLE orders (customer TEXT, amount REAL)")\ncursor.executemany("INSERT INTO orders VALUES (?, ?)", [\n    ("Alice", 50), ("Alice", 75), ("Bob", 30),\n    ("Charlie", 120), ("Alice", 25), ("Bob", 45),\n])\nconn.commit()\n\ncursor.execute("""\n    SELECT customer, COUNT(*) as order_count, SUM(amount) as total\n    FROM orders\n    GROUP BY customer\n    HAVING SUM(amount) > 100\n    ORDER BY total DESC\n""")\nfor row in cursor.fetchall():\n    print(f"{row[0]}: {row[1]} orders, ${row[2]:.2f} total")\n\nconn.close()',
            hint: 'HAVING filters groups (like WHERE but after GROUP BY)',
            expectedOutput: 'Alice: 3 orders, $150.00 total\nCharlie: 1 orders, $120.00 total',
          },
          {
            id: 'sql-adv-5',
            title: 'Window Functions',
            description: 'Use ORDER BY with LIMIT and OFFSET.',
            instructions: ['Create a scores table', 'Get the top 3 scores', 'Get scores ranked 4-6 (second page)'],
            starterCode: '',
            solution: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\ncursor.execute("CREATE TABLE scores (player TEXT, score INTEGER)")\ncursor.executemany("INSERT INTO scores VALUES (?, ?)", [\n    ("Alice", 950), ("Bob", 870), ("Charlie", 920),\n    ("Diana", 890), ("Eve", 910), ("Frank", 850),\n])\nconn.commit()\n\nprint("Top 3:")\ncursor.execute("SELECT player, score FROM scores ORDER BY score DESC LIMIT 3")\nfor row in cursor.fetchall():\n    print(f"  {row[0]}: {row[1]}")\n\nprint("Next 3:")\ncursor.execute("SELECT player, score FROM scores ORDER BY score DESC LIMIT 3 OFFSET 3")\nfor row in cursor.fetchall():\n    print(f"  {row[0]}: {row[1]}")\n\nconn.close()',
            hint: 'Use LIMIT N for top N, LIMIT N OFFSET M to skip M rows',
            expectedOutput: 'Top 3:\n  Alice: 950\n  Charlie: 920\n  Eve: 910\nNext 3:\n  Diana: 890\n  Bob: 870\n  Frank: 850',
          }
        ],
      },
      {
        id: 'sqlalchemy-mod',
        number: 4,
        title: 'SQLAlchemy ORM',
        description: 'Object-relational mapping with SQLAlchemy',
        icon: 'Layers',
        type: 'exercises',
        lesson: `SQLAlchemy is Python's most popular **Object-Relational Mapper (ORM)**. It lets you work with databases using Python classes instead of raw SQL, making your code cleaner and more maintainable.

## ORM Concept

Instead of writing SQL:
\`\`\`sql
SELECT * FROM users WHERE age > 18
\`\`\`

You write Python:
\`\`\`python
session.query(User).filter(User.age > 18).all()
\`\`\`

## Defining Models

\`\`\`python
from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.orm import declarative_base, sessionmaker

Base = declarative_base()

class Product(Base):
    __tablename__ = 'products'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    price = Column(Float)

    def __repr__(self):
        return f"Product(name='{self.name}', price={self.price})"
\`\`\`

## Creating Tables and Sessions

\`\`\`python
engine = create_engine('sqlite:///:memory:')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()
\`\`\`

## CRUD with ORM

\`\`\`python
# Create
product = Product(name='Widget', price=9.99)
session.add(product)
session.commit()

# Read
products = session.query(Product).all()
cheap = session.query(Product).filter(Product.price < 10).first()

# Update
product.price = 12.99
session.commit()

# Delete
session.delete(product)
session.commit()
\`\`\`

## Relationships

\`\`\`python
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class Author(Base):
    __tablename__ = 'authors'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    books = relationship('Book', back_populates='author')

class Book(Base):
    __tablename__ = 'books'
    id = Column(Integer, primary_key=True)
    title = Column(String)
    author_id = Column(Integer, ForeignKey('authors.id'))
    author = relationship('Author', back_populates='books')
\`\`\`

💡 SQLAlchemy translates your Python code to SQL for any database — switch from SQLite to PostgreSQL by just changing the connection string.

⚠️ Always call \`session.commit()\` to save changes. Use \`session.rollback()\` to undo uncommitted changes.`,
        exercises: [
          {
            id: 'sqlalchemy-1',
            title: 'Define and Create Model',
            description: 'Create an ORM model and insert data.',
            instructions: ['Define a Student model with name and grade', 'Create the table, add 3 students', 'Query and print all'],
            starterCode: '',
            solution: 'from sqlalchemy import create_engine, Column, Integer, String, Float\nfrom sqlalchemy.orm import declarative_base, sessionmaker\n\nBase = declarative_base()\n\nclass Student(Base):\n    __tablename__ = "students"\n    id = Column(Integer, primary_key=True)\n    name = Column(String, nullable=False)\n    grade = Column(Float)\n    def __repr__(self):\n        return f"Student({self.name}, {self.grade})"\n\nengine = create_engine("sqlite:///:memory:")\nBase.metadata.create_all(engine)\nSession = sessionmaker(bind=engine)\nsession = Session()\n\nsession.add_all([\n    Student(name="Alice", grade=92.5),\n    Student(name="Bob", grade=85.0),\n    Student(name="Charlie", grade=90.0),\n])\nsession.commit()\n\nfor s in session.query(Student).all():\n    print(s)',
            hint: 'Define class with Base, Column types, create_all, add_all, commit',
            expectedOutput: 'Student(Alice, 92.5)\nStudent(Bob, 85.0)\nStudent(Charlie, 90.0)',
          },
          {
            id: 'sqlalchemy-2',
            title: 'Query and Filter',
            description: 'Use ORM queries to filter data.',
            instructions: ['Create a Product model and insert 5 products', 'Find products under $20', 'Find the most expensive product'],
            starterCode: '',
            solution: 'from sqlalchemy import create_engine, Column, Integer, String, Float\nfrom sqlalchemy.orm import declarative_base, sessionmaker\n\nBase = declarative_base()\n\nclass Product(Base):\n    __tablename__ = "products"\n    id = Column(Integer, primary_key=True)\n    name = Column(String)\n    price = Column(Float)\n\nengine = create_engine("sqlite:///:memory:")\nBase.metadata.create_all(engine)\nsession = sessionmaker(bind=engine)()\n\nsession.add_all([\n    Product(name="Mouse", price=15.99),\n    Product(name="Keyboard", price=45.99),\n    Product(name="Monitor", price=299.99),\n    Product(name="Cable", price=5.99),\n    Product(name="Webcam", price=79.99),\n])\nsession.commit()\n\nprint("Under $20:")\nfor p in session.query(Product).filter(Product.price < 20).all():\n    print(f"  {p.name}: ${p.price}")\n\nexpensive = session.query(Product).order_by(Product.price.desc()).first()\nprint(f"Most expensive: {expensive.name} (${expensive.price})")',
            hint: 'Use .filter(Model.column < value) and .order_by(.desc())',
            expectedOutput: 'Under $20:\n  Mouse: $15.99\n  Cable: $5.99\nMost expensive: Monitor ($299.99)',
          },
          {
            id: 'sqlalchemy-3',
            title: 'Update and Delete',
            description: 'Modify and remove ORM records.',
            instructions: ['Create tasks with title and done status', 'Mark specific task as done', 'Delete completed tasks', 'Print remaining'],
            starterCode: '',
            solution: 'from sqlalchemy import create_engine, Column, Integer, String, Boolean\nfrom sqlalchemy.orm import declarative_base, sessionmaker\n\nBase = declarative_base()\n\nclass Task(Base):\n    __tablename__ = "tasks"\n    id = Column(Integer, primary_key=True)\n    title = Column(String)\n    done = Column(Boolean, default=False)\n\nengine = create_engine("sqlite:///:memory:")\nBase.metadata.create_all(engine)\nsession = sessionmaker(bind=engine)()\n\nsession.add_all([\n    Task(title="Buy milk", done=True),\n    Task(title="Write code"),\n    Task(title="Clean room", done=True),\n    Task(title="Read book"),\n])\nsession.commit()\n\n# Delete completed\ncompleted = session.query(Task).filter(Task.done == True).all()\nfor t in completed:\n    session.delete(t)\nsession.commit()\n\nprint("Remaining tasks:")\nfor t in session.query(Task).all():\n    print(f"  [ ] {t.title}")',
            hint: 'Query with filter, delete each, commit, then query remaining',
            expectedOutput: 'Remaining tasks:\n  [ ] Write code\n  [ ] Read book',
          },
          {
            id: 'sqlalchemy-4',
            title: 'Aggregation with ORM',
            description: 'Use SQLAlchemy functions for aggregation.',
            instructions: ['Create an orders table with product and amount', 'Use func.sum, func.count, func.avg for aggregates'],
            starterCode: '',
            solution: 'from sqlalchemy import create_engine, Column, Integer, String, Float, func\nfrom sqlalchemy.orm import declarative_base, sessionmaker\n\nBase = declarative_base()\n\nclass Order(Base):\n    __tablename__ = "orders"\n    id = Column(Integer, primary_key=True)\n    product = Column(String)\n    amount = Column(Float)\n\nengine = create_engine("sqlite:///:memory:")\nBase.metadata.create_all(engine)\nsession = sessionmaker(bind=engine)()\n\nsession.add_all([\n    Order(product="Widget", amount=100),\n    Order(product="Gadget", amount=200),\n    Order(product="Widget", amount=150),\n    Order(product="Gadget", amount=250),\n])\nsession.commit()\n\nresults = session.query(\n    Order.product,\n    func.count(Order.id).label("count"),\n    func.sum(Order.amount).label("total")\n).group_by(Order.product).all()\n\nfor product, count, total in results:\n    print(f"{product}: {count} orders, ${total:.2f} total")',
            hint: 'Import func from sqlalchemy, use func.sum(), func.count() with group_by()',
            expectedOutput: 'Gadget: 2 orders, $450.00 total\nWidget: 2 orders, $250.00 total',
          },
          {
            id: 'sqlalchemy-5',
            title: 'Relationships',
            description: 'Define and use model relationships.',
            instructions: ['Create Author and Book models with a one-to-many relationship', 'Add authors with books', 'Query and display the relationships'],
            starterCode: '',
            solution: 'from sqlalchemy import create_engine, Column, Integer, String, ForeignKey\nfrom sqlalchemy.orm import declarative_base, sessionmaker, relationship\n\nBase = declarative_base()\n\nclass Author(Base):\n    __tablename__ = "authors"\n    id = Column(Integer, primary_key=True)\n    name = Column(String)\n    books = relationship("Book", back_populates="author")\n\nclass Book(Base):\n    __tablename__ = "books"\n    id = Column(Integer, primary_key=True)\n    title = Column(String)\n    author_id = Column(Integer, ForeignKey("authors.id"))\n    author = relationship("Author", back_populates="books")\n\nengine = create_engine("sqlite:///:memory:")\nBase.metadata.create_all(engine)\nsession = sessionmaker(bind=engine)()\n\nalice = Author(name="Alice")\nalice.books = [Book(title="Python 101"), Book(title="Data Science")]\nbob = Author(name="Bob")\nbob.books = [Book(title="Web Dev")]\n\nsession.add_all([alice, bob])\nsession.commit()\n\nfor author in session.query(Author).all():\n    print(f"{author.name}:")\n    for book in author.books:\n        print(f"  - {book.title}")',
            hint: 'Use relationship() and ForeignKey to define relations, back_populates for bidirectional',
            expectedOutput: 'Alice:\n  - Python 101\n  - Data Science\nBob:\n  - Web Dev',
          }
        ],
      },
      {
        id: 'db-patterns',
        number: 5,
        title: 'Database Patterns',
        description: 'Transactions, repositories, and best practices',
        icon: 'Lightbulb',
        type: 'exercises',
        lesson: `Database patterns are **best practices** for working with databases reliably and efficiently. They cover transactions, connection management, and data integrity.

## Transactions

A transaction groups multiple operations into an **atomic unit** — either all succeed or all fail:

\`\`\`python
import sqlite3

conn = sqlite3.connect(':memory:')
cursor = conn.cursor()
cursor.execute("CREATE TABLE accounts (name TEXT, balance REAL)")
cursor.executemany("INSERT INTO accounts VALUES (?, ?)",
                   [("Alice", 1000), ("Bob", 500)])
conn.commit()

# Transfer money atomically
try:
    cursor.execute("UPDATE accounts SET balance = balance - 100 WHERE name = 'Alice'")
    cursor.execute("UPDATE accounts SET balance = balance + 100 WHERE name = 'Bob'")
    conn.commit()  # Both succeed
    print("Transfer successful")
except Exception:
    conn.rollback()  # Both fail
    print("Transfer failed, rolled back")
\`\`\`

## Context Manager Pattern

\`\`\`python
import sqlite3

def get_connection():
    conn = sqlite3.connect(':memory:')
    conn.row_factory = sqlite3.Row
    return conn

# Use as context manager
with get_connection() as conn:
    cursor = conn.cursor()
    cursor.execute("CREATE TABLE test (id INTEGER)")
    # Auto-commits on exit, auto-rollbacks on exception
\`\`\`

## The Repository Pattern

\`\`\`python
class UserRepository:
    def __init__(self, conn):
        self.conn = conn
        self.cursor = conn.cursor()

    def create_table(self):
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT UNIQUE
            )
        ''')
        self.conn.commit()

    def add(self, name, email):
        self.cursor.execute("INSERT INTO users (name, email) VALUES (?, ?)", (name, email))
        self.conn.commit()
        return self.cursor.lastrowid

    def get_all(self):
        self.cursor.execute("SELECT * FROM users")
        return self.cursor.fetchall()
\`\`\`

## Batch Operations

\`\`\`python
# Efficient batch insert
data = [(f"User{i}", f"user{i}@email.com") for i in range(1000)]
cursor.executemany("INSERT INTO users (name, email) VALUES (?, ?)", data)
conn.commit()  # One commit for all inserts — much faster!
\`\`\`

💡 Always use transactions for operations that must succeed or fail together (like money transfers).

⚠️ Never commit after each individual insert in a loop — batch them for performance.

⚠️ Use \`CREATE TABLE IF NOT EXISTS\` to make your code idempotent.`,
        exercises: [
          {
            id: 'db-patterns-1',
            title: 'Transaction Safety',
            description: 'Use transactions for atomic operations.',
            instructions: ['Create accounts table with name and balance', 'Implement a transfer function that\'s atomic', 'Test with a successful and a failed transfer'],
            starterCode: '',
            solution: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\ncursor.execute("CREATE TABLE accounts (name TEXT PRIMARY KEY, balance REAL)")\ncursor.executemany("INSERT INTO accounts VALUES (?, ?)", [\n    ("Alice", 1000), ("Bob", 500)\n])\nconn.commit()\n\ndef transfer(cursor, conn, from_acct, to_acct, amount):\n    try:\n        cursor.execute("SELECT balance FROM accounts WHERE name = ?", (from_acct,))\n        balance = cursor.fetchone()[0]\n        if balance < amount:\n            raise ValueError("Insufficient funds")\n        cursor.execute("UPDATE accounts SET balance = balance - ? WHERE name = ?", (amount, from_acct))\n        cursor.execute("UPDATE accounts SET balance = balance + ? WHERE name = ?", (amount, to_acct))\n        conn.commit()\n        return True\n    except Exception as e:\n        conn.rollback()\n        print(f"Failed: {e}")\n        return False\n\ntransfer(cursor, conn, "Alice", "Bob", 200)\ntransfer(cursor, conn, "Bob", "Alice", 5000)\n\ncursor.execute("SELECT name, balance FROM accounts ORDER BY name")\nfor row in cursor.fetchall():\n    print(f"{row[0]}: ${row[1]:.2f}")\n\nconn.close()',
            hint: 'Check balance before transfer, rollback on failure',
            expectedOutput: 'Failed: Insufficient funds\nAlice: $800.00\nBob: $700.00',
          },
          {
            id: 'db-patterns-2',
            title: 'Repository Pattern',
            description: 'Implement a simple repository class.',
            instructions: ['Create a TaskRepository class wrapping sqlite3', 'Methods: create_table, add, get_all, get_by_status, mark_done', 'Test all operations'],
            starterCode: '',
            solution: 'import sqlite3\n\nclass TaskRepo:\n    def __init__(self, conn):\n        self.conn = conn\n        self.cursor = conn.cursor()\n    def create_table(self):\n        self.cursor.execute("CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, done INTEGER DEFAULT 0)")\n        self.conn.commit()\n    def add(self, title):\n        self.cursor.execute("INSERT INTO tasks (title) VALUES (?)", (title,))\n        self.conn.commit()\n        return self.cursor.lastrowid\n    def get_all(self):\n        self.cursor.execute("SELECT id, title, done FROM tasks")\n        return self.cursor.fetchall()\n    def mark_done(self, task_id):\n        self.cursor.execute("UPDATE tasks SET done = 1 WHERE id = ?", (task_id,))\n        self.conn.commit()\n\nconn = sqlite3.connect(":memory:")\nrepo = TaskRepo(conn)\nrepo.create_table()\n\nid1 = repo.add("Learn SQL")\nid2 = repo.add("Build app")\nid3 = repo.add("Write tests")\nrepo.mark_done(id1)\n\nfor task_id, title, done in repo.get_all():\n    status = "done" if done else "todo"\n    print(f"  [{status}] {title}")\n\nconn.close()',
            hint: 'Wrap database operations in a class with clear method names',
            expectedOutput: '  [done] Learn SQL\n  [todo] Build app\n  [todo] Write tests',
          },
          {
            id: 'db-patterns-3',
            title: 'Batch Insert Performance',
            description: 'Compare single vs batch inserts.',
            instructions: ['Insert 1000 records individually (commit each)', 'Insert 1000 records in a batch (one commit)', 'Compare the approach (show count)'],
            starterCode: '',
            solution: 'import sqlite3\nimport time\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\ncursor.execute("CREATE TABLE items (id INTEGER PRIMARY KEY, value TEXT)")\nconn.commit()\n\n# Batch insert\ndata = [(i, f"item_{i}") for i in range(1000)]\ncursor.executemany("INSERT INTO items VALUES (?, ?)", data)\nconn.commit()\n\ncursor.execute("SELECT COUNT(*) FROM items")\ncount = cursor.fetchone()[0]\nprint(f"Inserted: {count} rows")\nprint("Batch insert: 1 commit for 1000 rows (fast!)")\nprint("Individual inserts: 1000 commits (slow!)")\nprint("Always batch when possible.")\n\nconn.close()',
            hint: 'Use executemany with a list of tuples for batch inserts',
            expectedOutput: 'Inserted: 1000 rows\nBatch insert: 1 commit for 1000 rows (fast!)\nIndividual inserts: 1000 commits (slow!)\nAlways batch when possible.',
          },
          {
            id: 'db-patterns-4',
            title: 'Schema Migration',
            description: 'Add columns to existing tables safely.',
            instructions: ['Create initial table', 'Add a new column using ALTER TABLE', 'Update existing rows with default values', 'Verify the migration'],
            starterCode: '',
            solution: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\n\n# Initial schema\ncursor.execute("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)")\ncursor.executemany("INSERT INTO users (name) VALUES (?)", [("Alice",), ("Bob",)])\nconn.commit()\nprint("Before migration:")\ncursor.execute("PRAGMA table_info(users)")\nfor col in cursor.fetchall():\n    print(f"  {col[1]} ({col[2]})")\n\n# Migration: add email column\ncursor.execute("ALTER TABLE users ADD COLUMN email TEXT DEFAULT \'no-email\'")\nconn.commit()\n\n# Update existing rows\ncursor.execute("UPDATE users SET email = name || \'@example.com\'")\nconn.commit()\n\nprint("After migration:")\ncursor.execute("SELECT name, email FROM users")\nfor row in cursor.fetchall():\n    print(f"  {row[0]}: {row[1]}")\n\nconn.close()',
            hint: 'Use ALTER TABLE ... ADD COLUMN for schema changes',
            expectedOutput: 'Before migration:\n  id (INTEGER)\n  name (TEXT)\nAfter migration:\n  Alice: Alice@example.com\n  Bob: Bob@example.com',
          },
          {
            id: 'db-patterns-5',
            title: 'Data Validation Layer',
            description: 'Add validation before database operations.',
            instructions: ['Create a validated insert function', 'Validate data types and constraints before inserting', 'Test with valid and invalid data'],
            starterCode: '',
            solution: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\ncursor.execute("CREATE TABLE products (name TEXT NOT NULL, price REAL CHECK(price > 0), stock INTEGER CHECK(stock >= 0))")\nconn.commit()\n\ndef add_product(cursor, conn, name, price, stock):\n    errors = []\n    if not name or not isinstance(name, str):\n        errors.append("Name must be a non-empty string")\n    if not isinstance(price, (int, float)) or price <= 0:\n        errors.append("Price must be positive")\n    if not isinstance(stock, int) or stock < 0:\n        errors.append("Stock must be non-negative integer")\n    if errors:\n        return False, errors\n    cursor.execute("INSERT INTO products VALUES (?, ?, ?)", (name, price, stock))\n    conn.commit()\n    return True, []\n\ntest_cases = [\n    ("Widget", 9.99, 100),\n    ("", 5.0, 10),\n    ("Gadget", -5, 10),\n    ("Tool", 15.0, -1),\n]\n\nfor name, price, stock in test_cases:\n    ok, errs = add_product(cursor, conn, name, price, stock)\n    if ok:\n        print(f"Added: {name}")\n    else:\n        print(f"Rejected ({name!r}): {errs[0]}")\n\nconn.close()',
            hint: 'Validate inputs before executing SQL — check types, ranges, required fields',
            expectedOutput: 'Added: Widget\nRejected (\'\'): Name must be a non-empty string\nRejected (\'Gadget\'): Price must be positive\nRejected (\'Tool\'): Stock must be non-negative integer',
          }
        ],
      },
      {
        id: 'nosql-intro',
        number: 6,
        title: 'NoSQL Concepts',
        description: 'Document stores, key-value patterns',
        icon: 'CircleDot',
        type: 'exercises',
        lesson: `NoSQL databases offer alternatives to traditional relational databases. While Python's standard library doesn't include NoSQL databases, understanding the concepts and using Python's built-in data structures to model them is essential.

## What is NoSQL?

NoSQL ("Not Only SQL") databases are designed for specific use cases where relational databases may not be the best fit:

| Type | Description | Example |
|------|-------------|---------|
| **Document Store** | Stores JSON-like documents | MongoDB, CouchDB |
| **Key-Value Store** | Simple key→value mapping | Redis, DynamoDB |
| **Column Store** | Columns instead of rows | Cassandra |
| **Graph Database** | Nodes and edges | Neo4j |

## Simulating a Document Store

\`\`\`python
# Documents are just Python dicts — no fixed schema!
users_collection = [
    {"_id": 1, "name": "Alice", "age": 30, "hobbies": ["reading", "coding"]},
    {"_id": 2, "name": "Bob", "age": 25, "city": "London"},  # Different fields!
]

# Query: find users with age > 25
results = [u for u in users_collection if u.get("age", 0) > 25]
print(results[0]["name"])
>>> Alice
\`\`\`

## Simulating a Key-Value Store

\`\`\`python
class KeyValueStore:
    def __init__(self):
        self._data = {}
    def set(self, key, value):
        self._data[key] = value
    def get(self, key, default=None):
        return self._data.get(key, default)
    def delete(self, key):
        self._data.pop(key, None)
    def keys(self):
        return list(self._data.keys())

store = KeyValueStore()
store.set("user:1", {"name": "Alice"})
store.set("user:2", {"name": "Bob"})
print(store.get("user:1"))
>>> {'name': 'Alice'}
\`\`\`

## When to Use What?

| Use Case | Best Choice |
|----------|------------|
| Complex relationships, joins | Relational (SQL) |
| Flexible schemas, documents | Document Store |
| Caching, sessions | Key-Value Store |
| Social networks, recommendations | Graph Database |
| Time series data | Column Store |

💡 Start with SQL (SQLite, PostgreSQL) — it handles 90% of use cases well.

⚠️ NoSQL doesn't mean "no schema" — you still need to think about data structure.

⚠️ NoSQL databases trade consistency for performance in some cases (CAP theorem).`,
        exercises: [
          {
            id: 'nosql-1',
            title: 'Document Store',
            description: 'Implement a simple document store.',
            instructions: ['Create a DocumentCollection class with insert, find, and find_one methods', 'Insert several documents with different fields', 'Query using filter criteria'],
            starterCode: '',
            solution: 'class DocumentCollection:\n    def __init__(self):\n        self._docs = []\n        self._next_id = 1\n\n    def insert(self, doc):\n        doc["_id"] = self._next_id\n        self._next_id += 1\n        self._docs.append(doc.copy())\n        return doc["_id"]\n\n    def find(self, query=None):\n        if not query:\n            return self._docs[:]\n        return [d for d in self._docs if all(d.get(k) == v for k, v in query.items())]\n\n    def find_one(self, query):\n        results = self.find(query)\n        return results[0] if results else None\n\nusers = DocumentCollection()\nusers.insert({"name": "Alice", "age": 30, "role": "admin"})\nusers.insert({"name": "Bob", "age": 25, "role": "user"})\nusers.insert({"name": "Charlie", "age": 35, "role": "admin"})\n\nadmins = users.find({"role": "admin"})\nfor u in admins:\n    print(f"{u[\'name\']} (age {u[\'age\']})")\n\nbob = users.find_one({"name": "Bob"})\nprint(f"Found: {bob[\'name\']}, role={bob[\'role\']}")',
            hint: 'Store docs as dicts in a list, filter with dict comprehension',
            expectedOutput: 'Alice (age 30)\nCharlie (age 35)\nFound: Bob, role=user',
          },
          {
            id: 'nosql-2',
            title: 'Key-Value Store',
            description: 'Build a key-value store with expiry.',
            instructions: ['Create a KeyValueStore with set, get, delete, and keys methods', 'Store and retrieve different data types', 'Test deletion and missing keys'],
            starterCode: '',
            solution: 'class KVStore:\n    def __init__(self):\n        self._data = {}\n    def set(self, key, value):\n        self._data[key] = value\n    def get(self, key, default=None):\n        return self._data.get(key, default)\n    def delete(self, key):\n        return self._data.pop(key, None) is not None\n    def keys(self, pattern=None):\n        if pattern:\n            return [k for k in self._data if k.startswith(pattern)]\n        return list(self._data.keys())\n\nstore = KVStore()\nstore.set("user:1:name", "Alice")\nstore.set("user:1:email", "alice@example.com")\nstore.set("user:2:name", "Bob")\nstore.set("config:debug", True)\n\nprint(f"Name: {store.get(\'user:1:name\')}")\nprint(f"Missing: {store.get(\'user:3:name\', \'N/A\')}")\n\nuser_keys = store.keys("user:1")\nprint(f"User 1 keys: {user_keys}")\n\nstore.delete("config:debug")\nprint(f"Config keys: {store.keys(\'config\')}")',
            hint: 'Use a dict internally, add pattern matching with startswith',
            expectedOutput: 'Name: Alice\nMissing: N/A\nUser 1 keys: [\'user:1:name\', \'user:1:email\']\nConfig keys: []',
          },
          {
            id: 'nosql-3',
            title: 'Document Indexing',
            description: 'Add indexing to a document store.',
            instructions: ['Extend DocumentCollection with create_index and find_by_index methods', 'Show how indexing speeds up lookups'],
            starterCode: '',
            solution: 'class IndexedCollection:\n    def __init__(self):\n        self._docs = []\n        self._indexes = {}\n        self._next_id = 1\n\n    def create_index(self, field):\n        self._indexes[field] = {}\n        for doc in self._docs:\n            if field in doc:\n                self._indexes[field].setdefault(doc[field], []).append(doc)\n\n    def insert(self, doc):\n        doc["_id"] = self._next_id\n        self._next_id += 1\n        self._docs.append(doc)\n        for field, index in self._indexes.items():\n            if field in doc:\n                index.setdefault(doc[field], []).append(doc)\n        return doc["_id"]\n\n    def find_by_index(self, field, value):\n        if field in self._indexes:\n            return self._indexes[field].get(value, [])\n        return [d for d in self._docs if d.get(field) == value]\n\ncol = IndexedCollection()\ncol.create_index("category")\n\nfor i in range(5):\n    col.insert({"name": f"Item {i}", "category": "A" if i % 2 == 0 else "B"})\n\nresults = col.find_by_index("category", "A")\nprint(f"Category A items: {len(results)}")\nfor item in results:\n    print(f"  {item[\'name\']}")',
            hint: 'Maintain a dict-of-lists index mapping field values to documents',
            expectedOutput: 'Category A items: 3\n  Item 0\n  Item 2\n  Item 4',
          },
          {
            id: 'nosql-4',
            title: 'Aggregate Pipeline',
            description: 'Implement MongoDB-style aggregation.',
            instructions: ['Create a pipeline function that applies stages: match, group, sort', 'Process a list of sales documents'],
            starterCode: '',
            solution: 'from collections import defaultdict\n\ndef match(docs, criteria):\n    return [d for d in docs if all(d.get(k) == v for k, v in criteria.items())]\n\ndef group(docs, key, aggregations):\n    groups = defaultdict(list)\n    for d in docs:\n        groups[d[key]].append(d)\n    results = []\n    for k, group_docs in groups.items():\n        result = {"_id": k}\n        for agg_name, (agg_func, field) in aggregations.items():\n            values = [d[field] for d in group_docs]\n            if agg_func == "sum":\n                result[agg_name] = sum(values)\n            elif agg_func == "avg":\n                result[agg_name] = sum(values) / len(values)\n            elif agg_func == "count":\n                result[agg_name] = len(values)\n        results.append(result)\n    return results\n\nsales = [\n    {"product": "Widget", "region": "North", "amount": 100},\n    {"product": "Gadget", "region": "South", "amount": 200},\n    {"product": "Widget", "region": "North", "amount": 150},\n    {"product": "Gadget", "region": "North", "amount": 300},\n    {"product": "Widget", "region": "South", "amount": 50},\n]\n\nresult = group(sales, "product", {"total": ("sum", "amount"), "count": ("count", "amount")})\nresult.sort(key=lambda x: x["total"], reverse=True)\nfor r in result:\n    print(f"{r[\'_id\']}: {r[\'count\']} sales, ${r[\'total\']}")',
            hint: 'Implement match/group as functions that transform document lists',
            expectedOutput: 'Gadget: 2 sales, $500\nWidget: 3 sales, $300',
          },
          {
            id: 'nosql-5',
            title: 'SQL vs NoSQL Comparison',
            description: 'Implement the same logic in SQL and document style.',
            instructions: ['Create the same data in SQLite and as documents', 'Query both for the same result', 'Compare approaches'],
            starterCode: '',
            solution: 'import sqlite3\n\n# SQL approach\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\ncursor.execute("CREATE TABLE employees (name TEXT, dept TEXT, salary REAL)")\ndata = [("Alice", "Eng", 90000), ("Bob", "Mkt", 65000), ("Charlie", "Eng", 95000), ("Diana", "Mkt", 70000)]\ncursor.executemany("INSERT INTO employees VALUES (?, ?, ?)", data)\nconn.commit()\n\nprint("=== SQL Approach ===")\ncursor.execute("SELECT dept, AVG(salary) FROM employees GROUP BY dept ORDER BY dept")\nfor row in cursor.fetchall():\n    print(f"  {row[0]}: ${row[1]:,.0f}")\n\n# Document approach\nprint("\\n=== Document Approach ===")\ndocs = [{"name": n, "dept": d, "salary": s} for n, d, s in data]\nfrom collections import defaultdict\ngroups = defaultdict(list)\nfor d in docs:\n    groups[d["dept"]].append(d["salary"])\nfor dept in sorted(groups):\n    avg = sum(groups[dept]) / len(groups[dept])\n    print(f"  {dept}: ${avg:,.0f}")\n\nconn.close()',
            hint: 'Show the same aggregation done with SQL GROUP BY and Python defaultdict',
            expectedOutput: '=== SQL Approach ===\n  Eng: $92,500\n  Mkt: $67,500\n\n=== Document Approach ===\n  Eng: $92,500\n  Mkt: $67,500',
          }
        ],
      }
    ],
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    subtitle: 'Build for the Web',
    description: 'Build web applications and APIs with Flask, FastAPI, and modern web patterns.',
    icon: 'Globe',
    color: 'pink',
    categories: [
      {
        id: 'http-basics',
        number: 1,
        title: 'HTTP & Web Fundamentals',
        description: 'Understand the HTTP protocol',
        icon: 'Globe',
        type: 'exercises',
        lesson: `Understanding HTTP is the **foundation of web development**. Every web page, API call, and web app relies on the HTTP protocol.

## What is HTTP?

HTTP (HyperText Transfer Protocol) is how browsers and servers communicate:

1. **Client** (browser) sends a **request**
2. **Server** processes it and sends a **response**

## HTTP Methods

| Method | Purpose | Example |
|--------|---------|---------|
| \`GET\` | Retrieve data | Load a web page |
| \`POST\` | Send data | Submit a form |
| \`PUT\` | Update/replace | Update a profile |
| \`PATCH\` | Partial update | Change password |
| \`DELETE\` | Remove data | Delete an account |

## HTTP Status Codes

\`\`\`python
status_codes = {
    200: "OK - Success",
    201: "Created - Resource created",
    301: "Moved Permanently - Redirect",
    400: "Bad Request - Invalid input",
    401: "Unauthorized - Not authenticated",
    403: "Forbidden - Not allowed",
    404: "Not Found - Resource missing",
    500: "Internal Server Error",
}

for code, meaning in status_codes.items():
    print(f"{code}: {meaning}")
\`\`\`

## Request Structure

\`\`\`
GET /api/users?page=1 HTTP/1.1
Host: example.com
Accept: application/json
Authorization: Bearer token123
\`\`\`

Parts:
- **Method** — GET, POST, etc.
- **Path** — /api/users
- **Query parameters** — ?page=1
- **Headers** — metadata (content type, auth, etc.)
- **Body** — data payload (for POST, PUT)

## Response Structure

\`\`\`
HTTP/1.1 200 OK
Content-Type: application/json

{"users": [{"id": 1, "name": "Alice"}]}
\`\`\`

## URL Components

\`\`\`python
from urllib.parse import urlparse, urlencode, parse_qs

url = "https://api.example.com:8080/users?page=2&limit=10"
parsed = urlparse(url)
print(f"Scheme: {parsed.scheme}")    # https
print(f"Host: {parsed.hostname}")    # api.example.com
print(f"Port: {parsed.port}")       # 8080
print(f"Path: {parsed.path}")       # /users
print(f"Query: {parsed.query}")     # page=2&limit=10
\`\`\`

💡 GET requests should never change data on the server — they should be "safe" and "idempotent."

⚠️ Never put sensitive data (passwords, tokens) in URL query parameters — they're logged in browser history and server logs.`,
        exercises: [
          {
            id: 'http-basics-1',
            title: 'URL Parsing',
            description: 'Parse and analyze URLs.',
            instructions: ['Parse \'https://api.example.com:8443/v2/users?role=admin&active=true\'', 'Print each component: scheme, host, port, path, query parameters'],
            starterCode: '',
            solution: 'from urllib.parse import urlparse, parse_qs\n\nurl = "https://api.example.com:8443/v2/users?role=admin&active=true"\nparsed = urlparse(url)\nprint(f"Scheme: {parsed.scheme}")\nprint(f"Host: {parsed.hostname}")\nprint(f"Port: {parsed.port}")\nprint(f"Path: {parsed.path}")\n\nparams = parse_qs(parsed.query)\nprint("Query params:")\nfor key, values in params.items():\n    print(f"  {key} = {values[0]}")',
            hint: 'Use urlparse from urllib.parse, parse_qs for query parameters',
            expectedOutput: 'Scheme: https\nHost: api.example.com\nPort: 8443\nPath: /v2/users\nQuery params:\n  role = admin\n  active = true',
          },
          {
            id: 'http-basics-2',
            title: 'Build URLs',
            description: 'Construct URLs with query parameters.',
            instructions: ['Build a URL from components: base, path, and query params', 'Use urlencode for parameters'],
            starterCode: '',
            solution: 'from urllib.parse import urlencode, urljoin\n\nbase = "https://api.example.com"\npath = "/search"\nparams = {"q": "python tutorial", "page": 1, "lang": "en"}\n\nquery_string = urlencode(params)\nfull_url = f"{base}{path}?{query_string}"\nprint(f"URL: {full_url}")\nprint(f"Query: {query_string}")',
            hint: 'Use urlencode(dict) to safely encode query parameters',
            expectedOutput: 'URL: https://api.example.com/search?q=python+tutorial&page=1&lang=en\nQuery: q=python+tutorial&page=1&lang=en',
          },
          {
            id: 'http-basics-3',
            title: 'Status Code Handler',
            description: 'Build a status code classifier.',
            instructions: ['Create a function that classifies HTTP status codes', 'Test with various codes: 200, 301, 404, 500'],
            starterCode: '',
            solution: 'def classify_status(code):\n    if 100 <= code < 200:\n        return "Informational"\n    elif 200 <= code < 300:\n        return "Success"\n    elif 300 <= code < 400:\n        return "Redirection"\n    elif 400 <= code < 500:\n        return "Client Error"\n    elif 500 <= code < 600:\n        return "Server Error"\n    return "Unknown"\n\nstatus_messages = {\n    200: "OK", 201: "Created", 301: "Moved",\n    400: "Bad Request", 404: "Not Found", 500: "Server Error"\n}\n\nfor code, msg in status_messages.items():\n    category = classify_status(code)\n    print(f"{code} {msg}: {category}")',
            hint: 'Check ranges: 1xx=info, 2xx=success, 3xx=redirect, 4xx=client error, 5xx=server error',
            expectedOutput: '200 OK: Success\n201 Created: Success\n301 Moved: Redirection\n400 Bad Request: Client Error\n404 Not Found: Client Error\n500 Server Error: Server Error',
          },
          {
            id: 'http-basics-4',
            title: 'Header Parser',
            description: 'Parse HTTP-style headers.',
            instructions: ['Parse a multi-line string of HTTP headers', 'Extract each header name and value into a dict', 'Print specific headers'],
            starterCode: '',
            solution: 'headers_text = """Content-Type: application/json\nAuthorization: Bearer abc123\nX-Request-ID: req-456\nCache-Control: no-cache\nAccept-Language: en-US,en;q=0.9"""\n\nheaders = {}\nfor line in headers_text.strip().split("\\n"):\n    key, value = line.split(": ", 1)\n    headers[key] = value\n\nprint(f"Content-Type: {headers[\'Content-Type\']}")\nprint(f"Auth: {headers[\'Authorization\']}")\nprint(f"Total headers: {len(headers)}")\nprint("All headers:")\nfor k, v in headers.items():\n    print(f"  {k}: {v}")',
            hint: 'Split each line by \': \' (with space) to get key-value pairs',
            expectedOutputContains: ['Content-Type: application/json', 'Auth: Bearer abc123', 'Total headers: 5'],
          },
          {
            id: 'http-basics-5',
            title: 'Query String Builder',
            description: 'Build and parse complex query strings.',
            instructions: ['Create a function that builds query strings with list support', 'Handle special characters properly'],
            starterCode: '',
            solution: 'from urllib.parse import urlencode, parse_qs\n\ndef build_query(**kwargs):\n    params = []\n    for key, value in kwargs.items():\n        if isinstance(value, list):\n            for v in value:\n                params.append((key, v))\n        else:\n            params.append((key, value))\n    return urlencode(params)\n\nqs = build_query(search="hello world", tags=["python", "web"], page=1)\nprint(f"Query: {qs}")\n\n# Parse it back\nparsed = parse_qs(qs)\nprint(f"Search: {parsed[\'search\'][0]}")\nprint(f"Tags: {parsed[\'tags\']}")\nprint(f"Page: {parsed[\'page\'][0]}")',
            hint: 'Use urlencode with a list of tuples for repeated keys',
            expectedOutputContains: ['Query:', 'Search: hello world', 'Tags: [\'python\', \'web\']', 'Page: 1'],
          }
        ],
      },
      {
        id: 'requests-mod',
        number: 2,
        title: 'Making HTTP Requests',
        description: 'Send HTTP requests with Python',
        icon: 'Send',
        type: 'exercises',
        lesson: `The \`requests\` library is the standard way to make HTTP requests in Python. It provides an elegant, simple API for interacting with web services and APIs.

## Making GET Requests

\`\`\`python
# Note: requests must be installed: pip install requests
# Below we simulate the concepts

# Typical usage:
# import requests
# response = requests.get('https://api.example.com/users')
# print(response.status_code)  # 200
# print(response.json())       # parsed JSON
# print(response.text)         # raw text
\`\`\`

## Simulating HTTP Concepts

Since we can't make real HTTP calls in this environment, we'll learn the patterns:

\`\`\`python
# Simulated response object
class Response:
    def __init__(self, status_code, data, headers=None):
        self.status_code = status_code
        self._data = data
        self.headers = headers or {}
        self.ok = 200 <= status_code < 300

    def json(self):
        return self._data

    @property
    def text(self):
        import json
        return json.dumps(self._data)

# Simulating: response = requests.get('/api/users')
response = Response(200, {"users": [{"id": 1, "name": "Alice"}]})
if response.ok:
    data = response.json()
    print(f"Found {len(data['users'])} users")
>>> Found 1 users
\`\`\`

## Request Headers and Parameters

\`\`\`python
# In real code:
# response = requests.get(
#     'https://api.example.com/search',
#     params={'q': 'python', 'page': 1},
#     headers={'Authorization': 'Bearer token123'}
# )

# Key concepts:
# - params dict becomes query string: ?q=python&page=1
# - headers dict sent with request
# - timeout= prevents hanging: requests.get(url, timeout=10)
\`\`\`

## POST Requests

\`\`\`python
# Real code:
# response = requests.post(
#     'https://api.example.com/users',
#     json={'name': 'Alice', 'email': 'alice@example.com'},
#     headers={'Content-Type': 'application/json'}
# )
\`\`\`

## Error Handling

\`\`\`python
# response.raise_for_status()  # Raises HTTPError for 4xx/5xx
# try:
#     response = requests.get(url, timeout=10)
#     response.raise_for_status()
# except requests.exceptions.Timeout:
#     print("Request timed out")
# except requests.exceptions.HTTPError as e:
#     print(f"HTTP error: {e}")
\`\`\`

💡 Always set a \`timeout\` parameter to avoid hanging requests.

⚠️ Never hardcode API keys in your source code — use environment variables.

💡 Use \`response.json()\` to parse JSON responses instead of \`json.loads(response.text)\`.`,
        exercises: [
          {
            id: 'requests-1',
            title: 'Simulated GET',
            description: 'Simulate a GET request and process the response.',
            instructions: ['Create a mock API function that returns user data', 'Simulate a GET request', 'Process the JSON response'],
            starterCode: '',
            solution: 'import json\n\nclass MockResponse:\n    def __init__(self, data, status_code=200):\n        self.status_code = status_code\n        self._data = data\n        self.ok = 200 <= status_code < 300\n    def json(self):\n        return self._data\n\ndef mock_get(url, params=None):\n    if "/users" in url:\n        users = [{"id": 1, "name": "Alice"}, {"id": 2, "name": "Bob"}]\n        if params and "name" in params:\n            users = [u for u in users if u["name"] == params["name"]]\n        return MockResponse({"users": users, "count": len(users)})\n    return MockResponse({"error": "Not found"}, 404)\n\n# Simulate: requests.get("/api/users")\nresp = mock_get("/api/users")\nif resp.ok:\n    data = resp.json()\n    print(f"Found {data[\'count\']} users:")\n    for u in data["users"]:\n        print(f"  {u[\'id\']}: {u[\'name\']}")',
            hint: 'Create a Response class with json() method and status_code',
            expectedOutput: 'Found 2 users:\n  1: Alice\n  2: Bob',
          },
          {
            id: 'requests-2',
            title: 'Error Handling',
            description: 'Handle different HTTP status codes.',
            instructions: ['Create a mock that returns different status codes', 'Handle success, not found, and server error cases'],
            starterCode: '',
            solution: 'class MockResponse:\n    def __init__(self, data, status_code):\n        self.status_code = status_code\n        self._data = data\n        self.ok = 200 <= status_code < 300\n    def json(self):\n        return self._data\n    def raise_for_status(self):\n        if self.status_code >= 400:\n            raise Exception(f"HTTP {self.status_code}")\n\ndef handle_response(resp):\n    try:\n        resp.raise_for_status()\n        return resp.json()\n    except Exception as e:\n        return {"error": str(e)}\n\nresponses = [\n    MockResponse({"data": "success"}, 200),\n    MockResponse({"msg": "not found"}, 404),\n    MockResponse({"msg": "server error"}, 500),\n]\n\nfor resp in responses:\n    result = handle_response(resp)\n    print(f"Status {resp.status_code}: {result}")',
            hint: 'Use raise_for_status() in a try/except to handle errors',
            expectedOutput: 'Status 200: {\'data\': \'success\'}\nStatus 404: {\'error\': \'HTTP 404\'}\nStatus 500: {\'error\': \'HTTP 500\'}',
          },
          {
            id: 'requests-3',
            title: 'API Client Class',
            description: 'Build a reusable API client.',
            instructions: ['Create an APIClient class with get, post methods', 'Include base_url, headers, and error handling'],
            starterCode: '',
            solution: 'import json\n\nclass APIClient:\n    def __init__(self, base_url, token=None):\n        self.base_url = base_url\n        self.headers = {"Content-Type": "application/json"}\n        if token:\n            self.headers["Authorization"] = f"Bearer {token}"\n\n    def _request(self, method, path, data=None, params=None):\n        url = f"{self.base_url}{path}"\n        param_str = ""\n        if params:\n            from urllib.parse import urlencode\n            param_str = f"?{urlencode(params)}"\n        print(f"{method} {url}{param_str}")\n        if data:\n            print(f"  Body: {json.dumps(data)}")\n        return {"status": 200, "url": url}\n\n    def get(self, path, **kwargs):\n        return self._request("GET", path, **kwargs)\n\n    def post(self, path, data=None, **kwargs):\n        return self._request("POST", path, data=data, **kwargs)\n\nclient = APIClient("https://api.example.com", token="secret123")\nclient.get("/users", params={"page": 1})\nclient.post("/users", data={"name": "Alice", "email": "alice@test.com"})',
            hint: 'Build a class with base_url, default headers, and convenience methods',
            expectedOutputContains: ['GET https://api.example.com/users', 'POST https://api.example.com/users', 'Body:'],
          },
          {
            id: 'requests-4',
            title: 'Retry Logic',
            description: 'Implement request retry with backoff.',
            instructions: ['Create a function that retries failed requests', 'Use exponential backoff between retries', 'Test with a mock that fails then succeeds'],
            starterCode: '',
            solution: 'import time\n\ncall_count = 0\n\ndef unreliable_api():\n    global call_count\n    call_count += 1\n    if call_count < 3:\n        raise ConnectionError(f"Attempt {call_count} failed")\n    return {"status": "ok", "attempt": call_count}\n\ndef retry_request(func, max_retries=5, backoff=0.01):\n    for attempt in range(max_retries):\n        try:\n            result = func()\n            print(f"Success on attempt {attempt + 1}")\n            return result\n        except Exception as e:\n            print(f"Attempt {attempt + 1}: {e}")\n            if attempt < max_retries - 1:\n                wait = backoff * (2 ** attempt)\n                time.sleep(wait)\n    raise Exception("Max retries exceeded")\n\nresult = retry_request(unreliable_api)\nprint(f"Result: {result}")',
            hint: 'Loop with try/except, sleep with exponential backoff between retries',
            expectedOutput: 'Attempt 1: Attempt 1 failed\nAttempt 2: Attempt 2 failed\nSuccess on attempt 3\nResult: {\'status\': \'ok\', \'attempt\': 3}',
          },
          {
            id: 'requests-5',
            title: 'Pagination Handler',
            description: 'Handle paginated API responses.',
            instructions: ['Create a mock paginated API', 'Implement a function that fetches all pages', 'Print combined results'],
            starterCode: '',
            solution: 'def mock_paginated_api(page, per_page=3):\n    all_items = [f"Item {i}" for i in range(1, 11)]\n    start = (page - 1) * per_page\n    end = start + per_page\n    items = all_items[start:end]\n    return {\n        "items": items,\n        "page": page,\n        "total_pages": (len(all_items) + per_page - 1) // per_page,\n        "total_items": len(all_items),\n    }\n\ndef fetch_all_pages(api_func, per_page=3):\n    all_items = []\n    page = 1\n    while True:\n        response = api_func(page, per_page)\n        all_items.extend(response["items"])\n        print(f"Page {page}/{response[\'total_pages\']}: got {len(response[\'items\'])} items")\n        if page >= response["total_pages"]:\n            break\n        page += 1\n    return all_items\n\nitems = fetch_all_pages(mock_paginated_api)\nprint(f"\\nTotal collected: {len(items)} items")\nprint(f"First: {items[0]}, Last: {items[-1]}")',
            hint: 'Loop pages until page >= total_pages, collecting items from each response',
            expectedOutput: 'Page 1/4: got 3 items\nPage 2/4: got 3 items\nPage 3/4: got 3 items\nPage 4/4: got 1 items\n\nTotal collected: 10 items\nFirst: Item 1, Last: Item 10',
          }
        ],
      },
      {
        id: 'flask-basics',
        number: 3,
        title: 'Flask Basics',
        description: 'Build web apps with Flask',
        icon: 'Flame',
        type: 'exercises',
        lesson: `Flask is a **lightweight web framework** for building web applications and APIs in Python. It's simple to learn but powerful enough for production use.

## Basic Flask App Structure

\`\`\`python
# In a real environment:
# from flask import Flask, request, jsonify
# app = Flask(__name__)
#
# @app.route('/')
# def home():
#     return 'Hello, World!'
#
# @app.route('/api/users', methods=['GET'])
# def get_users():
#     return jsonify({'users': ['Alice', 'Bob']})
\`\`\`

## Simulating Flask Concepts

Since we can't run a server, we'll build the core concepts:

\`\`\`python
class SimpleApp:
    def __init__(self):
        self.routes = {}

    def route(self, path, methods=None):
        methods = methods or ['GET']
        def decorator(func):
            for method in methods:
                self.routes[(method, path)] = func
            return func
        return decorator

    def handle(self, method, path, **kwargs):
        handler = self.routes.get((method, path))
        if handler:
            return 200, handler(**kwargs)
        return 404, {'error': 'Not Found'}
\`\`\`

## Route Parameters

\`\`\`python
# Flask uses <variable> syntax:
# @app.route('/users/<int:user_id>')
# def get_user(user_id):
#     return jsonify({'id': user_id})
\`\`\`

## Request Data

\`\`\`python
# GET parameters: request.args.get('key')
# POST JSON body: request.get_json()
# Form data: request.form.get('field')
# Headers: request.headers.get('Authorization')
\`\`\`

## Templates (Jinja2)

\`\`\`python
# Flask uses Jinja2 templates:
# from flask import render_template
#
# @app.route('/hello/<name>')
# def hello(name):
#     return render_template('hello.html', name=name)
#
# Template (hello.html):
# <h1>Hello, {{ name }}!</h1>
# {% for item in items %}
#   <li>{{ item }}</li>
# {% endfor %}
\`\`\`

💡 Flask follows the "micro-framework" philosophy — it gives you the basics and lets you choose your own tools for databases, auth, etc.

⚠️ Flask's built-in server is for development only. Use Gunicorn or uWSGI for production.

💡 Use \`flask run --debug\` for auto-reload during development.`,
        exercises: [
          {
            id: 'flask-1',
            title: 'Simple Router',
            description: 'Build a basic URL router like Flask.',
            instructions: ['Create a SimpleApp class with route decorator and handle method', 'Register routes for / and /about', 'Test handling requests'],
            starterCode: '',
            solution: 'import json\n\nclass SimpleApp:\n    def __init__(self):\n        self.routes = {}\n\n    def route(self, path, methods=None):\n        methods = methods or ["GET"]\n        def decorator(func):\n            for method in methods:\n                self.routes[(method, path)] = func\n            return func\n        return decorator\n\n    def handle(self, method, path, **kwargs):\n        handler = self.routes.get((method, path))\n        if handler:\n            return 200, handler(**kwargs)\n        return 404, {"error": "Not Found"}\n\napp = SimpleApp()\n\n@app.route("/")\ndef home():\n    return {"message": "Welcome!"}\n\n@app.route("/about")\ndef about():\n    return {"page": "About", "version": "1.0"}\n\nfor method, path in [("GET", "/"), ("GET", "/about"), ("GET", "/missing")]:\n    status, body = app.handle(method, path)\n    print(f"{method} {path} -> {status}: {json.dumps(body)}")',
            hint: 'Store routes in a dict keyed by (method, path), use decorator pattern',
            expectedOutput: 'GET / -> 200: {"message": "Welcome!"}\nGET /about -> 200: {"page": "About", "version": "1.0"}\nGET /missing -> 404: {"error": "Not Found"}',
          },
          {
            id: 'flask-2',
            title: 'Request Handling',
            description: 'Simulate request and response objects.',
            instructions: ['Create Request and Response classes', 'Build a handler that processes request data', 'Return appropriate response'],
            starterCode: '',
            solution: 'import json\n\nclass Request:\n    def __init__(self, method, path, params=None, body=None, headers=None):\n        self.method = method\n        self.path = path\n        self.args = params or {}\n        self.body = body or {}\n        self.headers = headers or {}\n    def get_json(self):\n        return self.body\n\nclass Response:\n    def __init__(self, data, status=200):\n        self.data = data\n        self.status = status\n    def __repr__(self):\n        return f"Response({self.status}, {json.dumps(self.data)})" \n\ndef search_handler(request):\n    query = request.args.get("q", "")\n    limit = int(request.args.get("limit", "10"))\n    results = [f"Result for \'{query}\' #{i}" for i in range(1, min(limit, 3) + 1)]\n    return Response({"query": query, "results": results})\n\nreq = Request("GET", "/search", params={"q": "python", "limit": "5"})\nresp = search_handler(req)\nprint(f"Status: {resp.status}")\nfor r in resp.data["results"]:\n    print(f"  {r}")',
            hint: 'Model Request with args dict and get_json(), Response with data and status',
            expectedOutput: 'Status: 200\n  Result for \'python\' #1\n  Result for \'python\' #2\n  Result for \'python\' #3',
          },
          {
            id: 'flask-3',
            title: 'Template Engine',
            description: 'Build a simple template engine like Jinja2.',
            instructions: ['Create a render function that replaces {{ var }} placeholders', 'Support simple variable substitution', 'Test with a template'],
            starterCode: '',
            solution: 'import re\n\ndef render_template(template, **context):\n    def replace_var(match):\n        var_name = match.group(1).strip()\n        return str(context.get(var_name, ""))\n    return re.sub(r"\\{\\{\\s*(\\w+)\\s*\\}\\}", replace_var, template)\n\ntemplate = """<html>\n<h1>Hello, {{ name }}!</h1>\n<p>You have {{ count }} notifications.</p>\n<p>Role: {{ role }}</p>\n</html>"""\n\nresult = render_template(template, name="Alice", count=5, role="admin")\nprint(result)',
            hint: 'Use re.sub with a callback to replace {{ var }} patterns',
            expectedOutput: '<html>\n<h1>Hello, Alice!</h1>\n<p>You have 5 notifications.</p>\n<p>Role: admin</p>\n</html>',
          },
          {
            id: 'flask-4',
            title: 'Middleware Chain',
            description: 'Implement middleware for request processing.',
            instructions: ['Create a middleware system that processes requests in order', 'Add logging and auth middleware', 'Show the processing chain'],
            starterCode: '',
            solution: 'class MiddlewareChain:\n    def __init__(self):\n        self.middlewares = []\n    def add(self, middleware):\n        self.middlewares.append(middleware)\n    def process(self, request):\n        for mw in self.middlewares:\n            request = mw(request)\n            if request.get("_stop"):\n                return request\n        return request\n\ndef logging_middleware(req):\n    print(f"LOG: {req[\'method\']} {req[\'path\']}")\n    req["logged"] = True\n    return req\n\ndef auth_middleware(req):\n    token = req.get("headers", {}).get("Authorization")\n    if token == "Bearer valid-token":\n        req["user"] = "Alice"\n        print("AUTH: Authenticated as Alice")\n    else:\n        print("AUTH: No valid token")\n        req["_stop"] = True\n        req["error"] = "Unauthorized"\n    return req\n\nchain = MiddlewareChain()\nchain.add(logging_middleware)\nchain.add(auth_middleware)\n\nprint("=== Valid request ===")\nreq1 = {"method": "GET", "path": "/api/data", "headers": {"Authorization": "Bearer valid-token"}}\nresult = chain.process(req1)\nprint(f"User: {result.get(\'user\')}")\n\nprint("\\n=== Invalid request ===")\nreq2 = {"method": "GET", "path": "/api/data", "headers": {}}\nresult = chain.process(req2)\nprint(f"Error: {result.get(\'error\')}")',
            hint: 'Process request through each middleware in order, stop if _stop is set',
            expectedOutput: '=== Valid request ===\nLOG: GET /api/data\nAUTH: Authenticated as Alice\nUser: Alice\n\n=== Invalid request ===\nLOG: GET /api/data\nAUTH: No valid token\nError: Unauthorized',
          },
          {
            id: 'flask-5',
            title: 'Form Validation',
            description: 'Validate web form data.',
            instructions: ['Create a FormValidator class with field rules', 'Validate required, min_length, email format', 'Test with valid and invalid data'],
            starterCode: '',
            solution: 'import re\n\nclass FormValidator:\n    def __init__(self):\n        self.rules = {}\n    def add_rule(self, field, required=False, min_length=None, pattern=None, label=None):\n        self.rules[field] = {"required": required, "min_length": min_length, "pattern": pattern, "label": label or field}\n    def validate(self, data):\n        errors = []\n        for field, rule in self.rules.items():\n            value = data.get(field, "")\n            label = rule["label"]\n            if rule["required"] and not value:\n                errors.append(f"{label} is required")\n            elif value:\n                if rule["min_length"] and len(value) < rule["min_length"]:\n                    errors.append(f"{label} must be at least {rule[\'min_length\']} chars")\n                if rule["pattern"] and not re.match(rule["pattern"], value):\n                    errors.append(f"{label} format is invalid")\n        return errors\n\nv = FormValidator()\nv.add_rule("name", required=True, min_length=2, label="Name")\nv.add_rule("email", required=True, pattern=r"^[\\w.]+@[\\w]+\\.[\\w]+$", label="Email")\nv.add_rule("password", required=True, min_length=8, label="Password")\n\ntest_data = [\n    {"name": "Alice", "email": "alice@test.com", "password": "secure123"},\n    {"name": "A", "email": "bad-email", "password": "short"},\n    {"name": "", "email": "", "password": ""},\n]\n\nfor data in test_data:\n    errors = v.validate(data)\n    if errors:\n        print(f"INVALID: {errors}")\n    else:\n        print(f"VALID: {data[\'name\']}")',
            hint: 'Check each rule: required, min_length, pattern (regex)',
            expectedOutput: 'VALID: Alice\nINVALID: [\'Name must be at least 2 chars\', \'Email format is invalid\', \'Password must be at least 8 chars\']\nINVALID: [\'Name is required\', \'Email is required\', \'Password is required\']',
          }
        ],
      },
      {
        id: 'flask-advanced',
        number: 4,
        title: 'Flask Advanced',
        description: 'Advanced Flask patterns',
        icon: 'Rocket',
        type: 'exercises',
        lesson: `Advanced Flask patterns include **blueprints** for organizing large apps, **error handling**, **sessions**, and **middleware** concepts.

## Blueprints — Organizing Large Apps

\`\`\`python
# Blueprints let you split your app into modules:
# from flask import Blueprint
#
# api = Blueprint('api', __name__, url_prefix='/api')
#
# @api.route('/users')
# def list_users():
#     return jsonify(users)
#
# # In main app:
# app.register_blueprint(api)
\`\`\`

## Error Handling

\`\`\`python
# @app.errorhandler(404)
# def not_found(error):
#     return jsonify({'error': 'Resource not found'}), 404
#
# @app.errorhandler(500)
# def server_error(error):
#     return jsonify({'error': 'Internal server error'}), 500
\`\`\`

## Sessions and Cookies

\`\`\`python
# from flask import session
# app.secret_key = 'your-secret-key'
#
# @app.route('/login', methods=['POST'])
# def login():
#     session['user'] = request.json['username']
#     return jsonify({'status': 'logged in'})
#
# @app.route('/profile')
# def profile():
#     if 'user' not in session:
#         return jsonify({'error': 'Not logged in'}), 401
#     return jsonify({'user': session['user']})
\`\`\`

## Application Factory Pattern

\`\`\`python
# def create_app(config=None):
#     app = Flask(__name__)
#     app.config.from_mapping(config or {})
#
#     from .api import api_blueprint
#     app.register_blueprint(api_blueprint)
#
#     return app
\`\`\`

💡 Use blueprints to keep each feature in its own module with its own routes, templates, and static files.

⚠️ Always set \`app.secret_key\` for sessions — without it, sessions won't work.

⚠️ Never store sensitive data in client-side sessions — they're signed but not encrypted.`,
        exercises: [
          {
            id: 'flask-adv-1',
            title: 'Blueprint System',
            description: 'Simulate Flask\'s blueprint registration.',
            instructions: ['Create a Blueprint class that collects routes', 'Create an App that registers blueprints with prefixes', 'Test route resolution'],
            starterCode: '',
            solution: 'class Blueprint:\n    def __init__(self, name, prefix=""):\n        self.name = name\n        self.prefix = prefix\n        self.routes = {}\n    def route(self, path, methods=None):\n        methods = methods or ["GET"]\n        def decorator(func):\n            for m in methods:\n                self.routes[(m, path)] = func\n            return func\n        return decorator\n\nclass App:\n    def __init__(self):\n        self.routes = {}\n    def register_blueprint(self, bp):\n        for (method, path), handler in bp.routes.items():\n            full_path = bp.prefix + path\n            self.routes[(method, full_path)] = handler\n    def handle(self, method, path):\n        handler = self.routes.get((method, path))\n        if handler:\n            return 200, handler()\n        return 404, {"error": "Not found"}\n\napi = Blueprint("api", prefix="/api")\n\n@api.route("/users")\ndef list_users():\n    return {"users": ["Alice", "Bob"]}\n\n@api.route("/health")\ndef health():\n    return {"status": "ok"}\n\napp = App()\napp.register_blueprint(api)\n\nfor path in ["/api/users", "/api/health", "/api/missing"]:\n    status, body = app.handle("GET", path)\n    print(f"GET {path}: {status} {body}")',
            hint: 'Blueprint stores routes, App prepends prefix when registering',
            expectedOutput: 'GET /api/users: 200 {\'users\': [\'Alice\', \'Bob\']}\nGET /api/health: 200 {\'status\': \'ok\'}\nGET /api/missing: 404 {\'error\': \'Not found\'}',
          },
          {
            id: 'flask-adv-2',
            title: 'Error Handlers',
            description: 'Implement custom error handler registration.',
            instructions: ['Create an app with registereable error handlers', 'Handle 404, 500, and custom errors'],
            starterCode: '',
            solution: 'class WebApp:\n    def __init__(self):\n        self.routes = {}\n        self.error_handlers = {}\n    def route(self, path):\n        def decorator(func):\n            self.routes[path] = func\n            return func\n        return decorator\n    def errorhandler(self, code):\n        def decorator(func):\n            self.error_handlers[code] = func\n            return func\n        return decorator\n    def handle(self, path):\n        try:\n            handler = self.routes.get(path)\n            if not handler:\n                if 404 in self.error_handlers:\n                    return 404, self.error_handlers[404](path)\n                return 404, {"error": "Not found"}\n            return 200, handler()\n        except Exception as e:\n            if 500 in self.error_handlers:\n                return 500, self.error_handlers[500](str(e))\n            return 500, {"error": str(e)}\n\napp = WebApp()\n\n@app.route("/ok")\ndef ok():\n    return {"status": "ok"}\n\n@app.route("/fail")\ndef fail():\n    raise ValueError("Something broke")\n\n@app.errorhandler(404)\ndef not_found(path):\n    return {"error": f"Page {path} not found"}\n\n@app.errorhandler(500)\ndef server_error(msg):\n    return {"error": f"Server error: {msg}"}\n\nfor path in ["/ok", "/missing", "/fail"]:\n    status, body = app.handle(path)\n    print(f"{path}: {status} -> {body}")',
            hint: 'Store error handlers in a dict keyed by status code',
            expectedOutput: '/ok: 200 -> {\'status\': \'ok\'}\n/missing: 404 -> {\'error\': \'Page /missing not found\'}\n/fail: 500 -> {\'error\': "Server error: Something broke"}',
          },
          {
            id: 'flask-adv-3',
            title: 'Session Manager',
            description: 'Implement server-side session management.',
            instructions: ['Create a SessionManager with create, get, and destroy', 'Simulate login/logout flow'],
            starterCode: '',
            solution: 'import hashlib\nimport time\n\nclass SessionManager:\n    def __init__(self):\n        self.sessions = {}\n    def create(self, user_data):\n        sid = hashlib.md5(f"{time.time()}{user_data}".encode()).hexdigest()[:16]\n        self.sessions[sid] = {"user": user_data, "created": time.time()}\n        return sid\n    def get(self, sid):\n        return self.sessions.get(sid)\n    def destroy(self, sid):\n        return self.sessions.pop(sid, None) is not None\n\nsm = SessionManager()\n\n# Login\nsid = sm.create({"username": "alice", "role": "admin"})\nprint(f"Session created: {sid}")\n\n# Check session\nsession = sm.get(sid)\nprint(f"User: {session[\'user\'][\'username\']}")\nprint(f"Role: {session[\'user\'][\'role\']}")\n\n# Logout\nsm.destroy(sid)\nprint(f"Session exists after destroy: {sm.get(sid) is not None}")',
            hint: 'Use a dict to store sessions keyed by session ID, generate ID with hash',
            expectedOutputContains: ['Session created:', 'User: alice', 'Role: admin', 'Session exists after destroy: False'],
          },
          {
            id: 'flask-adv-4',
            title: 'Config Management',
            description: 'Implement app configuration management.',
            instructions: ['Create a Config class supporting defaults, env overrides, and profiles', 'Test loading different profiles'],
            starterCode: '',
            solution: 'import os\n\nclass Config:\n    def __init__(self):\n        self._config = {}\n    def from_dict(self, d):\n        self._config.update(d)\n    def from_env(self, prefix="APP_"):\n        for key, value in os.environ.items():\n            if key.startswith(prefix):\n                config_key = key[len(prefix):].lower()\n                self._config[config_key] = value\n    def get(self, key, default=None):\n        return self._config.get(key, default)\n    def __repr__(self):\n        return str(self._config)\n\nprofiles = {\n    "development": {"debug": True, "database": "sqlite:///dev.db", "port": 5000},\n    "production": {"debug": False, "database": "postgresql://prod", "port": 8080},\n}\n\nfor profile_name in ["development", "production"]:\n    config = Config()\n    config.from_dict(profiles[profile_name])\n    print(f"[{profile_name}]")\n    print(f"  Debug: {config.get(\'debug\')}")\n    print(f"  DB: {config.get(\'database\')}")\n    print(f"  Port: {config.get(\'port\')}")',
            hint: 'Use a dict to store config, support loading from multiple sources',
            expectedOutput: '[development]\n  Debug: True\n  DB: sqlite:///dev.db\n  Port: 5000\n[production]\n  Debug: False\n  DB: postgresql://prod\n  Port: 8080',
          },
          {
            id: 'flask-adv-5',
            title: 'Rate Limiter',
            description: 'Implement a rate limiting middleware.',
            instructions: ['Create a RateLimiter that allows N requests per time window', 'Track by client identifier', 'Test with rapid requests'],
            starterCode: '',
            solution: 'import time\n\nclass RateLimiter:\n    def __init__(self, max_requests, window_seconds):\n        self.max_requests = max_requests\n        self.window = window_seconds\n        self.requests = {}  # client_id -> [timestamps]\n\n    def allow(self, client_id):\n        now = time.time()\n        if client_id not in self.requests:\n            self.requests[client_id] = []\n        # Remove old requests outside window\n        self.requests[client_id] = [t for t in self.requests[client_id] if now - t < self.window]\n        if len(self.requests[client_id]) >= self.max_requests:\n            return False\n        self.requests[client_id].append(now)\n        return True\n\nlimiter = RateLimiter(max_requests=3, window_seconds=1.0)\n\n# Simulate rapid requests\nfor i in range(5):\n    allowed = limiter.allow("user_1")\n    print(f"Request {i+1}: {\'allowed\' if allowed else \'RATE LIMITED\'}")\n\n# Different user is independent\nallowed = limiter.allow("user_2")\nprint(f"User 2 request: {\'allowed\' if allowed else \'RATE LIMITED\'}")',
            hint: 'Track timestamps per client, count within window, reject if over limit',
            expectedOutput: 'Request 1: allowed\nRequest 2: allowed\nRequest 3: allowed\nRequest 4: RATE LIMITED\nRequest 5: RATE LIMITED\nUser 2 request: allowed',
          }
        ],
      },
      {
        id: 'api-design',
        number: 5,
        title: 'REST API Design',
        description: 'Design RESTful APIs',
        icon: 'Plug',
        type: 'exercises',
        lesson: `REST (Representational State Transfer) is an architectural style for building **web APIs**. RESTful APIs use HTTP methods and URLs to perform operations on resources.

## REST Principles

1. **Resources** are identified by URLs: \`/api/users/42\`
2. **HTTP methods** define actions: GET (read), POST (create), PUT (update), DELETE (remove)
3. **Stateless** — each request contains all needed information
4. **JSON** is the standard data format

## URL Design

\`\`\`
GET    /api/users          → List all users
GET    /api/users/42       → Get user 42
POST   /api/users          → Create a user
PUT    /api/users/42       → Update user 42
DELETE /api/users/42       → Delete user 42
GET    /api/users/42/posts → Get user 42's posts
\`\`\`

## Response Format

\`\`\`python
# Success response
{
    "data": {"id": 1, "name": "Alice"},
    "status": "success"
}

# Error response
{
    "error": {"code": "NOT_FOUND", "message": "User not found"},
    "status": "error"
}

# List response with pagination
{
    "data": [{"id": 1}, {"id": 2}],
    "pagination": {"page": 1, "per_page": 20, "total": 100}
}
\`\`\`

## API Versioning

\`\`\`
/api/v1/users    → Version 1
/api/v2/users    → Version 2
\`\`\`

💡 Use plural nouns for resources: \`/users\` not \`/user\`.

⚠️ Don't use verbs in URLs: \`/api/users\` not \`/api/getUsers\`. Let HTTP methods convey the action.

💡 Always include pagination for list endpoints — never return unbounded results.`,
        exercises: [
          {
            id: 'api-design-1',
            title: 'REST API Router',
            description: 'Build a RESTful router.',
            instructions: ['Create a RESTRouter that maps HTTP method + path to handlers', 'Register CRUD endpoints for a resource', 'Test all CRUD operations'],
            starterCode: '',
            solution: 'import json\n\nclass RESTRouter:\n    def __init__(self):\n        self.routes = {}\n    def register(self, method, path, handler):\n        self.routes[(method.upper(), path)] = handler\n    def handle(self, method, path, body=None):\n        handler = self.routes.get((method.upper(), path))\n        if handler:\n            return handler(body)\n        return {"status": 404, "error": "Not found"}\n\nusers = [{"id": 1, "name": "Alice"}, {"id": 2, "name": "Bob"}]\n\nrouter = RESTRouter()\nrouter.register("GET", "/users", lambda _: {"status": 200, "data": users})\nrouter.register("POST", "/users", lambda body: {"status": 201, "data": {**body, "id": 3}})\nrouter.register("GET", "/users/1", lambda _: {"status": 200, "data": users[0]})\nrouter.register("DELETE", "/users/1", lambda _: {"status": 204, "message": "Deleted"})\n\nfor method, path, body in [("GET", "/users", None), ("POST", "/users", {"name": "Charlie"}), ("GET", "/users/1", None), ("DELETE", "/users/1", None)]:\n    result = router.handle(method, path, body)\n    print(f"{method:6} {path:12} -> {result[\'status\']}")',
            hint: 'Key routes by (METHOD, path) tuple',
            expectedOutput: 'GET    /users       -> 200\nPOST   /users       -> 201\nGET    /users/1     -> 200\nDELETE /users/1     -> 204',
          },
          {
            id: 'api-design-2',
            title: 'Response Builder',
            description: 'Create consistent API responses.',
            instructions: ['Build a response helper with success, error, and paginated methods', 'Test each response type'],
            starterCode: '',
            solution: 'import json\n\nclass APIResponse:\n    @staticmethod\n    def success(data, status=200):\n        return {"status": "success", "code": status, "data": data}\n    @staticmethod\n    def error(message, code=400, error_code=None):\n        return {"status": "error", "code": code, "error": {"message": message, "code": error_code or "ERROR"}}\n    @staticmethod\n    def paginated(items, page, per_page, total):\n        return {"status": "success", "code": 200, "data": items, "pagination": {"page": page, "per_page": per_page, "total": total, "pages": (total + per_page - 1) // per_page}}\n\nprint(json.dumps(APIResponse.success({"id": 1, "name": "Alice"}), indent=2))\nprint()\nprint(json.dumps(APIResponse.error("User not found", 404, "NOT_FOUND"), indent=2))\nprint()\nprint(json.dumps(APIResponse.paginated([{"id": 1}], page=1, per_page=10, total=42), indent=2))',
            hint: 'Static methods returning consistently structured dicts',
            expectedOutputContains: ['"status": "success"', '"status": "error"', '"pagination"', '"pages": 5'],
          },
          {
            id: 'api-design-3',
            title: 'CRUD Resource',
            description: 'Implement a full CRUD resource.',
            instructions: ['Create an InMemoryResource class with list, get, create, update, delete', 'Test all operations on a \'tasks\' resource'],
            starterCode: '',
            solution: 'class InMemoryResource:\n    def __init__(self):\n        self.items = {}\n        self.next_id = 1\n    def list(self):\n        return list(self.items.values())\n    def get(self, id):\n        return self.items.get(id)\n    def create(self, data):\n        data["id"] = self.next_id\n        self.items[self.next_id] = data\n        self.next_id += 1\n        return data\n    def update(self, id, data):\n        if id in self.items:\n            self.items[id].update(data)\n            return self.items[id]\n        return None\n    def delete(self, id):\n        return self.items.pop(id, None) is not None\n\ntasks = InMemoryResource()\ntasks.create({"title": "Learn Python", "done": False})\ntasks.create({"title": "Build API", "done": False})\n\nprint(f"All: {len(tasks.list())} tasks")\n\ntasks.update(1, {"done": True})\nprint(f"Task 1: {tasks.get(1)}")\n\ntasks.delete(2)\nprint(f"After delete: {len(tasks.list())} tasks")\n\nfor t in tasks.list():\n    print(f"  [{\'x\' if t[\'done\'] else \' \'}] {t[\'title\']}")',
            hint: 'Use a dict with auto-incrementing IDs for in-memory storage',
            expectedOutput: 'All: 2 tasks\nTask 1: {\'title\': \'Learn Python\', \'done\': True, \'id\': 1}\nAfter delete: 1 tasks\n  [x] Learn Python',
          },
          {
            id: 'api-design-4',
            title: 'Input Validation',
            description: 'Validate API request data.',
            instructions: ['Create a Schema validator for API inputs', 'Define required fields, types, and constraints', 'Test with valid and invalid payloads'],
            starterCode: '',
            solution: 'class Schema:\n    def __init__(self, fields):\n        self.fields = fields\n    def validate(self, data):\n        errors = []\n        for name, rules in self.fields.items():\n            value = data.get(name)\n            if rules.get("required") and value is None:\n                errors.append(f"{name} is required")\n                continue\n            if value is not None:\n                expected_type = rules.get("type")\n                if expected_type and not isinstance(value, expected_type):\n                    errors.append(f"{name} must be {expected_type.__name__}")\n                if "min" in rules and value < rules["min"]:\n                    errors.append(f"{name} must be >= {rules[\'min\']}")\n                if "max_length" in rules and len(value) > rules["max_length"]:\n                    errors.append(f"{name} must be <= {rules[\'max_length\']} chars")\n        return errors\n\nuser_schema = Schema({\n    "name": {"required": True, "type": str, "max_length": 50},\n    "age": {"required": True, "type": int, "min": 0},\n    "email": {"required": True, "type": str},\n})\n\ntest_cases = [\n    {"name": "Alice", "age": 30, "email": "alice@test.com"},\n    {"name": "Bob"},\n    {"name": "C" * 60, "age": -5, "email": 123},\n]\n\nfor data in test_cases:\n    errors = user_schema.validate(data)\n    if errors:\n        print(f"INVALID: {errors}")\n    else:\n        print(f"VALID: {data[\'name\']}")',
            hint: 'Check required, type, and constraint rules for each field',
            expectedOutput: 'VALID: Alice\nINVALID: [\'age is required\', \'email is required\']\nINVALID: [\'name must be <= 50 chars\', \'age must be >= 0\', \'email must be str\']',
          },
          {
            id: 'api-design-5',
            title: 'API Versioning',
            description: 'Implement API versioning.',
            instructions: ['Create a versioned API router', 'Register v1 and v2 handlers for same endpoint', 'Show how responses differ by version'],
            starterCode: '',
            solution: 'class VersionedAPI:\n    def __init__(self):\n        self.versions = {}\n    def register(self, version, path, handler):\n        self.versions.setdefault(version, {})[path] = handler\n    def handle(self, version, path):\n        handlers = self.versions.get(version, {})\n        handler = handlers.get(path)\n        if handler:\n            return {"version": version, "data": handler()}\n        return {"error": f"No {path} in {version}"}\n\napi = VersionedAPI()\n\napi.register("v1", "/users", lambda: [\n    {"name": "Alice"},\n    {"name": "Bob"},\n])\n\napi.register("v2", "/users", lambda: [\n    {"id": 1, "name": "Alice", "email": "alice@test.com"},\n    {"id": 2, "name": "Bob", "email": "bob@test.com"},\n])\n\nimport json\nfor v in ["v1", "v2"]:\n    result = api.handle(v, "/users")\n    print(f"=== {v} ===")\n    for user in result["data"]:\n        print(f"  {user}")',
            hint: 'Nest routes under version keys in a dict',
            expectedOutput: '=== v1 ===\n  {\'name\': \'Alice\'}\n  {\'name\': \'Bob\'}\n=== v2 ===\n  {\'id\': 1, \'name\': \'Alice\', \'email\': \'alice@test.com\'}\n  {\'id\': 2, \'name\': \'Bob\', \'email\': \'bob@test.com\'}',
          }
        ],
      },
      {
        id: 'fastapi-mod',
        number: 6,
        title: 'FastAPI',
        description: 'Modern async API development',
        icon: 'Zap',
        type: 'exercises',
        lesson: `FastAPI is a **modern, high-performance web framework** for building APIs with Python. It features automatic data validation, serialization, and interactive documentation.

## Key Features

- **Type hints** drive validation and documentation
- **Async support** — use \`async/await\` for non-blocking I/O
- **Automatic docs** — Swagger UI and ReDoc generated from your code
- **Pydantic models** — data validation with Python classes

## Pydantic Models

\`\`\`python
from dataclasses import dataclass, field
from typing import Optional, List

# Simulating Pydantic with dataclasses
@dataclass
class User:
    name: str
    email: str
    age: int = 0
    tags: List[str] = field(default_factory=list)

    def __post_init__(self):
        if not self.name:
            raise ValueError("name is required")
        if '@' not in self.email:
            raise ValueError("invalid email")

user = User(name="Alice", email="alice@test.com", age=30, tags=["admin"])
print(f"{user.name}: {user.email}")
>>> Alice: alice@test.com
\`\`\`

## Path and Query Parameters

\`\`\`python
# FastAPI syntax:
# @app.get("/users/{user_id}")
# async def get_user(user_id: int, include_posts: bool = False):
#     user = db.get(user_id)
#     return user

# Type hints define:
# - Path params: /users/{user_id} → int
# - Query params: ?include_posts=true → bool
# - Automatic validation and conversion
\`\`\`

## Request Body with Pydantic

\`\`\`python
# @app.post("/users")
# async def create_user(user: UserCreate):
#     # user is already validated!
#     db.add(user)
#     return {"id": new_id, **user.dict()}
\`\`\`

## Async Endpoints

\`\`\`python
# import asyncio
#
# @app.get("/slow")
# async def slow_endpoint():
#     await asyncio.sleep(1)  # Non-blocking!
#     return {"status": "done"}
\`\`\`

💡 FastAPI is built on Starlette (ASGI) and Pydantic — it's one of the fastest Python web frameworks.

⚠️ Use \`async def\` for I/O-bound endpoints (database, HTTP calls). Use regular \`def\` for CPU-bound work.

💡 FastAPI automatically generates OpenAPI (Swagger) docs at \`/docs\`.`,
        exercises: [
          {
            id: 'fastapi-1',
            title: 'Pydantic-style Models',
            description: 'Create validated data models.',
            instructions: ['Create User and Product dataclasses with validation', 'Test with valid and invalid data', 'Show validation errors'],
            starterCode: '',
            solution: 'from dataclasses import dataclass, field\nfrom typing import List, Optional\n\n@dataclass\nclass User:\n    name: str\n    email: str\n    age: int = 0\n\n    def validate(self):\n        errors = []\n        if not self.name:\n            errors.append("name is required")\n        if "@" not in self.email:\n            errors.append("invalid email format")\n        if self.age < 0:\n            errors.append("age must be non-negative")\n        return errors\n\n    def dict(self):\n        return {"name": self.name, "email": self.email, "age": self.age}\n\ntest_cases = [\n    User("Alice", "alice@test.com", 30),\n    User("", "bad-email", -5),\n    User("Bob", "bob@test.com"),\n]\n\nfor user in test_cases:\n    errors = user.validate()\n    if errors:\n        print(f"INVALID: {errors}")\n    else:\n        print(f"VALID: {user.dict()}")',
            hint: 'Add a validate() method that checks constraints, return error list',
            expectedOutput: 'VALID: {\'name\': \'Alice\', \'email\': \'alice@test.com\', \'age\': 30}\nINVALID: [\'name is required\', \'invalid email format\', \'age must be non-negative\']\nVALID: {\'name\': \'Bob\', \'email\': \'bob@test.com\', \'age\': 0}',
          },
          {
            id: 'fastapi-2',
            title: 'Typed Route Parameters',
            description: 'Simulate FastAPI\'s typed route params.',
            instructions: ['Create a router that extracts and converts path parameters', 'Handle type conversion errors'],
            starterCode: '',
            solution: 'import re\n\nclass TypedRouter:\n    def __init__(self):\n        self.routes = []\n    def get(self, pattern):\n        def decorator(func):\n            # Convert /users/{id:int} to regex\n            regex = pattern\n            params = {}\n            for match in re.finditer(r"\\{(\\w+):(\\w+)\\}", pattern):\n                name, type_name = match.groups()\n                params[name] = int if type_name == "int" else float if type_name == "float" else str\n                regex = regex.replace(match.group(), f"(?P<{name}>[^/]+)")\n            self.routes.append((re.compile(f"^{regex}$"), params, func))\n            return func\n        return decorator\n    def handle(self, path):\n        for regex, params, func in self.routes:\n            m = regex.match(path)\n            if m:\n                kwargs = {}\n                for name, type_fn in params.items():\n                    try:\n                        kwargs[name] = type_fn(m.group(name))\n                    except ValueError:\n                        return 400, {"error": f"Invalid {name}"}\n                return 200, func(**kwargs)\n        return 404, {"error": "Not found"}\n\nrouter = TypedRouter()\n\n@router.get("/users/{id:int}")\ndef get_user(id):\n    return {"user_id": id, "name": f"User {id}"}\n\n@router.get("/products/{id:int}/reviews/{rid:int}")\ndef get_review(id, rid):\n    return {"product": id, "review": rid}\n\nfor path in ["/users/42", "/products/5/reviews/3", "/users/abc", "/missing"]:\n    status, body = router.handle(path)\n    print(f"GET {path}: {status} {body}")',
            hint: 'Convert {name:type} patterns to regex groups, cast values',
            expectedOutput: 'GET /users/42: 200 {\'user_id\': 42, \'name\': \'User 42\'}\nGET /products/5/reviews/3: 200 {\'product\': 5, \'review\': 3}\nGET /users/abc: 400 {\'error\': \'Invalid id\'}\nGET /missing: 404 {\'error\': \'Not found\'}',
          },
          {
            id: 'fastapi-3',
            title: 'Dependency Injection',
            description: 'Simulate FastAPI\'s dependency injection.',
            instructions: ['Create a DI system where endpoints declare dependencies', 'Dependencies are resolved and injected automatically'],
            starterCode: '',
            solution: 'class DependencyContainer:\n    def __init__(self):\n        self.providers = {}\n    def register(self, name, provider):\n        self.providers[name] = provider\n    def resolve(self, name):\n        provider = self.providers.get(name)\n        if provider:\n            return provider()\n        raise KeyError(f"No provider for {name}")\n    def inject(self, func, *deps):\n        resolved = {dep: self.resolve(dep) for dep in deps}\n        return func(**resolved)\n\ncontainer = DependencyContainer()\n\n# Register dependencies\ncontainer.register("db", lambda: {"type": "sqlite", "connected": True})\ncontainer.register("auth", lambda: {"user": "alice", "role": "admin"})\ncontainer.register("config", lambda: {"debug": True, "version": "2.0"})\n\n# Endpoint that needs dependencies\ndef get_dashboard(db, auth, config):\n    return {\n        "user": auth["user"],\n        "db_connected": db["connected"],\n        "version": config["version"],\n    }\n\nresult = container.inject(get_dashboard, "db", "auth", "config")\nprint(f"User: {result[\'user\']}")\nprint(f"DB Connected: {result[\'db_connected\']}")\nprint(f"Version: {result[\'version\']}")',
            hint: 'Store factory functions, resolve them on demand, pass to endpoint',
            expectedOutput: 'User: alice\nDB Connected: True\nVersion: 2.0',
          },
          {
            id: 'fastapi-4',
            title: 'OpenAPI Schema Generator',
            description: 'Generate API documentation automatically.',
            instructions: ['Create endpoints with metadata (description, params, response model)', 'Generate a simple OpenAPI-like schema from the metadata'],
            starterCode: '',
            solution: 'class APIEndpoint:\n    def __init__(self, method, path, description, params=None, response_model=None):\n        self.method = method\n        self.path = path\n        self.description = description\n        self.params = params or []\n        self.response_model = response_model or {}\n\ndef generate_docs(endpoints):\n    docs = {"paths": {}}\n    for ep in endpoints:\n        path_info = {\n            "description": ep.description,\n            "parameters": [{"name": p[0], "type": p[1], "required": p[2]} for p in ep.params],\n            "response": ep.response_model,\n        }\n        docs["paths"].setdefault(ep.path, {})[ep.method.lower()] = path_info\n    return docs\n\nendpoints = [\n    APIEndpoint("GET", "/users", "List all users", [("page", "int", False), ("limit", "int", False)], {"type": "array", "items": "User"}),\n    APIEndpoint("POST", "/users", "Create a user", [], {"type": "object", "schema": "User"}),\n    APIEndpoint("GET", "/users/{id}", "Get user by ID", [("id", "int", True)], {"type": "object", "schema": "User"}),\n]\n\nimport json\ndocs = generate_docs(endpoints)\nfor path, methods in docs["paths"].items():\n    for method, info in methods.items():\n        print(f"{method.upper():6} {path}")\n        print(f"       {info[\'description\']}")\n        if info["parameters"]:\n            params = ", ".join(f"{p[\'name\']}:{p[\'type\']}" for p in info["parameters"])\n            print(f"       Params: {params}")',
            hint: 'Collect endpoint metadata in objects, generate schema dict',
            expectedOutput: 'GET    /users\n       List all users\n       Params: page:int, limit:int\nPOST   /users\n       Create a user\nGET    /users/{id}\n       Get user by ID\n       Params: id:int',
          },
          {
            id: 'fastapi-5',
            title: 'Async Pattern',
            description: 'Demonstrate async/await patterns for web APIs.',
            instructions: ['Simulate async endpoint handling with asyncio', 'Show concurrent request processing'],
            starterCode: '',
            solution: 'import asyncio\n\nasync def fetch_user(user_id):\n    await asyncio.sleep(0.01)  # Simulate DB query\n    return {"id": user_id, "name": f"User_{user_id}"}\n\nasync def fetch_posts(user_id):\n    await asyncio.sleep(0.01)  # Simulate DB query\n    return [{"id": i, "title": f"Post {i}"} for i in range(1, 3)]\n\nasync def get_user_with_posts(user_id):\n    # Fetch user and posts concurrently\n    user, posts = await asyncio.gather(\n        fetch_user(user_id),\n        fetch_posts(user_id)\n    )\n    return {"user": user, "posts": posts}\n\nasync def main():\n    # Handle multiple requests concurrently\n    results = await asyncio.gather(\n        get_user_with_posts(1),\n        get_user_with_posts(2),\n    )\n    for result in results:\n        user = result["user"]\n        posts = result["posts"]\n        print(f"{user[\'name\']}: {len(posts)} posts")\n\nasyncio.run(main())',
            hint: 'Use asyncio.gather to run coroutines concurrently',
            expectedOutput: 'User_1: 2 posts\nUser_2: 2 posts',
          }
        ],
      },
      {
        id: 'web-scraping',
        number: 7,
        title: 'Web Scraping',
        description: 'Extract data from web pages',
        icon: 'Search',
        type: 'exercises',
        lesson: `Web scraping is the process of **extracting data from websites** programmatically. Python's \`BeautifulSoup\` (with \`html.parser\`) makes it easy to parse HTML and extract information.

## Parsing HTML

\`\`\`python
from html.parser import HTMLParser

# BeautifulSoup-like interface we can build ourselves
# In real code: from bs4 import BeautifulSoup
# soup = BeautifulSoup(html, 'html.parser')
\`\`\`

## Building a Simple HTML Parser

\`\`\`python
from html.parser import HTMLParser

class SimpleParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.data = []
        self.current_tag = None

    def handle_starttag(self, tag, attrs):
        self.current_tag = tag
        self.attrs = dict(attrs)

    def handle_data(self, data):
        if data.strip():
            self.data.append((self.current_tag, data.strip()))

parser = SimpleParser()
parser.feed("<h1>Title</h1><p>Paragraph</p>")
print(parser.data)
>>> [('h1', 'Title'), ('p', 'Paragraph')]
\`\`\`

## Extracting Specific Data

\`\`\`python
from html.parser import HTMLParser

class LinkExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self._in_a = False
        self._href = ""

    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            self._in_a = True
            self._href = dict(attrs).get('href', '')

    def handle_data(self, data):
        if self._in_a:
            self.links.append({'text': data.strip(), 'href': self._href})

    def handle_endtag(self, tag):
        if tag == 'a':
            self._in_a = False
\`\`\`

## Ethics of Web Scraping

1. **Check robots.txt** — respect the site's scraping rules
2. **Rate limit** — don't overwhelm servers with requests
3. **Check Terms of Service** — some sites prohibit scraping
4. **Use APIs when available** — much better than scraping
5. **Cache responses** — don't re-download unnecessarily

💡 Always check if the website has an API before resorting to scraping.

⚠️ Websites can change their HTML structure at any time, breaking your scraper.

⚠️ Be respectful — add delays between requests and identify your bot with a User-Agent header.`,
        exercises: [
          {
            id: 'scraping-1',
            title: 'HTML Tag Extractor',
            description: 'Extract all text content by tag.',
            instructions: ['Parse HTML and collect text content organized by tag name', 'Print content grouped by tag'],
            starterCode: '',
            solution: 'from html.parser import HTMLParser\nfrom collections import defaultdict\n\nclass TagExtractor(HTMLParser):\n    def __init__(self):\n        super().__init__()\n        self.tag_content = defaultdict(list)\n        self.current_tag = None\n    def handle_starttag(self, tag, attrs):\n        self.current_tag = tag\n    def handle_data(self, data):\n        if data.strip() and self.current_tag:\n            self.tag_content[self.current_tag].append(data.strip())\n    def handle_endtag(self, tag):\n        if tag == self.current_tag:\n            self.current_tag = None\n\nhtml = """<html>\n<h1>Welcome</h1>\n<p>First paragraph.</p>\n<p>Second paragraph.</p>\n<h2>Section</h2>\n<p>Third paragraph.</p>\n<a href="#">Link text</a>\n</html>"""\n\nparser = TagExtractor()\nparser.feed(html)\n\nfor tag in ["h1", "h2", "p", "a"]:\n    items = parser.tag_content.get(tag, [])\n    if items:\n        print(f"<{tag}>: {items}")',
            hint: 'Track current_tag in handle_starttag, collect data in handle_data',
            expectedOutput: '<h1>: [\'Welcome\']\n<h2>: [\'Section\']\n<p>: [\'First paragraph.\', \'Second paragraph.\', \'Third paragraph.\']\n<a>: [\'Link text\']',
          },
          {
            id: 'scraping-2',
            title: 'Table Parser',
            description: 'Extract data from an HTML table.',
            instructions: ['Parse an HTML table into a list of dictionaries', 'Use first row as headers'],
            starterCode: '',
            solution: 'from html.parser import HTMLParser\n\nclass TableParser(HTMLParser):\n    def __init__(self):\n        super().__init__()\n        self.rows = []\n        self.current_row = []\n        self.current_data = ""\n        self.in_cell = False\n    def handle_starttag(self, tag, attrs):\n        if tag in ("td", "th"):\n            self.in_cell = True\n            self.current_data = ""\n    def handle_data(self, data):\n        if self.in_cell:\n            self.current_data += data\n    def handle_endtag(self, tag):\n        if tag in ("td", "th"):\n            self.in_cell = False\n            self.current_row.append(self.current_data.strip())\n        elif tag == "tr" and self.current_row:\n            self.rows.append(self.current_row)\n            self.current_row = []\n\nhtml_table = """<table>\n<tr><th>Name</th><th>Age</th><th>City</th></tr>\n<tr><td>Alice</td><td>30</td><td>Paris</td></tr>\n<tr><td>Bob</td><td>25</td><td>London</td></tr>\n<tr><td>Charlie</td><td>35</td><td>Tokyo</td></tr>\n</table>"""\n\nparser = TableParser()\nparser.feed(html_table)\n\nheaders = parser.rows[0]\nfor row in parser.rows[1:]:\n    record = dict(zip(headers, row))\n    print(record)',
            hint: 'Track td/th content, collect into rows on tr close, zip with headers',
            expectedOutput: '{\'Name\': \'Alice\', \'Age\': \'30\', \'City\': \'Paris\'}\n{\'Name\': \'Bob\', \'Age\': \'25\', \'City\': \'London\'}\n{\'Name\': \'Charlie\', \'Age\': \'35\', \'City\': \'Tokyo\'}',
          },
          {
            id: 'scraping-3',
            title: 'CSS Class Filter',
            description: 'Extract elements with specific CSS classes.',
            instructions: ['Parse HTML and find elements with a target class', 'Extract their text content'],
            starterCode: '',
            solution: 'from html.parser import HTMLParser\n\nclass ClassFilter(HTMLParser):\n    def __init__(self, target_class):\n        super().__init__()\n        self.target_class = target_class\n        self.matches = []\n        self.capture = False\n        self.current_text = ""\n    def handle_starttag(self, tag, attrs):\n        classes = dict(attrs).get("class", "").split()\n        if self.target_class in classes:\n            self.capture = True\n            self.current_text = ""\n    def handle_data(self, data):\n        if self.capture:\n            self.current_text += data\n    def handle_endtag(self, tag):\n        if self.capture:\n            self.matches.append(self.current_text.strip())\n            self.capture = False\n\nhtml = """<div>\n<p class="highlight">Important info</p>\n<p>Regular text</p>\n<p class="highlight urgent">Very important</p>\n<span class="note">A note</span>\n<p class="highlight">Also highlighted</p>\n</div>"""\n\nparser = ClassFilter("highlight")\nparser.feed(html)\n\nprint(f"Found {len(parser.matches)} elements with class \'highlight\':")\nfor text in parser.matches:\n    print(f"  - {text}")',
            hint: 'Check class attribute in handle_starttag, capture data until endtag',
            expectedOutput: 'Found 3 elements with class \'highlight\':\n  - Important info\n  - Very important\n  - Also highlighted',
          },
          {
            id: 'scraping-4',
            title: 'Robots.txt Parser',
            description: 'Parse and check robots.txt rules.',
            instructions: ['Create a RobotsParser that reads robots.txt format', 'Check if a path is allowed for a user-agent'],
            starterCode: '',
            solution: 'class RobotsParser:\n    def __init__(self, content):\n        self.rules = {}  # agent -> [(allow/disallow, path)]\n        current_agent = None\n        for line in content.strip().split("\\n"):\n            line = line.strip()\n            if not line or line.startswith("#"):\n                continue\n            key, _, value = line.partition(":")\n            key = key.strip().lower()\n            value = value.strip()\n            if key == "user-agent":\n                current_agent = value\n                self.rules.setdefault(current_agent, [])\n            elif key in ("allow", "disallow") and current_agent:\n                self.rules[current_agent].append((key, value))\n\n    def is_allowed(self, path, agent="*"):\n        rules = self.rules.get(agent, self.rules.get("*", []))\n        for rule_type, rule_path in rules:\n            if path.startswith(rule_path) and rule_path:\n                return rule_type == "allow"\n        return True\n\nrobots_txt = """User-agent: *\nDisallow: /admin/\nDisallow: /private/\nAllow: /admin/public/\n\nUser-agent: Googlebot\nAllow: /\n"""\n\nparser = RobotsParser(robots_txt)\n\ntest_paths = ["/", "/about", "/admin/settings", "/admin/public/page", "/private/data"]\nfor path in test_paths:\n    allowed = parser.is_allowed(path)\n    print(f"{path}: {\'ALLOWED\' if allowed else \'BLOCKED\'}")',
            hint: 'Parse User-agent/Allow/Disallow lines, check path prefix matches',
            expectedOutput: '/: ALLOWED\n/about: ALLOWED\n/admin/settings: BLOCKED\n/admin/public/page: ALLOWED\n/private/data: BLOCKED',
          },
          {
            id: 'scraping-5',
            title: 'Data Cleaner',
            description: 'Clean and normalize scraped data.',
            instructions: ['Take messy HTML-extracted data', 'Clean whitespace, normalize text, extract structured info'],
            starterCode: '',
            solution: 'import re\n\ndef clean_text(text):\n    """Remove extra whitespace and normalize."""\n    text = re.sub(r"\\s+", " ", text.strip())\n    return text\n\ndef extract_price(text):\n    """Extract price from text like \'$12.99\' or \'Price: 12.99 USD\'."""\n    match = re.search(r"\\$?([\\d,]+\\.\\d{2})", text)\n    if match:\n        return float(match.group(1).replace(",", ""))\n    return None\n\ndef extract_emails(text):\n    """Find all emails in text."""\n    return re.findall(r"[\\w.+-]+@[\\w-]+\\.[\\w.]+", text)\n\n# Simulate messy scraped data\nraw_data = [\n    {"name": "  Widget   Pro  ", "price": "  Price: $29.99 USD  ", "contact": "info@widget.com or sales@widget.com"},\n    {"name": "\\n  Gadget\\tPlus\\n", "price": "$1,299.99", "contact": "support@gadget.io"},\n]\n\nfor item in raw_data:\n    cleaned = {\n        "name": clean_text(item["name"]),\n        "price": extract_price(item["price"]),\n        "emails": extract_emails(item["contact"]),\n    }\n    print(f"{cleaned[\'name\']}: ${cleaned[\'price\']:.2f} | {cleaned[\'emails\']}")',
            hint: 'Use regex to clean whitespace, extract prices and emails',
            expectedOutput: 'Widget Pro: $29.99 | [\'info@widget.com\', \'sales@widget.com\']\nGadget Plus: $1299.99 | [\'support@gadget.io\']',
          }
        ],
      },
      {
        id: 'auth-security',
        number: 8,
        title: 'Auth & Security',
        description: 'Authentication and web security',
        icon: 'Shield',
        type: 'exercises',
        lesson: `Authentication (who are you?) and authorization (what can you do?) are critical for web security. Understanding hashing, tokens, and common security practices is essential.

## Password Hashing

**Never store passwords in plain text!** Always hash them:

\`\`\`python
import hashlib

# Simple hashing (NOT for production — use bcrypt instead)
password = "my_secret_password"
hashed = hashlib.sha256(password.encode()).hexdigest()
print(hashed)
>>> 9c3e1e3e...

# Verify
def verify_password(password, hashed):
    return hashlib.sha256(password.encode()).hexdigest() == hashed

print(verify_password("my_secret_password", hashed))
>>> True
\`\`\`

## Salted Hashing

\`\`\`python
import hashlib
import os

def hash_password(password, salt=None):
    if salt is None:
        salt = os.urandom(16).hex()
    hashed = hashlib.sha256(f"{salt}{password}".encode()).hexdigest()
    return f"{salt}:{hashed}"

def check_password(password, stored):
    salt, hashed = stored.split(":")
    return hash_password(password, salt) == stored

stored = hash_password("secret123")
print(f"Stored: {stored}")
print(f"Verify correct: {check_password('secret123', stored)}")
print(f"Verify wrong: {check_password('wrong', stored)}")
>>> Stored: a1b2c3...:hash...
>>> Verify correct: True
>>> Verify wrong: False
\`\`\`

## Token-Based Authentication

\`\`\`python
import hashlib
import time
import json
import base64

# Simple token (real apps use JWT libraries)
def create_token(user_id, secret, expires_in=3600):
    payload = {
        "user_id": user_id,
        "exp": time.time() + expires_in
    }
    data = json.dumps(payload)
    signature = hashlib.sha256(f"{data}{secret}".encode()).hexdigest()
    token_data = base64.b64encode(data.encode()).decode()
    return f"{token_data}.{signature}"
\`\`\`

## Security Best Practices

1. **Hash passwords** with bcrypt or argon2 (not plain SHA)
2. **Use HTTPS** — encrypt data in transit
3. **CORS** — control which domains can access your API
4. **Input validation** — never trust user input
5. **Rate limiting** — prevent brute-force attacks
6. **Secure headers** — set security-related HTTP headers

⚠️ SHA-256 alone is NOT suitable for password hashing in production. Use bcrypt, argon2, or scrypt.

⚠️ Never log passwords, tokens, or sensitive data.

💡 Use environment variables for secrets — never hardcode them in source code.`,
        exercises: [
          {
            id: 'auth-1',
            title: 'Password Hashing',
            description: 'Implement salted password hashing.',
            instructions: ['Create hash_password and verify_password functions', 'Use a random salt', 'Test with correct and incorrect passwords'],
            starterCode: '',
            solution: 'import hashlib\nimport os\n\ndef hash_password(password):\n    salt = os.urandom(16).hex()\n    hashed = hashlib.sha256(f"{salt}{password}".encode()).hexdigest()\n    return f"{salt}:{hashed}"\n\ndef verify_password(password, stored):\n    salt, expected_hash = stored.split(":")\n    actual_hash = hashlib.sha256(f"{salt}{password}".encode()).hexdigest()\n    return actual_hash == expected_hash\n\nstored = hash_password("my_secure_password")\nprint(f"Hash length: {len(stored)}")\nprint(f"Correct password: {verify_password(\'my_secure_password\', stored)}")\nprint(f"Wrong password: {verify_password(\'wrong_password\', stored)}")\nprint(f"Empty password: {verify_password(\'\', stored)}")',
            hint: 'Generate random salt, prepend to password before hashing, store salt:hash',
            expectedOutputContains: ['Hash length:', 'Correct password: True', 'Wrong password: False', 'Empty password: False'],
          },
          {
            id: 'auth-2',
            title: 'Token Generator',
            description: 'Create and validate auth tokens.',
            instructions: ['Build a simple token system with create and validate functions', 'Include expiration checking'],
            starterCode: '',
            solution: 'import hashlib\nimport time\nimport json\nimport base64\n\nSECRET = "my-secret-key"\n\ndef create_token(user_id, expires_in=3600):\n    payload = {"user_id": user_id, "exp": time.time() + expires_in}\n    data = base64.b64encode(json.dumps(payload).encode()).decode()\n    sig = hashlib.sha256(f"{data}{SECRET}".encode()).hexdigest()[:16]\n    return f"{data}.{sig}"\n\ndef validate_token(token):\n    try:\n        data, sig = token.rsplit(".", 1)\n        expected_sig = hashlib.sha256(f"{data}{SECRET}".encode()).hexdigest()[:16]\n        if sig != expected_sig:\n            return None, "Invalid signature"\n        payload = json.loads(base64.b64decode(data))\n        if payload["exp"] < time.time():\n            return None, "Token expired"\n        return payload, None\n    except Exception as e:\n        return None, str(e)\n\ntoken = create_token("user_42")\nprint(f"Token: {token[:40]}...")\n\npayload, error = validate_token(token)\nif payload:\n    print(f"Valid! User: {payload[\'user_id\']}")\n\n_, error = validate_token("fake.token")\nprint(f"Fake token: {error}")\n\nexpired_token = create_token("user_1", expires_in=-1)\n_, error = validate_token(expired_token)\nprint(f"Expired token: {error}")',
            hint: 'Base64 encode payload, create HMAC signature, validate both on check',
            expectedOutputContains: ['Token:', 'Valid! User: user_42', 'Fake token: Invalid signature', 'Expired token: Token expired'],
          },
          {
            id: 'auth-3',
            title: 'Role-Based Access',
            description: 'Implement role-based access control (RBAC).',
            instructions: ['Create a permissions system with roles and permissions', 'Check if a user can perform an action'],
            starterCode: '',
            solution: 'class RBAC:\n    def __init__(self):\n        self.roles = {}  # role -> set of permissions\n        self.user_roles = {}  # user -> set of roles\n\n    def add_role(self, role, permissions):\n        self.roles[role] = set(permissions)\n\n    def assign_role(self, user, role):\n        self.user_roles.setdefault(user, set()).add(role)\n\n    def has_permission(self, user, permission):\n        user_roles = self.user_roles.get(user, set())\n        for role in user_roles:\n            if permission in self.roles.get(role, set()):\n                return True\n        return False\n\n    def get_permissions(self, user):\n        perms = set()\n        for role in self.user_roles.get(user, set()):\n            perms.update(self.roles.get(role, set()))\n        return perms\n\nrbac = RBAC()\nrbac.add_role("viewer", ["read"])\nrbac.add_role("editor", ["read", "write"])\nrbac.add_role("admin", ["read", "write", "delete", "manage_users"])\n\nrbac.assign_role("alice", "admin")\nrbac.assign_role("bob", "editor")\nrbac.assign_role("charlie", "viewer")\n\nfor user in ["alice", "bob", "charlie"]:\n    perms = rbac.get_permissions(user)\n    can_delete = rbac.has_permission(user, "delete")\n    print(f"{user}: {sorted(perms)} | can delete: {can_delete}")',
            hint: 'Map roles to permission sets, users to role sets, check membership',
            expectedOutput: 'alice: [\'delete\', \'manage_users\', \'read\', \'write\'] | can delete: True\nbob: [\'read\', \'write\'] | can delete: False\ncharlie: [\'read\'] | can delete: False',
          },
          {
            id: 'auth-4',
            title: 'CORS Simulator',
            description: 'Simulate CORS (Cross-Origin Resource Sharing) checks.',
            instructions: ['Implement a CORS checker that validates origins', 'Test with allowed and blocked origins'],
            starterCode: '',
            solution: 'class CORSPolicy:\n    def __init__(self, allowed_origins=None, allow_credentials=False, max_age=3600):\n        self.allowed_origins = set(allowed_origins or [])\n        self.allow_credentials = allow_credentials\n        self.max_age = max_age\n\n    def check(self, origin):\n        if "*" in self.allowed_origins:\n            return {"allowed": True, "headers": {"Access-Control-Allow-Origin": "*"}}\n        if origin in self.allowed_origins:\n            headers = {\n                "Access-Control-Allow-Origin": origin,\n                "Access-Control-Max-Age": str(self.max_age),\n            }\n            if self.allow_credentials:\n                headers["Access-Control-Allow-Credentials"] = "true"\n            return {"allowed": True, "headers": headers}\n        return {"allowed": False, "reason": f"Origin {origin} not allowed"}\n\ncors = CORSPolicy(\n    allowed_origins=["https://myapp.com", "https://admin.myapp.com"],\n    allow_credentials=True\n)\n\ntest_origins = [\n    "https://myapp.com",\n    "https://admin.myapp.com",\n    "https://evil.com",\n    "http://myapp.com",\n]\n\nfor origin in test_origins:\n    result = cors.check(origin)\n    if result["allowed"]:\n        print(f"ALLOWED: {origin}")\n    else:\n        print(f"BLOCKED: {origin} ({result[\'reason\']})")',
            hint: 'Check origin against allowed set, return appropriate headers',
            expectedOutput: 'ALLOWED: https://myapp.com\nALLOWED: https://admin.myapp.com\nBLOCKED: https://evil.com (Origin https://evil.com not allowed)\nBLOCKED: http://myapp.com (Origin http://myapp.com not allowed)',
          },
          {
            id: 'auth-5',
            title: 'Security Headers',
            description: 'Generate security-related HTTP headers.',
            instructions: ['Create a function that produces recommended security headers', 'Show what each header does'],
            starterCode: '',
            solution: 'def security_headers(csp_domains=None):\n    csp = "default-src \'self\'"\n    if csp_domains:\n        csp += " " + " ".join(csp_domains)\n    return {\n        "Content-Security-Policy": csp,\n        "X-Content-Type-Options": "nosniff",\n        "X-Frame-Options": "DENY",\n        "X-XSS-Protection": "1; mode=block",\n        "Strict-Transport-Security": "max-age=31536000; includeSubDomains",\n        "Referrer-Policy": "strict-origin-when-cross-origin",\n    }\n\ndescriptions = {\n    "Content-Security-Policy": "Controls which resources can be loaded",\n    "X-Content-Type-Options": "Prevents MIME type sniffing",\n    "X-Frame-Options": "Prevents clickjacking via iframes",\n    "X-XSS-Protection": "Enables browser XSS filter",\n    "Strict-Transport-Security": "Forces HTTPS connections",\n    "Referrer-Policy": "Controls referrer information sent",\n}\n\nheaders = security_headers(["https://cdn.example.com"])\nfor name, value in headers.items():\n    print(f"{name}")\n    print(f"  Value: {value}")\n    print(f"  Purpose: {descriptions[name]}")\n    print()',
            hint: 'Return a dict of security headers with appropriate values',
            expectedOutputContains: ['Content-Security-Policy', 'X-Frame-Options', 'DENY', 'Strict-Transport-Security', 'nosniff'],
          }
        ],
      }
    ],
  },
  {
    id: 'data-science',
    title: 'Data Science & Visualization',
    subtitle: 'Analyze & Visualize',
    description: 'Analyze and visualize data with Python.',
    icon: 'BarChart3',
    color: 'amber',
    categories: [
      {
        id: 'numpy-basics',
        number: 1,
        title: 'NumPy Fundamentals',
        description: 'Master array operations, broadcasting, and reshaping with NumPy.',
        icon: 'Grid3x3',
        type: 'exercises',
        lesson: `# NumPy Fundamentals

NumPy is the foundation of scientific computing in Python. It provides powerful N-dimensional arrays that are faster and more memory-efficient than Python lists.

## Why NumPy?
Regular Python lists are slow for numerical computation. NumPy arrays use contiguous memory blocks and vectorized operations written in C, making them 10-100x faster.

## Creating Arrays
\`\`\`python
import numpy as np

a = np.array([1, 2, 3, 4, 5])
print(a)
>>> [1 2 3 4 5]

matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix.shape)
>>> (2, 3)

zeros = np.zeros((3, 3))
rng = np.arange(0, 10, 2)
print(rng)
>>> [0 2 4 6 8]

lin = np.linspace(0, 1, 5)
print(lin)
>>> [0.   0.25 0.5  0.75 1.  ]
\`\`\`

## Vectorized Operations
\`\`\`python
a = np.array([1, 2, 3])
print(a * 2)
>>> [2 4 6]
print(a + 10)
>>> [11 12 13]
b = np.array([10, 20, 30])
print(a + b)
>>> [11 22 33]
\`\`\`

## Broadcasting
NumPy can operate on arrays of different shapes:
\`\`\`python
matrix = np.array([[1, 2, 3], [4, 5, 6]])
row = np.array([10, 20, 30])
print(matrix + row)
>>> [[11 22 33]
     [14 25 36]]
\`\`\`

## Reshaping
\`\`\`python
a = np.arange(12).reshape(3, 4)
print(a)
>>> [[ 0  1  2  3]
     [ 4  5  6  7]
     [ 8  9 10 11]]
\`\`\`

💡 Use -1 in reshape to auto-calculate: \`a.reshape(3, -1)\`

⚠️ Reshaping creates a view, not a copy!

## Indexing & Slicing
\`\`\`python
a = np.array([10, 20, 30, 40, 50])
print(a[1:4])
>>> [20 30 40]
matrix = np.array([[1, 2], [3, 4], [5, 6]])
print(matrix[0, 1])
>>> 2
print(matrix[:, 0])
>>> [1 3 5]
\`\`\`

## Aggregations
\`\`\`python
a = np.array([1, 2, 3, 4, 5])
print(np.sum(a), np.mean(a), np.std(a))
>>> 15 3.0 1.4142135623730951
\`\`\`

💡 For 2D arrays, use axis=0 (columns) or axis=1 (rows).`,
        exercises: [
          {
            id: 'l10-numpy-basics-ex1',
            title: 'Creating and Inspecting Arrays',
            description: 'Create NumPy arrays and inspect their properties.',
            instructions: ['Import numpy as np', 'Create a 1D array \'a\' with [10,20,30,40,50]', 'Create a 2D array \'b\' with [[1,2,3],[4,5,6]]', 'Print a.shape, b.shape, b.ndim, b.size on separate lines'],
            starterCode: '',
            solution: 'import numpy as np\n\na = np.array([10, 20, 30, 40, 50])\nb = np.array([[1, 2, 3], [4, 5, 6]])\nprint(a.shape)\nprint(b.shape)\nprint(b.ndim)\nprint(b.size)',
            hint: 'Use np.array() and access .shape, .ndim, .size.',
            expectedOutput: '(5,)\n(2, 3)\n2\n6',
          },
          {
            id: 'l10-numpy-basics-ex2',
            title: 'Array Creation Functions',
            description: 'Use NumPy functions to create special arrays.',
            instructions: ['Import numpy as np', 'Create a 3x3 identity matrix and print', 'Create 5 values from 0 to 1 with linspace and print', 'Create [0,2,4,6,8] with arange and print'],
            starterCode: '',
            solution: 'import numpy as np\n\nprint(np.eye(3))\nprint(np.linspace(0, 1, 5))\nprint(np.arange(0, 10, 2))',
            hint: 'np.eye(n), np.linspace(start,stop,num), np.arange(start,stop,step).',
            expectedOutput: '[[1. 0. 0.]\n [0. 1. 0.]\n [0. 0. 1.]]\n[0.   0.25 0.5  0.75 1.  ]\n[0 2 4 6 8]',
          },
          {
            id: 'l10-numpy-basics-ex3',
            title: 'Vectorized Operations',
            description: 'Perform element-wise operations on arrays.',
            instructions: ['Import numpy as np', 'Create a=[1,2,3,4,5]', 'Print a*3', 'Print a**2', 'Create b=[5,4,3,2,1] and print a+b'],
            starterCode: '',
            solution: 'import numpy as np\n\na = np.array([1, 2, 3, 4, 5])\nprint(a * 3)\nprint(a ** 2)\nb = np.array([5, 4, 3, 2, 1])\nprint(a + b)',
            hint: 'NumPy operations work element-wise.',
            expectedOutput: '[ 3  6  9 12 15]\n[ 1  4  9 16 25]\n[6 6 6 6 6]',
          },
          {
            id: 'l10-numpy-basics-ex4',
            title: 'Reshaping and Slicing',
            description: 'Reshape arrays and extract slices.',
            instructions: ['Import numpy as np', 'Create 1-12 with arange(1,13)', 'Reshape to 3x4, print', 'Print row 1, print column 2'],
            starterCode: '',
            solution: 'import numpy as np\n\nmat = np.arange(1, 13).reshape(3, 4)\nprint(mat)\nprint(mat[1])\nprint(mat[:, 2])',
            hint: '.reshape(rows,cols). mat[i] for row, mat[:,j] for column.',
            expectedOutput: '[[ 1  2  3  4]\n [ 5  6  7  8]\n [ 9 10 11 12]]\n[5 6 7 8]\n[ 3  7 11]',
          },
          {
            id: 'l10-numpy-basics-ex5',
            title: 'Aggregation Functions',
            description: 'Compute statistics on arrays.',
            instructions: ['Import numpy as np', 'Create [[1,2,3],[4,5,6],[7,8,9]]', 'Print sum, mean per column, max per row'],
            starterCode: '',
            solution: 'import numpy as np\n\narr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])\nprint(np.sum(arr))\nprint(np.mean(arr, axis=0))\nprint(np.max(arr, axis=1))',
            hint: 'np.sum(), np.mean(axis=0), np.max(axis=1).',
            expectedOutput: '45\n[4. 5. 6.]\n[3 6 9]',
          }
        ],
      },
      {
        id: 'numpy-advanced',
        number: 2,
        title: 'NumPy Advanced',
        description: 'Advanced NumPy: linear algebra, random numbers, fancy indexing, and performance.',
        icon: 'Cpu',
        type: 'exercises',
        lesson: `# NumPy Advanced

Once you master basic array operations, NumPy opens up powerful tools for linear algebra, random number generation, and advanced indexing.

## Linear Algebra
\`\`\`python
import numpy as np
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
print(A @ B)
>>> [[19 22]
     [43 50]]
print(np.linalg.det(A))
>>> -2.0
print(np.linalg.inv(A))
>>> [[-2.   1. ]
     [ 1.5 -0.5]]
\`\`\`

## Random Numbers
\`\`\`python
np.random.seed(42)
print(np.random.randint(1, 10, size=5))
>>> [7 4 8 5 7]
\`\`\`

## Fancy Indexing
\`\`\`python
a = np.array([10, 20, 30, 40, 50])
idx = np.array([0, 2, 4])
print(a[idx])
>>> [10 30 50]
mask = a > 25
print(a[mask])
>>> [30 40 50]
\`\`\`

## Where and Conditional Logic
\`\`\`python
a = np.array([1, -2, 3, -4, 5])
result = np.where(a > 0, a, 0)
print(result)
>>> [1 0 3 0 5]
\`\`\`

💡 Boolean indexing is extremely powerful for filtering data.

⚠️ Always set a random seed for reproducible results.

## Stacking
\`\`\`python
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(np.vstack([a, b]))
>>> [[1 2 3]
     [4 5 6]]
\`\`\``,
        exercises: [
          {
            id: 'l10-numpy-advanced-ex1',
            title: 'Matrix Multiplication',
            description: 'Perform matrix operations using NumPy.',
            instructions: ['Import numpy as np', 'Create A=[[1,2],[3,4]] and B=[[5,6],[7,8]]', 'Print A @ B', 'Print A.T'],
            starterCode: '',
            solution: 'import numpy as np\n\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[5, 6], [7, 8]])\nprint(A @ B)\nprint(A.T)',
            hint: 'Use @ for matrix multiplication and .T for transpose.',
            expectedOutput: '[[19 22]\n [43 50]]\n[[1 3]\n [2 4]]',
          },
          {
            id: 'l10-numpy-advanced-ex2',
            title: 'Boolean Indexing',
            description: 'Filter arrays using boolean conditions.',
            instructions: ['Import numpy as np', 'Create data=[15,22,8,33,12,45,5,28]', 'Print values > 20', 'Print count of values <= 15', 'Use np.where to cap values at 20 and print'],
            starterCode: '',
            solution: 'import numpy as np\n\ndata = np.array([15, 22, 8, 33, 12, 45, 5, 28])\nprint(data[data > 20])\nprint(np.sum(data <= 15))\nprint(np.where(data > 20, 20, data))',
            hint: 'data[condition] for boolean indexing. np.sum on bool counts True.',
            expectedOutput: '[22 33 45 28]\n4\n[15 20  8 20 12 20  5 20]',
          },
          {
            id: 'l10-numpy-advanced-ex3',
            title: 'Random Number Generation',
            description: 'Generate reproducible random data.',
            instructions: ['Import numpy, seed=0', 'Generate 5 random ints 1-100 and print', 'Generate 2x3 randn array, print shape', 'Generate 1000 normal(50,10) values, print mean rounded to 1 decimal'],
            starterCode: '',
            solution: 'import numpy as np\n\nnp.random.seed(0)\nprint(np.random.randint(1, 101, size=5))\narr = np.random.randn(2, 3)\nprint(arr.shape)\ndata = np.random.normal(50, 10, 1000)\nprint(round(data.mean(), 1))',
            hint: 'np.random.seed() for reproducibility.',
            expectedOutput: '[45 48 65 68 68]\n(2, 3)\n49.6',
          },
          {
            id: 'l10-numpy-advanced-ex4',
            title: 'Stacking and Splitting',
            description: 'Combine and split arrays.',
            instructions: ['Import numpy', 'Create a=[1,2,3] b=[4,5,6]', 'vstack and print', 'hstack and print', 'Create c=arange(1,7), split into 3 and print each'],
            starterCode: '',
            solution: 'import numpy as np\n\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nprint(np.vstack([a, b]))\nprint(np.hstack([a, b]))\nc = np.arange(1, 7)\nfor part in np.split(c, 3):\n    print(part)',
            hint: 'vstack vertically, hstack horizontally, split divides.',
            expectedOutput: '[[1 2 3]\n [4 5 6]]\n[1 2 3 4 5 6]\n[1 2]\n[3 4]\n[5 6]',
          },
          {
            id: 'l10-numpy-advanced-ex5',
            title: 'Linear Algebra Operations',
            description: 'Solve linear algebra problems.',
            instructions: ['Import numpy', 'Create A=[[2,1],[1,3]]', 'Print determinant rounded to 1 decimal', 'Solve Ax=b where b=[5,10], print x', 'Print eigenvalues sorted, rounded to 2 decimals'],
            starterCode: '',
            solution: 'import numpy as np\n\nA = np.array([[2, 1], [1, 3]])\nprint(round(np.linalg.det(A), 1))\nb = np.array([5, 10])\nx = np.linalg.solve(A, b)\nprint(x)\neigvals = np.linalg.eigvals(A)\nprint(np.sort(np.round(eigvals, 2)))',
            hint: 'np.linalg.det, np.linalg.solve, np.linalg.eigvals.',
            expectedOutput: '5.0\n[1. 3.]\n[1.38 3.62]',
          }
        ],
      },
      {
        id: 'pandas-basics',
        number: 3,
        title: 'Pandas Basics',
        description: 'Work with Series and DataFrames for data manipulation.',
        icon: 'Table',
        type: 'exercises',
        lesson: `# Pandas Basics

Pandas is the go-to library for data manipulation. It provides Series (1D) and DataFrame (2D).

## Series
\`\`\`python
import pandas as pd
s = pd.Series([10, 20, 30], index=['a', 'b', 'c'])
print(s['b'])
>>> 20
\`\`\`

## DataFrame
\`\`\`python
data = {'name': ['Alice', 'Bob'], 'age': [25, 30]}
df = pd.DataFrame(data)
\`\`\`

## Selecting Data
\`\`\`python
df['name']        # Column as Series
df[['name','age']] # Multiple columns
df.iloc[0]         # First row by position
df[df['age'] > 25] # Filtering
\`\`\`

## Basic Info
\`\`\`python
df.shape, df.dtypes, df.describe(), df.head()
\`\`\`

💡 Always explore with .shape, .dtypes, .head(), .describe()

⚠️ df['col'] returns Series; df[['col']] returns DataFrame!`,
        exercises: [
          {
            id: 'l10-pandas-basics-ex1',
            title: 'Creating a DataFrame',
            description: 'Build a DataFrame from a dictionary.',
            instructions: ['Import pandas as pd', 'Create DataFrame: product=[\'Laptop\',\'Phone\',\'Tablet\'], price=[999,699,399], stock=[50,150,80]', 'Print it and its shape'],
            starterCode: '',
            solution: 'import pandas as pd\n\ndf = pd.DataFrame({\n    \'product\': [\'Laptop\', \'Phone\', \'Tablet\'],\n    \'price\': [999, 699, 399],\n    \'stock\': [50, 150, 80]\n})\nprint(df)\nprint(df.shape)',
            hint: 'Pass a dict to pd.DataFrame().',
            expectedOutput: '  product  price  stock\n0  Laptop    999     50\n1   Phone    699    150\n2  Tablet    399     80\n(3, 3)',
          },
          {
            id: 'l10-pandas-basics-ex2',
            title: 'Selecting Columns and Rows',
            description: 'Access specific data.',
            instructions: ['Create DataFrame: name=[\'Alice\',\'Bob\',\'Charlie\',\'Diana\'], score=[85,92,78,95], grade=[\'B\',\'A\',\'C\',\'A\']', 'Print score column', 'Print first 2 rows with iloc', 'Print row where name==\'Charlie\''],
            starterCode: '',
            solution: 'import pandas as pd\n\ndf = pd.DataFrame({\'name\': [\'Alice\',\'Bob\',\'Charlie\',\'Diana\'], \'score\': [85,92,78,95], \'grade\': [\'B\',\'A\',\'C\',\'A\']})\nprint(df[\'score\'])\nprint(df.iloc[:2])\nprint(df[df[\'name\'] == \'Charlie\'])',
            hint: 'df[\'col\'] for column, df.iloc[:n] for rows, df[condition] for filter.',
            expectedOutput: '0    85\n1    92\n2    78\n3    95\nName: score, dtype: int64\n    name  score grade\n0  Alice     85     B\n1    Bob     92     A\n      name  score grade\n2  Charlie     78     C',
          },
          {
            id: 'l10-pandas-basics-ex3',
            title: 'Adding and Modifying Columns',
            description: 'Create new columns.',
            instructions: ['Create DataFrame: item=[\'A\',\'B\',\'C\'], price=[10.0,25.0,15.0], quantity=[3,1,4]', 'Add total = price*quantity', 'Add expensive = price > 12', 'Print DataFrame'],
            starterCode: '',
            solution: 'import pandas as pd\n\ndf = pd.DataFrame({\'item\': [\'A\',\'B\',\'C\'], \'price\': [10.0,25.0,15.0], \'quantity\': [3,1,4]})\ndf[\'total\'] = df[\'price\'] * df[\'quantity\']\ndf[\'expensive\'] = df[\'price\'] > 12\nprint(df)',
            hint: 'df[\'new_col\'] = expression.',
            expectedOutput: '  item  price  quantity  total  expensive\n0    A   10.0         3   30.0      False\n1    B   25.0         1   25.0       True\n2    C   15.0         4   60.0       True',
          },
          {
            id: 'l10-pandas-basics-ex4',
            title: 'Sorting and Ranking',
            description: 'Sort DataFrames and find extremes.',
            instructions: ['Create DataFrame: student=[\'Alice\',\'Bob\',\'Charlie\',\'Diana\'], score=[88,95,72,95]', 'Sort by score desc and print', 'Print mean and max score'],
            starterCode: '',
            solution: 'import pandas as pd\n\ndf = pd.DataFrame({\'student\': [\'Alice\',\'Bob\',\'Charlie\',\'Diana\'], \'score\': [88,95,72,95]})\nprint(df.sort_values(\'score\', ascending=False))\nprint(df[\'score\'].mean())\nprint(df[\'score\'].max())',
            hint: 'sort_values(\'col\', ascending=False). .mean() and .max().',
            expectedOutput: '   student  score\n1      Bob     95\n3    Diana     95\n0    Alice     88\n2  Charlie     72\n87.5\n95',
          },
          {
            id: 'l10-pandas-basics-ex5',
            title: 'Summary Statistics',
            description: 'Compute descriptive statistics.',
            instructions: ['Create DataFrame: category=[\'A\',\'B\',\'A\',\'B\',\'A\'], value=[10,20,30,40,50]', 'Print value_counts of category', 'Print sum and median of value'],
            starterCode: '',
            solution: 'import pandas as pd\n\ndf = pd.DataFrame({\'category\': [\'A\',\'B\',\'A\',\'B\',\'A\'], \'value\': [10,20,30,40,50]})\nprint(df[\'category\'].value_counts())\nprint(df[\'value\'].sum())\nprint(df[\'value\'].median())',
            hint: '.value_counts() for frequencies, .sum() and .median().',
            expectedOutput: 'category\nA    3\nB    2\nName: count, dtype: int64\n150\n30.0',
          }
        ],
      },
      {
        id: 'pandas-transform',
        number: 4,
        title: 'Pandas Data Transformation',
        description: 'Group, merge, pivot, and apply transformations to DataFrames.',
        icon: 'Shuffle',
        type: 'exercises',
        lesson: `# Pandas Data Transformation

Real-world data analysis requires combining, grouping, and reshaping data. Pandas provides powerful tools for these operations.

## GroupBy
GroupBy splits data into groups, applies a function, and combines results:
\`\`\`python
import pandas as pd

df = pd.DataFrame({
    'dept': ['Sales', 'Sales', 'HR', 'HR'],
    'name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'salary': [50000, 60000, 55000, 65000]
})

print(df.groupby('dept')['salary'].mean())
>>> dept
    HR       60000.0
    Sales    55000.0
    Name: salary, dtype: float64
\`\`\`

## Multiple Aggregations
\`\`\`python
print(df.groupby('dept')['salary'].agg(['mean', 'sum', 'count']))
>>>          mean    sum  count
    dept
    HR     60000  120000      2
    Sales  55000  110000      2
\`\`\`

## Merge (Join)
\`\`\`python
orders = pd.DataFrame({
    'order_id': [1, 2, 3],
    'customer': ['Alice', 'Bob', 'Alice']
})
prices = pd.DataFrame({
    'order_id': [1, 2, 3],
    'amount': [100, 200, 150]
})
merged = pd.merge(orders, prices, on='order_id')
\`\`\`

## Apply
Apply custom functions to rows or columns:
\`\`\`python
df['salary_k'] = df['salary'].apply(lambda x: x / 1000)
\`\`\`

## Pivot Table
\`\`\`python
pivot = df.pivot_table(values='salary', index='dept', aggfunc='mean')
\`\`\`

💡 groupby is one of the most powerful Pandas operations — master it early.

⚠️ When merging, always check the result shape. Unexpected duplicates often come from wrong join keys.`,
        exercises: [
          {
            id: 'l10-pandas-transform-ex1',
            title: 'GroupBy Basics',
            description: 'Group data and compute aggregations.',
            instructions: ['Import pandas as pd', 'Create a DataFrame with \'city\' ([\'NYC\',\'LA\',\'NYC\',\'LA\',\'NYC\']), \'sales\' ([100,200,150,300,250])', 'Print the total sales per city using groupby and sum, sorted by city name'],
            starterCode: '',
            solution: 'import pandas as pd\n\ndf = pd.DataFrame({\n    \'city\': [\'NYC\', \'LA\', \'NYC\', \'LA\', \'NYC\'],\n    \'sales\': [100, 200, 150, 300, 250]\n})\nprint(df.groupby(\'city\')[\'sales\'].sum().sort_index())',
            hint: 'Use df.groupby(\'city\')[\'sales\'].sum()',
            expectedOutput: 'city\nLA     500\nNYC    500\nName: sales, dtype: int64',
          },
          {
            id: 'l10-pandas-transform-ex2',
            title: 'Multiple Aggregations',
            description: 'Apply multiple aggregate functions to grouped data.',
            instructions: ['Import pandas as pd', 'Create a DataFrame with \'team\' ([\'A\',\'A\',\'B\',\'B\']), \'points\' ([10, 20, 30, 40])', 'Group by team and compute mean and sum of points', 'Print the result'],
            starterCode: '',
            solution: 'import pandas as pd\n\ndf = pd.DataFrame({\n    \'team\': [\'A\', \'A\', \'B\', \'B\'],\n    \'points\': [10, 20, 30, 40]\n})\nprint(df.groupby(\'team\')[\'points\'].agg([\'mean\', \'sum\']))',
            hint: 'Use .agg([\'mean\', \'sum\']) after groupby.',
            expectedOutput: '      mean  sum\nteam           \nA     15.0   30\nB     35.0   70',
          },
          {
            id: 'l10-pandas-transform-ex3',
            title: 'Merging DataFrames',
            description: 'Combine DataFrames using merge.',
            instructions: ['Import pandas as pd', 'Create df1 with \'id\' ([1,2,3]), \'name\' ([\'Alice\',\'Bob\',\'Charlie\'])', 'Create df2 with \'id\' ([1,2,3]), \'score\' ([85, 92, 78])', 'Merge on \'id\' and print the result'],
            starterCode: '',
            solution: 'import pandas as pd\n\ndf1 = pd.DataFrame({\'id\': [1, 2, 3], \'name\': [\'Alice\', \'Bob\', \'Charlie\']})\ndf2 = pd.DataFrame({\'id\': [1, 2, 3], \'score\': [85, 92, 78]})\nprint(pd.merge(df1, df2, on=\'id\'))',
            hint: 'Use pd.merge(df1, df2, on=\'key_column\').',
            expectedOutput: '   id     name  score\n0   1    Alice     85\n1   2      Bob     92\n2   3  Charlie     78',
          },
          {
            id: 'l10-pandas-transform-ex4',
            title: 'Apply Custom Functions',
            description: 'Transform data with apply().',
            instructions: ['Import pandas as pd', 'Create a DataFrame with \'name\' ([\'alice\', \'bob\', \'charlie\']), \'salary\' ([50000, 60000, 45000])', 'Use apply to capitalize names and store in \'name\' column', 'Add a \'tax\' column that is 20% of salary using apply', 'Print the DataFrame'],
            starterCode: '',
            solution: 'import pandas as pd\n\ndf = pd.DataFrame({\n    \'name\': [\'alice\', \'bob\', \'charlie\'],\n    \'salary\': [50000, 60000, 45000]\n})\ndf[\'name\'] = df[\'name\'].apply(str.capitalize)\ndf[\'tax\'] = df[\'salary\'].apply(lambda x: x * 0.2)\nprint(df)',
            hint: 'Use .apply(function) where function takes one value and returns one value.',
            expectedOutput: '      name  salary      tax\n0    Alice   50000  10000.0\n1      Bob   60000  12000.0\n2  Charlie   45000   9000.0',
          },
          {
            id: 'l10-pandas-transform-ex5',
            title: 'Pivot Tables',
            description: 'Reshape data with pivot tables.',
            instructions: ['Import pandas as pd', 'Create a DataFrame with \'region\' ([\'North\',\'North\',\'South\',\'South\']), \'product\' ([\'A\',\'B\',\'A\',\'B\']), \'revenue\' ([100, 200, 150, 250])', 'Create a pivot table with region as index, product as columns, revenue as values', 'Print the pivot table'],
            starterCode: '',
            solution: 'import pandas as pd\n\ndf = pd.DataFrame({\n    \'region\': [\'North\', \'North\', \'South\', \'South\'],\n    \'product\': [\'A\', \'B\', \'A\', \'B\'],\n    \'revenue\': [100, 200, 150, 250]\n})\npivot = df.pivot_table(values=\'revenue\', index=\'region\', columns=\'product\')\nprint(pivot)',
            hint: 'Use df.pivot_table(values=, index=, columns=).',
            expectedOutput: 'product    A    B\nregion           \nNorth    100  200\nSouth    150  250',
          }
        ],
      },
      {
        id: 'pandas-clean',
        number: 5,
        title: 'Data Cleaning with Pandas',
        description: 'Handle missing data, duplicates, and type conversions.',
        icon: 'Eraser',
        type: 'exercises',
        lesson: `# Data Cleaning with Pandas

Real data is messy. Data cleaning is often 80% of the work in data science. Pandas provides excellent tools for handling common data quality issues.

## Missing Data
\`\`\`python
import pandas as pd
import numpy as np

df = pd.DataFrame({
    'name': ['Alice', 'Bob', None, 'Diana'],
    'age': [25, np.nan, 35, 28]
})

# Detect missing
print(df.isnull().sum())
>>> name    1
    age     1
    dtype: int64

# Fill missing values
df['age'] = df['age'].fillna(df['age'].mean())

# Drop rows with any missing
df_clean = df.dropna()
\`\`\`

## Duplicates
\`\`\`python
df = pd.DataFrame({
    'id': [1, 2, 2, 3],
    'value': [10, 20, 20, 30]
})
print(df.duplicated().sum())  # Count duplicates
>>> 1

df_unique = df.drop_duplicates()
\`\`\`

## Type Conversion
\`\`\`python
df['price'] = df['price'].astype(float)
df['date'] = pd.to_datetime(df['date_str'])
df['code'] = df['code'].astype(str)
\`\`\`

## String Cleaning
\`\`\`python
df['name'] = df['name'].str.strip()       # Remove whitespace
df['name'] = df['name'].str.lower()       # Lowercase
df['email'] = df['email'].str.replace('@', ' at ')
\`\`\`

## Renaming Columns
\`\`\`python
df = df.rename(columns={'old_name': 'new_name'})
df.columns = ['col1', 'col2', 'col3']  # Rename all
\`\`\`

💡 Always check df.isnull().sum() and df.dtypes before analyzing data.

⚠️ fillna() returns a new DataFrame by default. Use inplace=True or reassign.`,
        exercises: [
          {
            id: 'l10-pandas-clean-ex1',
            title: 'Handling Missing Data',
            description: 'Detect and fill missing values.',
            instructions: ['Import pandas and numpy', 'Create a DataFrame with \'name\' ([\'Alice\',\'Bob\',\'Charlie\']), \'score\' ([85, np.nan, 78])', 'Print the count of missing values per column', 'Fill missing scores with the mean of existing scores', 'Print the updated DataFrame'],
            starterCode: '',
            solution: 'import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    \'name\': [\'Alice\', \'Bob\', \'Charlie\'],\n    \'score\': [85, np.nan, 78]\n})\nprint(df.isnull().sum())\ndf[\'score\'] = df[\'score\'].fillna(df[\'score\'].mean())\nprint(df)',
            hint: 'Use df.isnull().sum() to count NaN. Use .fillna(value) to replace them.',
            expectedOutput: 'name     0\nscore    1\ndtype: int64\n      name  score\n0    Alice   85.0\n1      Bob   81.5\n2  Charlie   78.0',
          },
          {
            id: 'l10-pandas-clean-ex2',
            title: 'Removing Duplicates',
            description: 'Find and remove duplicate rows.',
            instructions: ['Import pandas as pd', 'Create a DataFrame with \'product\' ([\'A\',\'B\',\'A\',\'C\',\'B\']), \'price\' ([10,20,10,30,20])', 'Print how many duplicate rows exist', 'Remove duplicates and print the result'],
            starterCode: '',
            solution: 'import pandas as pd\n\ndf = pd.DataFrame({\n    \'product\': [\'A\', \'B\', \'A\', \'C\', \'B\'],\n    \'price\': [10, 20, 10, 30, 20]\n})\nprint(df.duplicated().sum())\nprint(df.drop_duplicates())',
            hint: 'df.duplicated().sum() counts duplicates. df.drop_duplicates() removes them.',
            expectedOutput: '2\n  product  price\n0       A     10\n1       B     20\n3       C     30',
          },
          {
            id: 'l10-pandas-clean-ex3',
            title: 'Type Conversion',
            description: 'Convert column types appropriately.',
            instructions: ['Import pandas as pd', 'Create a DataFrame with \'value\' ([\'10\', \'20\', \'30\']), \'flag\' ([\'1\', \'0\', \'1\'])', 'Convert \'value\' to int and \'flag\' to bool (via int first)', 'Print the dtypes', 'Print the DataFrame'],
            starterCode: '',
            solution: 'import pandas as pd\n\ndf = pd.DataFrame({\n    \'value\': [\'10\', \'20\', \'30\'],\n    \'flag\': [\'1\', \'0\', \'1\']\n})\ndf[\'value\'] = df[\'value\'].astype(int)\ndf[\'flag\'] = df[\'flag\'].astype(int).astype(bool)\nprint(df.dtypes)\nprint(df)',
            hint: 'Use .astype(type) to convert. Chain .astype(int).astype(bool) for string to bool.',
            expectedOutput: 'value     int64\nflag       bool\ndtype: object\n   value   flag\n0     10   True\n1     20  False\n2     30   True',
          },
          {
            id: 'l10-pandas-clean-ex4',
            title: 'String Cleaning',
            description: 'Clean messy string data.',
            instructions: ['Import pandas as pd', 'Create a DataFrame with \'name\' ([\'  Alice  \', \'BOB\', \'  charlie\'])', 'Strip whitespace, then convert to title case', 'Print the cleaned DataFrame'],
            starterCode: '',
            solution: 'import pandas as pd\n\ndf = pd.DataFrame({\'name\': [\'  Alice  \', \'BOB\', \'  charlie\']})\ndf[\'name\'] = df[\'name\'].str.strip().str.title()\nprint(df)',
            hint: 'Chain .str.strip() and .str.title() to clean and format strings.',
            expectedOutput: '      name\n0    Alice\n1      Bob\n2  Charlie',
          },
          {
            id: 'l10-pandas-clean-ex5',
            title: 'Complete Data Cleaning Pipeline',
            description: 'Apply multiple cleaning steps to messy data.',
            instructions: ['Import pandas and numpy', 'Create a DataFrame with \'name\' ([\'Alice\',\'Bob\',\'Alice\',\'Charlie\',None]), \'age\' ([25, np.nan, 25, 30, 28]), \'score\' ([85.0, 90.0, 85.0, np.nan, 75.0])', 'Drop rows where name is missing', 'Fill missing ages with the median age', 'Fill missing scores with 0', 'Remove duplicate rows', 'Print the final DataFrame (reset index with drop=True)'],
            starterCode: '',
            solution: 'import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    \'name\': [\'Alice\', \'Bob\', \'Alice\', \'Charlie\', None],\n    \'age\': [25, np.nan, 25, 30, 28],\n    \'score\': [85.0, 90.0, 85.0, np.nan, 75.0]\n})\ndf = df.dropna(subset=[\'name\'])\ndf[\'age\'] = df[\'age\'].fillna(df[\'age\'].median())\ndf[\'score\'] = df[\'score\'].fillna(0)\ndf = df.drop_duplicates()\ndf = df.reset_index(drop=True)\nprint(df)',
            hint: 'Use dropna(subset=[\'name\']), fillna for specific columns, drop_duplicates, and reset_index(drop=True).',
            expectedOutput: '      name   age  score\n0    Alice  25.0   85.0\n1      Bob  25.0   90.0\n2  Charlie  30.0    0.0',
          }
        ],
      },
      {
        id: 'matplotlib-mod',
        number: 6,
        title: 'Matplotlib Plotting',
        description: 'Create and customize plots with Matplotlib.',
        icon: 'BarChart3',
        type: 'exercises',
        lesson: `# Matplotlib Plotting

Matplotlib is Python's most widely used plotting library. While we can't render plots in a text environment, understanding the API is essential for data visualization.

## Basic Line Plot
\`\`\`python
import matplotlib
matplotlib.use('Agg')  # Non-interactive backend
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]
fig, ax = plt.subplots()
ax.plot(x, y)
ax.set_title('Line Plot')
ax.set_xlabel('X')
ax.set_ylabel('Y')
\`\`\`

## Bar Chart
\`\`\`python
categories = ['A', 'B', 'C']
values = [10, 25, 15]
fig, ax = plt.subplots()
ax.bar(categories, values, color='steelblue')
\`\`\`

## The Figure/Axes Pattern
\`\`\`python
fig, axes = plt.subplots(1, 2, figsize=(10, 4))
axes[0].plot(x, y)
axes[0].set_title('Plot 1')
axes[1].bar(categories, values)
axes[1].set_title('Plot 2')
\`\`\`

## Customization
\`\`\`python
ax.plot(x, y, color='red', linestyle='--', marker='o', linewidth=2, label='Data')
ax.legend()
ax.grid(True)
ax.set_xlim(0, 6)
ax.set_ylim(0, 12)
\`\`\`

💡 Always use the object-oriented API (fig, ax = plt.subplots()) over the pyplot interface for better control.

⚠️ In headless environments, set matplotlib.use('Agg') before importing pyplot.

## Saving Plots
\`\`\`python
fig.savefig('plot.png', dpi=150, bbox_inches='tight')
\`\`\``,
        exercises: [
          {
            id: 'l10-matplotlib-mod-ex1',
            title: 'Creating a Figure',
            description: 'Set up a matplotlib figure with proper configuration.',
            instructions: ['Import matplotlib (set Agg backend) and pyplot', 'Create a figure and axes with plt.subplots()', 'Plot y = x^2 for x = [1,2,3,4,5]', 'Set title to \'Squares\', xlabel to \'x\', ylabel to \'x squared\'', 'Print \'Plot created\' and print the number of lines on the axes'],
            starterCode: '',
            solution: 'import matplotlib\nmatplotlib.use(\'Agg\')\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nx = [1, 2, 3, 4, 5]\ny = [i**2 for i in x]\nax.plot(x, y)\nax.set_title(\'Squares\')\nax.set_xlabel(\'x\')\nax.set_ylabel(\'x squared\')\nprint(\'Plot created\')\nprint(len(ax.lines))',
            hint: 'Use fig, ax = plt.subplots(). ax.lines gives the list of Line2D objects.',
            expectedOutput: 'Plot created\n1',
          },
          {
            id: 'l10-matplotlib-mod-ex2',
            title: 'Bar Chart Configuration',
            description: 'Create and configure a bar chart.',
            instructions: ['Import matplotlib (Agg backend) and pyplot', 'Create a bar chart with categories [\'Python\', \'Java\', \'JS\'] and values [35, 25, 30]', 'Set title to \'Language Popularity\'', 'Print \'Bar chart created\'', 'Print the number of patches (bars) on the axes'],
            starterCode: '',
            solution: 'import matplotlib\nmatplotlib.use(\'Agg\')\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.bar([\'Python\', \'Java\', \'JS\'], [35, 25, 30])\nax.set_title(\'Language Popularity\')\nprint(\'Bar chart created\')\nprint(len(ax.patches))',
            hint: 'ax.bar() creates a bar chart. ax.patches gives the bar rectangles.',
            expectedOutput: 'Bar chart created\n3',
          },
          {
            id: 'l10-matplotlib-mod-ex3',
            title: 'Multiple Subplots',
            description: 'Create a figure with multiple subplots.',
            instructions: ['Import matplotlib (Agg backend) and pyplot', 'Create a figure with 1 row and 2 columns of subplots', 'In subplot 1: plot [1,2,3] vs [1,4,9], set title \'Squares\'', 'In subplot 2: plot [1,2,3] vs [1,8,27], set title \'Cubes\'', 'Print the number of axes', 'Print the titles of both axes'],
            starterCode: '',
            solution: 'import matplotlib\nmatplotlib.use(\'Agg\')\nimport matplotlib.pyplot as plt\n\nfig, axes = plt.subplots(1, 2)\naxes[0].plot([1,2,3], [1,4,9])\naxes[0].set_title(\'Squares\')\naxes[1].plot([1,2,3], [1,8,27])\naxes[1].set_title(\'Cubes\')\nprint(len(axes))\nprint(axes[0].get_title())\nprint(axes[1].get_title())',
            hint: 'plt.subplots(1, 2) returns fig and array of axes. Access with axes[0], axes[1].',
            expectedOutput: '2\nSquares\nCubes',
          },
          {
            id: 'l10-matplotlib-mod-ex4',
            title: 'Plot Customization',
            description: 'Customize plot appearance with colors, markers, and labels.',
            instructions: ['Import matplotlib (Agg backend) and pyplot', 'Create a figure and plot two lines:', '  Line 1: x=[1,2,3,4], y=[1,4,9,16] with label \'Squares\', red color', '  Line 2: x=[1,2,3,4], y=[1,2,3,4] with label \'Linear\', blue color', 'Add a legend, set grid to True', 'Print the number of lines and print \'Customized plot done\''],
            starterCode: '',
            solution: 'import matplotlib\nmatplotlib.use(\'Agg\')\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1,2,3,4], [1,4,9,16], color=\'red\', label=\'Squares\')\nax.plot([1,2,3,4], [1,2,3,4], color=\'blue\', label=\'Linear\')\nax.legend()\nax.grid(True)\nprint(len(ax.lines))\nprint(\'Customized plot done\')',
            hint: 'Use color= and label= parameters. Call ax.legend() to show labels.',
            expectedOutput: '2\nCustomized plot done',
          },
          {
            id: 'l10-matplotlib-mod-ex5',
            title: 'Figure Properties',
            description: 'Configure figure-level properties.',
            instructions: ['Import matplotlib (Agg backend) and pyplot', 'Create a figure with figsize=(8, 6) and dpi=100', 'Add a subplot and plot [0,1,2,3,4] vs [0,1,4,9,16]', 'Set title \'My Plot\', xlabel \'X Axis\', ylabel \'Y Axis\'', 'Print the figure size as a tuple of ints', 'Print the axes title'],
            starterCode: '',
            solution: 'import matplotlib\nmatplotlib.use(\'Agg\')\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots(figsize=(8, 6), dpi=100)\nax.plot([0,1,2,3,4], [0,1,4,9,16])\nax.set_title(\'My Plot\')\nax.set_xlabel(\'X Axis\')\nax.set_ylabel(\'Y Axis\')\nw, h = fig.get_size_inches()\nprint((int(w), int(h)))\nprint(ax.get_title())',
            hint: 'Use figsize=(w,h) in subplots. fig.get_size_inches() returns the size.',
            expectedOutput: '(8, 6)\nMy Plot',
          }
        ],
      },
      {
        id: 'stats-basics',
        number: 7,
        title: 'Statistics with Python',
        description: 'Calculate statistical measures and understand distributions.',
        icon: 'TrendingUp',
        type: 'exercises',
        lesson: `# Statistics with Python

Statistics helps us understand data through numbers. Python provides several tools for statistical analysis.

## Descriptive Statistics
\`\`\`python
import numpy as np

data = [23, 45, 12, 67, 34, 89, 23, 56]
print(f"Mean: {np.mean(data):.1f}")
>>> Mean: 43.6

print(f"Median: {np.median(data):.1f}")
>>> Median: 39.5

print(f"Std Dev: {np.std(data):.1f}")
>>> Std Dev: 23.6

print(f"Variance: {np.var(data):.1f}")
>>> Variance: 557.2
\`\`\`

## Percentiles
\`\`\`python
print(f"25th percentile: {np.percentile(data, 25)}")
print(f"75th percentile: {np.percentile(data, 75)}")
\`\`\`

## Correlation
\`\`\`python
x = np.array([1, 2, 3, 4, 5])
y = np.array([2, 4, 5, 4, 5])
corr = np.corrcoef(x, y)[0, 1]
print(f"Correlation: {corr:.3f}")
>>> Correlation: 0.822
\`\`\`

## Normal Distribution
\`\`\`python
np.random.seed(42)
samples = np.random.normal(loc=100, scale=15, size=10000)
# About 68% of values within 1 std of mean
within_1std = np.sum((samples > 85) & (samples < 115)) / len(samples)
print(f"Within 1 std: {within_1std:.1%}")
>>> Within 1 std: 68.3%
\`\`\`

## Z-Scores
\`\`\`python
data = np.array([10, 20, 30, 40, 50])
z_scores = (data - np.mean(data)) / np.std(data)
print(z_scores)
>>> [-1.41 -0.71  0.    0.71  1.41]
\`\`\`

💡 Always look at both mean and median — if they differ a lot, the data is skewed.

⚠️ Correlation does not imply causation. Always investigate the relationship further.`,
        exercises: [
          {
            id: 'l10-stats-basics-ex1',
            title: 'Descriptive Statistics',
            description: 'Calculate basic statistical measures.',
            instructions: ['Import numpy as np', 'Create data = [12, 15, 18, 22, 25, 28, 30, 35, 40, 45]', 'Print the mean, median, and standard deviation, each rounded to 2 decimal places', 'Print the range (max - min)'],
            starterCode: '',
            solution: 'import numpy as np\n\ndata = [12, 15, 18, 22, 25, 28, 30, 35, 40, 45]\nprint(round(np.mean(data), 2))\nprint(round(np.median(data), 2))\nprint(round(np.std(data), 2))\nprint(np.max(data) - np.min(data))',
            hint: 'Use np.mean(), np.median(), np.std() and round().',
            expectedOutput: '27.0\n26.5\n10.15\n33',
          },
          {
            id: 'l10-stats-basics-ex2',
            title: 'Percentiles and IQR',
            description: 'Calculate percentiles and interquartile range.',
            instructions: ['Import numpy as np', 'Create data = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]', 'Print the 25th percentile (Q1)', 'Print the 75th percentile (Q3)', 'Print the IQR (Q3 - Q1)'],
            starterCode: '',
            solution: 'import numpy as np\n\ndata = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]\nq1 = np.percentile(data, 25)\nq3 = np.percentile(data, 75)\nprint(q1)\nprint(q3)\nprint(q3 - q1)',
            hint: 'Use np.percentile(data, percent). IQR = Q3 - Q1.',
            expectedOutput: '16.25\n38.75\n22.5',
          },
          {
            id: 'l10-stats-basics-ex3',
            title: 'Correlation Analysis',
            description: 'Measure the relationship between two variables.',
            instructions: ['Import numpy as np', 'Create x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', 'Create y = [2, 4, 5, 4, 5, 7, 8, 9, 10, 12]', 'Calculate and print the correlation coefficient rounded to 4 decimal places', 'Print \'Strong positive\' if correlation > 0.7, else \'Weak\''],
            starterCode: '',
            solution: 'import numpy as np\n\nx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\ny = [2, 4, 5, 4, 5, 7, 8, 9, 10, 12]\ncorr = np.corrcoef(x, y)[0, 1]\nprint(round(corr, 4))\nprint(\'Strong positive\' if corr > 0.7 else \'Weak\')',
            hint: 'np.corrcoef(x, y)[0, 1] gives the Pearson correlation coefficient.',
            expectedOutput: '0.9685\nStrong positive',
          },
          {
            id: 'l10-stats-basics-ex4',
            title: 'Z-Score Calculation',
            description: 'Standardize data using z-scores.',
            instructions: ['Import numpy as np', 'Create scores = [70, 80, 85, 90, 95]', 'Calculate z-scores: (x - mean) / std', 'Print z-scores rounded to 2 decimals', 'Print which score index has the highest z-score'],
            starterCode: '',
            solution: 'import numpy as np\n\nscores = np.array([70, 80, 85, 90, 95])\nz = (scores - np.mean(scores)) / np.std(scores)\nprint(np.round(z, 2))\nprint(np.argmax(z))',
            hint: 'Z-score formula: (value - mean) / std. np.argmax returns index of maximum.',
            expectedOutput: '[-1.54 -0.51 -0.   0.51  1.54]\n4',
          },
          {
            id: 'l10-stats-basics-ex5',
            title: 'Distribution Analysis',
            description: 'Analyze a distribution\'s properties.',
            instructions: ['Import numpy as np', 'Set seed to 42', 'Generate 10000 samples from normal distribution with mean=100, std=15', 'Print the mean rounded to 1 decimal', 'Print the percentage of values between 85 and 115 (within 1 std), rounded to 1 decimal', 'Print the percentage of values above 130 (2 std above mean), rounded to 1 decimal'],
            starterCode: '',
            solution: 'import numpy as np\n\nnp.random.seed(42)\nsamples = np.random.normal(100, 15, 10000)\nprint(round(np.mean(samples), 1))\nwithin_1 = np.sum((samples >= 85) & (samples <= 115)) / len(samples) * 100\nprint(round(within_1, 1))\nabove_2 = np.sum(samples > 130) / len(samples) * 100\nprint(round(above_2, 1))',
            hint: 'Use boolean indexing to count values in ranges. Divide by len for percentage.',
            expectedOutput: '100.1\n68.3\n2.3',
          }
        ],
      },
      {
        id: 'data-analysis',
        number: 8,
        title: 'Real-World Data Analysis',
        description: 'Complete end-to-end data analysis workflows.',
        icon: 'Search',
        type: 'exercises',
        lesson: `# Real-World Data Analysis

Data analysis follows a structured workflow: Question -> Collect -> Clean -> Explore -> Analyze -> Communicate.

## The Analysis Workflow
\`\`\`python
import pandas as pd
import numpy as np

# 1. Load/Create data
data = {
    'date': ['2024-01-01', '2024-01-02', '2024-01-03'],
    'product': ['Widget A', 'Widget B', 'Widget A'],
    'revenue': [150, 200, 175],
    'units': [10, 8, 12]
}
df = pd.DataFrame(data)

# 2. Explore
print(df.describe())
print(df.info())

# 3. Transform
df['avg_price'] = df['revenue'] / df['units']
df['date'] = pd.to_datetime(df['date'])

# 4. Analyze
print(df.groupby('product')['revenue'].agg(['sum', 'mean']))
\`\`\`

## Common Analysis Patterns
\`\`\`python
# Top N analysis
top = df.nlargest(3, 'revenue')

# Cross-tabulation
ct = pd.crosstab(df['category'], df['region'])

# Rolling statistics
df['rolling_mean'] = df['revenue'].rolling(window=3).mean()

# Percentage of total
df['pct_total'] = df['revenue'] / df['revenue'].sum() * 100
\`\`\`

## Data Storytelling
1. Start with the big picture (totals, averages)
2. Break down by categories
3. Look for trends over time
4. Identify outliers and anomalies
5. Summarize insights

💡 Always start with questions. What do you want to learn from this data?

⚠️ Don't cherry-pick data that supports your hypothesis. Let the data tell its story.`,
        exercises: [
          {
            id: 'l10-data-analysis-ex1',
            title: 'Sales Data Overview',
            description: 'Perform initial exploration of a sales dataset.',
            instructions: ['Import pandas as pd', 'Create a DataFrame with: \'product\' ([\'Laptop\',\'Phone\',\'Tablet\',\'Laptop\',\'Phone\',\'Tablet\']), \'region\' ([\'North\',\'North\',\'North\',\'South\',\'South\',\'South\']), \'revenue\' ([1200, 800, 400, 1100, 900, 350])', 'Print total revenue', 'Print average revenue per product (sorted by product name)', 'Print which product had the highest single revenue'],
            starterCode: '',
            solution: 'import pandas as pd\n\ndf = pd.DataFrame({\n    \'product\': [\'Laptop\',\'Phone\',\'Tablet\',\'Laptop\',\'Phone\',\'Tablet\'],\n    \'region\': [\'North\',\'North\',\'North\',\'South\',\'South\',\'South\'],\n    \'revenue\': [1200, 800, 400, 1100, 900, 350]\n})\nprint(df[\'revenue\'].sum())\nprint(df.groupby(\'product\')[\'revenue\'].mean().sort_index())\nprint(df.loc[df[\'revenue\'].idxmax(), \'product\'])',
            hint: 'Use .sum() for total, .groupby().mean() for averages, .idxmax() for the row with max value.',
            expectedOutput: '4750\nproduct\nLaptop    1150.0\nPhone      850.0\nTablet     375.0\nName: revenue, dtype: float64\nLaptop',
          },
          {
            id: 'l10-data-analysis-ex2',
            title: 'Percentage Analysis',
            description: 'Calculate proportions and percentages.',
            instructions: ['Import pandas as pd', 'Create a DataFrame with \'category\' ([\'Food\',\'Transport\',\'Housing\',\'Entertainment\',\'Food\',\'Transport\']), \'amount\' ([300, 150, 800, 100, 250, 200])', 'Group by category, sum amounts, and calculate percentage of total for each', 'Print each category and its percentage rounded to 1 decimal, sorted by category name'],
            starterCode: '',
            solution: 'import pandas as pd\n\ndf = pd.DataFrame({\n    \'category\': [\'Food\', \'Transport\', \'Housing\', \'Entertainment\', \'Food\', \'Transport\'],\n    \'amount\': [300, 150, 800, 100, 250, 200]\n})\ntotals = df.groupby(\'category\')[\'amount\'].sum().sort_index()\npcts = (totals / totals.sum() * 100).round(1)\nfor cat, pct in pcts.items():\n    print(f"{cat}: {pct}%")',
            hint: 'Group by category, sum, divide each by total sum, multiply by 100.',
            expectedOutput: 'Entertainment: 5.6%\nFood: 30.6%\nHousing: 44.4%\nTransport: 19.4%',
          },
          {
            id: 'l10-data-analysis-ex3',
            title: 'Comparative Analysis',
            description: 'Compare groups within data.',
            instructions: ['Import pandas as pd', 'Create a DataFrame with \'store\' ([\'A\',\'A\',\'A\',\'B\',\'B\',\'B\']), \'month\' ([1,2,3,1,2,3]), \'sales\' ([100,120,130,90,110,150])', 'Print total sales per store', 'Print which store had higher average sales', 'Print the month with highest sales overall'],
            starterCode: '',
            solution: 'import pandas as pd\n\ndf = pd.DataFrame({\n    \'store\': [\'A\',\'A\',\'A\',\'B\',\'B\',\'B\'],\n    \'month\': [1,2,3,1,2,3],\n    \'sales\': [100,120,130,90,110,150]\n})\nprint(df.groupby(\'store\')[\'sales\'].sum())\navgs = df.groupby(\'store\')[\'sales\'].mean()\nprint(avgs.idxmax())\nprint(df.loc[df[\'sales\'].idxmax(), \'month\'])',
            hint: 'Use groupby for store-level stats, idxmax to find the best performer.',
            expectedOutput: 'store\nA    350\nB    350\nName: sales, dtype: int64\nB\n3',
          },
          {
            id: 'l10-data-analysis-ex4',
            title: 'Data-Driven Insights',
            description: 'Extract actionable insights from data.',
            instructions: ['Import pandas and numpy', 'Create employee data: \'dept\' ([\'Eng\',\'Eng\',\'Eng\',\'Sales\',\'Sales\',\'Sales\',\'HR\',\'HR\']), \'salary\' ([90000,85000,95000,70000,75000,80000,65000,60000]), \'years\' ([5,3,8,4,6,2,7,3])', 'Print mean salary by department (sorted by dept)', 'Print the correlation between years and salary (rounded to 3 decimals)', 'Print the department with highest total salary'],
            starterCode: '',
            solution: 'import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    \'dept\': [\'Eng\',\'Eng\',\'Eng\',\'Sales\',\'Sales\',\'Sales\',\'HR\',\'HR\'],\n    \'salary\': [90000,85000,95000,70000,75000,80000,65000,60000],\n    \'years\': [5,3,8,4,6,2,7,3]\n})\nprint(df.groupby(\'dept\')[\'salary\'].mean().sort_index())\ncorr = np.corrcoef(df[\'years\'], df[\'salary\'])[0,1]\nprint(round(corr, 3))\nprint(df.groupby(\'dept\')[\'salary\'].sum().idxmax())',
            hint: 'Use groupby for dept analysis, np.corrcoef for correlation.',
            expectedOutput: 'dept\nEng      90000.0\nHR       62500.0\nSales    75000.0\nName: salary, dtype: float64\n0.597\nEng',
          },
          {
            id: 'l10-data-analysis-ex5',
            title: 'Full Analysis Report',
            description: 'Produce a complete mini analysis.',
            instructions: ['Import pandas as pd', 'Create a DataFrame with \'quarter\' ([\'Q1\',\'Q2\',\'Q3\',\'Q4\']), \'revenue\' ([50000,65000,72000,80000]), \'costs\' ([35000,40000,42000,45000])', 'Add a \'profit\' column (revenue - costs)', 'Add a \'margin\' column (profit/revenue * 100, rounded to 1 decimal)', 'Print the DataFrame', 'Print total annual profit', 'Print the quarter with highest margin'],
            starterCode: '',
            solution: 'import pandas as pd\n\ndf = pd.DataFrame({\n    \'quarter\': [\'Q1\', \'Q2\', \'Q3\', \'Q4\'],\n    \'revenue\': [50000, 65000, 72000, 80000],\n    \'costs\': [35000, 40000, 42000, 45000]\n})\ndf[\'profit\'] = df[\'revenue\'] - df[\'costs\']\ndf[\'margin\'] = (df[\'profit\'] / df[\'revenue\'] * 100).round(1)\nprint(df)\nprint(df[\'profit\'].sum())\nprint(df.loc[df[\'margin\'].idxmax(), \'quarter\'])',
            hint: 'Profit = revenue - costs. Margin = profit/revenue * 100. Use idxmax to find best quarter.',
            expectedOutput: '  quarter  revenue  costs  profit  margin\n0      Q1    50000  35000   15000    30.0\n1      Q2    65000  40000   25000    38.5\n2      Q3    72000  42000   30000    41.7\n3      Q4    80000  45000   35000    43.8\n105000\nQ4',
          }
        ],
      }
    ],
  },
  {
    id: 'ml-ai',
    title: 'Machine Learning & AI',
    subtitle: 'Build Intelligent Systems',
    description: 'Build intelligent systems with machine learning.',
    icon: 'Brain',
    color: 'purple',
    categories: [
      {
        id: 'ml-concepts',
        number: 1,
        title: 'ML Fundamentals',
        description: 'Understand core machine learning concepts: supervised vs unsupervised, training, and evaluation.',
        icon: 'Lightbulb',
        type: 'exercises',
        lesson: `# Machine Learning Fundamentals

Machine Learning (ML) lets computers learn patterns from data instead of being explicitly programmed.

## Types of ML
- **Supervised Learning**: Learn from labeled data (input -> output pairs). Examples: spam detection, price prediction.
- **Unsupervised Learning**: Find patterns in unlabeled data. Examples: customer segmentation, anomaly detection.
- **Reinforcement Learning**: Learn through trial and reward. Examples: game AI, robotics.

## The ML Workflow
\`\`\`python
# 1. Prepare data
# 2. Split into train/test
# 3. Choose a model
# 4. Train (fit) the model
# 5. Evaluate on test data
# 6. Make predictions
\`\`\`

## Train/Test Split
\`\`\`python
import numpy as np

np.random.seed(42)
data = np.arange(100)
np.random.shuffle(data)
train = data[:80]  # 80% for training
test = data[80:]   # 20% for testing
print(f"Train size: {len(train)}, Test size: {len(test)}")
>>> Train size: 80, Test size: 20
\`\`\`

## Bias vs Variance
- **High Bias (underfitting)**: Model too simple, misses patterns
- **High Variance (overfitting)**: Model too complex, memorizes noise
- **Goal**: Balance between the two

## Feature Engineering
\`\`\`python
# Raw data
ages = [25, 30, 35]
# Engineered features
age_groups = ['young' if a < 30 else 'mid' for a in ages]
\`\`\`

💡 Start simple! A well-tuned linear model often beats a poorly-tuned complex one.

⚠️ Always evaluate on data the model has NOT seen during training.`,
        exercises: [
          {
            id: 'l11-ml-concepts-ex1',
            title: 'Train-Test Split',
            description: 'Implement a basic train-test split.',
            instructions: ['Import numpy as np and set seed to 42', 'Create X = np.arange(20).reshape(10, 2) and y = np.array([0,0,0,1,1,1,0,1,0,1])', 'Shuffle indices and split: first 7 for train, last 3 for test', 'Print train and test sizes for both X and y'],
            starterCode: '',
            solution: 'import numpy as np\n\nnp.random.seed(42)\nX = np.arange(20).reshape(10, 2)\ny = np.array([0,0,0,1,1,1,0,1,0,1])\nidx = np.arange(10)\nnp.random.shuffle(idx)\ntrain_idx, test_idx = idx[:7], idx[7:]\nX_train, X_test = X[train_idx], X[test_idx]\ny_train, y_test = y[train_idx], y[test_idx]\nprint(f"X_train: {X_train.shape}, X_test: {X_test.shape}")\nprint(f"y_train: {y_train.shape}, y_test: {y_test.shape}")',
            hint: 'Create shuffled indices, then use array indexing to split X and y.',
            expectedOutput: 'X_train: (7, 2), X_test: (3, 2)\ny_train: (7,), y_test: (3,)',
          },
          {
            id: 'l11-ml-concepts-ex2',
            title: 'Feature Scaling',
            description: 'Normalize features to a standard range.',
            instructions: ['Import numpy as np', 'Create data = np.array([[100, 0.5], [200, 0.8], [150, 0.3], [300, 0.9]])', 'Implement min-max scaling: (x - min) / (max - min) for each column', 'Print the scaled data rounded to 2 decimals'],
            starterCode: '',
            solution: 'import numpy as np\n\ndata = np.array([[100, 0.5], [200, 0.8], [150, 0.3], [300, 0.9]])\nscaled = (data - data.min(axis=0)) / (data.max(axis=0) - data.min(axis=0))\nprint(np.round(scaled, 2))',
            hint: 'Min-max scaling: (x - min) / (max - min). Use axis=0 for column-wise operations.',
            expectedOutput: '[[0.   0.33]\n [0.5  0.83]\n [0.25 0.  ]\n [1.   1.  ]]',
          },
          {
            id: 'l11-ml-concepts-ex3',
            title: 'Distance Calculation',
            description: 'Calculate Euclidean distance for k-NN concepts.',
            instructions: ['Import numpy as np', 'Create point_a = np.array([1, 2]) and point_b = np.array([4, 6])', 'Calculate Euclidean distance and print it', 'Create 3 training points: [[0,0], [3,3], [6,6]] with labels [0, 0, 1]', 'Find which training point is closest to query = [2, 2] and print its label'],
            starterCode: '',
            solution: 'import numpy as np\n\npoint_a = np.array([1, 2])\npoint_b = np.array([4, 6])\ndist = np.sqrt(np.sum((point_a - point_b)**2))\nprint(dist)\n\ntrain_points = np.array([[0,0], [3,3], [6,6]])\nlabels = np.array([0, 0, 1])\nquery = np.array([2, 2])\ndistances = np.sqrt(np.sum((train_points - query)**2, axis=1))\nprint(labels[np.argmin(distances)])',
            hint: 'Euclidean distance = sqrt(sum((a-b)^2)). Use np.argmin to find closest point.',
            expectedOutput: '5.0\n0',
          },
          {
            id: 'l11-ml-concepts-ex4',
            title: 'Simple Linear Predictor',
            description: 'Build a basic linear prediction from scratch.',
            instructions: ['Import numpy as np', 'Create X = [1, 2, 3, 4, 5] and y = [2.1, 3.9, 6.2, 7.8, 10.1]', 'Calculate slope and intercept using: slope = sum((X-mean_X)*(y-mean_y)) / sum((X-mean_X)^2)', 'Print slope rounded to 2 decimals', 'Predict y for X=6 and print rounded to 2 decimals'],
            starterCode: '',
            solution: 'import numpy as np\n\nX = np.array([1, 2, 3, 4, 5], dtype=float)\ny = np.array([2.1, 3.9, 6.2, 7.8, 10.1])\nslope = np.sum((X - X.mean()) * (y - y.mean())) / np.sum((X - X.mean())**2)\nintercept = y.mean() - slope * X.mean()\nprint(round(slope, 2))\nprediction = slope * 6 + intercept\nprint(round(prediction, 2))',
            hint: 'Linear regression: slope = cov(X,y)/var(X), intercept = mean_y - slope*mean_X.',
            expectedOutput: '1.97\n12.1',
          },
          {
            id: 'l11-ml-concepts-ex5',
            title: 'Confusion Matrix from Scratch',
            description: 'Build a confusion matrix to evaluate predictions.',
            instructions: ['Create actual = [1,1,0,1,0,0,1,0,1,0]', 'Create predicted = [1,0,0,1,0,1,1,0,1,0]', 'Calculate TP, TN, FP, FN', 'Print them in format: \'TP=X TN=X FP=X FN=X\'', 'Print accuracy as percentage rounded to 1 decimal'],
            starterCode: '',
            solution: 'actual =    [1,1,0,1,0,0,1,0,1,0]\npredicted = [1,0,0,1,0,1,1,0,1,0]\n\nTP = sum(1 for a, p in zip(actual, predicted) if a == 1 and p == 1)\nTN = sum(1 for a, p in zip(actual, predicted) if a == 0 and p == 0)\nFP = sum(1 for a, p in zip(actual, predicted) if a == 0 and p == 1)\nFN = sum(1 for a, p in zip(actual, predicted) if a == 1 and p == 0)\nprint(f\'TP={TP} TN={TN} FP={FP} FN={FN}\')\naccuracy = (TP + TN) / len(actual) * 100\nprint(f\'{accuracy:.1f}%\')',
            hint: 'TP: actual=1,pred=1. TN: actual=0,pred=0. FP: actual=0,pred=1. FN: actual=1,pred=0.',
            expectedOutput: 'TP=4 TN=4 FP=1 FN=1\n80.0%',
          }
        ],
      },
      {
        id: 'sklearn-basics',
        number: 2,
        title: 'Scikit-Learn Basics',
        description: 'Learn the scikit-learn API for model training and prediction.',
        icon: 'Cog',
        type: 'exercises',
        lesson: `# Scikit-Learn Basics

Scikit-learn provides a consistent API for all ML models: create, fit, predict.

## The Scikit-Learn Pattern
\`\`\`python
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import numpy as np

# 1. Prepare data
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# 2. Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 3. Create & train model
model = LinearRegression()
model.fit(X_train, y_train)

# 4. Predict
predictions = model.predict(X_test)
\`\`\`

## Preprocessing
\`\`\`python
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)  # Use same scaling!
\`\`\`

## Pipelines
\`\`\`python
from sklearn.pipeline import Pipeline

pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('model', LinearRegression())
])
pipe.fit(X_train, y_train)
predictions = pipe.predict(X_test)
\`\`\`

💡 Always fit preprocessing on training data only, then transform both train and test.

⚠️ Don't use fit_transform on test data — it would leak test information!

## Model Parameters
\`\`\`python
print(model.coef_)       # Learned weights
print(model.intercept_)  # Bias term
print(model.score(X_test, y_test))  # R² score
\`\`\``,
        exercises: [
          {
            id: 'l11-sklearn-basics-ex1',
            title: 'Train-Test Split with Sklearn',
            description: 'Split data properly using sklearn.',
            instructions: ['Import train_test_split from sklearn.model_selection and numpy', 'Create X = np.arange(20).reshape(10, 2) and y = np.array([0,1,0,1,0,1,0,1,0,1])', 'Split with test_size=0.3 and random_state=42', 'Print X_train shape and X_test shape'],
            starterCode: '',
            solution: 'from sklearn.model_selection import train_test_split\nimport numpy as np\n\nX = np.arange(20).reshape(10, 2)\ny = np.array([0,1,0,1,0,1,0,1,0,1])\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)\nprint(X_train.shape)\nprint(X_test.shape)',
            hint: 'train_test_split returns X_train, X_test, y_train, y_test in that order.',
            expectedOutput: '(7, 2)\n(3, 2)',
          },
          {
            id: 'l11-sklearn-basics-ex2',
            title: 'Standard Scaling',
            description: 'Standardize features to zero mean and unit variance.',
            instructions: ['Import StandardScaler from sklearn.preprocessing and numpy', 'Create data = np.array([[10, 1000], [20, 2000], [30, 3000], [40, 4000]])', 'Fit a StandardScaler and transform the data', 'Print the means of each column rounded to 0 decimals', 'Print the stds of each column rounded to 0 decimals'],
            starterCode: '',
            solution: 'from sklearn.preprocessing import StandardScaler\nimport numpy as np\n\ndata = np.array([[10, 1000], [20, 2000], [30, 3000], [40, 4000]], dtype=float)\nscaler = StandardScaler()\nscaled = scaler.fit_transform(data)\nprint(np.round(scaled.mean(axis=0), 0))\nprint(np.round(scaled.std(axis=0), 0))',
            hint: 'StandardScaler centers data to mean=0 and std=1.',
            expectedOutput: '[0. 0.]\n[1. 1.]',
          },
          {
            id: 'l11-sklearn-basics-ex3',
            title: 'Simple Linear Regression',
            description: 'Train and evaluate a linear regression model.',
            instructions: ['Import LinearRegression from sklearn.linear_model and numpy', 'Create X = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]] and y = [2,4,6,8,10,12,14,16,18,20]', 'Fit a LinearRegression model', 'Print the coefficient (slope) rounded to 1 decimal', 'Print the prediction for X=[[15]] rounded to 1 decimal'],
            starterCode: '',
            solution: 'from sklearn.linear_model import LinearRegression\nimport numpy as np\n\nX = np.array([[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]])\ny = np.array([2,4,6,8,10,12,14,16,18,20])\nmodel = LinearRegression()\nmodel.fit(X, y)\nprint(round(model.coef_[0], 1))\nprint(round(model.predict([[15]])[0], 1))',
            hint: 'model.coef_ gives slope, model.predict([[value]]) makes predictions.',
            expectedOutput: '2.0\n30.0',
          },
          {
            id: 'l11-sklearn-basics-ex4',
            title: 'Pipeline Construction',
            description: 'Build a preprocessing + model pipeline.',
            instructions: ['Import Pipeline, StandardScaler, LinearRegression, and numpy', 'Create X = [[1],[2],[3],[4],[5]] and y = [1.5, 3.5, 5.5, 7.5, 9.5]', 'Create a Pipeline with steps: (\'scaler\', StandardScaler()), (\'model\', LinearRegression())', 'Fit the pipeline and print the R² score on training data rounded to 2 decimals', 'Print \'Pipeline works!\' if score > 0.9'],
            starterCode: '',
            solution: 'from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LinearRegression\nimport numpy as np\n\nX = np.array([[1],[2],[3],[4],[5]], dtype=float)\ny = np.array([1.5, 3.5, 5.5, 7.5, 9.5])\npipe = Pipeline([\n    (\'scaler\', StandardScaler()),\n    (\'model\', LinearRegression())\n])\npipe.fit(X, y)\nscore = pipe.score(X, y)\nprint(round(score, 2))\nif score > 0.9:\n    print(\'Pipeline works!\')',
            hint: 'Pipeline takes a list of (name, transformer/model) tuples. Use .score() for R².',
            expectedOutput: '1.0\nPipeline works!',
          },
          {
            id: 'l11-sklearn-basics-ex5',
            title: 'Label Encoding',
            description: 'Convert categorical labels to numbers.',
            instructions: ['Import LabelEncoder from sklearn.preprocessing', 'Create labels = [\'cat\', \'dog\', \'bird\', \'cat\', \'bird\', \'dog\', \'dog\']', 'Fit and transform with LabelEncoder', 'Print the encoded values', 'Print the classes (unique labels) found by the encoder'],
            starterCode: '',
            solution: 'from sklearn.preprocessing import LabelEncoder\n\nlabels = [\'cat\', \'dog\', \'bird\', \'cat\', \'bird\', \'dog\', \'dog\']\nle = LabelEncoder()\nencoded = le.fit_transform(labels)\nprint(encoded)\nprint(le.classes_)',
            hint: 'LabelEncoder().fit_transform(labels) encodes strings as integers. .classes_ shows the mapping.',
            expectedOutput: '[1 2 0 1 0 2 2]\n[\'bird\' \'cat\' \'dog\']',
          }
        ],
      },
      {
        id: 'sklearn-models',
        number: 3,
        title: 'Classification & Regression',
        description: 'Build classification and regression models with scikit-learn.',
        icon: 'Target',
        type: 'exercises',
        lesson: `# Classification & Regression Models

## Linear Regression
Predicts continuous values by fitting a line: y = w*x + b
\`\`\`python
from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X_train, y_train)
\`\`\`

## Logistic Regression
Despite its name, it's a classifier! Uses sigmoid to output probabilities.
\`\`\`python
from sklearn.linear_model import LogisticRegression
clf = LogisticRegression()
clf.fit(X_train, y_train)
probs = clf.predict_proba(X_test)  # Probabilities
\`\`\`

## Decision Trees
Learns if/else rules from data:
\`\`\`python
from sklearn.tree import DecisionTreeClassifier
tree = DecisionTreeClassifier(max_depth=3, random_state=42)
tree.fit(X_train, y_train)
\`\`\`

## Key Parameters
- **max_depth**: Controls tree complexity (prevents overfitting)
- **C** (Logistic): Regularization strength (smaller = more regularization)
- **random_state**: Ensures reproducible results

## Choosing a Model
- Start with simple models (Linear/Logistic Regression)
- If underfitting, try Decision Trees or ensemble methods
- Always compare multiple models

💡 Decision trees are great for interpretability — you can visualize the learned rules.

⚠️ Decision trees without depth limits will overfit. Always set max_depth.`,
        exercises: [
          {
            id: 'l11-sklearn-models-ex1',
            title: 'Logistic Regression Classifier',
            description: 'Build a binary classifier with logistic regression.',
            instructions: ['Import LogisticRegression, numpy, set random_state=42', 'Create X with 8 samples, 2 features: [[1,2],[2,3],[3,1],[4,3],[5,5],[6,4],[7,6],[8,5]]', 'Create y = [0,0,0,0,1,1,1,1]', 'Train a LogisticRegression(random_state=42)', 'Predict for [[3,2], [7,5]] and print predictions'],
            starterCode: '',
            solution: 'from sklearn.linear_model import LogisticRegression\nimport numpy as np\n\nX = np.array([[1,2],[2,3],[3,1],[4,3],[5,5],[6,4],[7,6],[8,5]])\ny = np.array([0,0,0,0,1,1,1,1])\nmodel = LogisticRegression(random_state=42)\nmodel.fit(X, y)\npreds = model.predict([[3,2], [7,5]])\nprint(preds)',
            hint: 'LogisticRegression for classification. predict() returns class labels.',
            expectedOutput: '[0 1]',
          },
          {
            id: 'l11-sklearn-models-ex2',
            title: 'Decision Tree Classifier',
            description: 'Train a decision tree and examine its structure.',
            instructions: ['Import DecisionTreeClassifier from sklearn.tree and numpy', 'Create X = [[0,0],[1,1],[2,0],[3,1],[0,2],[1,3],[2,2],[3,3]]', 'Create y = [0,0,0,0,1,1,1,1]', 'Train DecisionTreeClassifier(max_depth=2, random_state=42)', 'Print predictions for [[1,0], [1,2]]', 'Print the tree depth'],
            starterCode: '',
            solution: 'from sklearn.tree import DecisionTreeClassifier\nimport numpy as np\n\nX = np.array([[0,0],[1,1],[2,0],[3,1],[0,2],[1,3],[2,2],[3,3]])\ny = np.array([0,0,0,0,1,1,1,1])\ntree = DecisionTreeClassifier(max_depth=2, random_state=42)\ntree.fit(X, y)\nprint(tree.predict([[1,0], [1,2]]))\nprint(tree.get_depth())',
            hint: 'Use max_depth to limit tree complexity. get_depth() returns actual tree depth.',
            expectedOutput: '[0 1]\n1',
          },
          {
            id: 'l11-sklearn-models-ex3',
            title: 'Multi-class Classification',
            description: 'Classify data into multiple categories.',
            instructions: ['Import LogisticRegression and numpy', 'Create X: 9 samples with 2 features representing 3 classes', 'X = [[1,1],[1,2],[2,1],[5,5],[5,6],[6,5],[9,1],[9,2],[10,1]]', 'y = [0,0,0,1,1,1,2,2,2]', 'Train LogisticRegression(random_state=42, max_iter=200)', 'Predict class for [[2,2], [5,5], [9,1]] and print', 'Print number of classes'],
            starterCode: '',
            solution: 'from sklearn.linear_model import LogisticRegression\nimport numpy as np\n\nX = np.array([[1,1],[1,2],[2,1],[5,5],[5,6],[6,5],[9,1],[9,2],[10,1]])\ny = np.array([0,0,0,1,1,1,2,2,2])\nmodel = LogisticRegression(random_state=42, max_iter=200)\nmodel.fit(X, y)\nprint(model.predict([[2,2], [5,5], [9,1]]))\nprint(len(model.classes_))',
            hint: 'Logistic regression handles multi-class automatically. model.classes_ shows all classes.',
            expectedOutput: '[0 1 2]\n3',
          },
          {
            id: 'l11-sklearn-models-ex4',
            title: 'Polynomial Regression',
            description: 'Fit non-linear data with polynomial features.',
            instructions: ['Import LinearRegression, PolynomialFeatures, numpy', 'Create X = [[1],[2],[3],[4],[5]] and y = [1, 4, 9, 16, 25] (quadratic)', 'Create polynomial features of degree 2', 'Fit LinearRegression on transformed features', 'Predict for X=[[6]] and print rounded to 1 decimal'],
            starterCode: '',
            solution: 'from sklearn.linear_model import LinearRegression\nfrom sklearn.preprocessing import PolynomialFeatures\nimport numpy as np\n\nX = np.array([[1],[2],[3],[4],[5]], dtype=float)\ny = np.array([1, 4, 9, 16, 25], dtype=float)\npoly = PolynomialFeatures(degree=2)\nX_poly = poly.fit_transform(X)\nmodel = LinearRegression()\nmodel.fit(X_poly, y)\nX_new = poly.transform([[6]])\nprint(round(model.predict(X_new)[0], 1))',
            hint: 'PolynomialFeatures transforms [x] into [1, x, x²]. Then fit a linear model.',
            expectedOutput: '36.0',
          },
          {
            id: 'l11-sklearn-models-ex5',
            title: 'Feature Importance',
            description: 'Determine which features matter most.',
            instructions: ['Import DecisionTreeClassifier and numpy', 'np.random.seed(42)', 'Create X with 3 features: feature 0 is random noise, feature 1 is informative, feature 2 is random noise', 'X = np.random.randn(100, 3); y = (X[:, 1] > 0).astype(int)', 'Train DecisionTreeClassifier(random_state=42)', 'Print feature importances rounded to 3 decimals', 'Print which feature index is most important'],
            starterCode: '',
            solution: 'from sklearn.tree import DecisionTreeClassifier\nimport numpy as np\n\nnp.random.seed(42)\nX = np.random.randn(100, 3)\ny = (X[:, 1] > 0).astype(int)\ntree = DecisionTreeClassifier(random_state=42)\ntree.fit(X, y)\nprint(np.round(tree.feature_importances_, 3))\nprint(np.argmax(tree.feature_importances_))',
            hint: 'tree.feature_importances_ gives importance of each feature. np.argmax finds the most important.',
            expectedOutput: '[0.048 0.872 0.08 ]\n1',
          }
        ],
      },
      {
        id: 'model-eval',
        number: 4,
        title: 'Model Evaluation',
        description: 'Evaluate models with accuracy, precision, recall, F1, and cross-validation.',
        icon: 'CheckCircle',
        type: 'exercises',
        lesson: `# Model Evaluation

Evaluating ML models properly is critical. A model that seems good on training data may fail on new data.

## Classification Metrics
\`\`\`python
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score

y_true = [1, 0, 1, 1, 0, 1, 0, 0]
y_pred = [1, 0, 1, 0, 0, 1, 1, 0]

print(f"Accuracy:  {accuracy_score(y_true, y_pred):.2f}")
>>> Accuracy:  0.75
print(f"Precision: {precision_score(y_true, y_pred):.2f}")
>>> Precision: 0.75
print(f"Recall:    {recall_score(y_true, y_pred):.2f}")
>>> Recall: 0.75
print(f"F1:        {f1_score(y_true, y_pred):.2f}")
>>> F1: 0.75
\`\`\`

## Confusion Matrix
\`\`\`python
from sklearn.metrics import confusion_matrix
cm = confusion_matrix(y_true, y_pred)
# [[TN, FP],
#  [FN, TP]]
\`\`\`

## Cross-Validation
Instead of a single train/test split, test on multiple folds:
\`\`\`python
from sklearn.model_selection import cross_val_score
scores = cross_val_score(model, X, y, cv=5)
print(f"Mean: {scores.mean():.2f} (+/- {scores.std():.2f})")
\`\`\`

## Regression Metrics
\`\`\`python
from sklearn.metrics import mean_squared_error, r2_score
mse = mean_squared_error(y_true, y_pred)
r2 = r2_score(y_true, y_pred)
rmse = mse ** 0.5
\`\`\`

💡 Use F1 score when classes are imbalanced. Accuracy can be misleading.

⚠️ Never report training accuracy as model performance — always use test or cross-validation scores.`,
        exercises: [
          {
            id: 'l11-model-eval-ex1',
            title: 'Classification Metrics',
            description: 'Calculate accuracy, precision, recall, and F1.',
            instructions: ['Import accuracy_score, precision_score, recall_score, f1_score from sklearn.metrics', 'y_true = [1, 0, 1, 1, 0, 1, 0, 0, 1, 0]', 'y_pred = [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]', 'Print each metric rounded to 2 decimals, one per line'],
            starterCode: '',
            solution: 'from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score\n\ny_true = [1, 0, 1, 1, 0, 1, 0, 0, 1, 0]\ny_pred = [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]\nprint(round(accuracy_score(y_true, y_pred), 2))\nprint(round(precision_score(y_true, y_pred), 2))\nprint(round(recall_score(y_true, y_pred), 2))\nprint(round(f1_score(y_true, y_pred), 2))',
            hint: 'Import each metric function and call with (y_true, y_pred).',
            expectedOutput: '0.8\n0.8\n0.8\n0.8',
          },
          {
            id: 'l11-model-eval-ex2',
            title: 'Confusion Matrix Analysis',
            description: 'Build and interpret a confusion matrix.',
            instructions: ['Import confusion_matrix from sklearn.metrics', 'y_true = [0,0,0,1,1,1,1,0,1,0]', 'y_pred = [0,1,0,1,0,1,1,0,1,0]', 'Print the confusion matrix', 'Calculate and print accuracy from the matrix (TP+TN)/total'],
            starterCode: '',
            solution: 'from sklearn.metrics import confusion_matrix\n\ny_true = [0,0,0,1,1,1,1,0,1,0]\ny_pred = [0,1,0,1,0,1,1,0,1,0]\ncm = confusion_matrix(y_true, y_pred)\nprint(cm)\naccuracy = (cm[0,0] + cm[1,1]) / cm.sum()\nprint(round(accuracy, 1))',
            hint: 'confusion_matrix returns [[TN,FP],[FN,TP]]. Accuracy = (TN+TP)/total.',
            expectedOutput: '[[4 1]\n [1 4]]\n0.8',
          },
          {
            id: 'l11-model-eval-ex3',
            title: 'Cross-Validation',
            description: 'Evaluate a model with k-fold cross-validation.',
            instructions: ['Import cross_val_score, LogisticRegression, numpy', 'np.random.seed(42)', 'X = np.random.randn(50, 2); y = (X[:, 0] + X[:, 1] > 0).astype(int)', 'Run 5-fold cross-validation with LogisticRegression(random_state=42)', 'Print mean score rounded to 2 decimals', 'Print std rounded to 2 decimals'],
            starterCode: '',
            solution: 'from sklearn.model_selection import cross_val_score\nfrom sklearn.linear_model import LogisticRegression\nimport numpy as np\n\nnp.random.seed(42)\nX = np.random.randn(50, 2)\ny = (X[:, 0] + X[:, 1] > 0).astype(int)\nmodel = LogisticRegression(random_state=42)\nscores = cross_val_score(model, X, y, cv=5)\nprint(round(scores.mean(), 2))\nprint(round(scores.std(), 2))',
            hint: 'cross_val_score(model, X, y, cv=5) returns array of scores per fold.',
            expectedOutput: '0.88\n0.07',
          },
          {
            id: 'l11-model-eval-ex4',
            title: 'Regression Evaluation',
            description: 'Evaluate a regression model with MSE and R².',
            instructions: ['Import mean_squared_error, r2_score from sklearn.metrics', 'y_true = [3.0, 5.0, 2.5, 7.0, 4.5]', 'y_pred = [2.8, 5.2, 2.0, 6.8, 4.8]', 'Print MSE rounded to 2 decimals', 'Print RMSE rounded to 2 decimals', 'Print R² score rounded to 2 decimals'],
            starterCode: '',
            solution: 'from sklearn.metrics import mean_squared_error, r2_score\n\ny_true = [3.0, 5.0, 2.5, 7.0, 4.5]\ny_pred = [2.8, 5.2, 2.0, 6.8, 4.8]\nmse = mean_squared_error(y_true, y_pred)\nprint(round(mse, 2))\nprint(round(mse ** 0.5, 2))\nprint(round(r2_score(y_true, y_pred), 2))',
            hint: 'MSE = mean_squared_error(). RMSE = sqrt(MSE). R² = r2_score().',
            expectedOutput: '0.09\n0.31\n0.97',
          },
          {
            id: 'l11-model-eval-ex5',
            title: 'Model Comparison',
            description: 'Compare multiple models on the same data.',
            instructions: ['Import LogisticRegression, DecisionTreeClassifier, cross_val_score, numpy', 'np.random.seed(42)', 'X = np.random.randn(100, 3); y = (X[:, 0] > 0).astype(int)', 'Compare LogisticRegression(random_state=42) and DecisionTreeClassifier(random_state=42, max_depth=3) using 5-fold CV', 'Print each model name and mean score rounded to 2 decimals', 'Print which model is better'],
            starterCode: '',
            solution: 'from sklearn.linear_model import LogisticRegression\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.model_selection import cross_val_score\nimport numpy as np\n\nnp.random.seed(42)\nX = np.random.randn(100, 3)\ny = (X[:, 0] > 0).astype(int)\n\nlr = LogisticRegression(random_state=42)\ndt = DecisionTreeClassifier(random_state=42, max_depth=3)\n\nlr_score = cross_val_score(lr, X, y, cv=5).mean()\ndt_score = cross_val_score(dt, X, y, cv=5).mean()\n\nprint(f"LogisticRegression: {round(lr_score, 2)}")\nprint(f"DecisionTree: {round(dt_score, 2)}")\nprint(\'LogisticRegression\' if lr_score >= dt_score else \'DecisionTree\')',
            hint: 'Run cross_val_score for each model and compare the mean scores.',
            expectedOutput: 'LogisticRegression: 0.87\nDecisionTree: 0.87\nLogisticRegression',
          }
        ],
      },
      {
        id: 'clustering',
        number: 5,
        title: 'Clustering & Unsupervised',
        description: 'Discover patterns with K-Means, PCA, and dimensionality reduction.',
        icon: 'CircleDot',
        type: 'exercises',
        lesson: `# Clustering & Unsupervised Learning

Unsupervised learning finds structure in data without labels.

## K-Means Clustering
K-Means partitions data into K groups by minimizing within-cluster distances:
\`\`\`python
from sklearn.cluster import KMeans
import numpy as np

X = np.array([[1,1],[1,2],[2,1],[8,8],[8,9],[9,8]])
kmeans = KMeans(n_clusters=2, random_state=42, n_init=10)
kmeans.fit(X)
print(kmeans.labels_)
>>> [0 0 0 1 1 1]
print(kmeans.cluster_centers_)
\`\`\`

## Choosing K
The elbow method: plot inertia (sum of squared distances to cluster centers) for different K values. The "elbow" point is a good choice.
\`\`\`python
inertias = []
for k in range(1, 6):
    km = KMeans(n_clusters=k, random_state=42, n_init=10)
    km.fit(X)
    inertias.append(km.inertia_)
\`\`\`

## PCA (Principal Component Analysis)
Reduces dimensions while preserving variance:
\`\`\`python
from sklearn.decomposition import PCA

pca = PCA(n_components=2)
X_reduced = pca.fit_transform(X_high_dim)
print(pca.explained_variance_ratio_)
\`\`\`

💡 Always scale data before clustering or PCA — different scales distort distances.

⚠️ K-Means assumes spherical clusters. For non-spherical data, consider DBSCAN or hierarchical clustering.`,
        exercises: [
          {
            id: 'l11-clustering-ex1',
            title: 'K-Means Clustering',
            description: 'Cluster data into groups with K-Means.',
            instructions: ['Import KMeans from sklearn.cluster and numpy', 'Create X with clear 3 clusters: [[1,1],[1,2],[2,1],[5,5],[5,6],[6,5],[9,1],[9,2],[10,1]]', 'Fit KMeans with n_clusters=3, random_state=42, n_init=10', 'Print the labels', 'Print the number of points in each cluster'],
            starterCode: '',
            solution: 'from sklearn.cluster import KMeans\nimport numpy as np\n\nX = np.array([[1,1],[1,2],[2,1],[5,5],[5,6],[6,5],[9,1],[9,2],[10,1]])\nkmeans = KMeans(n_clusters=3, random_state=42, n_init=10)\nkmeans.fit(X)\nprint(kmeans.labels_)\nfor i in range(3):\n    print(f"Cluster {i}: {np.sum(kmeans.labels_ == i)} points")',
            hint: 'KMeans.labels_ gives cluster assignment. Count with np.sum(labels == i).',
            expectedOutput: '[2 2 2 0 0 0 1 1 1]\nCluster 0: 3 points\nCluster 1: 3 points\nCluster 2: 3 points',
          },
          {
            id: 'l11-clustering-ex2',
            title: 'Elbow Method',
            description: 'Find optimal number of clusters using the elbow method.',
            instructions: ['Import KMeans and numpy', 'np.random.seed(42)', 'Generate 3 clear clusters: 20 points around [0,0], 20 around [5,5], 20 around [10,0]', 'Calculate inertia for k=1 to k=5', 'Print each k and its inertia rounded to 1 decimal'],
            starterCode: '',
            solution: 'from sklearn.cluster import KMeans\nimport numpy as np\n\nnp.random.seed(42)\nc1 = np.random.randn(20, 2) + [0, 0]\nc2 = np.random.randn(20, 2) + [5, 5]\nc3 = np.random.randn(20, 2) + [10, 0]\nX = np.vstack([c1, c2, c3])\n\nfor k in range(1, 6):\n    km = KMeans(n_clusters=k, random_state=42, n_init=10)\n    km.fit(X)\n    print(f"k={k}: {round(km.inertia_, 1)}")',
            hint: 'Inertia drops sharply then flattens. The \'elbow\' is where the rate of decrease slows.',
            expectedOutput: 'k=1: 1816.9\nk=2: 498.0\nk=3: 104.3\nk=4: 72.9\nk=5: 57.1',
          },
          {
            id: 'l11-clustering-ex3',
            title: 'PCA Dimensionality Reduction',
            description: 'Reduce data dimensions with PCA.',
            instructions: ['Import PCA from sklearn.decomposition and numpy', 'np.random.seed(42)', 'Create X = np.random.randn(50, 5) (50 samples, 5 features)', 'Apply PCA to reduce to 2 components', 'Print the shape of transformed data', 'Print the explained variance ratio rounded to 3 decimals', 'Print total explained variance rounded to 3 decimals'],
            starterCode: '',
            solution: 'from sklearn.decomposition import PCA\nimport numpy as np\n\nnp.random.seed(42)\nX = np.random.randn(50, 5)\npca = PCA(n_components=2)\nX_reduced = pca.fit_transform(X)\nprint(X_reduced.shape)\nprint(np.round(pca.explained_variance_ratio_, 3))\nprint(round(sum(pca.explained_variance_ratio_), 3))',
            hint: 'PCA(n_components=2) keeps top 2 components. explained_variance_ratio_ shows info retained.',
            expectedOutput: '(50, 2)\n[0.278 0.239]\n0.518',
          },
          {
            id: 'l11-clustering-ex4',
            title: 'Cluster Analysis',
            description: 'Analyze cluster characteristics.',
            instructions: ['Import KMeans, numpy, and pandas as pd', 'np.random.seed(42)', 'Create data: 30 samples with \'age\' (uniform 18-65) and \'spending\' (uniform 10-100)', 'Use np.random.randint for both', 'Cluster into 3 groups using KMeans(random_state=42, n_init=10)', 'Print mean age and spending per cluster using pandas groupby'],
            starterCode: '',
            solution: 'from sklearn.cluster import KMeans\nimport numpy as np\nimport pandas as pd\n\nnp.random.seed(42)\nage = np.random.randint(18, 66, 30)\nspending = np.random.randint(10, 101, 30)\nX = np.column_stack([age, spending])\n\nkmeans = KMeans(n_clusters=3, random_state=42, n_init=10)\nlabels = kmeans.fit_predict(X)\n\ndf = pd.DataFrame({\'age\': age, \'spending\': spending, \'cluster\': labels})\nprint(df.groupby(\'cluster\')[[\'age\', \'spending\']].mean().round(1))',
            hint: 'Use np.column_stack to combine features. Create a DataFrame with cluster labels.',
            expectedOutput: '         age  spending\ncluster                \n0       31.7      84.0\n1       49.5      42.0\n2       33.6      26.1',
          },
          {
            id: 'l11-clustering-ex5',
            title: 'Silhouette Score',
            description: 'Evaluate clustering quality with silhouette score.',
            instructions: ['Import KMeans, silhouette_score from sklearn, numpy', 'np.random.seed(42)', 'Create 3 well-separated clusters: 20 points each around [0,0], [10,10], [20,0]', 'Calculate silhouette score for k=2, 3, and 4', 'Print each k and its score rounded to 3 decimals', 'Print which k has the best score'],
            starterCode: '',
            solution: 'from sklearn.cluster import KMeans\nfrom sklearn.metrics import silhouette_score\nimport numpy as np\n\nnp.random.seed(42)\nc1 = np.random.randn(20, 2) + [0, 0]\nc2 = np.random.randn(20, 2) + [10, 10]\nc3 = np.random.randn(20, 2) + [20, 0]\nX = np.vstack([c1, c2, c3])\n\nbest_k, best_score = 0, -1\nfor k in [2, 3, 4]:\n    km = KMeans(n_clusters=k, random_state=42, n_init=10)\n    labels = km.fit_predict(X)\n    score = silhouette_score(X, labels)\n    print(f"k={k}: {round(score, 3)}")\n    if score > best_score:\n        best_k, best_score = k, score\nprint(f"Best k: {best_k}")',
            hint: 'silhouette_score measures how similar points are to their own cluster vs others. Higher = better.',
            expectedOutput: 'k=2: 0.583\nk=3: 0.748\nk=4: 0.609\nBest k: 3',
          }
        ],
      },
      {
        id: 'nlp-basics',
        number: 6,
        title: 'NLP Basics',
        description: 'Process and analyze text with tokenization, TF-IDF, and sentiment analysis.',
        icon: 'MessageSquare',
        type: 'exercises',
        lesson: `# Natural Language Processing Basics

NLP enables computers to understand and process human language.

## Tokenization
Breaking text into words or sentences:
\`\`\`python
text = "Hello world! This is NLP."
words = text.lower().split()
print(words)
>>> ['hello', 'world!', 'this', 'is', 'nlp.']

# Better: remove punctuation
import re
words = re.findall(r'\\w+', text.lower())
print(words)
>>> ['hello', 'world', 'this', 'is', 'nlp']
\`\`\`

## Bag of Words
Represent text as word frequency vectors:
\`\`\`python
from sklearn.feature_extraction.text import CountVectorizer

docs = ["I love python", "Python is great", "I love coding"]
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(docs)
print(vectorizer.get_feature_names_out())
print(X.toarray())
\`\`\`

## TF-IDF
Words that appear in many documents are less informative:
\`\`\`python
from sklearn.feature_extraction.text import TfidfVectorizer

tfidf = TfidfVectorizer()
X = tfidf.fit_transform(docs)
\`\`\`

## Simple Sentiment Analysis
\`\`\`python
positive_words = {'good', 'great', 'love', 'excellent', 'happy'}
negative_words = {'bad', 'terrible', 'hate', 'awful', 'sad'}

def sentiment(text):
    words = set(text.lower().split())
    pos = len(words & positive_words)
    neg = len(words & negative_words)
    return 'positive' if pos > neg else 'negative' if neg > pos else 'neutral'
\`\`\`

💡 Text preprocessing (lowercasing, removing punctuation, stopwords) hugely impacts results.

⚠️ Simple word-based approaches miss context, sarcasm, and negation.`,
        exercises: [
          {
            id: 'l11-nlp-basics-ex1',
            title: 'Text Tokenization',
            description: 'Tokenize and clean text data.',
            instructions: ['Import re', 'text = \'Hello, World! This is a TEST of NLP. Isn\\\'t it great?\'', 'Tokenize into lowercase words (alphanumeric only) using re.findall', 'Print the tokens', 'Print the number of unique tokens'],
            starterCode: '',
            solution: 'import re\n\ntext = "Hello, World! This is a TEST of NLP. Isn\'t it great?"\ntokens = re.findall(r\'\\w+\', text.lower())\nprint(tokens)\nprint(len(set(tokens)))',
            hint: 'Use re.findall(r\'\\w+\', text.lower()) to extract word tokens.',
            expectedOutput: '[\'hello\', \'world\', \'this\', \'is\', \'a\', \'test\', \'of\', \'nlp\', \'isn\', \'t\', \'it\', \'great\']\n12',
          },
          {
            id: 'l11-nlp-basics-ex2',
            title: 'Bag of Words',
            description: 'Convert text to numerical features.',
            instructions: ['Import CountVectorizer from sklearn.feature_extraction.text', 'docs = [\'the cat sat\', \'the dog sat\', \'the cat and dog played\']', 'Create a CountVectorizer and transform the documents', 'Print the feature names', 'Print the dense array representation'],
            starterCode: '',
            solution: 'from sklearn.feature_extraction.text import CountVectorizer\n\ndocs = [\'the cat sat\', \'the dog sat\', \'the cat and dog played\']\nvec = CountVectorizer()\nX = vec.fit_transform(docs)\nprint(list(vec.get_feature_names_out()))\nprint(X.toarray())',
            hint: 'CountVectorizer().fit_transform(docs) creates the bag-of-words matrix.',
            expectedOutput: '[\'and\', \'cat\', \'dog\', \'played\', \'sat\', \'the\']\n[[0 1 0 0 1 1]\n [0 0 1 0 1 1]\n [1 1 1 1 0 1]]',
          },
          {
            id: 'l11-nlp-basics-ex3',
            title: 'TF-IDF Vectorization',
            description: 'Weight words by importance using TF-IDF.',
            instructions: ['Import TfidfVectorizer from sklearn.feature_extraction.text', 'docs = [\'python is great\', \'java is good\', \'python and java are languages\']', 'Create TfidfVectorizer and transform', 'Print the feature names', 'Print the shape of the result', 'Print the TF-IDF values for the first document, rounded to 2 decimals'],
            starterCode: '',
            solution: 'from sklearn.feature_extraction.text import TfidfVectorizer\n\ndocs = [\'python is great\', \'java is good\', \'python and java are languages\']\ntfidf = TfidfVectorizer()\nX = tfidf.fit_transform(docs)\nprint(list(tfidf.get_feature_names_out()))\nprint(X.shape)\nimport numpy as np\nprint(np.round(X.toarray()[0], 2))',
            hint: 'TfidfVectorizer works like CountVectorizer but weights by document frequency.',
            expectedOutput: '[\'and\', \'are\', \'good\', \'great\', \'is\', \'java\', \'languages\', \'python\']\n(3, 8)\n[0.   0.   0.   0.63 0.4  0.   0.   0.48]',
          },
          {
            id: 'l11-nlp-basics-ex4',
            title: 'Word Frequency Analysis',
            description: 'Analyze word frequencies in text.',
            instructions: ['Import re and collections.Counter', 'text = \'the quick brown fox jumps over the lazy dog the fox the dog\'', 'Tokenize into lowercase words', 'Print the 3 most common words with their counts', 'Print total word count'],
            starterCode: '',
            solution: 'import re\nfrom collections import Counter\n\ntext = \'the quick brown fox jumps over the lazy dog the fox the dog\'\ntokens = re.findall(r\'\\w+\', text.lower())\ncounter = Counter(tokens)\nfor word, count in counter.most_common(3):\n    print(f"{word}: {count}")\nprint(len(tokens))',
            hint: 'Use Counter(tokens).most_common(n) for the n most frequent words.',
            expectedOutput: 'the: 4\nfox: 2\ndog: 2\n13',
          },
          {
            id: 'l11-nlp-basics-ex5',
            title: 'Simple Sentiment Classifier',
            description: 'Build a rule-based sentiment analyzer.',
            instructions: ['Create positive_words = {\'good\', \'great\', \'love\', \'excellent\', \'amazing\', \'wonderful\', \'best\', \'happy\'}', 'Create negative_words = {\'bad\', \'terrible\', \'hate\', \'awful\', \'worst\', \'horrible\', \'sad\', \'poor\'}', 'Write a function sentiment(text) that counts positive and negative word matches and returns \'positive\', \'negative\', or \'neutral\'', 'Test on: \'This is a great and wonderful day\', \'The weather is terrible and awful\', \'The sky is blue\'', 'Print the sentiment for each'],
            starterCode: '',
            solution: 'positive_words = {\'good\', \'great\', \'love\', \'excellent\', \'amazing\', \'wonderful\', \'best\', \'happy\'}\nnegative_words = {\'bad\', \'terrible\', \'hate\', \'awful\', \'worst\', \'horrible\', \'sad\', \'poor\'}\n\ndef sentiment(text):\n    words = set(text.lower().split())\n    pos = len(words & positive_words)\n    neg = len(words & negative_words)\n    if pos > neg:\n        return \'positive\'\n    elif neg > pos:\n        return \'negative\'\n    return \'neutral\'\n\ntexts = [\n    \'This is a great and wonderful day\',\n    \'The weather is terrible and awful\',\n    \'The sky is blue\'\n]\nfor t in texts:\n    print(sentiment(t))',
            hint: 'Use set intersection (& operator) to find matching words. Compare counts.',
            expectedOutput: 'positive\nnegative\nneutral',
          }
        ],
      },
      {
        id: 'neural-intro',
        number: 7,
        title: 'Neural Networks Intro',
        description: 'Understand perceptrons, layers, activation functions, and backpropagation concepts.',
        icon: 'Network',
        type: 'exercises',
        lesson: `# Neural Networks Introduction

Neural networks are computing systems inspired by biological brains, made of layers of connected nodes.

## The Perceptron
The simplest neural network unit:
\`\`\`python
import numpy as np

def perceptron(inputs, weights, bias):
    total = np.dot(inputs, weights) + bias
    return 1 if total > 0 else 0

# AND gate
weights = np.array([1, 1])
bias = -1.5
print(perceptron([0, 0], weights, bias))  # 0
print(perceptron([1, 1], weights, bias))  # 1
\`\`\`

## Activation Functions
\`\`\`python
def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def relu(x):
    return np.maximum(0, x)

def tanh(x):
    return np.tanh(x)
\`\`\`

## Forward Pass
Data flows through layers:
\`\`\`python
# Simple 2-layer network
def forward(X, W1, b1, W2, b2):
    hidden = sigmoid(X @ W1 + b1)    # Layer 1
    output = sigmoid(hidden @ W2 + b2) # Layer 2
    return output
\`\`\`

## Backpropagation Concept
1. Forward pass: compute predictions
2. Calculate loss (error)
3. Backward pass: compute gradients using chain rule
4. Update weights: w = w - learning_rate * gradient

## Loss Functions
\`\`\`python
def mse_loss(y_true, y_pred):
    return np.mean((y_true - y_pred) ** 2)

def binary_cross_entropy(y_true, y_pred):
    y_pred = np.clip(y_pred, 1e-7, 1 - 1e-7)
    return -np.mean(y_true * np.log(y_pred) + (1 - y_true) * np.log(1 - y_pred))
\`\`\`

💡 Start with simple architectures and add complexity only if needed.

⚠️ Neural networks need lots of data and compute. For small datasets, traditional ML often works better.`,
        exercises: [
          {
            id: 'l11-neural-intro-ex1',
            title: 'Perceptron Implementation',
            description: 'Build a perceptron that implements logic gates.',
            instructions: ['Import numpy as np', 'Implement a perceptron function: output = 1 if dot(inputs, weights) + bias > 0 else 0', 'Create AND gate: weights=[1,1], bias=-1.5', 'Test all 4 input combinations [0,0], [0,1], [1,0], [1,1]', 'Print each input and output'],
            starterCode: '',
            solution: 'import numpy as np\n\ndef perceptron(inputs, weights, bias):\n    return 1 if np.dot(inputs, weights) + bias > 0 else 0\n\nweights = np.array([1, 1])\nbias = -1.5\n\nfor inputs in [[0,0], [0,1], [1,0], [1,1]]:\n    output = perceptron(inputs, weights, bias)\n    print(f"{inputs} -> {output}")',
            hint: 'AND gate outputs 1 only when both inputs are 1. Use bias=-1.5 with weights=[1,1].',
            expectedOutput: '[0, 0] -> 0\n[0, 1] -> 0\n[1, 0] -> 0\n[1, 1] -> 1',
          },
          {
            id: 'l11-neural-intro-ex2',
            title: 'Activation Functions',
            description: 'Implement and compare activation functions.',
            instructions: ['Import numpy as np', 'Implement sigmoid(x) = 1 / (1 + exp(-x))', 'Implement relu(x) = max(0, x)', 'Test both on values = [-2, -1, 0, 1, 2]', 'Print sigmoid results rounded to 3 decimals', 'Print relu results'],
            starterCode: '',
            solution: 'import numpy as np\n\ndef sigmoid(x):\n    return 1 / (1 + np.exp(-np.array(x, dtype=float)))\n\ndef relu(x):\n    return np.maximum(0, np.array(x))\n\nvalues = [-2, -1, 0, 1, 2]\nprint(np.round(sigmoid(values), 3))\nprint(relu(values))',
            hint: 'Sigmoid squashes to (0,1). ReLU outputs max(0, x).',
            expectedOutput: '[0.119 0.269 0.5   0.731 0.881]\n[0 0 0 1 2]',
          },
          {
            id: 'l11-neural-intro-ex3',
            title: 'Forward Pass',
            description: 'Implement a forward pass through a simple neural network.',
            instructions: ['Import numpy as np and set seed to 42', 'Create input X = np.array([[1.0, 0.5]])', 'Create W1 = np.array([[0.2, 0.8], [0.6, 0.4]]) and b1 = np.array([0.1, 0.1])', 'Create W2 = np.array([[0.5], [0.5]]) and b2 = np.array([0.1])', 'Compute hidden = sigmoid(X @ W1 + b1)', 'Compute output = sigmoid(hidden @ W2 + b2)', 'Print hidden rounded to 4 decimals', 'Print output rounded to 4 decimals'],
            starterCode: '',
            solution: 'import numpy as np\n\nnp.random.seed(42)\n\ndef sigmoid(x):\n    return 1 / (1 + np.exp(-x))\n\nX = np.array([[1.0, 0.5]])\nW1 = np.array([[0.2, 0.8], [0.6, 0.4]])\nb1 = np.array([0.1, 0.1])\nW2 = np.array([[0.5], [0.5]])\nb2 = np.array([0.1])\n\nhidden = sigmoid(X @ W1 + b1)\noutput = sigmoid(hidden @ W2 + b2)\nprint(np.round(hidden, 4))\nprint(np.round(output, 4))',
            hint: 'Forward pass: multiply by weights, add bias, apply activation. Repeat for each layer.',
            expectedOutput: '[[0.6225 0.7311]]\n[[0.6681]]',
          },
          {
            id: 'l11-neural-intro-ex4',
            title: 'Loss Functions',
            description: 'Calculate different loss functions.',
            instructions: ['Import numpy as np', 'y_true = np.array([1, 0, 1, 1, 0])', 'y_pred = np.array([0.9, 0.1, 0.8, 0.7, 0.3])', 'Calculate MSE loss and print rounded to 4 decimals', 'Calculate binary cross-entropy (clip y_pred between 1e-7 and 1-1e-7 first) and print rounded to 4 decimals'],
            starterCode: '',
            solution: 'import numpy as np\n\ny_true = np.array([1, 0, 1, 1, 0], dtype=float)\ny_pred = np.array([0.9, 0.1, 0.8, 0.7, 0.3])\n\nmse = np.mean((y_true - y_pred) ** 2)\nprint(round(mse, 4))\n\ny_clipped = np.clip(y_pred, 1e-7, 1 - 1e-7)\nbce = -np.mean(y_true * np.log(y_clipped) + (1 - y_true) * np.log(1 - y_clipped))\nprint(round(bce, 4))',
            hint: 'MSE = mean((true-pred)²). BCE = -mean(y*log(p) + (1-y)*log(1-p)).',
            expectedOutput: '0.028\n0.2529',
          },
          {
            id: 'l11-neural-intro-ex5',
            title: 'Gradient Descent Step',
            description: 'Implement one step of gradient descent.',
            instructions: ['Import numpy as np', 'Start with w = 5.0, learning_rate = 0.1', 'The loss function is L(w) = (w - 3)^2', 'The gradient is dL/dw = 2*(w - 3)', 'Perform 10 gradient descent steps: w = w - lr * gradient', 'Print w after each step, rounded to 4 decimals'],
            starterCode: '',
            solution: 'import numpy as np\n\nw = 5.0\nlr = 0.1\n\nfor i in range(10):\n    gradient = 2 * (w - 3)\n    w = w - lr * gradient\n    print(round(w, 4))',
            hint: 'Gradient descent: w = w - learning_rate * gradient. The minimum is at w=3.',
            expectedOutput: '4.6\n4.28\n4.024\n3.8192\n3.6554\n3.5243\n3.4194\n3.3356\n3.2684\n3.2148',
          }
        ],
      },
      {
        id: 'ai-agents',
        number: 8,
        title: 'AI & LLM Concepts',
        description: 'Understand prompt engineering, API usage, embeddings, and RAG concepts.',
        icon: 'Bot',
        type: 'exercises',
        lesson: `# AI & LLM Concepts

Large Language Models (LLMs) have revolutionized AI. Understanding how to work with them is a key skill.

## Prompt Engineering
The art of crafting effective prompts:
\`\`\`python
# Bad prompt
prompt = "Write code"

# Good prompt (structured)
prompt = '''You are a Python expert.
Task: Write a function to calculate factorial.
Requirements:
- Handle edge cases (0, negative numbers)
- Include docstring
- Return an integer
'''
\`\`\`

## Prompt Templates
\`\`\`python
def create_prompt(task, context, format_type):
    return f"""Context: {context}
Task: {task}
Output format: {format_type}
"""

prompt = create_prompt(
    task="Summarize this text",
    context="Python is a programming language...",
    format_type="bullet points"
)
\`\`\`

## Embeddings Concept
Embeddings are numerical representations of text that capture meaning:
\`\`\`python
# Cosine similarity between vectors
import numpy as np

def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# Similar texts should have high similarity
vec_king = np.array([0.8, 0.2, 0.9])
vec_queen = np.array([0.7, 0.3, 0.85])
vec_car = np.array([0.1, 0.9, 0.1])

print(cosine_similarity(vec_king, vec_queen))  # High
print(cosine_similarity(vec_king, vec_car))    # Low
\`\`\`

## RAG (Retrieval-Augmented Generation)
1. Store documents as embeddings
2. When queried, find similar documents
3. Pass relevant documents as context to LLM
4. LLM generates answer based on retrieved context

💡 Good prompts are specific, provide examples, and define the output format.

⚠️ LLMs can hallucinate. Always verify critical information.`,
        exercises: [
          {
            id: 'l11-ai-agents-ex1',
            title: 'Prompt Template Builder',
            description: 'Build reusable prompt templates.',
            instructions: ['Create a function build_prompt(role, task, constraints, output_format) that combines them into a structured prompt string', 'Format: \'Role: {role}\\nTask: {task}\\nConstraints: {constraints}\\nFormat: {output_format}\'', 'Test with role=\'Data Analyst\', task=\'Analyze sales data\', constraints=\'Use only Python\', output_format=\'JSON\'', 'Print the resulting prompt'],
            starterCode: '',
            solution: 'def build_prompt(role, task, constraints, output_format):\n    return f"Role: {role}\\nTask: {task}\\nConstraints: {constraints}\\nFormat: {output_format}"\n\nprompt = build_prompt(\n    role=\'Data Analyst\',\n    task=\'Analyze sales data\',\n    constraints=\'Use only Python\',\n    output_format=\'JSON\'\n)\nprint(prompt)',
            hint: 'Use an f-string with \\n for newlines to structure the prompt.',
            expectedOutput: 'Role: Data Analyst\nTask: Analyze sales data\nConstraints: Use only Python\nFormat: JSON',
          },
          {
            id: 'l11-ai-agents-ex2',
            title: 'Cosine Similarity',
            description: 'Calculate similarity between text embeddings.',
            instructions: ['Import numpy as np', 'Implement cosine_similarity(a, b) = dot(a,b) / (norm(a) * norm(b))', 'Create 3 mock embeddings: dog=[0.9, 0.1, 0.8], cat=[0.85, 0.15, 0.75], car=[0.1, 0.9, 0.2]', 'Print similarity between dog and cat (rounded to 3 decimals)', 'Print similarity between dog and car (rounded to 3 decimals)', 'Print which pair is more similar'],
            starterCode: '',
            solution: 'import numpy as np\n\ndef cosine_similarity(a, b):\n    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))\n\ndog = np.array([0.9, 0.1, 0.8])\ncat = np.array([0.85, 0.15, 0.75])\ncar = np.array([0.1, 0.9, 0.2])\n\nsim_dc = cosine_similarity(dog, cat)\nsim_dr = cosine_similarity(dog, car)\nprint(round(sim_dc, 3))\nprint(round(sim_dr, 3))\nprint(\'dog-cat\' if sim_dc > sim_dr else \'dog-car\')',
            hint: 'Cosine similarity: dot product divided by product of norms. Range: -1 to 1.',
            expectedOutput: '0.999\n0.384\ndog-cat',
          },
          {
            id: 'l11-ai-agents-ex3',
            title: 'Simple Document Search',
            description: 'Build a basic document retrieval system using TF-IDF.',
            instructions: ['Import TfidfVectorizer from sklearn and numpy', 'Create documents: [\'Python is a programming language\', \'Machine learning uses Python\', \'JavaScript runs in browsers\', \'Web development uses JavaScript\']', 'Create a search function that takes a query and returns the most similar document', 'Use TF-IDF and cosine similarity (dot product of normalized vectors)', 'Search for \'Python coding\' and print the best matching document'],
            starterCode: '',
            solution: 'from sklearn.feature_extraction.text import TfidfVectorizer\nimport numpy as np\n\ndocuments = [\n    \'Python is a programming language\',\n    \'Machine learning uses Python\',\n    \'JavaScript runs in browsers\',\n    \'Web development uses JavaScript\'\n]\n\ndef search(query, docs):\n    tfidf = TfidfVectorizer()\n    all_texts = docs + [query]\n    matrix = tfidf.fit_transform(all_texts)\n    query_vec = matrix[-1]\n    similarities = []\n    for i in range(len(docs)):\n        sim = (matrix[i].toarray() * query_vec.toarray()).sum()\n        similarities.append(sim)\n    return docs[np.argmax(similarities)]\n\nresult = search(\'Python coding\', documents)\nprint(result)',
            hint: 'Combine query with documents, TF-IDF all at once, then compute similarity of query vs each doc.',
            expectedOutput: 'Python is a programming language',
          },
          {
            id: 'l11-ai-agents-ex4',
            title: 'Token Counter',
            description: 'Estimate token count for LLM input management.',
            instructions: ['Create a function estimate_tokens(text) that estimates tokens', 'Simple rule: split on whitespace, count words. Each word ~1.3 tokens, add 3 for overhead', 'Return integer count', 'Test on 3 texts:', '  \'Hello world\' -> print estimate', '  \'The quick brown fox jumps over the lazy dog\' -> print estimate', '  A long text of 100 words (use \' \'.join([\'word\'] * 100)) -> print estimate'],
            starterCode: '',
            solution: 'def estimate_tokens(text):\n    words = text.split()\n    return int(len(words) * 1.3) + 3\n\nprint(estimate_tokens(\'Hello world\'))\nprint(estimate_tokens(\'The quick brown fox jumps over the lazy dog\'))\nprint(estimate_tokens(\' \'.join([\'word\'] * 100)))',
            hint: 'Split text, count words, multiply by ~1.3 tokens per word, add overhead.',
            expectedOutput: '5\n14\n133',
          },
          {
            id: 'l11-ai-agents-ex5',
            title: 'RAG Pipeline Simulation',
            description: 'Simulate a Retrieval-Augmented Generation pipeline.',
            instructions: ['Create a knowledge base (list of dicts): [{\'id\': 1, \'text\': \'Python was created by Guido van Rossum\', \'topic\': \'python\'}, {\'id\': 2, \'text\': \'JavaScript was created by Brendan Eich\', \'topic\': \'javascript\'}, {\'id\': 3, \'text\': \'Python uses indentation for blocks\', \'topic\': \'python\'}]', 'Write retrieve(query, kb) that returns docs where any query word appears in the text (case-insensitive)', 'Write generate_answer(query, context_docs) that returns \'Based on {len(docs)} sources: \' + \'; \'.join(doc texts)', 'Test with query \'Who created Python?\'', 'Print the generated answer'],
            starterCode: '',
            solution: 'knowledge_base = [\n    {\'id\': 1, \'text\': \'Python was created by Guido van Rossum\', \'topic\': \'python\'},\n    {\'id\': 2, \'text\': \'JavaScript was created by Brendan Eich\', \'topic\': \'javascript\'},\n    {\'id\': 3, \'text\': \'Python uses indentation for blocks\', \'topic\': \'python\'}\n]\n\ndef retrieve(query, kb):\n    query_words = set(query.lower().split())\n    results = []\n    for doc in kb:\n        doc_words = set(doc[\'text\'].lower().split())\n        if query_words & doc_words:\n            results.append(doc)\n    return results\n\ndef generate_answer(query, context_docs):\n    texts = \'; \'.join(doc[\'text\'] for doc in context_docs)\n    return f"Based on {len(context_docs)} sources: {texts}"\n\nquery = \'Who created Python?\'\ndocs = retrieve(query, knowledge_base)\nprint(generate_answer(query, docs))',
            hint: 'Retrieve by checking word overlap. Generate by combining retrieved text.',
            expectedOutput: 'Based on 3 sources: Python was created by Guido van Rossum; JavaScript was created by Brendan Eich; Python uses indentation for blocks',
          }
        ],
      }
    ],
  },
  {
    id: 'automation',
    title: 'Automation & Scripting',
    subtitle: 'Automate Everything',
    description: 'Automate repetitive tasks with Python scripts.',
    icon: 'Wand2',
    color: 'lime',
    categories: [
      {
        id: 'file-automation',
        number: 1,
        title: 'File Automation',
        description: 'Automate file operations: batch rename, organize, and backup scripts.',
        icon: 'FolderSync',
        type: 'exercises',
        lesson: `# File Automation

Python excels at automating file operations. We use \`os\`, \`pathlib\`, \`shutil\`, and \`glob\` modules.

## Path Handling with pathlib
\`\`\`python
from pathlib import Path

p = Path('/home/user/documents/report.txt')
print(p.name)       # report.txt
print(p.stem)       # report
print(p.suffix)     # .txt
print(p.parent)     # /home/user/documents
\`\`\`

## Batch File Naming Logic
\`\`\`python
import os

def generate_rename_map(files, prefix='file'):
    """Generate old -> new name mapping"""
    rename_map = {}
    for i, f in enumerate(sorted(files), 1):
        name, ext = os.path.splitext(f)
        rename_map[f] = f"{prefix}_{i:03d}{ext}"
    return rename_map

files = ['photo_a.jpg', 'img_123.jpg', 'pic.jpg']
print(generate_rename_map(files, 'vacation'))
\`\`\`

## File Organization by Extension
\`\`\`python
def organize_by_extension(files):
    groups = {}
    for f in files:
        ext = os.path.splitext(f)[1].lower() or '.no_ext'
        groups.setdefault(ext, []).append(f)
    return groups
\`\`\`

## File Size and Stats
\`\`\`python
import os
# In real usage: os.path.getsize(filepath)
# We simulate for exercises
\`\`\`

💡 Always use os.path.join or pathlib for cross-platform path handling.

⚠️ In our exercise environment, we simulate file operations since we don't have real filesystem access. The concepts transfer directly to real scripts.`,
        exercises: [
          {
            id: 'l12-file-automation-ex1',
            title: 'Path Manipulation',
            description: 'Extract and manipulate file path components.',
            instructions: ['Import os.path', 'For paths: [\'/home/user/doc.pdf\', \'/var/log/app.log\', \'photo.jpg\', \'/data/backup.tar.gz\']', 'Print the filename (basename), extension, and directory for each', 'Format: \'name: X, ext: X, dir: X\''],
            starterCode: '',
            solution: 'import os.path\n\npaths = [\'/home/user/doc.pdf\', \'/var/log/app.log\', \'photo.jpg\', \'/data/backup.tar.gz\']\nfor p in paths:\n    name = os.path.basename(p)\n    base, ext = os.path.splitext(name)\n    directory = os.path.dirname(p) or \'.\'\n    print(f"name: {name}, ext: {ext}, dir: {directory}")',
            hint: 'Use os.path.basename, os.path.splitext, os.path.dirname.',
            expectedOutput: 'name: doc.pdf, ext: .pdf, dir: /home/user\nname: app.log, ext: .log, dir: /var/log\nname: photo.jpg, ext: .jpg, dir: .\nname: backup.tar.gz, ext: .gz, dir: /data',
          },
          {
            id: 'l12-file-automation-ex2',
            title: 'Batch Rename Generator',
            description: 'Generate batch rename mappings.',
            instructions: ['Create a function batch_rename(files, pattern) that generates new names', 'Pattern uses {n} for number (zero-padded to 3 digits) and {ext} for extension', 'Example: pattern=\'photo_{n}{ext}\' with file \'img.jpg\' -> \'photo_001.jpg\'', 'Test with files=[\'DSC_001.jpg\', \'IMG_002.png\', \'PHOTO.jpg\'] and pattern=\'vacation_{n}{ext}\'', 'Print old -> new for each'],
            starterCode: '',
            solution: 'import os.path\n\ndef batch_rename(files, pattern):\n    result = {}\n    for i, f in enumerate(sorted(files), 1):\n        _, ext = os.path.splitext(f)\n        new_name = pattern.format(n=f\'{i:03d}\', ext=ext)\n        result[f] = new_name\n    return result\n\nfiles = [\'DSC_001.jpg\', \'IMG_002.png\', \'PHOTO.jpg\']\nmapping = batch_rename(files, \'vacation_{n}{ext}\')\nfor old, new in mapping.items():\n    print(f"{old} -> {new}")',
            hint: 'Sort files, enumerate from 1, use f\'{i:03d}\' for zero-padded numbers.',
            expectedOutput: 'DSC_001.jpg -> vacation_001.jpg\nIMG_002.png -> vacation_002.png\nPHOTO.jpg -> vacation_003.jpg',
          },
          {
            id: 'l12-file-automation-ex3',
            title: 'File Organizer',
            description: 'Organize files into groups by extension.',
            instructions: ['Create a function organize_files(file_list) that groups files by extension', 'Return a dict mapping extension (lowercase, without dot) to sorted list of filenames', 'Files without extension go under \'other\'', 'Test with: [\'report.pdf\', \'photo.jpg\', \'data.csv\', \'notes.pdf\', \'image.jpg\', \'README\', \'data2.csv\']', 'Print each group sorted by key'],
            starterCode: '',
            solution: 'import os.path\n\ndef organize_files(file_list):\n    groups = {}\n    for f in file_list:\n        _, ext = os.path.splitext(f)\n        key = ext[1:].lower() if ext else \'other\'\n        groups.setdefault(key, []).append(f)\n    for key in groups:\n        groups[key].sort()\n    return groups\n\nfiles = [\'report.pdf\', \'photo.jpg\', \'data.csv\', \'notes.pdf\', \'image.jpg\', \'README\', \'data2.csv\']\nresult = organize_files(files)\nfor ext in sorted(result.keys()):\n    print(f"{ext}: {result[ext]}")',
            hint: 'Use os.path.splitext to get extension. Use setdefault to build groups.',
            expectedOutput: 'csv: [\'data.csv\', \'data2.csv\']\njpg: [\'image.jpg\', \'photo.jpg\']\nother: [\'README\']\npdf: [\'notes.pdf\', \'report.pdf\']',
          },
          {
            id: 'l12-file-automation-ex4',
            title: 'Backup Script Logic',
            description: 'Build backup naming and rotation logic.',
            instructions: ['Create a function generate_backup_name(filename, timestamp) that returns \'backup_TIMESTAMP_filename\'', 'Create a function rotate_backups(backups, max_keep=3) that keeps only the most recent max_keep backups (sorted alphabetically, last ones kept)', 'Test generate_backup_name with \'data.db\' and \'20240115_120000\'', 'Test rotate_backups with 5 backup names and max_keep=3', 'Print results'],
            starterCode: '',
            solution: 'def generate_backup_name(filename, timestamp):\n    return f"backup_{timestamp}_{filename}"\n\ndef rotate_backups(backups, max_keep=3):\n    sorted_backups = sorted(backups)\n    if len(sorted_backups) <= max_keep:\n        return sorted_backups\n    removed = sorted_backups[:-max_keep]\n    kept = sorted_backups[-max_keep:]\n    return kept\n\nprint(generate_backup_name(\'data.db\', \'20240115_120000\'))\n\nbackups = [\n    \'backup_20240101_data.db\',\n    \'backup_20240102_data.db\',\n    \'backup_20240103_data.db\',\n    \'backup_20240104_data.db\',\n    \'backup_20240105_data.db\'\n]\nkept = rotate_backups(backups, max_keep=3)\nfor b in kept:\n    print(b)',
            hint: 'Sort backups chronologically (alphabetically works with YYYYMMDD format). Keep last N.',
            expectedOutput: 'backup_20240115_120000_data.db\nbackup_20240103_data.db\nbackup_20240104_data.db\nbackup_20240105_data.db',
          },
          {
            id: 'l12-file-automation-ex5',
            title: 'Duplicate File Finder',
            description: 'Find duplicate files by content hash simulation.',
            instructions: ['Import hashlib', 'Create a function find_duplicates(file_contents) where file_contents is a dict of {filename: content}', 'Hash each file\'s content with md5 and group files with same hash', 'Return list of duplicate groups (groups with more than 1 file)', 'Test with: {\'a.txt\': \'hello\', \'b.txt\': \'world\', \'c.txt\': \'hello\', \'d.txt\': \'test\', \'e.txt\': \'world\'}', 'Print each group of duplicates'],
            starterCode: '',
            solution: 'import hashlib\n\ndef find_duplicates(file_contents):\n    hash_groups = {}\n    for fname, content in file_contents.items():\n        h = hashlib.md5(content.encode()).hexdigest()\n        hash_groups.setdefault(h, []).append(fname)\n    return [sorted(group) for group in hash_groups.values() if len(group) > 1]\n\nfiles = {\'a.txt\': \'hello\', \'b.txt\': \'world\', \'c.txt\': \'hello\', \'d.txt\': \'test\', \'e.txt\': \'world\'}\ndupes = find_duplicates(files)\nfor group in sorted(dupes):\n    print(f"Duplicates: {group}")',
            hint: 'Hash content with hashlib.md5(content.encode()).hexdigest(). Group by hash.',
            expectedOutput: 'Duplicates: [\'a.txt\', \'c.txt\']\nDuplicates: [\'b.txt\', \'e.txt\']',
          }
        ],
      },
      {
        id: 'text-automation',
        number: 2,
        title: 'Text & String Automation',
        description: 'Parse logs, generate reports, and fill templates automatically.',
        icon: 'FileText',
        type: 'exercises',
        lesson: `# Text & String Automation

Automating text processing is one of Python's superpowers. From parsing logs to generating reports, Python handles it all.

## Log Parsing with Regex
\`\`\`python
import re

log_line = '2024-01-15 10:30:45 ERROR Database connection failed'
match = re.match(r'(\\d{4}-\\d{2}-\\d{2}) (\\d{2}:\\d{2}:\\d{2}) (\\w+) (.+)', log_line)
if match:
    date, time, level, message = match.groups()
\`\`\`

## Template Filling
\`\`\`python
from string import Template

template = Template("Dear $name, your order #$order_id is $status.")
result = template.substitute(name="Alice", order_id="12345", status="shipped")
\`\`\`

## CSV Processing
\`\`\`python
import csv
from io import StringIO

data = "name,age,city\\nAlice,30,NYC\\nBob,25,LA"
reader = csv.DictReader(StringIO(data))
for row in reader:
    print(row['name'], row['age'])
\`\`\`

## Report Generation
\`\`\`python
def generate_report(title, data, columns):
    lines = [title, '=' * len(title)]
    header = ' | '.join(f'{c:>10}' for c in columns)
    lines.append(header)
    lines.append('-' * len(header))
    for row in data:
        lines.append(' | '.join(f'{str(v):>10}' for v in row))
    return '\\n'.join(lines)
\`\`\`

💡 Use raw strings (r'...') for regex patterns to avoid escaping issues.

⚠️ Always validate input data before processing — malformed input is the #1 source of automation bugs.`,
        exercises: [
          {
            id: 'l12-text-automation-ex1',
            title: 'Log Parser',
            description: 'Parse structured log entries.',
            instructions: ['Import re', 'Parse these log lines: [\'2024-01-15 10:30:00 INFO User logged in\', \'2024-01-15 10:31:00 ERROR Connection timeout\', \'2024-01-15 10:32:00 WARN Disk space low\']', 'Extract date, time, level, and message from each', 'Print count of each log level', 'Print only ERROR messages'],
            starterCode: '',
            solution: 'import re\nfrom collections import Counter\n\nlogs = [\n    \'2024-01-15 10:30:00 INFO User logged in\',\n    \'2024-01-15 10:31:00 ERROR Connection timeout\',\n    \'2024-01-15 10:32:00 WARN Disk space low\'\n]\n\nlevels = []\nerrors = []\nfor line in logs:\n    match = re.match(r\'(\\d{4}-\\d{2}-\\d{2}) (\\d{2}:\\d{2}:\\d{2}) (\\w+) (.+)\', line)\n    if match:\n        date, time, level, msg = match.groups()\n        levels.append(level)\n        if level == \'ERROR\':\n            errors.append(msg)\n\nfor level, count in sorted(Counter(levels).items()):\n    print(f"{level}: {count}")\nfor e in errors:\n    print(f"ERROR: {e}")',
            hint: 'Use re.match with groups to extract parts. Count levels with Counter.',
            expectedOutput: 'ERROR: 1\nINFO: 1\nWARN: 1\nERROR: Connection timeout',
          },
          {
            id: 'l12-text-automation-ex2',
            title: 'Template Engine',
            description: 'Build a simple template engine.',
            instructions: ['Create a function fill_template(template_str, variables) that replaces {{key}} with values from the dict', 'Test with template: \'Hello {{name}}! Your score is {{score}}/100. Status: {{status}}\'', 'Variables: {\'name\': \'Alice\', \'score\': \'95\', \'status\': \'Passed\'}', 'Print the filled template'],
            starterCode: '',
            solution: 'import re\n\ndef fill_template(template_str, variables):\n    result = template_str\n    for key, value in variables.items():\n        result = result.replace(\'{{\' + key + \'}}\', str(value))\n    return result\n\ntemplate = \'Hello {{name}}! Your score is {{score}}/100. Status: {{status}}\'\nvars_dict = {\'name\': \'Alice\', \'score\': \'95\', \'status\': \'Passed\'}\nprint(fill_template(template, vars_dict))',
            hint: 'Use str.replace() to substitute each {{key}} with its value.',
            expectedOutput: 'Hello Alice! Your score is 95/100. Status: Passed',
          },
          {
            id: 'l12-text-automation-ex3',
            title: 'CSV Processing',
            description: 'Parse and transform CSV data.',
            instructions: ['Import csv and io.StringIO', 'csv_data = \'name,math,science,english\\nAlice,90,85,92\\nBob,78,88,75\\nCharlie,95,92,88\'', 'Parse the CSV and calculate each student\'s average score', 'Print each student\'s name and average (rounded to 1 decimal)'],
            starterCode: '',
            solution: 'import csv\nfrom io import StringIO\n\ncsv_data = \'name,math,science,english\\nAlice,90,85,92\\nBob,78,88,75\\nCharlie,95,92,88\'\n\nreader = csv.DictReader(StringIO(csv_data))\nfor row in reader:\n    scores = [int(row[\'math\']), int(row[\'science\']), int(row[\'english\'])]\n    avg = sum(scores) / len(scores)\n    print(f"{row[\'name\']}: {avg:.1f}")',
            hint: 'Use csv.DictReader with StringIO. Convert score strings to int for averaging.',
            expectedOutput: 'Alice: 89.0\nBob: 80.3\nCharlie: 91.7',
          },
          {
            id: 'l12-text-automation-ex4',
            title: 'Text Report Generator',
            description: 'Generate a formatted text report.',
            instructions: ['Create a function generate_report(title, headers, rows) that produces a formatted table', 'Use right-aligned columns of width 12', 'Add a title line, separator, header row, separator, and data rows', 'Test with title=\'Sales Report\', headers=[\'Product\',\'Q1\',\'Q2\'], rows=[[\'Widget\',100,150],[\'Gadget\',200,180]]', 'Print the report'],
            starterCode: '',
            solution: 'def generate_report(title, headers, rows):\n    width = 12\n    sep = \'-\' * (width * len(headers) + (len(headers) - 1) * 3)\n    lines = [title, sep]\n    lines.append(\' | \'.join(f\'{h:>{width}}\' for h in headers))\n    lines.append(sep)\n    for row in rows:\n        lines.append(\' | \'.join(f\'{str(v):>{width}}\' for v in row))\n    lines.append(sep)\n    return \'\\n\'.join(lines)\n\nreport = generate_report(\n    \'Sales Report\',\n    [\'Product\', \'Q1\', \'Q2\'],\n    [[\'Widget\', 100, 150], [\'Gadget\', 200, 180]]\n)\nprint(report)',
            hint: 'Use f\'{value:>12}\' for right-aligned columns. Join with \' | \'.',
            expectedOutput: 'Sales Report\n------------------------------------------\n     Product |           Q1 |           Q2\n------------------------------------------\n      Widget |          100 |          150\n      Gadget |          200 |          180\n------------------------------------------',
          },
          {
            id: 'l12-text-automation-ex5',
            title: 'Data Extraction Pipeline',
            description: 'Extract structured data from unstructured text.',
            instructions: ['Import re', 'text = \'Contact: john@email.com, Phone: 555-1234. Also reach jane@work.org or 555-5678.\'', 'Extract all email addresses (pattern: word@word.word)', 'Extract all phone numbers (pattern: 3 digits-4 digits)', 'Print \'Emails: \' followed by the sorted list', 'Print \'Phones: \' followed by the sorted list'],
            starterCode: '',
            solution: 'import re\n\ntext = \'Contact: john@email.com, Phone: 555-1234. Also reach jane@work.org or 555-5678.\'\n\nemails = sorted(re.findall(r\'\\w+@\\w+\\.\\w+\', text))\nphones = sorted(re.findall(r\'\\d{3}-\\d{4}\', text))\n\nprint(f"Emails: {emails}")\nprint(f"Phones: {phones}")',
            hint: 'Use re.findall with patterns for emails (\\w+@\\w+\\.\\w+) and phones (\\d{3}-\\d{4}).',
            expectedOutput: 'Emails: [\'jane@work.org\', \'john@email.com\']\nPhones: [\'555-1234\', \'555-5678\']',
          }
        ],
      },
      {
        id: 'email-auto',
        number: 3,
        title: 'Email Automation',
        description: 'Compose emails, build MIME messages, and create email templates.',
        icon: 'Mail',
        type: 'exercises',
        lesson: `# Email Automation

Python's \`email\` and \`smtplib\` modules let you send emails programmatically. We'll focus on message composition (since we can't actually send from a browser environment).

## Building Email Messages
\`\`\`python
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

msg = MIMEMultipart()
msg['From'] = 'sender@example.com'
msg['To'] = 'recipient@example.com'
msg['Subject'] = 'Hello from Python'

body = 'This is an automated email.'
msg.attach(MIMEText(body, 'plain'))
print(msg.as_string())
\`\`\`

## HTML Emails
\`\`\`python
html = '<html><body><h1>Report</h1><p>Data is ready.</p></body></html>'
msg.attach(MIMEText(html, 'html'))
\`\`\`

## Email Templates
\`\`\`python
def compose_email(to, subject, template, **kwargs):
    body = template.format(**kwargs)
    msg = MIMEText(body, 'plain')
    msg['To'] = to
    msg['Subject'] = subject
    return msg
\`\`\`

## SMTP Concept (not runnable in browser)
\`\`\`python
# In real code:
# import smtplib
# with smtplib.SMTP('smtp.gmail.com', 587) as server:
#     server.starttls()
#     server.login(user, password)
#     server.send_message(msg)
\`\`\`

💡 Use templates for repetitive emails — fill in variables for each recipient.

⚠️ Never hardcode credentials. Use environment variables or a secrets manager.`,
        exercises: [
          {
            id: 'l12-email-auto-ex1',
            title: 'Email Composition',
            description: 'Build a properly formatted email message.',
            instructions: ['Import MIMEText from email.mime.text', 'Create an email with From=\'bot@company.com\', To=\'team@company.com\', Subject=\'Daily Report\'', 'Body: \'Hello Team,\\n\\nHere is your daily report.\\n\\nBest regards,\\nAutomation Bot\'', 'Print the Subject and From headers', 'Print the body content'],
            starterCode: '',
            solution: 'from email.mime.text import MIMEText\n\nbody = \'Hello Team,\\n\\nHere is your daily report.\\n\\nBest regards,\\nAutomation Bot\'\nmsg = MIMEText(body, \'plain\')\nmsg[\'From\'] = \'bot@company.com\'\nmsg[\'To\'] = \'team@company.com\'\nmsg[\'Subject\'] = \'Daily Report\'\n\nprint(f"Subject: {msg[\'Subject\']}")\nprint(f"From: {msg[\'From\']}")\nprint(msg.get_payload())',
            hint: 'MIMEText(body, \'plain\') creates the message. Set headers with msg[\'key\'] = value.',
            expectedOutput: 'Subject: Daily Report\nFrom: bot@company.com\nHello Team,\n\nHere is your daily report.\n\nBest regards,\nAutomation Bot',
          },
          {
            id: 'l12-email-auto-ex2',
            title: 'Email Template System',
            description: 'Create reusable email templates.',
            instructions: ['Create a function send_welcome_email(name, company, role) that returns a dict with \'to\', \'subject\', and \'body\'', 'Subject: \'Welcome to {company}, {name}!\'', 'Body should include greeting, role mention, and sign-off', 'Test with name=\'Alice\', company=\'TechCorp\', role=\'Engineer\'', 'Print subject and body'],
            starterCode: '',
            solution: 'def send_welcome_email(name, company, role):\n    subject = f\'Welcome to {company}, {name}!\'\n    body = f"""Dear {name},\n\nWelcome to {company}! We\'re excited to have you join us as {role}.\n\nBest regards,\nHR Team"""\n    return {\'subject\': subject, \'body\': body}\n\nemail = send_welcome_email(\'Alice\', \'TechCorp\', \'Engineer\')\nprint(email[\'subject\'])\nprint(email[\'body\'])',
            hint: 'Use f-strings or .format() to fill in template variables.',
            expectedOutput: 'Welcome to TechCorp, Alice!\nDear Alice,\n\nWelcome to TechCorp! We\'re excited to have you join us as Engineer.\n\nBest regards,\nHR Team',
          },
          {
            id: 'l12-email-auto-ex3',
            title: 'Bulk Email Preparation',
            description: 'Prepare personalized emails for multiple recipients.',
            instructions: ['Create a list of recipients: [{\'name\': \'Alice\', \'email\': \'alice@test.com\', \'score\': 95}, {\'name\': \'Bob\', \'email\': \'bob@test.com\', \'score\': 72}, {\'name\': \'Charlie\', \'email\': \'charlie@test.com\', \'score\': 88}]', 'For each, generate a personalized message: \'Hi {name}, your exam score is {score}. Result: {Pass if score>=80 else Fail}.\'', 'Print each email\'s To field and body'],
            starterCode: '',
            solution: 'recipients = [\n    {\'name\': \'Alice\', \'email\': \'alice@test.com\', \'score\': 95},\n    {\'name\': \'Bob\', \'email\': \'bob@test.com\', \'score\': 72},\n    {\'name\': \'Charlie\', \'email\': \'charlie@test.com\', \'score\': 88}\n]\n\nfor r in recipients:\n    result = \'Pass\' if r[\'score\'] >= 80 else \'Fail\'\n    body = f"Hi {r[\'name\']}, your exam score is {r[\'score\']}. Result: {result}."\n    print(f"To: {r[\'email\']}")\n    print(body)',
            hint: 'Loop through recipients, format each message with their data.',
            expectedOutput: 'To: alice@test.com\nHi Alice, your exam score is 95. Result: Pass.\nTo: bob@test.com\nHi Bob, your exam score is 72. Result: Fail.\nTo: charlie@test.com\nHi Charlie, your exam score is 88. Result: Pass.',
          },
          {
            id: 'l12-email-auto-ex4',
            title: 'HTML Email Builder',
            description: 'Construct HTML emails programmatically.',
            instructions: ['Create a function build_html_table(headers, rows) that returns an HTML table string', 'Use <table>, <tr>, <th>, <td> tags', 'Test with headers=[\'Name\',\'Score\'] and rows=[[\'Alice\',95],[\'Bob\',72]]', 'Print the HTML'],
            starterCode: '',
            solution: 'def build_html_table(headers, rows):\n    html = \'<table>\\n<tr>\'\n    for h in headers:\n        html += f\'<th>{h}</th>\'\n    html += \'</tr>\\n\'\n    for row in rows:\n        html += \'<tr>\'\n        for val in row:\n            html += f\'<td>{val}</td>\'\n        html += \'</tr>\\n\'\n    html += \'</table>\'\n    return html\n\nresult = build_html_table([\'Name\', \'Score\'], [[\'Alice\', 95], [\'Bob\', 72]])\nprint(result)',
            hint: 'Build HTML string with <table>, <tr>, <th> for headers, <td> for data.',
            expectedOutput: '<table>\n<tr><th>Name</th><th>Score</th></tr>\n<tr><td>Alice</td><td>95</td></tr>\n<tr><td>Bob</td><td>72</td></tr>\n</table>',
          },
          {
            id: 'l12-email-auto-ex5',
            title: 'Email Validator',
            description: 'Validate email addresses with regex.',
            instructions: ['Import re', 'Create a function is_valid_email(email) that checks for valid email format', 'Pattern: starts with alphanumeric/dots/underscores, @ symbol, domain with dot', 'Test: [\'user@example.com\', \'bad@\', \'test.user@domain.org\', \'@nodomain.com\', \'plain\', \'a@b.c\']', 'Print each email and whether it\'s valid'],
            starterCode: '',
            solution: 'import re\n\ndef is_valid_email(email):\n    pattern = r\'^[\\w.]+@[\\w]+\\.[a-zA-Z]{2,}$\'\n    return bool(re.match(pattern, email))\n\ntest_emails = [\'user@example.com\', \'bad@\', \'test.user@domain.org\', \'@nodomain.com\', \'plain\', \'a@b.c\']\nfor email in test_emails:\n    print(f"{email}: {\'valid\' if is_valid_email(email) else \'invalid\'}")',
            hint: 'Use re.match with pattern: ^[\\w.]+@[\\w]+\\.[a-zA-Z]{2,}$',
            expectedOutput: 'user@example.com: valid\nbad@: invalid\ntest.user@domain.org: valid\n@nodomain.com: invalid\nplain: invalid\na@b.c: invalid',
          }
        ],
      },
      {
        id: 'scheduling',
        number: 4,
        title: 'Task Scheduling',
        description: 'Understand task scheduling concepts and build timer-based task runners.',
        icon: 'Clock',
        type: 'exercises',
        lesson: `# Task Scheduling

Automating tasks to run at specific times or intervals is essential for production systems.

## Time-Based Logic
\`\`\`python
from datetime import datetime, timedelta

now = datetime(2024, 1, 15, 10, 30)
next_run = now + timedelta(hours=1)
print(f"Current: {now}, Next: {next_run}")
\`\`\`

## Cron Expression Parsing
Cron format: minute hour day month weekday
\`\`\`python
# * * * * *  = every minute
# 0 * * * *  = every hour
# 0 9 * * 1  = Monday at 9 AM
# 0 0 1 * *  = first of every month

def parse_cron_field(field, max_val):
    if field == '*':
        return list(range(max_val))
    return [int(field)]
\`\`\`

## Task Queue Pattern
\`\`\`python
import heapq
from datetime import datetime

class TaskScheduler:
    def __init__(self):
        self.tasks = []  # min-heap by run_time

    def schedule(self, name, run_time):
        heapq.heappush(self.tasks, (run_time, name))

    def get_next(self):
        if self.tasks:
            return heapq.heappop(self.tasks)
        return None
\`\`\`

## Retry Logic
\`\`\`python
def retry(func, max_retries=3, delay=1):
    for attempt in range(max_retries):
        try:
            return func()
        except Exception as e:
            if attempt == max_retries - 1:
                raise
\`\`\`

💡 Always log when tasks run — debugging scheduled tasks is much harder without logs.

⚠️ Handle time zones carefully! Use UTC internally and convert for display.`,
        exercises: [
          {
            id: 'l12-scheduling-ex1',
            title: 'Task Scheduler',
            description: 'Build a simple priority-based task scheduler.',
            instructions: ['Import heapq', 'Create a TaskScheduler class with schedule(priority, name) and get_next() methods', 'Lower priority number = higher priority', 'Schedule: (3, \'low task\'), (1, \'urgent task\'), (2, \'normal task\')', 'Pop and print all tasks in priority order'],
            starterCode: '',
            solution: 'import heapq\n\nclass TaskScheduler:\n    def __init__(self):\n        self.tasks = []\n    \n    def schedule(self, priority, name):\n        heapq.heappush(self.tasks, (priority, name))\n    \n    def get_next(self):\n        if self.tasks:\n            return heapq.heappop(self.tasks)\n        return None\n\nscheduler = TaskScheduler()\nscheduler.schedule(3, \'low task\')\nscheduler.schedule(1, \'urgent task\')\nscheduler.schedule(2, \'normal task\')\n\nwhile True:\n    task = scheduler.get_next()\n    if task is None:\n        break\n    print(f"Priority {task[0]}: {task[1]}")',
            hint: 'Use heapq for a min-heap. heappush adds, heappop removes the smallest.',
            expectedOutput: 'Priority 1: urgent task\nPriority 2: normal task\nPriority 3: low task',
          },
          {
            id: 'l12-scheduling-ex2',
            title: 'Cron Expression Parser',
            description: 'Parse simple cron expressions.',
            instructions: ['Create a function describe_cron(expression) that returns a human-readable description', 'Handle: \'* * * * *\' -> \'Every minute\'', '\'0 * * * *\' -> \'Every hour\'', '\'0 9 * * *\' -> \'Daily at 09:00\'', '\'0 9 * * 1\' -> \'Weekly on Monday at 09:00\'', '\'0 0 1 * *\' -> \'Monthly on day 1 at 00:00\'', 'Print description for each'],
            starterCode: '',
            solution: 'def describe_cron(expr):\n    parts = expr.split()\n    minute, hour, day, month, weekday = parts\n    days = {0: \'Sunday\', 1: \'Monday\', 2: \'Tuesday\', 3: \'Wednesday\', 4: \'Thursday\', 5: \'Friday\', 6: \'Saturday\'}\n    \n    if all(p == \'*\' for p in parts):\n        return \'Every minute\'\n    if minute != \'*\' and hour == \'*\' and day == \'*\':\n        return \'Every hour\'\n    if minute != \'*\' and hour != \'*\' and day == \'*\' and weekday == \'*\':\n        return f\'Daily at {int(hour):02d}:{int(minute):02d}\'\n    if minute != \'*\' and hour != \'*\' and day == \'*\' and weekday != \'*\':\n        return f\'Weekly on {days[int(weekday)]} at {int(hour):02d}:{int(minute):02d}\'\n    if minute != \'*\' and hour != \'*\' and day != \'*\':\n        return f\'Monthly on day {day} at {int(hour):02d}:{int(minute):02d}\'\n    return expr\n\ncrons = [\'* * * * *\', \'0 * * * *\', \'0 9 * * *\', \'0 9 * * 1\', \'0 0 1 * *\']\nfor c in crons:\n    print(f"{c} -> {describe_cron(c)}")',
            hint: 'Split the expression into 5 parts and check which fields are * vs specific values.',
            expectedOutput: '* * * * * -> Every minute\n0 * * * * -> Every hour\n0 9 * * * -> Daily at 09:00\n0 9 * * 1 -> Weekly on Monday at 09:00\n0 0 1 * * -> Monthly on day 1 at 00:00',
          },
          {
            id: 'l12-scheduling-ex3',
            title: 'Retry Logic',
            description: 'Implement a retry mechanism for unreliable operations.',
            instructions: ['Create a function retry(func, max_retries=3) that calls func and retries on exception', 'Track attempts and return (result, attempts)', 'Create a counter that fails the first 2 times then succeeds', 'Print the result and number of attempts'],
            starterCode: '',
            solution: 'def retry(func, max_retries=3):\n    for attempt in range(1, max_retries + 1):\n        try:\n            result = func()\n            return result, attempt\n        except Exception as e:\n            if attempt == max_retries:\n                raise\n            print(f"Attempt {attempt} failed: {e}")\n    return None, max_retries\n\ncall_count = 0\ndef unreliable_function():\n    global call_count\n    call_count += 1\n    if call_count < 3:\n        raise ConnectionError("Service unavailable")\n    return "Success!"\n\nresult, attempts = retry(unreliable_function, max_retries=3)\nprint(f"Result: {result}")\nprint(f"Attempts: {attempts}")',
            hint: 'Loop up to max_retries. Try calling func(), catch exceptions, and retry.',
            expectedOutput: 'Attempt 1 failed: Service unavailable\nAttempt 2 failed: Service unavailable\nResult: Success!\nAttempts: 3',
          },
          {
            id: 'l12-scheduling-ex4',
            title: 'Time-Based Task Runner',
            description: 'Schedule tasks based on simulated time.',
            instructions: ['Import datetime', 'Create a list of tasks with scheduled times:', '  (\'Backup\', datetime(2024,1,15,2,0)), (\'Report\', datetime(2024,1,15,9,0)), (\'Cleanup\', datetime(2024,1,15,23,0))', 'Given current_time = datetime(2024,1,15,10,0), determine which tasks are overdue and which are upcoming', 'Print \'Overdue: \' + task names, then \'Upcoming: \' + task names'],
            starterCode: '',
            solution: 'from datetime import datetime\n\ntasks = [\n    (\'Backup\', datetime(2024,1,15,2,0)),\n    (\'Report\', datetime(2024,1,15,9,0)),\n    (\'Cleanup\', datetime(2024,1,15,23,0))\n]\n\ncurrent_time = datetime(2024,1,15,10,0)\n\noverdue = [name for name, t in tasks if t <= current_time]\nupcoming = [name for name, t in tasks if t > current_time]\n\nprint(f"Overdue: {overdue}")\nprint(f"Upcoming: {upcoming}")',
            hint: 'Compare each task\'s scheduled time with current_time using <= and >.',
            expectedOutput: 'Overdue: [\'Backup\', \'Report\']\nUpcoming: [\'Cleanup\']',
          },
          {
            id: 'l12-scheduling-ex5',
            title: 'Rate Limiter',
            description: 'Implement a token bucket rate limiter.',
            instructions: ['Create a RateLimiter class with max_tokens and refill_rate', 'Methods: allow() returns True if a token is available (and consumes it), False otherwise', 'refill(n) adds n tokens (up to max)', 'Create limiter with max_tokens=3, start with 3 tokens', 'Call allow() 5 times, printing result each time', 'Then refill(2) and call allow() once more'],
            starterCode: '',
            solution: 'class RateLimiter:\n    def __init__(self, max_tokens):\n        self.max_tokens = max_tokens\n        self.tokens = max_tokens\n    \n    def allow(self):\n        if self.tokens > 0:\n            self.tokens -= 1\n            return True\n        return False\n    \n    def refill(self, n):\n        self.tokens = min(self.max_tokens, self.tokens + n)\n\nlimiter = RateLimiter(max_tokens=3)\nfor i in range(5):\n    print(f"Request {i+1}: {\'allowed\' if limiter.allow() else \'denied\'}")\nlimiter.refill(2)\nprint(f"Request 6: {\'allowed\' if limiter.allow() else \'denied\'}")',
            hint: 'Track available tokens. Decrement on allow(), cap at max on refill().',
            expectedOutput: 'Request 1: allowed\nRequest 2: allowed\nRequest 3: allowed\nRequest 4: denied\nRequest 5: denied\nRequest 6: allowed',
          }
        ],
      },
      {
        id: 'cli-tools',
        number: 5,
        title: 'Building CLI Tools',
        description: 'Build professional command-line tools with argument parsing.',
        icon: 'Terminal',
        type: 'exercises',
        lesson: `# Building CLI Tools

Python is perfect for building command-line tools. The \`argparse\` module handles argument parsing.

## Argument Parsing with argparse
\`\`\`python
import argparse

parser = argparse.ArgumentParser(description='My tool')
parser.add_argument('filename', help='Input file')
parser.add_argument('-o', '--output', default='out.txt')
parser.add_argument('-v', '--verbose', action='store_true')
parser.add_argument('-n', '--count', type=int, default=10)
args = parser.parse_args(['input.txt', '-v', '-n', '5'])
\`\`\`

## Simulating CLI for Exercises
Since we can't use sys.argv in browser, we pass argument lists directly:
\`\`\`python
args = parser.parse_args(['--name', 'Alice', '--count', '3'])
print(args.name, args.count)
\`\`\`

## Rich Output
\`\`\`python
def progress_bar(current, total, width=30):
    pct = current / total
    filled = int(width * pct)
    bar = '█' * filled + '░' * (width - filled)
    return f'[{bar}] {pct:.0%}'
\`\`\`

💡 Always provide --help descriptions and sensible defaults.

⚠️ Validate arguments early — fail fast with clear error messages.`,
        exercises: [
          {
            id: 'l12-cli-tools-ex1',
            title: 'Argument Parser',
            description: 'Build a command-line argument parser.',
            instructions: ['Import argparse', 'Create a parser for a \'word counter\' tool', 'Add positional arg \'text\', optional \'--uppercase\' (store_true), optional \'--repeat\' (int, default=1)', 'Parse args: [\'hello world\', \'--uppercase\', \'--repeat\', \'3\']', 'Apply transformations and print the text repeated the specified number of times'],
            starterCode: '',
            solution: 'import argparse\n\nparser = argparse.ArgumentParser(description=\'Word counter tool\')\nparser.add_argument(\'text\', help=\'Text to process\')\nparser.add_argument(\'--uppercase\', action=\'store_true\')\nparser.add_argument(\'--repeat\', type=int, default=1)\n\nargs = parser.parse_args([\'hello world\', \'--uppercase\', \'--repeat\', \'3\'])\n\ntext = args.text\nif args.uppercase:\n    text = text.upper()\nfor _ in range(args.repeat):\n    print(text)',
            hint: 'Use parser.add_argument for each arg. store_true for flags, type=int for numbers.',
            expectedOutput: 'HELLO WORLD\nHELLO WORLD\nHELLO WORLD',
          },
          {
            id: 'l12-cli-tools-ex2',
            title: 'Progress Bar',
            description: 'Create a text-based progress bar.',
            instructions: ['Create a function progress_bar(current, total, width=20) that returns a string like \'[████████░░░░░░░░░░░░] 40%\'', 'Use █ for filled and ░ for empty', 'Test with values: (0, 10), (3, 10), (7, 10), (10, 10)', 'Print each'],
            starterCode: '',
            solution: 'def progress_bar(current, total, width=20):\n    pct = current / total if total > 0 else 0\n    filled = int(width * pct)\n    bar = chr(9608) * filled + chr(9617) * (width - filled)\n    return f\'[{bar}] {int(pct * 100)}%\'\n\nfor current in [0, 3, 7, 10]:\n    print(progress_bar(current, 10))',
            hint: 'Calculate percentage, multiply by width for filled portion.',
            expectedOutput: '[░░░░░░░░░░░░░░░░░░░░] 0%\n[██████░░░░░░░░░░░░░░] 30%\n[██████████████░░░░░░] 70%\n[████████████████████] 100%',
          },
          {
            id: 'l12-cli-tools-ex3',
            title: 'Command Dispatcher',
            description: 'Build a command dispatcher pattern for CLI tools.',
            instructions: ['Create a dict mapping command names to functions', 'Commands: \'greet\' (prints \'Hello, {name}!\'), \'add\' (prints sum of two numbers), \'upper\' (prints text in uppercase)', 'Create a dispatch(command, args) function', 'Test: dispatch(\'greet\', [\'Alice\']), dispatch(\'add\', [\'3\', \'4\']), dispatch(\'upper\', [\'hello world\'])'],
            starterCode: '',
            solution: 'def cmd_greet(args):\n    print(f"Hello, {args[0]}!")\n\ndef cmd_add(args):\n    print(int(args[0]) + int(args[1]))\n\ndef cmd_upper(args):\n    print(args[0].upper())\n\ncommands = {\n    \'greet\': cmd_greet,\n    \'add\': cmd_add,\n    \'upper\': cmd_upper\n}\n\ndef dispatch(command, args):\n    if command in commands:\n        commands[command](args)\n    else:\n        print(f"Unknown command: {command}")\n\ndispatch(\'greet\', [\'Alice\'])\ndispatch(\'add\', [\'3\', \'4\'])\ndispatch(\'upper\', [\'hello world\'])',
            hint: 'Map command names to functions in a dict. Look up and call the function.',
            expectedOutput: 'Hello, Alice!\n7\nHELLO WORLD',
          },
          {
            id: 'l12-cli-tools-ex4',
            title: 'Configuration Parser',
            description: 'Parse configuration from INI-style text.',
            instructions: ['Import configparser and io.StringIO', 'config_text = \'[database]\\nhost = localhost\\nport = 5432\\nname = mydb\\n\\n[app]\\ndebug = true\\nlog_level = INFO\'', 'Parse it and print all sections', 'Print each key-value pair in [database]', 'Print the value of app.debug'],
            starterCode: '',
            solution: 'import configparser\nfrom io import StringIO\n\nconfig_text = \'[database]\\nhost = localhost\\nport = 5432\\nname = mydb\\n\\n[app]\\ndebug = true\\nlog_level = INFO\'\n\nconfig = configparser.ConfigParser()\nconfig.read_string(config_text)\n\nprint(config.sections())\nfor key, value in config[\'database\'].items():\n    print(f"{key} = {value}")\nprint(config[\'app\'][\'debug\'])',
            hint: 'Use configparser.ConfigParser() and read_string(). Access like config[\'section\'][\'key\'].',
            expectedOutput: '[\'database\', \'app\']\nhost = localhost\nport = 5432\nname = mydb\ntrue',
          },
          {
            id: 'l12-cli-tools-ex5',
            title: 'Table Formatter',
            description: 'Format data as a pretty ASCII table.',
            instructions: ['Create a function format_table(headers, rows, align=\'left\')', 'Calculate column widths based on max content width', 'Add borders with +, -, and |', 'Test with headers=[\'Name\',\'Age\',\'City\'] and rows=[[\'Alice\',30,\'NYC\'],[\'Bob\',25,\'San Francisco\'],[\'Charlie\',35,\'LA\']]', 'Print the formatted table'],
            starterCode: '',
            solution: 'def format_table(headers, rows, align=\'left\'):\n    all_rows = [headers] + [[str(v) for v in r] for r in rows]\n    widths = [max(len(str(row[i])) for row in all_rows) for i in range(len(headers))]\n    \n    def make_sep():\n        return \'+\' + \'+\'.join(\'-\' * (w + 2) for w in widths) + \'+\'\n    \n    def make_row(row):\n        cells = [f\' {str(v):<{w}} \' if align == \'left\' else f\' {str(v):>{w}} \' for v, w in zip(row, widths)]\n        return \'|\' + \'|\'.join(cells) + \'|\'\n    \n    lines = [make_sep(), make_row(headers), make_sep()]\n    for row in rows:\n        lines.append(make_row([str(v) for v in row]))\n    lines.append(make_sep())\n    return \'\\n\'.join(lines)\n\nresult = format_table(\n    [\'Name\', \'Age\', \'City\'],\n    [[\'Alice\', 30, \'NYC\'], [\'Bob\', 25, \'San Francisco\'], [\'Charlie\', 35, \'LA\']]\n)\nprint(result)',
            hint: 'Calculate max width per column. Use f-string alignment: f\'{val:<width}\' for left align.',
            expectedOutput: '+---------+-----+---------------+\n| Name    | Age | City          |\n+---------+-----+---------------+\n| Alice   | 30  | NYC           |\n| Bob     | 25  | San Francisco |\n| Charlie | 35  | LA            |\n+---------+-----+---------------+',
          }
        ],
      },
      {
        id: 'testing',
        number: 6,
        title: 'Testing & TDD',
        description: 'Write tests with unittest and pytest patterns, and practice TDD.',
        icon: 'TestTube',
        type: 'exercises',
        lesson: `# Testing & TDD

Testing ensures your code works correctly and continues working as you make changes.

## unittest Basics
\`\`\`python
import unittest

class TestMath(unittest.TestCase):
    def test_add(self):
        self.assertEqual(1 + 1, 2)
    
    def test_multiply(self):
        self.assertEqual(3 * 4, 12)
    
    def test_raises(self):
        with self.assertRaises(ZeroDivisionError):
            1 / 0
\`\`\`

## Assert Methods
\`\`\`python
self.assertEqual(a, b)      # a == b
self.assertNotEqual(a, b)   # a != b
self.assertTrue(x)           # bool(x) is True
self.assertFalse(x)          # bool(x) is False
self.assertIn(a, b)          # a in b
self.assertIsNone(x)         # x is None
self.assertRaises(Error)     # raises Error
self.assertAlmostEqual(a, b) # a ≈ b (for floats)
\`\`\`

## TDD Workflow
1. **Red**: Write a failing test
2. **Green**: Write minimum code to pass
3. **Refactor**: Improve code while keeping tests green

## Testing Patterns
\`\`\`python
# Arrange, Act, Assert
def test_discount():
    # Arrange
    price = 100
    discount = 0.2
    # Act
    result = apply_discount(price, discount)
    # Assert
    assert result == 80
\`\`\`

💡 Test edge cases: empty inputs, zero values, negative numbers, very large inputs.

⚠️ Tests should be independent — each test should work in isolation.`,
        exercises: [
          {
            id: 'l12-testing-ex1',
            title: 'Writing Unit Tests',
            description: 'Write tests for a calculator function.',
            instructions: ['Create a function calculate(a, op, b) that handles +, -, *, /', 'Raise ValueError for unknown operators', 'Raise ZeroDivisionError for division by zero', 'Write tests for: add, subtract, multiply, divide, divide by zero, unknown operator', 'Run tests and print results'],
            starterCode: '',
            solution: 'def calculate(a, op, b):\n    if op == \'+\': return a + b\n    if op == \'-\': return a - b\n    if op == \'*\': return a * b\n    if op == \'/\':\n        if b == 0: raise ZeroDivisionError("Cannot divide by zero")\n        return a / b\n    raise ValueError(f"Unknown operator: {op}")\n\n# Test suite\ntests = [\n    (\'add\', calculate(2, \'+\', 3) == 5),\n    (\'subtract\', calculate(10, \'-\', 4) == 6),\n    (\'multiply\', calculate(3, \'*\', 4) == 12),\n    (\'divide\', calculate(10, \'/\', 2) == 5.0),\n]\n\ntry:\n    calculate(1, \'/\', 0)\n    tests.append((\'div_by_zero\', False))\nexcept ZeroDivisionError:\n    tests.append((\'div_by_zero\', True))\n\ntry:\n    calculate(1, \'^\', 2)\n    tests.append((\'unknown_op\', False))\nexcept ValueError:\n    tests.append((\'unknown_op\', True))\n\nfor name, passed in tests:\n    print(f"{name}: {\'PASS\' if passed else \'FAIL\'}")',
            hint: 'Test normal cases with ==, exception cases with try/except.',
            expectedOutput: 'add: PASS\nsubtract: PASS\nmultiply: PASS\ndivide: PASS\ndiv_by_zero: PASS\nunknown_op: PASS',
          },
          {
            id: 'l12-testing-ex2',
            title: 'Test Assertions',
            description: 'Use various assertion types.',
            instructions: ['Create a function analyze_list(lst) that returns a dict with: \'length\', \'sum\', \'has_negative\' (bool), \'sorted\' (sorted copy)', 'Write assertions to test with [3, -1, 4, 1, 5]', 'Check length==5, sum==12, has_negative==True, sorted==[-1,1,3,4,5]', 'Print \'All assertions passed\' if no AssertionError'],
            starterCode: '',
            solution: 'def analyze_list(lst):\n    return {\n        \'length\': len(lst),\n        \'sum\': sum(lst),\n        \'has_negative\': any(x < 0 for x in lst),\n        \'sorted\': sorted(lst)\n    }\n\nresult = analyze_list([3, -1, 4, 1, 5])\nassert result[\'length\'] == 5, f"Length should be 5, got {result[\'length\']}"\nassert result[\'sum\'] == 12, f"Sum should be 12, got {result[\'sum\']}"\nassert result[\'has_negative\'] == True, "Should have negative"\nassert result[\'sorted\'] == [-1, 1, 3, 4, 5], "Sort failed"\nprint(\'All assertions passed\')',
            hint: 'Use assert with a message for debugging: assert condition, \'message\'.',
            expectedOutput: 'All assertions passed',
          },
          {
            id: 'l12-testing-ex3',
            title: 'Edge Case Testing',
            description: 'Test edge cases and boundary conditions.',
            instructions: ['Create a function safe_divide(a, b) that returns a/b or None on error', 'Create a function clamp(value, min_val, max_val) that constrains value to range', 'Test safe_divide with: (10,2), (10,0), (0,5)', 'Test clamp with: (5,0,10), (-5,0,10), (15,0,10), (5,5,5)', 'Print test name and result for each'],
            starterCode: '',
            solution: 'def safe_divide(a, b):\n    try:\n        return a / b\n    except (ZeroDivisionError, TypeError):\n        return None\n\ndef clamp(value, min_val, max_val):\n    return max(min_val, min(value, max_val))\n\ntests = [\n    (\'divide 10/2\', safe_divide(10, 2) == 5.0),\n    (\'divide 10/0\', safe_divide(10, 0) is None),\n    (\'divide 0/5\', safe_divide(0, 5) == 0.0),\n    (\'clamp middle\', clamp(5, 0, 10) == 5),\n    (\'clamp below\', clamp(-5, 0, 10) == 0),\n    (\'clamp above\', clamp(15, 0, 10) == 10),\n    (\'clamp equal\', clamp(5, 5, 5) == 5),\n]\n\nfor name, passed in tests:\n    print(f"{name}: {\'PASS\' if passed else \'FAIL\'}")',
            hint: 'Test normal, boundary, and error cases. Use is None for None checks.',
            expectedOutput: 'divide 10/2: PASS\ndivide 10/0: PASS\ndivide 0/5: PASS\nclamp middle: PASS\nclamp below: PASS\nclamp above: PASS\nclamp equal: PASS',
          },
          {
            id: 'l12-testing-ex4',
            title: 'Test-Driven Development',
            description: 'Practice TDD by writing tests first.',
            instructions: ['Write tests first for a Stack class that should support: push(item), pop() (returns item or raises IndexError), peek() (returns top without removing), is_empty(), size()', 'Then implement the Stack class to pass all tests', 'Print PASS/FAIL for each test'],
            starterCode: '',
            solution: 'class Stack:\n    def __init__(self):\n        self._items = []\n    \n    def push(self, item):\n        self._items.append(item)\n    \n    def pop(self):\n        if self.is_empty():\n            raise IndexError("Stack is empty")\n        return self._items.pop()\n    \n    def peek(self):\n        if self.is_empty():\n            raise IndexError("Stack is empty")\n        return self._items[-1]\n    \n    def is_empty(self):\n        return len(self._items) == 0\n    \n    def size(self):\n        return len(self._items)\n\n# Tests\ns = Stack()\ntests = []\ntests.append((\'empty initially\', s.is_empty() == True))\ntests.append((\'size 0\', s.size() == 0))\ns.push(1)\ns.push(2)\ntests.append((\'not empty after push\', s.is_empty() == False))\ntests.append((\'size 2\', s.size() == 2))\ntests.append((\'peek returns 2\', s.peek() == 2))\ntests.append((\'size still 2\', s.size() == 2))\ntests.append((\'pop returns 2\', s.pop() == 2))\ntests.append((\'size now 1\', s.size() == 1))\n\ntry:\n    empty = Stack()\n    empty.pop()\n    tests.append((\'pop empty raises\', False))\nexcept IndexError:\n    tests.append((\'pop empty raises\', True))\n\nfor name, passed in tests:\n    print(f"{name}: {\'PASS\' if passed else \'FAIL\'}")',
            hint: 'Implement Stack with a list. push=append, pop=pop, peek=[-1], is_empty=len==0.',
            expectedOutput: 'empty initially: PASS\nsize 0: PASS\nnot empty after push: PASS\nsize 2: PASS\npeek returns 2: PASS\nsize still 2: PASS\npop returns 2: PASS\nsize now 1: PASS\npop empty raises: PASS',
          },
          {
            id: 'l12-testing-ex5',
            title: 'Testing with Mocks',
            description: 'Simulate external dependencies with mock objects.',
            instructions: ['Create a class MockDatabase with methods: connect() sets connected=True, query(sql) returns predefined results if connected else raises ConnectionError, disconnect() sets connected=False', 'Create a function get_users(db) that connects, queries \'SELECT * FROM users\', disconnects, returns results', 'Test the workflow and verify all steps', 'Print results'],
            starterCode: '',
            solution: 'class MockDatabase:\n    def __init__(self):\n        self.connected = False\n        self.queries = []\n        self.data = {\'SELECT * FROM users\': [{\'id\': 1, \'name\': \'Alice\'}, {\'id\': 2, \'name\': \'Bob\'}]}\n    \n    def connect(self):\n        self.connected = True\n    \n    def query(self, sql):\n        if not self.connected:\n            raise ConnectionError("Not connected")\n        self.queries.append(sql)\n        return self.data.get(sql, [])\n    \n    def disconnect(self):\n        self.connected = False\n\ndef get_users(db):\n    db.connect()\n    results = db.query(\'SELECT * FROM users\')\n    db.disconnect()\n    return results\n\ndb = MockDatabase()\nusers = get_users(db)\n\ntests = [\n    (\'returns users\', len(users) == 2),\n    (\'first user Alice\', users[0][\'name\'] == \'Alice\'),\n    (\'disconnected after\', db.connected == False),\n    (\'query recorded\', \'SELECT * FROM users\' in db.queries),\n]\n\nfor name, passed in tests:\n    print(f"{name}: {\'PASS\' if passed else \'FAIL\'}")',
            hint: 'Mock objects simulate real dependencies. Track method calls and return predefined data.',
            expectedOutput: 'returns users: PASS\nfirst user Alice: PASS\ndisconnected after: PASS\nquery recorded: PASS',
          }
        ],
      },
      {
        id: 'packaging',
        number: 7,
        title: 'Packaging & Distribution',
        description: 'Package Python projects for distribution and manage dependencies.',
        icon: 'Package',
        type: 'exercises',
        lesson: `# Packaging & Distribution

Packaging lets you share your Python code as installable packages.

## Project Structure
\`\`\`
mypackage/
├── pyproject.toml
├── README.md
├── src/
│   └── mypackage/
│       ├── __init__.py
│       └── core.py
└── tests/
    └── test_core.py
\`\`\`

## pyproject.toml
\`\`\`toml
[build-system]
requires = ["setuptools>=61.0"]
build-backend = "setuptools.backends._legacy:_Backend"

[project]
name = "mypackage"
version = "0.1.0"
dependencies = ["requests>=2.28"]
\`\`\`

## Virtual Environments
\`\`\`python
# python -m venv myenv
# source myenv/bin/activate  (Linux/Mac)
# myenv\\Scripts\\activate    (Windows)
# pip install -r requirements.txt
\`\`\`

## __init__.py
\`\`\`python
# src/mypackage/__init__.py
from .core import main_function
__version__ = "0.1.0"
__all__ = ['main_function']
\`\`\`

## Semantic Versioning
- MAJOR.MINOR.PATCH (e.g., 2.1.3)
- MAJOR: breaking changes
- MINOR: new features (backward compatible)
- PATCH: bug fixes

💡 Always pin exact versions in requirements.txt for reproducibility.

⚠️ Never commit virtual environments to version control. Add them to .gitignore.`,
        exercises: [
          {
            id: 'l12-packaging-ex1',
            title: 'Module Structure',
            description: 'Design a proper module structure.',
            instructions: ['Create a simulated package structure using classes', 'Create a Module class with name, version, and exports (list of function names)', 'Create modules: \'mathutils\' v1.0.0 exports [\'add\',\'subtract\',\'multiply\'], \'strutils\' v0.2.1 exports [\'capitalize\',\'reverse\']', 'Print each module\'s info formatted as: \'name v{version}: {exports}\''],
            starterCode: '',
            solution: 'class Module:\n    def __init__(self, name, version, exports):\n        self.name = name\n        self.version = version\n        self.exports = exports\n    \n    def __str__(self):\n        return f"{self.name} v{self.version}: {self.exports}"\n\nmodules = [\n    Module(\'mathutils\', \'1.0.0\', [\'add\', \'subtract\', \'multiply\']),\n    Module(\'strutils\', \'0.2.1\', [\'capitalize\', \'reverse\'])\n]\n\nfor mod in modules:\n    print(mod)',
            hint: 'Create a simple class to represent module metadata.',
            expectedOutput: 'mathutils v1.0.0: [\'add\', \'subtract\', \'multiply\']\nstrutils v0.2.1: [\'capitalize\', \'reverse\']',
          },
          {
            id: 'l12-packaging-ex2',
            title: 'Version Comparison',
            description: 'Implement semantic version comparison.',
            instructions: ['Create a function parse_version(version_str) that returns a tuple of (major, minor, patch)', 'Create a function compare_versions(v1, v2) that returns 1 if v1>v2, -1 if v1<v2, 0 if equal', 'Test: compare \'1.2.3\' with \'1.2.4\', \'2.0.0\' with \'1.9.9\', \'1.0.0\' with \'1.0.0\'', 'Print results'],
            starterCode: '',
            solution: 'def parse_version(v):\n    parts = v.split(\'.\')\n    return tuple(int(p) for p in parts)\n\ndef compare_versions(v1, v2):\n    t1, t2 = parse_version(v1), parse_version(v2)\n    if t1 > t2: return 1\n    if t1 < t2: return -1\n    return 0\n\ntests = [\n    (\'1.2.3\', \'1.2.4\'),\n    (\'2.0.0\', \'1.9.9\'),\n    (\'1.0.0\', \'1.0.0\'),\n]\n\nfor v1, v2 in tests:\n    result = compare_versions(v1, v2)\n    symbol = \'>\' if result == 1 else \'<\' if result == -1 else \'==\'\n    print(f"{v1} {symbol} {v2}")',
            hint: 'Split version string by \'.\', convert to tuple of ints, compare tuples.',
            expectedOutput: '1.2.3 < 1.2.4\n2.0.0 > 1.9.9\n1.0.0 == 1.0.0',
          },
          {
            id: 'l12-packaging-ex3',
            title: 'Dependency Resolver',
            description: 'Build a simple dependency resolver.',
            instructions: ['Create a dependency graph: {\'app\': [\'web\', \'db\'], \'web\': [\'utils\'], \'db\': [\'utils\'], \'utils\': []}', 'Write a function resolve(package, graph) that returns installation order (dependencies first)', 'Use topological ordering (DFS)', 'Print the installation order for \'app\''],
            starterCode: '',
            solution: 'def resolve(package, graph, resolved=None, seen=None):\n    if resolved is None:\n        resolved = []\n    if seen is None:\n        seen = set()\n    seen.add(package)\n    for dep in graph.get(package, []):\n        if dep not in resolved:\n            if dep in seen and dep not in resolved:\n                continue\n            resolve(dep, graph, resolved, seen)\n    if package not in resolved:\n        resolved.append(package)\n    return resolved\n\ngraph = {\n    \'app\': [\'web\', \'db\'],\n    \'web\': [\'utils\'],\n    \'db\': [\'utils\'],\n    \'utils\': []\n}\n\norder = resolve(\'app\', graph)\nfor i, pkg in enumerate(order, 1):\n    print(f"{i}. Install {pkg}")',
            hint: 'Recursively resolve dependencies first, then add the package itself.',
            expectedOutput: '1. Install utils\n2. Install web\n3. Install db\n4. Install app',
          },
          {
            id: 'l12-packaging-ex4',
            title: 'Requirements Parser',
            description: 'Parse requirements.txt format.',
            instructions: ['Parse this requirements text: \'requests==2.28.1\\nnumpy>=1.23.0\\npandas~=1.5.0\\nflask\\n# this is a comment\\n\\npytest>=7.0.0\'', 'Extract package name and version constraint for each (skip comments and blank lines)', 'Print each as \'package: constraint\' (or \'package: any\' if no constraint)'],
            starterCode: '',
            solution: 'import re\n\nrequirements = \'requests==2.28.1\\nnumpy>=1.23.0\\npandas~=1.5.0\\nflask\\n# this is a comment\\n\\npytest>=7.0.0\'\n\nfor line in requirements.split(\'\\n\'):\n    line = line.strip()\n    if not line or line.startswith(\'#\'):\n        continue\n    match = re.match(r\'([a-zA-Z0-9_-]+)(.*)\', line)\n    if match:\n        name = match.group(1)\n        constraint = match.group(2).strip() or \'any\'\n        print(f"{name}: {constraint}")',
            hint: 'Split by newlines, skip comments (#) and blanks, parse name and version constraint with regex.',
            expectedOutput: 'requests: ==2.28.1\nnumpy: >=1.23.0\npandas: ~=1.5.0\nflask: any\npytest: >=7.0.0',
          },
          {
            id: 'l12-packaging-ex5',
            title: 'Package Registry Simulator',
            description: 'Simulate a package registry with search and install.',
            instructions: ['Create a PackageRegistry class with methods: register(name, version, description), search(query) returns packages where query is in name or description, install(name) prints installation message', 'Register: (\'requests\', \'2.28.1\', \'HTTP library\'), (\'flask\', \'2.3.0\', \'Web framework\'), (\'numpy\', \'1.24.0\', \'Numerical computing\'), (\'pandas\', \'2.0.0\', \'Data analysis library\')', 'Search for \'data\' and print results', 'Install \'flask\' and print confirmation'],
            starterCode: '',
            solution: 'class PackageRegistry:\n    def __init__(self):\n        self.packages = {}\n    \n    def register(self, name, version, description):\n        self.packages[name] = {\'version\': version, \'description\': description}\n    \n    def search(self, query):\n        results = []\n        for name, info in self.packages.items():\n            if query.lower() in name.lower() or query.lower() in info[\'description\'].lower():\n                results.append((name, info))\n        return results\n    \n    def install(self, name):\n        if name in self.packages:\n            info = self.packages[name]\n            return f"Installing {name}=={info[\'version\']}"\n        return f"Package {name} not found"\n\nreg = PackageRegistry()\nreg.register(\'requests\', \'2.28.1\', \'HTTP library\')\nreg.register(\'flask\', \'2.3.0\', \'Web framework\')\nreg.register(\'numpy\', \'1.24.0\', \'Numerical computing\')\nreg.register(\'pandas\', \'2.0.0\', \'Data analysis library\')\n\nresults = reg.search(\'data\')\nfor name, info in results:\n    print(f"{name} ({info[\'version\']}): {info[\'description\']}")\nprint(reg.install(\'flask\'))',
            hint: 'Store packages in a dict. Search by checking if query is in name or description.',
            expectedOutput: 'pandas (2.0.0): Data analysis library\nInstalling flask==2.3.0',
          }
        ],
      },
      {
        id: 'debugging',
        number: 8,
        title: 'Debugging & Profiling',
        description: 'Debug code, profile performance, and implement logging strategies.',
        icon: 'Bug',
        type: 'exercises',
        lesson: `# Debugging & Profiling

Finding and fixing bugs efficiently is a critical skill. Python provides excellent debugging and profiling tools.

## Logging
\`\`\`python
import logging

logging.basicConfig(level=logging.DEBUG,
                   format='%(levelname)s: %(message)s')

logging.debug("Variable x = 5")
logging.info("Process started")
logging.warning("Disk space low")
logging.error("Connection failed")
\`\`\`

## Debugging Techniques
\`\`\`python
# 1. Print debugging
print(f"DEBUG: x={x}, type={type(x)}")

# 2. Assert statements
assert len(data) > 0, "Data should not be empty"

# 3. Try/except with traceback
import traceback
try:
    risky_operation()
except Exception as e:
    traceback.print_exc()
\`\`\`

## Performance Measurement
\`\`\`python
import time

def measure_time(func, *args):
    start = time.perf_counter()
    result = func(*args)
    elapsed = time.perf_counter() - start
    return result, elapsed
\`\`\`

## Memory Usage Estimation
\`\`\`python
import sys
x = [1, 2, 3, 4, 5]
print(sys.getsizeof(x))  # Size in bytes
\`\`\`

## Common Bug Patterns
- Off-by-one errors in loops
- Mutable default arguments
- Shallow vs deep copy
- Integer division vs float division

💡 Use logging instead of print() for production code — you can control verbosity.

⚠️ Don't catch generic exceptions in production. Be specific about what you handle.`,
        exercises: [
          {
            id: 'l12-debugging-ex1',
            title: 'Logging System',
            description: 'Implement a simple logging system.',
            instructions: ['Create a Logger class with levels: DEBUG=0, INFO=1, WARNING=2, ERROR=3', 'Methods: set_level(level), log(level, message) prints \'[LEVEL] message\' only if level >= current level', 'Create a logger, set level to WARNING', 'Log messages at all 4 levels and show which ones appear'],
            starterCode: '',
            solution: 'class Logger:\n    LEVELS = {\'DEBUG\': 0, \'INFO\': 1, \'WARNING\': 2, \'ERROR\': 3}\n    \n    def __init__(self):\n        self.level = 0\n    \n    def set_level(self, level_name):\n        self.level = self.LEVELS[level_name]\n    \n    def log(self, level_name, message):\n        if self.LEVELS[level_name] >= self.level:\n            print(f"[{level_name}] {message}")\n\nlogger = Logger()\nlogger.set_level(\'WARNING\')\nlogger.log(\'DEBUG\', \'Debug info\')\nlogger.log(\'INFO\', \'Server started\')\nlogger.log(\'WARNING\', \'Disk space low\')\nlogger.log(\'ERROR\', \'Connection failed\')',
            hint: 'Compare numeric level values. Only print if message level >= logger level.',
            expectedOutput: '[WARNING] Disk space low\n[ERROR] Connection failed',
          },
          {
            id: 'l12-debugging-ex2',
            title: 'Bug Hunter',
            description: 'Find and fix bugs in code.',
            instructions: ['Each function below has a bug. Fix them and verify with tests.', '1. def average(nums): return sum(nums) / len(nums) — bug: empty list', '2. def find_max(lst): m = 0; for x in lst: if x > m: m = x; return m — bug: negative numbers', '3. def count_vowels(s): count = 0; for c in s: if c in \'aeiou\': count += 1; return count — bug: uppercase', 'Fix all three and print test results'],
            starterCode: '',
            solution: '# Fixed functions\ndef average(nums):\n    if not nums:\n        return 0\n    return sum(nums) / len(nums)\n\ndef find_max(lst):\n    if not lst:\n        return None\n    m = lst[0]\n    for x in lst:\n        if x > m:\n            m = x\n    return m\n\ndef count_vowels(s):\n    count = 0\n    for c in s.lower():\n        if c in \'aeiou\':\n            count += 1\n    return count\n\n# Tests\ntests = [\n    (\'avg empty\', average([]) == 0),\n    (\'avg normal\', average([10, 20, 30]) == 20.0),\n    (\'max negative\', find_max([-5, -2, -8]) == -2),\n    (\'max normal\', find_max([1, 5, 3]) == 5),\n    (\'vowels upper\', count_vowels(\'HELLO\') == 2),\n    (\'vowels mixed\', count_vowels(\'Hello World\') == 3),\n]\n\nfor name, passed in tests:\n    print(f"{name}: {\'PASS\' if passed else \'FAIL\'}")',
            hint: 'Bug 1: handle empty list. Bug 2: initialize max with first element. Bug 3: convert to lowercase.',
            expectedOutput: 'avg empty: PASS\navg normal: PASS\nmax negative: PASS\nmax normal: PASS\nvowels upper: PASS\nvowels mixed: PASS',
          },
          {
            id: 'l12-debugging-ex3',
            title: 'Performance Measurement',
            description: 'Compare algorithm performance.',
            instructions: ['Import time', 'Implement two functions to sum numbers 1 to n:', '  slow_sum(n): loop-based', '  fast_sum(n): formula n*(n+1)//2', 'Measure execution time for n=1000000', 'Print both results (should be equal)', 'Print which is faster'],
            starterCode: '',
            solution: 'import time\n\ndef slow_sum(n):\n    total = 0\n    for i in range(1, n + 1):\n        total += i\n    return total\n\ndef fast_sum(n):\n    return n * (n + 1) // 2\n\nn = 1000000\n\nstart = time.perf_counter()\nr1 = slow_sum(n)\nt1 = time.perf_counter() - start\n\nstart = time.perf_counter()\nr2 = fast_sum(n)\nt2 = time.perf_counter() - start\n\nprint(f"Results equal: {r1 == r2}")\nprint(f"Loop sum: {r1}")\nprint(f"Formula sum: {r2}")\nprint(f"Formula is faster: {t2 < t1}")',
            hint: 'Use time.perf_counter() before and after each function call.',
            expectedOutput: 'Results equal: True\nLoop sum: 500000500000\nFormula sum: 500000500000\nFormula is faster: True',
          },
          {
            id: 'l12-debugging-ex4',
            title: 'Memory Usage Analysis',
            description: 'Analyze memory usage of different data structures.',
            instructions: ['Import sys', 'Create: a list of 100 integers, a tuple of 100 integers, a set of 100 integers, a dict mapping 100 ints to themselves', 'Print the size in bytes of each using sys.getsizeof()', 'Print which is most memory efficient for storing 100 integers'],
            starterCode: '',
            solution: 'import sys\n\ndata = list(range(100))\nstructures = {\n    \'list\': list(data),\n    \'tuple\': tuple(data),\n    \'set\': set(data),\n    \'dict\': {x: x for x in data}\n}\n\nsizes = {}\nfor name, obj in structures.items():\n    size = sys.getsizeof(obj)\n    sizes[name] = size\n    print(f"{name}: {size} bytes")\n\nmost_efficient = min(sizes, key=sizes.get)\nprint(f"Most efficient: {most_efficient}")',
            hint: 'sys.getsizeof() returns the memory size. Compare sizes to find the smallest.',
            expectedOutput: 'list: 920 bytes\ntuple: 856 bytes\nset: 8408 bytes\ndict: 4176 bytes\nMost efficient: tuple',
          },
          {
            id: 'l12-debugging-ex5',
            title: 'Exception Chain Debugger',
            description: 'Trace and debug exception chains.',
            instructions: ['Create a function chain that simulates a 3-layer call stack:', '  layer3() raises ValueError(\'Invalid data\')', '  layer2() calls layer3(), catches ValueError, raises RuntimeError(\'Processing failed\') from it', '  layer1() calls layer2(), catches RuntimeError, prints the chain', 'Print each exception type and message in the chain'],
            starterCode: '',
            solution: 'def layer3():\n    raise ValueError(\'Invalid data\')\n\ndef layer2():\n    try:\n        layer3()\n    except ValueError as e:\n        raise RuntimeError(\'Processing failed\') from e\n\ndef layer1():\n    try:\n        layer2()\n    except RuntimeError as e:\n        exceptions = []\n        current = e\n        while current:\n            exceptions.append(current)\n            current = current.__cause__\n        for i, ex in enumerate(exceptions):\n            prefix = \'Caused by: \' if i > 0 else \'Error: \'\n            print(f"{prefix}{type(ex).__name__}: {ex}")\n\nlayer1()',
            hint: 'Use exception.__cause__ to walk the chain of exceptions.',
            expectedOutput: 'Error: RuntimeError: Processing failed\nCaused by: ValueError: Invalid data',
          }
        ],
      }
    ],
  },
  {
    id: 'specialized',
    title: 'Specialized Domains',
    subtitle: 'Apply Python Everywhere',
    description: 'Apply Python to specific fields and advanced topics.',
    icon: 'Rocket',
    color: 'rose',
    categories: [
      {
        id: 'gui-tkinter',
        number: 1,
        title: 'GUI with Tkinter',
        description: 'Build graphical interfaces with windows, widgets, events, and layout managers.',
        icon: 'Monitor',
        type: 'exercises',
        lesson: `# GUI with Tkinter

Tkinter is Python's built-in GUI toolkit. While we can't render GUIs in a browser, understanding the concepts and API is valuable.

## Window Creation
\`\`\`python
import tkinter as tk

root = tk.Tk()
root.title("My App")
root.geometry("400x300")  # width x height
# root.mainloop()  # Start event loop
\`\`\`

## Widgets
\`\`\`python
# Label
label = tk.Label(root, text="Hello!", font=("Arial", 16))
label.pack()

# Button
button = tk.Button(root, text="Click Me", command=on_click)
button.pack()

# Entry (text input)
entry = tk.Entry(root)
entry.pack()

# Text area
text = tk.Text(root, height=5, width=30)
text.pack()
\`\`\`

## Layout Managers
\`\`\`python
# pack: simple top-to-bottom or side-by-side
widget.pack(side='left', padx=10, pady=5)

# grid: table-like layout
widget.grid(row=0, column=1, sticky='nsew')

# place: absolute positioning
widget.place(x=100, y=50)
\`\`\`

## Event Handling
\`\`\`python
def on_click():
    label.config(text="Clicked!")

button = tk.Button(root, text="Click", command=on_click)

# Keyboard binding
root.bind('<Return>', lambda e: on_click())
\`\`\`

💡 Use grid layout for forms and complex layouts. pack for simple stacking.

⚠️ Never call mainloop() in a non-GUI environment — it will block forever.`,
        exercises: [
          {
            id: 'l13-gui-tkinter-ex1',
            title: 'Widget Hierarchy',
            description: 'Design a GUI widget structure.',
            instructions: ['Create a class Widget with name, widget_type, and children (list of Widgets)', 'Create a method tree(indent=0) that prints the widget hierarchy', 'Build: Window -> [Frame -> [Label(\'Title\'), Entry(\'Name Input\'), Button(\'Submit\')], Frame -> [Label(\'Status\')]]', 'Print the tree'],
            starterCode: '',
            solution: 'class Widget:\n    def __init__(self, name, widget_type, children=None):\n        self.name = name\n        self.widget_type = widget_type\n        self.children = children or []\n    \n    def tree(self, indent=0):\n        print(\'  \' * indent + f"{self.widget_type}: {self.name}")\n        for child in self.children:\n            child.tree(indent + 1)\n\napp = Widget(\'My App\', \'Window\', [\n    Widget(\'Main\', \'Frame\', [\n        Widget(\'Title\', \'Label\'),\n        Widget(\'Name Input\', \'Entry\'),\n        Widget(\'Submit\', \'Button\')\n    ]),\n    Widget(\'Footer\', \'Frame\', [\n        Widget(\'Status\', \'Label\')\n    ])\n])\napp.tree()',
            hint: 'Use recursive printing with increasing indent for child widgets.',
            expectedOutput: 'Window: My App\n  Frame: Main\n    Label: Title\n    Entry: Name Input\n    Button: Submit\n  Frame: Footer\n    Label: Status',
          },
          {
            id: 'l13-gui-tkinter-ex2',
            title: 'Event System',
            description: 'Implement an event handling system.',
            instructions: ['Create an EventSystem class with methods: on(event, callback), emit(event, *args)', 'Support multiple callbacks per event', 'Register handlers for \'click\', \'keypress\', \'submit\'', 'Emit each event and print which handlers run'],
            starterCode: '',
            solution: 'class EventSystem:\n    def __init__(self):\n        self.handlers = {}\n    \n    def on(self, event, callback):\n        self.handlers.setdefault(event, []).append(callback)\n    \n    def emit(self, event, *args):\n        for handler in self.handlers.get(event, []):\n            handler(*args)\n\nes = EventSystem()\nes.on(\'click\', lambda: print(\'Button clicked!\'))\nes.on(\'click\', lambda: print(\'Analytics: click recorded\'))\nes.on(\'keypress\', lambda key: print(f\'Key pressed: {key}\'))\nes.on(\'submit\', lambda data: print(f\'Form submitted: {data}\'))\n\nes.emit(\'click\')\nes.emit(\'keypress\', \'Enter\')\nes.emit(\'submit\', \'user=Alice\')',
            hint: 'Use a dict mapping event names to lists of callback functions.',
            expectedOutput: 'Button clicked!\nAnalytics: click recorded\nKey pressed: Enter\nForm submitted: user=Alice',
          },
          {
            id: 'l13-gui-tkinter-ex3',
            title: 'Grid Layout Calculator',
            description: 'Calculate widget positions in a grid layout.',
            instructions: ['Create a GridLayout class with rows and cols', 'Method place(widget_name, row, col, rowspan=1, colspan=1) stores placement', 'Method get_layout() returns all placements sorted by row then column', 'Place: \'Title\' at (0,0) colspan=2, \'Input\' at (1,0), \'Button\' at (1,1), \'Status\' at (2,0) colspan=2', 'Print each widget\'s position'],
            starterCode: '',
            solution: 'class GridLayout:\n    def __init__(self, rows, cols):\n        self.rows = rows\n        self.cols = cols\n        self.placements = []\n    \n    def place(self, name, row, col, rowspan=1, colspan=1):\n        self.placements.append({\n            \'name\': name, \'row\': row, \'col\': col,\n            \'rowspan\': rowspan, \'colspan\': colspan\n        })\n    \n    def get_layout(self):\n        return sorted(self.placements, key=lambda p: (p[\'row\'], p[\'col\']))\n\ngrid = GridLayout(3, 2)\ngrid.place(\'Title\', 0, 0, colspan=2)\ngrid.place(\'Input\', 1, 0)\ngrid.place(\'Button\', 1, 1)\ngrid.place(\'Status\', 2, 0, colspan=2)\n\nfor p in grid.get_layout():\n    span = \'\'\n    if p[\'colspan\'] > 1:\n        span += f" colspan={p[\'colspan\']}"\n    if p[\'rowspan\'] > 1:\n        span += f" rowspan={p[\'rowspan\']}"\n    print(f"{p[\'name\']}: row={p[\'row\']}, col={p[\'col\']}{span}")',
            hint: 'Store placements as dicts. Sort by (row, col) for ordered output.',
            expectedOutput: 'Title: row=0, col=0 colspan=2\nInput: row=1, col=0\nButton: row=1, col=1\nStatus: row=2, col=0 colspan=2',
          },
          {
            id: 'l13-gui-tkinter-ex4',
            title: 'Form Validator',
            description: 'Build form validation logic for GUI forms.',
            instructions: ['Create a FormValidator class with add_field(name, value, rules) and validate()', 'Rules: \'required\' (not empty), \'min:N\' (min length N), \'email\' (contains @ and .)', 'Test with: name=\'Alice\' (required, min:2), email=\'alice@test.com\' (required, email), phone=\'\' (required)', 'Print validation results: field name and pass/fail with error message'],
            starterCode: '',
            solution: 'class FormValidator:\n    def __init__(self):\n        self.fields = []\n    \n    def add_field(self, name, value, rules):\n        self.fields.append({\'name\': name, \'value\': value, \'rules\': rules})\n    \n    def validate(self):\n        results = []\n        for field in self.fields:\n            errors = []\n            for rule in field[\'rules\']:\n                if rule == \'required\' and not field[\'value\']:\n                    errors.append(\'is required\')\n                elif rule.startswith(\'min:\'):\n                    min_len = int(rule.split(\':\')[1])\n                    if len(field[\'value\']) < min_len:\n                        errors.append(f\'min length {min_len}\')\n                elif rule == \'email\':\n                    if \'@\' not in field[\'value\'] or \'.\' not in field[\'value\']:\n                        errors.append(\'invalid email\')\n            results.append((field[\'name\'], errors))\n        return results\n\nform = FormValidator()\nform.add_field(\'name\', \'Alice\', [\'required\', \'min:2\'])\nform.add_field(\'email\', \'alice@test.com\', [\'required\', \'email\'])\nform.add_field(\'phone\', \'\', [\'required\'])\n\nfor name, errors in form.validate():\n    if errors:\n        print(f"{name}: FAIL - {\', \'.join(errors)}")\n    else:\n        print(f"{name}: PASS")',
            hint: 'Check each rule against the field value. Collect errors per field.',
            expectedOutput: 'name: PASS\nemail: PASS\nphone: FAIL - is required',
          },
          {
            id: 'l13-gui-tkinter-ex5',
            title: 'State Management',
            description: 'Implement state management for GUI applications.',
            instructions: ['Create an AppState class with get(key), set(key, value), and on_change(key, callback)', 'When a value changes, call all registered callbacks for that key with (key, old_value, new_value)', 'Set initial: counter=0, username=\'Guest\'', 'Register change listeners that print changes', 'Update counter to 1 then 2, username to \'Alice\''],
            starterCode: '',
            solution: 'class AppState:\n    def __init__(self):\n        self._state = {}\n        self._listeners = {}\n    \n    def get(self, key):\n        return self._state.get(key)\n    \n    def set(self, key, value):\n        old = self._state.get(key)\n        self._state[key] = value\n        if old != value and key in self._listeners:\n            for cb in self._listeners[key]:\n                cb(key, old, value)\n    \n    def on_change(self, key, callback):\n        self._listeners.setdefault(key, []).append(callback)\n\nstate = AppState()\nstate.set(\'counter\', 0)\nstate.set(\'username\', \'Guest\')\n\nstate.on_change(\'counter\', lambda k, old, new: print(f"{k}: {old} -> {new}"))\nstate.on_change(\'username\', lambda k, old, new: print(f"{k}: {old} -> {new}"))\n\nstate.set(\'counter\', 1)\nstate.set(\'counter\', 2)\nstate.set(\'username\', \'Alice\')',
            hint: 'Store state in a dict. Keep listeners per key. Call them when value changes.',
            expectedOutput: 'counter: 0 -> 1\ncounter: 1 -> 2\nusername: Guest -> Alice',
          }
        ],
      },
      {
        id: 'pygame-basics',
        number: 2,
        title: 'Game Dev with Pygame',
        description: 'Learn game development concepts: game loops, sprites, collision, and input.',
        icon: 'Gamepad2',
        type: 'exercises',
        lesson: `# Game Development with Pygame

Game development teaches excellent programming patterns. We'll focus on the concepts since we can't render graphics.

## The Game Loop
Every game follows this pattern:
\`\`\`python
# while running:
#   1. Handle input (events)
#   2. Update game state
#   3. Render (draw)
#   4. Control frame rate
\`\`\`

## Game Objects
\`\`\`python
class GameObject:
    def __init__(self, x, y, width, height):
        self.x = x
        self.y = y
        self.width = width
        self.height = height
        self.speed = 5
    
    def move(self, dx, dy):
        self.x += dx * self.speed
        self.y += dy * self.speed
\`\`\`

## Collision Detection
\`\`\`python
def check_collision(a, b):
    return (a.x < b.x + b.width and
            a.x + a.width > b.x and
            a.y < b.y + b.height and
            a.y + a.height > b.y)
\`\`\`

## Vector Math
\`\`\`python
import math

def distance(p1, p2):
    return math.sqrt((p2[0]-p1[0])**2 + (p2[1]-p1[1])**2)

def normalize(dx, dy):
    length = math.sqrt(dx**2 + dy**2)
    if length == 0:
        return 0, 0
    return dx/length, dy/length
\`\`\`

💡 Keep game logic separate from rendering — makes testing much easier.

⚠️ Use delta time for movement to make games frame-rate independent.`,
        exercises: [
          {
            id: 'l13-pygame-basics-ex1',
            title: 'Game Object System',
            description: 'Create a game object with position and movement.',
            instructions: ['Create a GameObject class with x, y, width, height, speed attributes', 'Add move(dx, dy) method that updates position by dx*speed, dy*speed', 'Add bounds_check(screen_w, screen_h) that keeps object within screen', 'Create a player at (100, 100) with size 50x50 and speed 10', 'Move right 3 times, then try to move beyond screen (800x600)', 'Print position after each move'],
            starterCode: '',
            solution: 'class GameObject:\n    def __init__(self, x, y, width, height, speed=5):\n        self.x = x\n        self.y = y\n        self.width = width\n        self.height = height\n        self.speed = speed\n    \n    def move(self, dx, dy):\n        self.x += dx * self.speed\n        self.y += dy * self.speed\n    \n    def bounds_check(self, screen_w, screen_h):\n        self.x = max(0, min(self.x, screen_w - self.width))\n        self.y = max(0, min(self.y, screen_h - self.height))\n\nplayer = GameObject(100, 100, 50, 50, speed=10)\n\nfor i in range(3):\n    player.move(1, 0)\n    print(f"After move {i+1}: ({player.x}, {player.y})")\n\nplayer.x = 780\nplayer.move(1, 0)\nplayer.bounds_check(800, 600)\nprint(f"After bounds check: ({player.x}, {player.y})")',
            hint: 'Move by dx*speed. Clamp position between 0 and screen_size - object_size.',
            expectedOutput: 'After move 1: (110, 100)\nAfter move 2: (120, 100)\nAfter move 3: (130, 100)\nAfter bounds check: (750, 100)',
          },
          {
            id: 'l13-pygame-basics-ex2',
            title: 'Collision Detection',
            description: 'Implement rectangle collision detection.',
            instructions: ['Create a function collides(obj1, obj2) that checks AABB collision', 'obj1 and obj2 have x, y, width, height attributes', 'Test with: player at (10,10) size 50x50 vs enemy at (40,40) size 30x30 (should collide)', 'Test: player at (10,10) size 50x50 vs coin at (200,200) size 20x20 (no collision)', 'Test: player at (10,10) size 50x50 vs wall at (60,10) size 10x50 (touching edge = no collision)', 'Print each test result'],
            starterCode: '',
            solution: 'class Rect:\n    def __init__(self, x, y, w, h):\n        self.x = x\n        self.y = y\n        self.width = w\n        self.height = h\n\ndef collides(a, b):\n    return (a.x < b.x + b.width and\n            a.x + a.width > b.x and\n            a.y < b.y + b.height and\n            a.y + a.height > b.y)\n\nplayer = Rect(10, 10, 50, 50)\nenemy = Rect(40, 40, 30, 30)\ncoin = Rect(200, 200, 20, 20)\nwall = Rect(60, 10, 10, 50)\n\nprint(f"Player vs Enemy: {collides(player, enemy)}")\nprint(f"Player vs Coin: {collides(player, coin)}")\nprint(f"Player vs Wall: {collides(player, wall)}")',
            hint: 'AABB: overlap if a.left < b.right AND a.right > b.left AND a.top < b.bottom AND a.bottom > b.top.',
            expectedOutput: 'Player vs Enemy: True\nPlayer vs Coin: False\nPlayer vs Wall: False',
          },
          {
            id: 'l13-pygame-basics-ex3',
            title: 'Game Score System',
            description: 'Build a scoring and high score system.',
            instructions: ['Create a ScoreManager class with: add_points(n), get_score(), reset(), add_to_leaderboard(name), get_leaderboard()', 'Leaderboard stores top 3 scores', 'Simulate a game: player scores 100, 50, 200 points', 'Save to leaderboard as \'Player1\'', 'Reset and score 400 points, save as \'Player2\'', 'Print the leaderboard'],
            starterCode: '',
            solution: 'class ScoreManager:\n    def __init__(self):\n        self.score = 0\n        self.leaderboard = []\n    \n    def add_points(self, n):\n        self.score += n\n    \n    def get_score(self):\n        return self.score\n    \n    def reset(self):\n        self.score = 0\n    \n    def add_to_leaderboard(self, name):\n        self.leaderboard.append((name, self.score))\n        self.leaderboard.sort(key=lambda x: x[1], reverse=True)\n        self.leaderboard = self.leaderboard[:3]\n    \n    def get_leaderboard(self):\n        return self.leaderboard\n\nsm = ScoreManager()\nsm.add_points(100)\nsm.add_points(50)\nsm.add_points(200)\nprint(f"Player1 score: {sm.get_score()}")\nsm.add_to_leaderboard(\'Player1\')\n\nsm.reset()\nsm.add_points(400)\nprint(f"Player2 score: {sm.get_score()}")\nsm.add_to_leaderboard(\'Player2\')\n\nprint("Leaderboard:")\nfor i, (name, score) in enumerate(sm.get_leaderboard(), 1):\n    print(f"{i}. {name}: {score}")',
            hint: 'Track score with add/reset. Store leaderboard as sorted list of (name, score) tuples.',
            expectedOutput: 'Player1 score: 350\nPlayer2 score: 400\nLeaderboard:\n1. Player2: 400\n2. Player1: 350',
          },
          {
            id: 'l13-pygame-basics-ex4',
            title: 'Game State Machine',
            description: 'Implement a state machine for game states.',
            instructions: ['Create a StateMachine class with states: \'menu\', \'playing\', \'paused\', \'game_over\'', 'Define valid transitions: menu->playing, playing->paused, paused->playing, playing->game_over, game_over->menu', 'Method transition(new_state) changes state if valid, prints transition or error', 'Simulate: menu -> playing -> paused -> playing -> game_over -> menu'],
            starterCode: '',
            solution: 'class StateMachine:\n    def __init__(self):\n        self.state = \'menu\'\n        self.transitions = {\n            \'menu\': [\'playing\'],\n            \'playing\': [\'paused\', \'game_over\'],\n            \'paused\': [\'playing\'],\n            \'game_over\': [\'menu\']\n        }\n    \n    def transition(self, new_state):\n        if new_state in self.transitions.get(self.state, []):\n            old = self.state\n            self.state = new_state\n            print(f"{old} -> {new_state}")\n        else:\n            print(f"Invalid: {self.state} -> {new_state}")\n\nsm = StateMachine()\nsm.transition(\'playing\')\nsm.transition(\'paused\')\nsm.transition(\'playing\')\nsm.transition(\'game_over\')\nsm.transition(\'menu\')',
            hint: 'Store valid transitions as a dict of state -> list of allowed next states.',
            expectedOutput: 'menu -> playing\nplaying -> paused\npaused -> playing\nplaying -> game_over\ngame_over -> menu',
          },
          {
            id: 'l13-pygame-basics-ex5',
            title: 'Particle System',
            description: 'Simulate a simple particle system.',
            instructions: ['Create a Particle class with x, y, vx, vy, lifetime (in frames)', 'Create a ParticleSystem class with emit(x, y, count) and update()', 'update() moves particles by velocity and decreases lifetime; removes dead particles', 'Emit 3 particles at (100,100) with velocities (1,0), (0,1), (-1,0) and lifetime=3', 'Run 4 updates, printing particle count and positions each frame'],
            starterCode: '',
            solution: 'class Particle:\n    def __init__(self, x, y, vx, vy, lifetime):\n        self.x = x\n        self.y = y\n        self.vx = vx\n        self.vy = vy\n        self.lifetime = lifetime\n\nclass ParticleSystem:\n    def __init__(self):\n        self.particles = []\n    \n    def emit(self, x, y, velocities, lifetime=3):\n        for vx, vy in velocities:\n            self.particles.append(Particle(x, y, vx, vy, lifetime))\n    \n    def update(self):\n        for p in self.particles:\n            p.x += p.vx\n            p.y += p.vy\n            p.lifetime -= 1\n        self.particles = [p for p in self.particles if p.lifetime > 0]\n\nps = ParticleSystem()\nps.emit(100, 100, [(1,0), (0,1), (-1,0)], lifetime=3)\n\nfor frame in range(4):\n    ps.update()\n    positions = [(p.x, p.y) for p in ps.particles]\n    print(f"Frame {frame+1}: {len(ps.particles)} particles {positions}")',
            hint: 'Update each particle\'s position by velocity, decrease lifetime, remove when lifetime <= 0.',
            expectedOutput: 'Frame 1: 3 particles [(101, 100), (100, 101), (99, 100)]\nFrame 2: 3 particles [(102, 100), (100, 102), (98, 100)]\nFrame 3: 3 particles [(103, 100), (100, 103), (97, 100)]\nFrame 4: 0 particles []',
          }
        ],
      },
      {
        id: 'networking',
        number: 3,
        title: 'Networking & Sockets',
        description: 'Understand socket programming, client/server architecture, and protocols.',
        icon: 'Wifi',
        type: 'exercises',
        lesson: `# Networking & Sockets

Networking enables computers to communicate. Python's socket module provides low-level network access.

## Networking Concepts
\`\`\`python
# IP Address: identifies a machine (e.g., 192.168.1.1)
# Port: identifies a service (e.g., 80 for HTTP, 443 for HTTPS)
# Protocol: rules for communication (TCP = reliable, UDP = fast)
\`\`\`

## TCP vs UDP
- **TCP**: Reliable, ordered, connection-based (HTTP, email, file transfer)
- **UDP**: Fast, no guarantees, connectionless (gaming, streaming, DNS)

## HTTP Request Parsing
\`\`\`python
def parse_http_request(raw):
    lines = raw.split('\\n')
    method, path, version = lines[0].split(' ')
    headers = {}
    for line in lines[1:]:
        if ':' in line:
            key, value = line.split(':', 1)
            headers[key.strip()] = value.strip()
    return method, path, headers
\`\`\`

## URL Parsing
\`\`\`python
from urllib.parse import urlparse, parse_qs

url = 'https://example.com/search?q=python&page=2'
parsed = urlparse(url)
print(parsed.scheme)   # https
print(parsed.netloc)   # example.com
print(parsed.path)     # /search
params = parse_qs(parsed.query)
print(params)          # {'q': ['python'], 'page': ['2']}
\`\`\`

💡 Always handle network errors gracefully — connections can fail at any time.

⚠️ Never trust data from the network — always validate and sanitize input.`,
        exercises: [
          {
            id: 'l13-networking-ex1',
            title: 'URL Parser',
            description: 'Parse and analyze URLs.',
            instructions: ['Import urlparse and parse_qs from urllib.parse', 'Parse these URLs: \'https://api.example.com/v2/users?page=3&limit=10\', \'http://localhost:8080/health\', \'ftp://files.server.com/docs/report.pdf\'', 'For each, print: scheme, host, path, and query params (if any)'],
            starterCode: '',
            solution: 'from urllib.parse import urlparse, parse_qs\n\nurls = [\n    \'https://api.example.com/v2/users?page=3&limit=10\',\n    \'http://localhost:8080/health\',\n    \'ftp://files.server.com/docs/report.pdf\'\n]\n\nfor url in urls:\n    parsed = urlparse(url)\n    print(f"URL: {url}")\n    print(f"  Scheme: {parsed.scheme}")\n    print(f"  Host: {parsed.netloc}")\n    print(f"  Path: {parsed.path}")\n    params = parse_qs(parsed.query)\n    if params:\n        print(f"  Params: {params}")',
            hint: 'urlparse() breaks a URL into components. parse_qs() parses query string.',
            expectedOutput: 'URL: https://api.example.com/v2/users?page=3&limit=10\n  Scheme: https\n  Host: api.example.com\n  Path: /v2/users\n  Params: {\'page\': [\'3\'], \'limit\': [\'10\']}\nURL: http://localhost:8080/health\n  Scheme: http\n  Host: localhost:8080\n  Path: /health\nURL: ftp://files.server.com/docs/report.pdf\n  Scheme: ftp\n  Host: files.server.com\n  Path: /docs/report.pdf',
          },
          {
            id: 'l13-networking-ex2',
            title: 'HTTP Request Parser',
            description: 'Parse raw HTTP requests.',
            instructions: ['Create a function parse_request(raw) that extracts method, path, headers, and body', 'Raw format: \'METHOD PATH HTTP/1.1\\nHeader: Value\\n\\nBody\'', 'Test with: \'GET /api/users HTTP/1.1\\nHost: example.com\\nAccept: application/json\\n\\n\'', 'And: \'POST /api/data HTTP/1.1\\nContent-Type: application/json\\n\\n{"key": "value"}\'', 'Print parsed components for each'],
            starterCode: '',
            solution: 'def parse_request(raw):\n    parts = raw.split(\'\\n\\n\', 1)\n    header_section = parts[0]\n    body = parts[1] if len(parts) > 1 else \'\'\n    \n    lines = header_section.split(\'\\n\')\n    method, path, version = lines[0].split(\' \')\n    \n    headers = {}\n    for line in lines[1:]:\n        if \':\' in line:\n            key, value = line.split(\':\', 1)\n            headers[key.strip()] = value.strip()\n    \n    return {\'method\': method, \'path\': path, \'headers\': headers, \'body\': body.strip()}\n\nrequests = [\n    \'GET /api/users HTTP/1.1\\nHost: example.com\\nAccept: application/json\\n\\n\',\n    \'POST /api/data HTTP/1.1\\nContent-Type: application/json\\n\\n{"key": "value"}\'\n]\n\nfor raw in requests:\n    r = parse_request(raw)\n    print(f"{r[\'method\']} {r[\'path\']}")\n    for k, v in r[\'headers\'].items():\n        print(f"  {k}: {v}")\n    if r[\'body\']:\n        print(f"  Body: {r[\'body\']}")',
            hint: 'Split on double newline for headers vs body. Split first line for method/path.',
            expectedOutput: 'GET /api/users\n  Host: example.com\n  Accept: application/json\nPOST /api/data\n  Content-Type: application/json\n  Body: {"key": "value"}',
          },
          {
            id: 'l13-networking-ex3',
            title: 'Simple Router',
            description: 'Build a URL routing system.',
            instructions: ['Create a Router class with route(path, handler) and dispatch(method, path) methods', 'Support path parameters like /users/{id}', 'Register: GET /health -> \'OK\', GET /users -> \'User list\', GET /users/{id} -> \'User {id}\'', 'Dispatch and print results for: GET /health, GET /users, GET /users/42, GET /unknown'],
            starterCode: '',
            solution: 'import re\n\nclass Router:\n    def __init__(self):\n        self.routes = []\n    \n    def route(self, path, handler):\n        pattern = re.sub(r\'\\{(\\w+)\\}\', r\'(?P<\\1>[^/]+)\', path)\n        self.routes.append((re.compile(f\'^{pattern}$\'), handler))\n    \n    def dispatch(self, method, path):\n        for pattern, handler in self.routes:\n            match = pattern.match(path)\n            if match:\n                return handler(**match.groupdict())\n        return \'404 Not Found\'\n\nrouter = Router()\nrouter.route(\'/health\', lambda: \'OK\')\nrouter.route(\'/users\', lambda: \'User list\')\nrouter.route(\'/users/{id}\', lambda id: f\'User {id}\')\n\nfor path in [\'/health\', \'/users\', \'/users/42\', \'/unknown\']:\n    result = router.dispatch(\'GET\', path)\n    print(f"GET {path} -> {result}")',
            hint: 'Convert {param} patterns to regex capture groups. Match against registered routes.',
            expectedOutput: 'GET /health -> OK\nGET /users -> User list\nGET /users/42 -> User 42\nGET /unknown -> 404 Not Found',
          },
          {
            id: 'l13-networking-ex4',
            title: 'Protocol Simulator',
            description: 'Simulate a simple request-response protocol.',
            instructions: ['Create a Protocol class that handles message encoding/decoding', 'Format: \'LENGTH:TYPE:DATA\' where LENGTH is the total message length', 'Types: \'MSG\' (message), \'ACK\' (acknowledgment), \'ERR\' (error)', 'Implement encode(msg_type, data) and decode(raw) methods', 'Encode and decode 3 messages, printing results'],
            starterCode: '',
            solution: 'class Protocol:\n    @staticmethod\n    def encode(msg_type, data):\n        content = f"{msg_type}:{data}"\n        return f"{len(content)}:{content}"\n    \n    @staticmethod\n    def decode(raw):\n        length, rest = raw.split(\':\', 1)\n        msg_type, data = rest.split(\':\', 1)\n        return {\'type\': msg_type, \'data\': data, \'length\': int(length)}\n\nmessages = [\n    Protocol.encode(\'MSG\', \'Hello Server\'),\n    Protocol.encode(\'ACK\', \'Received\'),\n    Protocol.encode(\'ERR\', \'Not Found\')\n]\n\nfor raw in messages:\n    print(f"Raw: {raw}")\n    decoded = Protocol.decode(raw)\n    print(f"  Type: {decoded[\'type\']}, Data: {decoded[\'data\']}")',
            hint: 'Format: calculate content length, prepend it. Decode: split by colons.',
            expectedOutput: 'Raw: 16:MSG:Hello Server\nRaw: 12:ACK:Received\nRaw: 13:ERR:Not Found\n  Type: MSG, Data: Hello Server\n  Type: ACK, Data: Received\n  Type: ERR, Data: Not Found',
          },
          {
            id: 'l13-networking-ex5',
            title: 'DNS Lookup Simulator',
            description: 'Simulate a DNS resolution cache.',
            instructions: ['Create a DNSCache class with resolve(domain) and add_record(domain, ip) methods', 'Include default records: \'google.com\'->\'142.250.80.46\', \'github.com\'->\'140.82.121.3\'', 'resolve() returns IP if cached, else \'NXDOMAIN\'', 'Track hit/miss stats', 'Resolve: google.com, github.com, unknown.com, google.com (cache hit)', 'Print each result and final stats'],
            starterCode: '',
            solution: 'class DNSCache:\n    def __init__(self):\n        self.records = {\n            \'google.com\': \'142.250.80.46\',\n            \'github.com\': \'140.82.121.3\'\n        }\n        self.hits = 0\n        self.misses = 0\n    \n    def resolve(self, domain):\n        if domain in self.records:\n            self.hits += 1\n            return self.records[domain]\n        self.misses += 1\n        return \'NXDOMAIN\'\n    \n    def add_record(self, domain, ip):\n        self.records[domain] = ip\n    \n    def stats(self):\n        total = self.hits + self.misses\n        rate = (self.hits / total * 100) if total > 0 else 0\n        return f"Hits: {self.hits}, Misses: {self.misses}, Rate: {rate:.0f}%"\n\ndns = DNSCache()\nfor domain in [\'google.com\', \'github.com\', \'unknown.com\', \'google.com\']:\n    ip = dns.resolve(domain)\n    print(f"{domain} -> {ip}")\nprint(dns.stats())',
            hint: 'Use a dict for records. Track hits when found, misses when not.',
            expectedOutput: 'google.com -> 142.250.80.46\ngithub.com -> 140.82.121.3\nunknown.com -> NXDOMAIN\ngoogle.com -> 142.250.80.46\nHits: 3, Misses: 1, Rate: 75%',
          }
        ],
      },
      {
        id: 'security',
        number: 4,
        title: 'Security & Cryptography',
        description: 'Learn hashing, secure random generation, and encryption concepts.',
        icon: 'Lock',
        type: 'exercises',
        lesson: `# Security & Cryptography

Security is about protecting data and systems. Python provides tools for hashing, secure random generation, and more.

## Hashing
\`\`\`python
import hashlib

# SHA-256 hash
text = "Hello, World!"
hash_obj = hashlib.sha256(text.encode())
print(hash_obj.hexdigest())

# MD5 (fast but NOT secure for passwords)
md5 = hashlib.md5(text.encode()).hexdigest()
\`\`\`

## Secure Random Numbers
\`\`\`python
import secrets

# Secure random token
token = secrets.token_hex(16)  # 32 character hex string
url_token = secrets.token_urlsafe(16)  # URL-safe base64

# Secure random integer
secure_num = secrets.randbelow(100)  # 0 to 99
\`\`\`

## Password Hashing
\`\`\`python
import hashlib
import secrets

def hash_password(password):
    salt = secrets.token_hex(16)
    hashed = hashlib.pbkdf2_hmac('sha256', password.encode(), salt.encode(), 100000)
    return f"{salt}:{hashed.hex()}"

def verify_password(password, stored):
    salt, hash_str = stored.split(':')
    hashed = hashlib.pbkdf2_hmac('sha256', password.encode(), salt.encode(), 100000)
    return hashed.hex() == hash_str
\`\`\`

## Input Validation
\`\`\`python
import re

def sanitize_input(text):
    return re.sub(r'[<>&"\\'\`;]', '', text)
\`\`\`

💡 Always use secrets module instead of random for security-sensitive values.

⚠️ Never store passwords in plain text. Always hash with a salt.`,
        exercises: [
          {
            id: 'l13-security-ex1',
            title: 'Hashing Functions',
            description: 'Hash data using different algorithms.',
            instructions: ['Import hashlib', 'Hash the string \'Hello, Python!\' with MD5, SHA-1, and SHA-256', 'Print each algorithm name and first 16 characters of the hex digest', 'Print which produces the longest digest'],
            starterCode: '',
            solution: 'import hashlib\n\ntext = \'Hello, Python!\'\n\nalgorithms = [\'md5\', \'sha1\', \'sha256\']\ndigests = {}\n\nfor algo in algorithms:\n    h = hashlib.new(algo)\n    h.update(text.encode())\n    digest = h.hexdigest()\n    digests[algo] = digest\n    print(f"{algo}: {digest[:16]}...")\n\nlongest = max(digests, key=lambda k: len(digests[k]))\nprint(f"Longest digest: {longest} ({len(digests[longest])} chars)")',
            hint: 'Use hashlib.new(algo) or hashlib.md5(), .sha1(), .sha256().',
            expectedOutput: 'md5: b91fd548e23a0f4b...\nsha1: 95489e20f16f9bfe...\nsha256: 35e05ac9fe2a5785...\nLongest digest: sha256 (64 chars)',
          },
          {
            id: 'l13-security-ex2',
            title: 'Password Hasher',
            description: 'Implement secure password hashing and verification.',
            instructions: ['Import hashlib and use a fixed salt=\'mysalt123\' for reproducibility', 'Create hash_password(password, salt) using SHA-256 with salt prepended', 'Create verify_password(password, salt, expected_hash) that checks match', 'Hash \'secret123\' and verify it', 'Try verifying with wrong password \'wrong\' and print results'],
            starterCode: '',
            solution: 'import hashlib\n\ndef hash_password(password, salt):\n    salted = salt + password\n    return hashlib.sha256(salted.encode()).hexdigest()\n\ndef verify_password(password, salt, expected_hash):\n    return hash_password(password, salt) == expected_hash\n\nsalt = \'mysalt123\'\nstored_hash = hash_password(\'secret123\', salt)\nprint(f"Hash: {stored_hash[:32]}...")\n\nprint(f"Correct password: {verify_password(\'secret123\', salt, stored_hash)}")\nprint(f"Wrong password: {verify_password(\'wrong\', salt, stored_hash)}")',
            hint: 'Concatenate salt + password before hashing. Compare hashes for verification.',
            expectedOutput: 'Hash: 6b5e0b2fd32d2de05afbb235a4e5e6e5...\nCorrect password: True\nWrong password: False',
          },
          {
            id: 'l13-security-ex3',
            title: 'Caesar Cipher',
            description: 'Implement a simple substitution cipher.',
            instructions: ['Create encrypt(text, shift) and decrypt(text, shift) for Caesar cipher', 'Only shift letters (a-z, A-Z), leave other characters unchanged', 'Encrypt \'Hello, World!\' with shift 3', 'Decrypt the result back', 'Print both'],
            starterCode: '',
            solution: 'def encrypt(text, shift):\n    result = []\n    for c in text:\n        if c.isalpha():\n            base = ord(\'A\') if c.isupper() else ord(\'a\')\n            result.append(chr((ord(c) - base + shift) % 26 + base))\n        else:\n            result.append(c)\n    return \'\'.join(result)\n\ndef decrypt(text, shift):\n    return encrypt(text, -shift)\n\noriginal = \'Hello, World!\'\nencrypted = encrypt(original, 3)\ndecrypted = decrypt(encrypted, 3)\n\nprint(f"Original:  {original}")\nprint(f"Encrypted: {encrypted}")\nprint(f"Decrypted: {decrypted}")',
            hint: 'Shift each letter by N positions. Wrap around with modulo 26. Decrypt = encrypt with -shift.',
            expectedOutput: 'Original:  Hello, World!\nEncrypted: Khoor, Zruog!\nDecrypted: Hello, World!',
          },
          {
            id: 'l13-security-ex4',
            title: 'Input Sanitizer',
            description: 'Sanitize user input to prevent injection attacks.',
            instructions: ['Import re and html', 'Create a function sanitize(text) that: removes HTML tags, escapes special chars, trims whitespace', 'Test with: \'<script>alert("XSS")</script>\', \'  Hello & Welcome  \', \'Normal text\', \'DROP TABLE users;--\'', 'Print each sanitized result'],
            starterCode: '',
            solution: 'import re\nimport html\n\ndef sanitize(text):\n    # Remove HTML tags\n    text = re.sub(r\'<[^>]+>\', \'\', text)\n    # Escape special HTML characters\n    text = html.escape(text)\n    # Trim whitespace\n    text = text.strip()\n    return text\n\ntests = [\n    \'<script>alert("XSS")</script>\',\n    \'  Hello & Welcome  \',\n    \'Normal text\',\n    \'DROP TABLE users;--\'\n]\n\nfor t in tests:\n    print(f"{sanitize(t)}")',
            hint: 'Use re.sub to remove tags, html.escape for special chars, .strip() for whitespace.',
            expectedOutput: 'alert(&quot;XSS&quot;)\nHello &amp; Welcome\nNormal text\nDROP TABLE users;--',
          },
          {
            id: 'l13-security-ex5',
            title: 'Token Generator',
            description: 'Generate secure tokens and API keys.',
            instructions: ['Import secrets and hashlib', 'Create functions: generate_api_key() returns \'pk_\' + 32 hex chars, generate_session_token() returns 64 hex chars, generate_otp(length=6) returns numeric string', 'Use secrets.token_hex for keys and tokens, secrets.randbelow for OTP', 'Set a fixed seed approach: generate with secrets but show format', 'Print one example of each (use fixed values for reproducibility):', 'Use hashlib.sha256(\'test_key\'.encode()).hexdigest()[:32] for the API key', 'Use hashlib.sha256(\'test_session\'.encode()).hexdigest() for session token', 'Use \'\'.join([str((i*7+3)%10) for i in range(6)]) for OTP'],
            starterCode: '',
            solution: 'import hashlib\n\ndef generate_api_key(seed):\n    return \'pk_\' + hashlib.sha256(seed.encode()).hexdigest()[:32]\n\ndef generate_session_token(seed):\n    return hashlib.sha256(seed.encode()).hexdigest()\n\ndef generate_otp(seed_num=0, length=6):\n    return \'\'.join([str((i * 7 + 3 + seed_num) % 10) for i in range(length)])\n\napi_key = generate_api_key(\'test_key\')\nprint(f"API Key: {api_key}")\nprint(f"Length: {len(api_key)}")\n\nsession = generate_session_token(\'test_session\')\nprint(f"Session: {session[:16]}...")\nprint(f"Length: {len(session)}")\n\notp = generate_otp()\nprint(f"OTP: {otp}")\nprint(f"Length: {len(otp)}")',
            hint: 'Use hashlib with fixed seeds for reproducible output. Format with prefixes.',
            expectedOutput: 'API Key: pk_75e8a580c489c5ad5efab82d8b4e7ae8\nLength: 35\nSession: 70476c6afe4c81e4...\nLength: 64\nOTP: 300741\nLength: 6',
          }
        ],
      },
      {
        id: 'devops',
        number: 5,
        title: 'DevOps & Deployment',
        description: 'Understand Docker, CI/CD, and environment management concepts.',
        icon: 'Cloud',
        type: 'exercises',
        lesson: `# DevOps & Deployment

DevOps bridges development and operations. Python is widely used for infrastructure automation.

## Docker Concepts
\`\`\`python
# Dockerfile structure (simulated)
dockerfile = '''
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]
'''
\`\`\`

## Environment Variables
\`\`\`python
import os

# Read environment variables
db_host = os.environ.get('DB_HOST', 'localhost')
db_port = int(os.environ.get('DB_PORT', '5432'))
debug = os.environ.get('DEBUG', 'false').lower() == 'true'
\`\`\`

## Configuration Management
\`\`\`python
class Config:
    def __init__(self, env='development'):
        self.configs = {
            'development': {'debug': True, 'db': 'sqlite:///dev.db'},
            'production': {'debug': False, 'db': 'postgres://prod-server/db'}
        }
        self.env = env
    
    def get(self, key):
        return self.configs[self.env].get(key)
\`\`\`

## Health Checks
\`\`\`python
def health_check(services):
    results = {}
    for name, check_fn in services.items():
        try:
            check_fn()
            results[name] = 'healthy'
        except Exception as e:
            results[name] = f'unhealthy: {e}'
    return results
\`\`\`

💡 Use environment variables for configuration that changes between environments.

⚠️ Never commit secrets, API keys, or passwords to version control.`,
        exercises: [
          {
            id: 'l13-devops-ex1',
            title: 'Environment Configuration',
            description: 'Build an environment-aware configuration system.',
            instructions: ['Create a Config class that supports \'development\', \'staging\', \'production\' environments', 'Each env has: debug (bool), database (str), log_level (str), cache_ttl (int)', 'dev: True, \'sqlite:///dev.db\', \'DEBUG\', 60', 'staging: False, \'postgres://staging/db\', \'INFO\', 300', 'production: False, \'postgres://prod/db\', \'WARNING\', 3600', 'Print all settings for each environment'],
            starterCode: '',
            solution: 'class Config:\n    ENVS = {\n        \'development\': {\'debug\': True, \'database\': \'sqlite:///dev.db\', \'log_level\': \'DEBUG\', \'cache_ttl\': 60},\n        \'staging\': {\'debug\': False, \'database\': \'postgres://staging/db\', \'log_level\': \'INFO\', \'cache_ttl\': 300},\n        \'production\': {\'debug\': False, \'database\': \'postgres://prod/db\', \'log_level\': \'WARNING\', \'cache_ttl\': 3600}\n    }\n    \n    def __init__(self, env=\'development\'):\n        self.env = env\n        self.settings = self.ENVS[env]\n    \n    def get(self, key):\n        return self.settings.get(key)\n\nfor env_name in [\'development\', \'staging\', \'production\']:\n    config = Config(env_name)\n    print(f"[{env_name}]")\n    for key in [\'debug\', \'database\', \'log_level\', \'cache_ttl\']:\n        print(f"  {key}: {config.get(key)}")',
            hint: 'Store environment configs in a dict. Access by environment name.',
            expectedOutput: '[development]\n  debug: True\n  database: sqlite:///dev.db\n  log_level: DEBUG\n  cache_ttl: 60\n[staging]\n  debug: False\n  database: postgres://staging/db\n  log_level: INFO\n  cache_ttl: 300\n[production]\n  debug: False\n  database: postgres://prod/db\n  log_level: WARNING\n  cache_ttl: 3600',
          },
          {
            id: 'l13-devops-ex2',
            title: 'Dockerfile Parser',
            description: 'Parse a Dockerfile into structured instructions.',
            instructions: ['Create a function parse_dockerfile(content) that extracts instructions', 'Return list of dicts with \'instruction\' and \'arguments\'', 'Skip comments (#) and blank lines', 'Test with a sample Dockerfile content', 'Print each instruction'],
            starterCode: '',
            solution: 'def parse_dockerfile(content):\n    instructions = []\n    for line in content.strip().split(\'\\n\'):\n        line = line.strip()\n        if not line or line.startswith(\'#\'):\n            continue\n        parts = line.split(None, 1)\n        instructions.append({\n            \'instruction\': parts[0],\n            \'arguments\': parts[1] if len(parts) > 1 else \'\'\n        })\n    return instructions\n\ndockerfile = """# Python web app\nFROM python:3.11-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install -r requirements.txt\nCOPY . .\nEXPOSE 8000\nCMD ["python", "app.py"]"""\n\nfor inst in parse_dockerfile(dockerfile):\n    print(f"{inst[\'instruction\']}: {inst[\'arguments\']}")',
            hint: 'Split each line into instruction and arguments. Skip comments and blanks.',
            expectedOutput: 'FROM: python:3.11-slim\nWORKDIR: /app\nCOPY: requirements.txt .\nRUN: pip install -r requirements.txt\nCOPY: . .\nEXPOSE: 8000\nCMD: ["python", "app.py"]',
          },
          {
            id: 'l13-devops-ex3',
            title: 'Health Check System',
            description: 'Build a service health check system.',
            instructions: ['Create a HealthChecker class with register(name, check_fn) and run_all() methods', 'check_fn returns True for healthy, raises Exception for unhealthy', 'Register: \'database\' (healthy), \'cache\' (unhealthy - raise ConnectionError), \'api\' (healthy)', 'Run all checks and print status of each', 'Print overall status (healthy only if ALL pass)'],
            starterCode: '',
            solution: 'class HealthChecker:\n    def __init__(self):\n        self.checks = {}\n    \n    def register(self, name, check_fn):\n        self.checks[name] = check_fn\n    \n    def run_all(self):\n        results = {}\n        for name, fn in self.checks.items():\n            try:\n                fn()\n                results[name] = \'healthy\'\n            except Exception as e:\n                results[name] = f\'unhealthy: {e}\'\n        return results\n\nhc = HealthChecker()\nhc.register(\'database\', lambda: True)\nhc.register(\'cache\', lambda: (_ for _ in ()).throw(ConnectionError(\'Connection refused\')))\nhc.register(\'api\', lambda: True)\n\nresults = hc.run_all()\nfor name, status in sorted(results.items()):\n    print(f"{name}: {status}")\n\nall_healthy = all(\'healthy\' == s for s in results.values())\nprint(f"Overall: {\'HEALTHY\' if all_healthy else \'DEGRADED\'}")',
            hint: 'Wrap each check in try/except. Collect results and check if all are healthy.',
            expectedOutput: 'api: healthy\ncache: unhealthy: Connection refused\ndatabase: healthy\nOverall: DEGRADED',
          },
          {
            id: 'l13-devops-ex4',
            title: 'CI/CD Pipeline Simulator',
            description: 'Simulate a CI/CD pipeline with stages.',
            instructions: ['Create a Pipeline class with add_stage(name, action) and run() methods', 'Each stage runs in order; if one fails, the pipeline stops', 'action is a callable that returns True (pass) or raises Exception (fail)', 'Add stages: \'lint\' (pass), \'test\' (pass), \'build\' (pass), \'deploy\' (pass)', 'Run and print results', 'Then create another pipeline where \'test\' fails and show it stops'],
            starterCode: '',
            solution: 'class Pipeline:\n    def __init__(self, name):\n        self.name = name\n        self.stages = []\n    \n    def add_stage(self, name, action):\n        self.stages.append((name, action))\n        return self\n    \n    def run(self):\n        print(f"Pipeline: {self.name}")\n        for name, action in self.stages:\n            try:\n                action()\n                print(f"  [{name}] PASSED")\n            except Exception as e:\n                print(f"  [{name}] FAILED: {e}")\n                print(f"  Pipeline aborted!")\n                return False\n        print(f"  Pipeline completed!")\n        return True\n\np1 = Pipeline(\'Deploy v1.0\')\np1.add_stage(\'lint\', lambda: True)\np1.add_stage(\'test\', lambda: True)\np1.add_stage(\'build\', lambda: True)\np1.add_stage(\'deploy\', lambda: True)\np1.run()\n\nprint()\np2 = Pipeline(\'Deploy v1.1\')\np2.add_stage(\'lint\', lambda: True)\np2.add_stage(\'test\', lambda: (_ for _ in ()).throw(AssertionError(\'2 tests failed\')))\np2.add_stage(\'build\', lambda: True)\np2.run()',
            hint: 'Run stages sequentially. On exception, print failure and stop.',
            expectedOutput: 'Pipeline: Deploy v1.0\n  [lint] PASSED\n  [test] PASSED\n  [build] PASSED\n  [deploy] PASSED\n  Pipeline completed!\n\nPipeline: Deploy v1.1\n  [lint] PASSED\n  [test] FAILED: 2 tests failed\n  Pipeline aborted!',
          },
          {
            id: 'l13-devops-ex5',
            title: 'Log Aggregator',
            description: 'Aggregate and analyze logs from multiple services.',
            instructions: ['Create a LogAggregator class with add_log(service, level, message) and analyze() methods', 'analyze() returns: total logs, logs per level, logs per service, error percentage', 'Add logs: (\'web\', \'INFO\', \'Request received\'), (\'web\', \'ERROR\', \'Timeout\'), (\'db\', \'INFO\', \'Query ok\'), (\'db\', \'WARNING\', \'Slow query\'), (\'web\', \'INFO\', \'Response sent\'), (\'auth\', \'ERROR\', \'Invalid token\')', 'Print the analysis'],
            starterCode: '',
            solution: 'from collections import Counter\n\nclass LogAggregator:\n    def __init__(self):\n        self.logs = []\n    \n    def add_log(self, service, level, message):\n        self.logs.append({\'service\': service, \'level\': level, \'message\': message})\n    \n    def analyze(self):\n        levels = Counter(l[\'level\'] for l in self.logs)\n        services = Counter(l[\'service\'] for l in self.logs)\n        error_pct = levels.get(\'ERROR\', 0) / len(self.logs) * 100 if self.logs else 0\n        return {\n            \'total\': len(self.logs),\n            \'by_level\': dict(sorted(levels.items())),\n            \'by_service\': dict(sorted(services.items())),\n            \'error_pct\': round(error_pct, 1)\n        }\n\nagg = LogAggregator()\nagg.add_log(\'web\', \'INFO\', \'Request received\')\nagg.add_log(\'web\', \'ERROR\', \'Timeout\')\nagg.add_log(\'db\', \'INFO\', \'Query ok\')\nagg.add_log(\'db\', \'WARNING\', \'Slow query\')\nagg.add_log(\'web\', \'INFO\', \'Response sent\')\nagg.add_log(\'auth\', \'ERROR\', \'Invalid token\')\n\nresult = agg.analyze()\nprint(f"Total logs: {result[\'total\']}")\nprint(f"By level: {result[\'by_level\']}")\nprint(f"By service: {result[\'by_service\']}")\nprint(f"Error rate: {result[\'error_pct\']}%")',
            hint: 'Use Counter for level and service counts. Error % = errors / total * 100.',
            expectedOutput: 'Total logs: 6\nBy level: {\'ERROR\': 2, \'INFO\': 3, \'WARNING\': 1}\nBy service: {\'auth\': 1, \'db\': 2, \'web\': 3}\nError rate: 33.3%',
          }
        ],
      },
      {
        id: 'design-patterns',
        number: 6,
        title: 'Advanced Design Patterns',
        description: 'Master SOLID principles, factory, strategy, observer, and decorator patterns.',
        icon: 'Puzzle',
        type: 'exercises',
        lesson: `# Advanced Design Patterns

Design patterns are reusable solutions to common software design problems.

## Factory Pattern
Creates objects without specifying exact classes:
\`\`\`python
class ShapeFactory:
    @staticmethod
    def create(shape_type):
        shapes = {'circle': Circle, 'square': Square}
        return shapes[shape_type]()
\`\`\`

## Strategy Pattern
Swap algorithms at runtime:
\`\`\`python
class Sorter:
    def __init__(self, strategy):
        self.strategy = strategy
    
    def sort(self, data):
        return self.strategy(data)
\`\`\`

## Observer Pattern
Objects subscribe to events:
\`\`\`python
class EventEmitter:
    def __init__(self):
        self._listeners = {}
    
    def on(self, event, callback):
        self._listeners.setdefault(event, []).append(callback)
    
    def emit(self, event, data=None):
        for cb in self._listeners.get(event, []):
            cb(data)
\`\`\`

## Decorator Pattern
Add behavior dynamically:
\`\`\`python
def logged(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        result = func(*args, **kwargs)
        print(f"Result: {result}")
        return result
    return wrapper
\`\`\`

## SOLID Principles
- **S**ingle Responsibility: One class, one job
- **O**pen/Closed: Open for extension, closed for modification
- **L**iskov Substitution: Subtypes must be substitutable
- **I**nterface Segregation: Many specific interfaces > one general
- **D**ependency Inversion: Depend on abstractions, not concretions

💡 Don't force patterns where they don't fit. Use them when they simplify your code.

⚠️ Over-engineering with patterns is worse than no patterns at all.`,
        exercises: [
          {
            id: 'l13-design-patterns-ex1',
            title: 'Factory Pattern',
            description: 'Implement the Factory pattern for creating objects.',
            instructions: ['Create a base class Notification with send(message) method', 'Create EmailNotification, SMSNotification, PushNotification subclasses', 'Each prints \'[Type] message\'', 'Create a NotificationFactory.create(type) static method', 'Create and send a message with each type'],
            starterCode: '',
            solution: 'class Notification:\n    def send(self, message):\n        raise NotImplementedError\n\nclass EmailNotification(Notification):\n    def send(self, message):\n        print(f"[Email] {message}")\n\nclass SMSNotification(Notification):\n    def send(self, message):\n        print(f"[SMS] {message}")\n\nclass PushNotification(Notification):\n    def send(self, message):\n        print(f"[Push] {message}")\n\nclass NotificationFactory:\n    @staticmethod\n    def create(ntype):\n        types = {\n            \'email\': EmailNotification,\n            \'sms\': SMSNotification,\n            \'push\': PushNotification\n        }\n        if ntype not in types:\n            raise ValueError(f"Unknown type: {ntype}")\n        return types[ntype]()\n\nfor ntype in [\'email\', \'sms\', \'push\']:\n    notif = NotificationFactory.create(ntype)\n    notif.send(\'Hello!\')',
            hint: 'Map type strings to classes in a dict. Instantiate and return the right class.',
            expectedOutput: '[Email] Hello!\n[SMS] Hello!\n[Push] Hello!',
          },
          {
            id: 'l13-design-patterns-ex2',
            title: 'Strategy Pattern',
            description: 'Implement interchangeable algorithms with Strategy pattern.',
            instructions: ['Create sorting strategies: bubble_sort, insertion_sort, and python_sort (using sorted())', 'Each takes a list and returns a sorted copy', 'Create a Sorter class that accepts a strategy function', 'Sort [64, 34, 25, 12, 22, 11, 90] with each strategy', 'Print the strategy name and result'],
            starterCode: '',
            solution: 'def bubble_sort(arr):\n    a = arr.copy()\n    n = len(a)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if a[j] > a[j+1]:\n                a[j], a[j+1] = a[j+1], a[j]\n    return a\n\ndef insertion_sort(arr):\n    a = arr.copy()\n    for i in range(1, len(a)):\n        key = a[i]\n        j = i - 1\n        while j >= 0 and a[j] > key:\n            a[j+1] = a[j]\n            j -= 1\n        a[j+1] = key\n    return a\n\ndef python_sort(arr):\n    return sorted(arr)\n\nclass Sorter:\n    def __init__(self, strategy):\n        self.strategy = strategy\n    \n    def sort(self, data):\n        return self.strategy(data)\n\ndata = [64, 34, 25, 12, 22, 11, 90]\nfor name, strategy in [(\'Bubble\', bubble_sort), (\'Insertion\', insertion_sort), (\'Python\', python_sort)]:\n    sorter = Sorter(strategy)\n    print(f"{name}: {sorter.sort(data)}")',
            hint: 'Each strategy is a function with the same signature. The Sorter delegates to it.',
            expectedOutput: 'Bubble: [11, 12, 22, 25, 34, 64, 90]\nInsertion: [11, 12, 22, 25, 34, 64, 90]\nPython: [11, 12, 22, 25, 34, 64, 90]',
          },
          {
            id: 'l13-design-patterns-ex3',
            title: 'Observer Pattern',
            description: 'Implement publish-subscribe with the Observer pattern.',
            instructions: ['Create an EventBus class with subscribe(event, callback), unsubscribe(event, callback), and publish(event, data)', 'Create a Logger that subscribes to \'user.login\' and \'user.logout\'', 'Create an Analytics tracker that subscribes to \'user.login\'', 'Publish login and logout events with user data', 'Print each observer\'s response'],
            starterCode: '',
            solution: 'class EventBus:\n    def __init__(self):\n        self.subscribers = {}\n    \n    def subscribe(self, event, callback):\n        self.subscribers.setdefault(event, []).append(callback)\n    \n    def unsubscribe(self, event, callback):\n        if event in self.subscribers:\n            self.subscribers[event].remove(callback)\n    \n    def publish(self, event, data=None):\n        for cb in self.subscribers.get(event, []):\n            cb(event, data)\n\nbus = EventBus()\n\ndef logger(event, data):\n    print(f"[LOG] {event}: {data}")\n\ndef analytics(event, data):\n    print(f"[ANALYTICS] Tracking {event} for {data}")\n\nbus.subscribe(\'user.login\', logger)\nbus.subscribe(\'user.logout\', logger)\nbus.subscribe(\'user.login\', analytics)\n\nbus.publish(\'user.login\', \'Alice\')\nbus.publish(\'user.logout\', \'Alice\')',
            hint: 'Store callbacks per event. On publish, call all callbacks for that event.',
            expectedOutput: '[LOG] user.login: Alice\n[ANALYTICS] Tracking user.login for Alice\n[LOG] user.logout: Alice',
          },
          {
            id: 'l13-design-patterns-ex4',
            title: 'Decorator Pattern',
            description: 'Add behavior to functions with decorators.',
            instructions: ['Create decorators: @timer (prints execution time), @validator (checks args are positive), @cache (memoizes results)', 'Since we can\'t measure real time, @timer prints \'Executing {func_name}\'', '@validator checks all numeric args > 0, raises ValueError if not', '@cache stores results for repeated calls', 'Apply all to a multiply(a, b) function and test'],
            starterCode: '',
            solution: 'def timer(func):\n    def wrapper(*args, **kwargs):\n        print(f"Executing {func.__name__}")\n        return func(*args, **kwargs)\n    wrapper.__name__ = func.__name__\n    return wrapper\n\ndef validator(func):\n    def wrapper(*args, **kwargs):\n        for arg in args:\n            if isinstance(arg, (int, float)) and arg <= 0:\n                raise ValueError(f"All arguments must be positive, got {arg}")\n        return func(*args, **kwargs)\n    wrapper.__name__ = func.__name__\n    return wrapper\n\ndef cache(func):\n    memo = {}\n    def wrapper(*args):\n        if args not in memo:\n            memo[args] = func(*args)\n        else:\n            print(f"Cache hit for {args}")\n        return memo[args]\n    wrapper.__name__ = func.__name__\n    return wrapper\n\n@timer\n@validator\n@cache\ndef multiply(a, b):\n    return a * b\n\nprint(multiply(3, 4))\nprint(multiply(3, 4))\nprint(multiply(5, 6))\n\ntry:\n    multiply(-1, 5)\nexcept ValueError as e:\n    print(f"Error: {e}")',
            hint: 'Each decorator wraps the function. Order matters: outermost decorator runs first.',
            expectedOutput: 'Executing multiply\n12\nExecuting multiply\nCache hit for (3, 4)\n12\nExecuting multiply\n30\nExecuting multiply\nError: All arguments must be positive, got -1',
          },
          {
            id: 'l13-design-patterns-ex5',
            title: 'Singleton & Registry',
            description: 'Implement Singleton and Registry patterns.',
            instructions: ['Create a Registry class (singleton-like) that stores services', 'Methods: register(name, instance), get(name), list_services()', 'Only one Registry should exist (use class-level storage)', 'Register: \'db\' -> \'PostgreSQL connection\', \'cache\' -> \'Redis connection\', \'queue\' -> \'RabbitMQ connection\'', 'Print all registered services and retrieve \'db\''],
            starterCode: '',
            solution: 'class Registry:\n    _services = {}\n    \n    @classmethod\n    def register(cls, name, instance):\n        cls._services[name] = instance\n    \n    @classmethod\n    def get(cls, name):\n        if name not in cls._services:\n            raise KeyError(f"Service \'{name}\' not registered")\n        return cls._services[name]\n    \n    @classmethod\n    def list_services(cls):\n        return list(cls._services.keys())\n\nRegistry.register(\'db\', \'PostgreSQL connection\')\nRegistry.register(\'cache\', \'Redis connection\')\nRegistry.register(\'queue\', \'RabbitMQ connection\')\n\nprint(f"Services: {Registry.list_services()}")\nprint(f"DB: {Registry.get(\'db\')}")\n\ntry:\n    Registry.get(\'unknown\')\nexcept KeyError as e:\n    print(f"Error: {e}")',
            hint: 'Use class variables (_services) shared across all instances. Use @classmethod.',
            expectedOutput: 'Services: [\'db\', \'cache\', \'queue\']\nDB: PostgreSQL connection\nError: "Service \'unknown\' not registered"',
          }
        ],
      },
      {
        id: 'performance',
        number: 7,
        title: 'Performance Optimization',
        description: 'Profile code, implement caching, and optimize algorithms.',
        icon: 'Gauge',
        type: 'exercises',
        lesson: `# Performance Optimization

Writing fast Python code requires understanding algorithmic complexity, caching, and profiling.

## Big O Complexity
\`\`\`python
# O(1)   - Constant: dict lookup, array index
# O(log n) - Logarithmic: binary search
# O(n)   - Linear: single loop
# O(n log n) - Linearithmic: efficient sorting
# O(n²)  - Quadratic: nested loops
# O(2ⁿ)  - Exponential: recursive without memoization
\`\`\`

## Memoization
\`\`\`python
from functools import lru_cache

@lru_cache(maxsize=128)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
\`\`\`

## Generator for Memory Efficiency
\`\`\`python
# List (stores all in memory)
squares_list = [x**2 for x in range(1000000)]

# Generator (computes on demand)
squares_gen = (x**2 for x in range(1000000))
\`\`\`

## Data Structure Choice
\`\`\`python
# Use set for membership testing (O(1) vs O(n) for list)
items = set(range(10000))
print(9999 in items)  # O(1)

# Use deque for queue operations
from collections import deque
queue = deque()
queue.append(1)    # O(1)
queue.popleft()    # O(1) vs list.pop(0) which is O(n)
\`\`\`

💡 Profile before optimizing. The bottleneck is rarely where you think it is.

⚠️ Premature optimization is the root of all evil — make it work, make it right, then make it fast.`,
        exercises: [
          {
            id: 'l13-performance-ex1',
            title: 'Memoization',
            description: 'Speed up recursive functions with memoization.',
            instructions: ['Implement fibonacci without and with memoization', 'Count function calls for each approach for n=20', 'Print call counts for both approaches', 'Print fib(20) result'],
            starterCode: '',
            solution: '# Without memoization\ncalls_slow = 0\ndef fib_slow(n):\n    global calls_slow\n    calls_slow += 1\n    if n < 2:\n        return n\n    return fib_slow(n-1) + fib_slow(n-2)\n\n# With memoization\ncalls_fast = 0\ndef fib_fast(n, memo={}):\n    global calls_fast\n    calls_fast += 1\n    if n in memo:\n        return memo[n]\n    if n < 2:\n        memo[n] = n\n        return n\n    memo[n] = fib_fast(n-1, memo) + fib_fast(n-2, memo)\n    return memo[n]\n\nresult_slow = fib_slow(20)\nresult_fast = fib_fast(20)\n\nprint(f"Without memo: {calls_slow} calls")\nprint(f"With memo: {calls_fast} calls")\nprint(f"Result: {result_fast}")',
            hint: 'Memoize by storing computed results in a dict. Check before computing.',
            expectedOutput: 'Without memo: 21891 calls\nWith memo: 39 calls\nResult: 6765',
          },
          {
            id: 'l13-performance-ex2',
            title: 'Algorithm Comparison',
            description: 'Compare different algorithm approaches for the same problem.',
            instructions: ['Problem: Find if any two numbers in a list sum to a target', 'Implement brute_force(nums, target) - O(n²) with nested loops, count comparisons', 'Implement hash_approach(nums, target) - O(n) with a set, count lookups', 'Test with nums=list(range(1000)) and target=1500', 'Print comparison counts for each approach'],
            starterCode: '',
            solution: 'def brute_force(nums, target):\n    comparisons = 0\n    for i in range(len(nums)):\n        for j in range(i+1, len(nums)):\n            comparisons += 1\n            if nums[i] + nums[j] == target:\n                return True, comparisons\n    return False, comparisons\n\ndef hash_approach(nums, target):\n    lookups = 0\n    seen = set()\n    for num in nums:\n        lookups += 1\n        complement = target - num\n        if complement in seen:\n            return True, lookups\n        seen.add(num)\n    return False, lookups\n\nnums = list(range(1000))\ntarget = 1500\n\nfound1, comp1 = brute_force(nums, target)\nfound2, comp2 = hash_approach(nums, target)\n\nprint(f"Brute force: found={found1}, comparisons={comp1}")\nprint(f"Hash approach: found={found2}, lookups={comp2}")\nprint(f"Speedup: {comp1 // comp2}x")',
            hint: 'Brute force: O(n²) nested loops. Hash: O(n) with set lookup for complement.',
            expectedOutput: 'Brute force: found=True, comparisons=249500\nHash approach: found=True, lookups=502\nSpeedup: 497x',
          },
          {
            id: 'l13-performance-ex3',
            title: 'Data Structure Performance',
            description: 'Compare data structure performance for different operations.',
            instructions: ['Compare list vs set for membership testing', 'Compare list.pop(0) vs deque.popleft() for queue operations', 'Use time.perf_counter for measurements', 'Test with 10000 elements', 'Print which data structure is faster for each operation'],
            starterCode: '',
            solution: 'import time\nfrom collections import deque\n\n# Membership testing\nn = 10000\ntest_list = list(range(n))\ntest_set = set(range(n))\n\nstart = time.perf_counter()\nfor i in range(1000):\n    _ = (n - 1) in test_list\nlist_time = time.perf_counter() - start\n\nstart = time.perf_counter()\nfor i in range(1000):\n    _ = (n - 1) in test_set\nset_time = time.perf_counter() - start\n\nprint(f"Membership test (list): {list_time:.4f}s")\nprint(f"Membership test (set):  {set_time:.4f}s")\nprint(f"Set is faster: {set_time < list_time}")\n\n# Queue operations\nstart = time.perf_counter()\nq = list(range(1000))\nwhile q:\n    q.pop(0)\nlist_queue = time.perf_counter() - start\n\nstart = time.perf_counter()\nq = deque(range(1000))\nwhile q:\n    q.popleft()\ndeque_queue = time.perf_counter() - start\n\nprint(f"Queue (list.pop(0)): {list_queue:.4f}s")\nprint(f"Queue (deque.popleft): {deque_queue:.4f}s")\nprint(f"Deque is faster: {deque_queue < list_queue}")',
            hint: 'Time each operation. Set membership is O(1) vs list O(n). Deque popleft is O(1) vs list pop(0) O(n).',
            expectedOutputContains: ['Set is faster: True', 'Deque is faster: True'],
          },
          {
            id: 'l13-performance-ex4',
            title: 'Generator vs List',
            description: 'Compare memory usage of generators vs lists.',
            instructions: ['Import sys', 'Create a list of squares: [x**2 for x in range(10000)]', 'Create a generator of squares: (x**2 for x in range(10000))', 'Print memory size of each using sys.getsizeof', 'Compute sum of first 100 squares using each approach', 'Print the results and size comparison'],
            starterCode: '',
            solution: 'import sys\nimport itertools\n\nsquares_list = [x**2 for x in range(10000)]\nsquares_gen = (x**2 for x in range(10000))\n\nlist_size = sys.getsizeof(squares_list)\ngen_size = sys.getsizeof(squares_gen)\n\nprint(f"List size: {list_size} bytes")\nprint(f"Generator size: {gen_size} bytes")\nprint(f"List is {list_size // gen_size}x larger")\n\nsum_list = sum(squares_list[:100])\nsum_gen = sum(itertools.islice((x**2 for x in range(10000)), 100))\n\nprint(f"Sum (list): {sum_list}")\nprint(f"Sum (gen): {sum_gen}")\nprint(f"Results equal: {sum_list == sum_gen}")',
            hint: 'sys.getsizeof shows memory. Generators are lazy — they don\'t store all values.',
            expectedOutputContains: ['Generator size:', 'Results equal: True'],
          },
          {
            id: 'l13-performance-ex5',
            title: 'LRU Cache Implementation',
            description: 'Build a Least Recently Used cache from scratch.',
            instructions: ['Create an LRUCache class with capacity, get(key), and put(key, value) methods', 'When full, evict the least recently used item', 'Use an OrderedDict for O(1) operations', 'Test with capacity=3: put a,b,c,d (should evict a), get b (moves to recent), put e (should evict c)', 'Print cache state after each operation'],
            starterCode: '',
            solution: 'from collections import OrderedDict\n\nclass LRUCache:\n    def __init__(self, capacity):\n        self.capacity = capacity\n        self.cache = OrderedDict()\n    \n    def get(self, key):\n        if key in self.cache:\n            self.cache.move_to_end(key)\n            return self.cache[key]\n        return -1\n    \n    def put(self, key, value):\n        if key in self.cache:\n            self.cache.move_to_end(key)\n        self.cache[key] = value\n        if len(self.cache) > self.capacity:\n            evicted = next(iter(self.cache))\n            del self.cache[evicted]\n            print(f"  Evicted: {evicted}")\n    \n    def state(self):\n        return list(self.cache.keys())\n\nlru = LRUCache(3)\nfor key, val in [(\'a\', 1), (\'b\', 2), (\'c\', 3)]:\n    lru.put(key, val)\n    print(f"Put {key}: {lru.state()}")\n\nlru.put(\'d\', 4)\nprint(f"Put d: {lru.state()}")\n\nlru.get(\'b\')\nprint(f"Get b: {lru.state()}")\n\nlru.put(\'e\', 5)\nprint(f"Put e: {lru.state()}")',
            hint: 'OrderedDict.move_to_end(key) marks as recently used. Delete first item to evict LRU.',
            expectedOutput: 'Put a: [\'a\']\nPut b: [\'a\', \'b\']\nPut c: [\'a\', \'b\', \'c\']\n  Evicted: a\nPut d: [\'b\', \'c\', \'d\']\nGet b: [\'c\', \'d\', \'b\']\n  Evicted: c\nPut e: [\'d\', \'b\', \'e\']',
          }
        ],
      },
      {
        id: 'best-practices',
        number: 8,
        title: 'Python Best Practices',
        description: 'Write clean, maintainable Python following PEP 8 and best practices.',
        icon: 'Award',
        type: 'exercises',
        lesson: `# Python Best Practices

Writing clean, maintainable code is just as important as writing working code.

## PEP 8 Highlights
\`\`\`python
# Naming conventions
my_variable = 42           # snake_case for variables/functions
MY_CONSTANT = 3.14         # UPPER_CASE for constants
class MyClass:             # PascalCase for classes
    pass
_private_var = 'hidden'    # Leading underscore for private

# Line length: max 79 characters
# Use 4 spaces for indentation (never tabs)
\`\`\`

## Docstrings
\`\`\`python
def calculate_area(radius):
    """Calculate the area of a circle.
    
    Args:
        radius: The radius of the circle (must be positive).
    
    Returns:
        The area as a float.
    
    Raises:
        ValueError: If radius is negative.
    """
    if radius < 0:
        raise ValueError("Radius must be positive")
    return 3.14159 * radius ** 2
\`\`\`

## Type Hints
\`\`\`python
def greet(name: str, times: int = 1) -> str:
    return (f"Hello, {name}! " * times).strip()

from typing import List, Dict, Optional
def process(items: List[str], config: Optional[Dict] = None) -> bool:
    pass
\`\`\`

## Context Managers
\`\`\`python
# Always use context managers for resources
from io import StringIO
with StringIO() as f:
    f.write("data")
\`\`\`

## List Comprehensions > Loops
\`\`\`python
# Good
squares = [x**2 for x in range(10)]

# Less Pythonic
squares = []
for x in range(10):
    squares.append(x**2)
\`\`\`

💡 Write code for humans to read, not just machines to execute.

⚠️ Consistency matters more than any single style rule.`,
        exercises: [
          {
            id: 'l13-best-practices-ex1',
            title: 'Code Style Checker',
            description: 'Build a simple PEP 8 style checker.',
            instructions: ['Create a function check_style(code_lines) that checks:', '  - Lines over 79 characters -> \'line too long\'', '  - Lines with tabs -> \'use spaces not tabs\'', '  - Trailing whitespace -> \'trailing whitespace\'', 'Test with sample code lines and print violations', 'Format: \'Line {n}: {issue}\''],
            starterCode: '',
            solution: 'def check_style(code_lines):\n    violations = []\n    for i, line in enumerate(code_lines, 1):\n        if len(line.rstrip()) > 79:\n            violations.append(f"Line {i}: line too long ({len(line.rstrip())} > 79)")\n        if \'\\t\' in line:\n            violations.append(f"Line {i}: use spaces not tabs")\n        if line != line.rstrip() and line.strip():\n            violations.append(f"Line {i}: trailing whitespace")\n    return violations\n\ncode = [\n    \'def hello():\',\n    \'    print("Hello, World!")\',\n    \'\\tprint("tabbed")\',\n    \'x = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18\',\n    \'y = 2  \',\n    \'print(x + y)\',\n]\n\nviolations = check_style(code)\nfor v in violations:\n    print(v)\nprint(f"Total violations: {len(violations)}")',
            hint: 'Check len(line) > 79, \'\\t\' in line, and line != line.rstrip() for each line.',
            expectedOutput: 'Line 3: use spaces not tabs\nLine 4: line too long (88 > 79)\nLine 5: trailing whitespace\nTotal violations: 3',
          },
          {
            id: 'l13-best-practices-ex2',
            title: 'Docstring Generator',
            description: 'Generate docstrings from function signatures.',
            instructions: ['Import inspect (or parse manually)', 'Create a function generate_docstring(func_name, params, return_type, description)', 'params is a list of (name, type, description) tuples', 'Generate Google-style docstring', 'Test with: \'calculate_total\', [(\'items\', \'List[float]\', \'List of prices\'), (\'tax_rate\', \'float\', \'Tax rate as decimal\')], \'float\', \'Calculate the total price including tax.\'', 'Print the generated docstring'],
            starterCode: '',
            solution: 'def generate_docstring(func_name, params, return_type, description):\n    lines = [f\'"""{ description}\', \'\']\n    if params:\n        lines.append(\'Args:\')\n        for name, ptype, desc in params:\n            lines.append(f\'    {name} ({ptype}): {desc}\')\n        lines.append(\'\')\n    if return_type:\n        lines.append(\'Returns:\')\n        lines.append(f\'    {return_type}: The computed result.\')\n        lines.append(\'\')\n    lines.append(\'"""\')\n    return \'\\n\'.join(lines)\n\ndoc = generate_docstring(\n    \'calculate_total\',\n    [(\'items\', \'List[float]\', \'List of prices\'),\n     (\'tax_rate\', \'float\', \'Tax rate as decimal\')],\n    \'float\',\n    \'Calculate the total price including tax.\'\n)\nprint(doc)',
            hint: 'Build the docstring line by line following Google style conventions.',
            expectedOutput: '"""Calculate the total price including tax.\n\nArgs:\n    items (List[float]): List of prices\n    tax_rate (float): Tax rate as decimal\n\nReturns:\n    float: The computed result.\n\n"""',
          },
          {
            id: 'l13-best-practices-ex3',
            title: 'Clean Code Refactoring',
            description: 'Refactor messy code into clean, readable code.',
            instructions: ['Refactor this logic into clean functions:', 'Given a list of student dicts with \'name\', \'scores\' (list of ints):', '1. Calculate each student\'s average', '2. Assign grade: A (>=90), B (>=80), C (>=70), D (>=60), F (<60)', '3. Find the top student', 'Write clean functions with docstrings and type hints (as comments)', 'Test with 3 students and print results'],
            starterCode: '',
            solution: '# Clean, well-organized code\n\ndef calculate_average(scores):\n    """Calculate the average of a list of scores."""\n    return sum(scores) / len(scores) if scores else 0\n\ndef assign_grade(average):\n    """Assign a letter grade based on average score."""\n    if average >= 90: return \'A\'\n    if average >= 80: return \'B\'\n    if average >= 70: return \'C\'\n    if average >= 60: return \'D\'\n    return \'F\'\n\ndef analyze_students(students):\n    """Analyze a list of students and return results."""\n    results = []\n    for student in students:\n        avg = calculate_average(student[\'scores\'])\n        grade = assign_grade(avg)\n        results.append({\n            \'name\': student[\'name\'],\n            \'average\': round(avg, 1),\n            \'grade\': grade\n        })\n    return results\n\ndef find_top_student(results):\n    """Find the student with the highest average."""\n    return max(results, key=lambda r: r[\'average\'])\n\n# Test\nstudents = [\n    {\'name\': \'Alice\', \'scores\': [92, 88, 95]},\n    {\'name\': \'Bob\', \'scores\': [75, 82, 68]},\n    {\'name\': \'Charlie\', \'scores\': [88, 90, 85]}\n]\n\nresults = analyze_students(students)\nfor r in results:\n    print(f"{r[\'name\']}: avg={r[\'average\']}, grade={r[\'grade\']}")\n\ntop = find_top_student(results)\nprint(f"Top student: {top[\'name\']}")',
            hint: 'Break logic into small, focused functions with clear names and docstrings.',
            expectedOutput: 'Alice: avg=91.7, grade=A\nBob: avg=75.0, grade=C\nCharlie: avg=87.7, grade=B\nTop student: Alice',
          },
          {
            id: 'l13-best-practices-ex4',
            title: 'Error Handling Best Practices',
            description: 'Implement proper error handling patterns.',
            instructions: ['Create a DataProcessor class that processes records with proper error handling', 'Methods: process(record) validates and transforms a record dict', 'Record must have \'id\' (int), \'value\' (numeric), \'type\' (str in [\'A\',\'B\',\'C\'])', 'Use custom exceptions: ValidationError, ProcessingError', 'Process: valid record, record missing id, record with invalid type, record with non-numeric value', 'Print success or specific error for each'],
            starterCode: '',
            solution: 'class ValidationError(Exception):\n    pass\n\nclass ProcessingError(Exception):\n    pass\n\nclass DataProcessor:\n    VALID_TYPES = {\'A\', \'B\', \'C\'}\n    \n    def validate(self, record):\n        if \'id\' not in record:\n            raise ValidationError("Missing required field: id")\n        if not isinstance(record.get(\'id\'), int):\n            raise ValidationError("id must be an integer")\n        if \'type\' in record and record[\'type\'] not in self.VALID_TYPES:\n            raise ValidationError(f"Invalid type: {record[\'type\']}")\n        if \'value\' in record and not isinstance(record[\'value\'], (int, float)):\n            raise ValidationError(f"value must be numeric")\n    \n    def process(self, record):\n        try:\n            self.validate(record)\n            result = f"Processed record {record[\'id\']}"\n            return result\n        except ValidationError as e:\n            return f"Validation error: {e}"\n        except Exception as e:\n            return f"Unexpected error: {e}"\n\nprocessor = DataProcessor()\nrecords = [\n    {\'id\': 1, \'value\': 42, \'type\': \'A\'},\n    {\'value\': 10, \'type\': \'B\'},\n    {\'id\': 2, \'value\': 20, \'type\': \'X\'},\n    {\'id\': 3, \'value\': \'not_a_number\', \'type\': \'C\'}\n]\n\nfor record in records:\n    print(processor.process(record))',
            hint: 'Create specific exceptions. Validate each field. Catch specific exceptions.',
            expectedOutput: 'Processed record 1\nValidation error: Missing required field: id\nValidation error: Invalid type: X\nValidation error: value must be numeric',
          },
          {
            id: 'l13-best-practices-ex5',
            title: 'Code Organization',
            description: 'Organize code into a well-structured module.',
            instructions: ['Create a mini module simulation with: constants at the top, utility functions, main class, and entry point', 'Module theme: temperature converter', 'Constants: ABSOLUTE_ZERO_C = -273.15', 'Functions: celsius_to_fahrenheit, fahrenheit_to_celsius, celsius_to_kelvin', 'Class: TemperatureConverter with convert(value, from_unit, to_unit)', 'Test all conversions: 100C->F, 212F->C, 0C->K', 'Print results'],
            starterCode: '',
            solution: '# === Constants ===\nABSOLUTE_ZERO_C = -273.15\n\n# === Utility Functions ===\ndef celsius_to_fahrenheit(c):\n    """Convert Celsius to Fahrenheit."""\n    return c * 9/5 + 32\n\ndef fahrenheit_to_celsius(f):\n    """Convert Fahrenheit to Celsius."""\n    return (f - 32) * 5/9\n\ndef celsius_to_kelvin(c):\n    """Convert Celsius to Kelvin."""\n    if c < ABSOLUTE_ZERO_C:\n        raise ValueError(f"Temperature below absolute zero: {c}C")\n    return c - ABSOLUTE_ZERO_C\n\n# === Main Class ===\nclass TemperatureConverter:\n    """Unified temperature conversion interface."""\n    \n    CONVERSIONS = {\n        (\'C\', \'F\'): celsius_to_fahrenheit,\n        (\'F\', \'C\'): fahrenheit_to_celsius,\n        (\'C\', \'K\'): celsius_to_kelvin,\n    }\n    \n    def convert(self, value, from_unit, to_unit):\n        """Convert temperature between units."""\n        if from_unit == to_unit:\n            return value\n        key = (from_unit, to_unit)\n        if key not in self.CONVERSIONS:\n            raise ValueError(f"Unsupported conversion: {from_unit} -> {to_unit}")\n        return self.CONVERSIONS[key](value)\n\n# === Entry Point ===\nconverter = TemperatureConverter()\ntests = [\n    (100, \'C\', \'F\'),\n    (212, \'F\', \'C\'),\n    (0, \'C\', \'K\'),\n]\n\nfor value, from_u, to_u in tests:\n    result = converter.convert(value, from_u, to_u)\n    print(f"{value}{from_u} = {result:.1f}{to_u}")',
            hint: 'Organize: constants, functions, classes, main code. Each section has a clear purpose.',
            expectedOutput: '100C = 212.0F\n212F = 100.0C\n0C = 273.1K',
          }
        ],
      }
    ],
  }
];