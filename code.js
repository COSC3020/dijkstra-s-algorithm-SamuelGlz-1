//based on my code from fall

function dijkstra(graph, sourceNode) {
    visited = [];
    distances = {};
    neighbors = [];

    if(!(Object.values(graph).length)>0){
        return graph;
    }

    //adding the value of infinity to all the vertexes
    for (let vertex in graph) {
        if (vertex == sourceNode) { distances[vertex] = 0;}
        else {distances[vertex] = Infinity;}
    }

    distances[sourceNode] = 0;

    function dijkstraInside (graph, currentVertex){

        if(visited.includes(currentVertex) || (Object.values(graph[currentVertex]).length == 0)){
            return ;
        }
        //Vertex being visited added to visited
        visited.push(currentVertex)

        distanceTraveled = distances[currentVertex]

        shortestDis = Infinity

        for(i = 0; i < Object.keys(graph[currentVertex]).length; i++){

            temp = Object.values(graph[currentVertex])[i] + distanceTraveled

            if (temp < distances[Object.keys(graph[currentVertex])[i]]){
                distances[Object.keys(graph[currentVertex])[i]] = temp;
            }

            if (Object.values(graph[currentVertex])[i] < shortestDis) {
                shortestDis = Object.values(graph[currentVertex])[i];
                shortestDisID = Object.keys(graph[currentVertex])[i]
            }
        }

        dijkstraInside(graph, shortestDisID)

        for(i = 0; i < Object.keys(graph[currentVertex]).length; i++){
            dijkstraInside(graph, Object.keys(graph[currentVertex])[i])
        }
    }

    dijkstraInside(graph, sourceNode)

    return distances;
}
