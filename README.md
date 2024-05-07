[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/2Wy-Iis-)
# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The big $\Theta$ for my implementation is $\Theta$ $(|V|^2)$. 

I corrected the analysis. So like the slides say, it takes O|V| to assign Infinity to every vertex. Then in the code we see that the for loop at the bottom goes through all the unvisited vetrices, which is $\Theta$|V|. This is while the inner for loop checks the connected vertex with the lowest distance $\Theta$(|V|). Finally we assign a distance based on the minimum calculated, this is $\Theta$(1) (assigning a value to temp) and $\Theta$s(1) checking to see id the value is lower. 
Overall our runtime would be $\Theta$(|V|+|V|(|V|+|V| + 2)) = |V| + $|V|^2 + |V|^2 + 2|V|$ which asymptotically is equal to $\Theta$ $(|V|^2)$