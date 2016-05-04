<h2>Part 1:</h2>

Potential issues/considerations with design/info collected:
  - If the truck number identifies the truck, is it necessary to record the region at all? Does a single truck move between regions?
  - Would a truck ever have >5 vats or >50 boxes of sprinkles?
  - Is the truck number a suitable/unique identifier?
  - Do these 5 regions cover all trucks we are interested in?

Wireframes:
Instead of drawing wireframes, I made a form with react and react-bootstrap. It updates the state of each of the form fields, but doesn't store it anywhere.
I went with a drop-down menu for the vats of ice-cream. Higher accuracy isn't (I assume) needed as long as we're interested in full vats rather than partial vats.

<h2>Part 2:</h2>

Other useful and relevant information:
  - What is the distribution of stock between trucks? What are the reasons behind trucks at either end of the distribution (e.g. some may be running out, others may be storing too much)?
  - How does this correlate with other data, e.g. sales, hours worked, geographical areas?

Wireframes:
I'm assuming that this is referring to a web interface that a manager would use to review the information (though it's not totally clear). While I haven't drawn wireframes, I would imagine a simple table with trucks as rows, and columns that can be sorted and filtered according to the other data (region/volume... etc). Whether this is the best approach would depend on the number of trucks in total - if there are large numbers of trucks, a summary could be calculated instead.
