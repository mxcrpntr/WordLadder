BACKGROUND:

I will be making an interactive data visualization based
around the concept of word ladders (i.e., connections
of words by changing one letter at a time like BIRD ->
BIND -> WIND -> etc...). Given some user input my program
will generate a suitable word ladder by generating a tree
search on a dictionary and then will present the word ladder,
and possibly other alternative ladders, while simultaneously
offering some data visualization on the attributes of the
ladder (I will settle on exactly what to highlight when I
feel more settled in the design of the search algorithms).

FUNCTIONALITY & MVPS:

In {untitled Word Ladder project} users will be able to

• Enter in one or two words (or perhaps none and just 
randomly generate some)
• Select attributes of how they would like to see the
words connected by the program's internal algorithms, if
they are indeed connectable
• take a closer look at the attributes of the resulting
words in the resultant word ladder(s) via data visualizations
on the right
• traverse a visualization of the connecting tree between
the words and generate further trees by clicking on the nodes

In addition, this project will include

• a README the explains the entire mechanism behind it and
how it works, as well as the instruction for any prospective
users
• a set of simple instructions either on the page of the
applet or presented on the canvas or data vis windows before
they are utilized

WIREFRAME:

I have included a rudimentary wireframe model of how I see
the program looking at this point.

TECHNOLOGIES, LIBRARIES, APIS:

I will be using a dictionary (likely one from Merriam-Webster's
dictionary API), which I may actually just include in the program
rather than fetching for every request/ladder build (TBD). I will
be using Canvas to render and animate the ladder window (and perhaps
the submission windows), and will be using D3 to construct the data
window.

IMPLEMENTATION TIMELINE:

Thursday: Design the word classes/methods and ladder classes
Friday & Weekend: Fully finesse all the DS&A aspects so that...
Monday: ...by Monday I can focus entirely on visualization and API interaction
Tuesday: (July 4th) and then continue to make this look beautiful on Tuesday
Wednesday: (but since Tuesday is a holiday) continue to iron out any kinks on Wednesday
Thursday Morning: and do my best to make it all very user friendly by presentation time