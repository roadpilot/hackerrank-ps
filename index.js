function jumpingOnClouds(c) {
    // Write your code here
    const path = [];
    for (let i = 0; i< c.length; i++){
        if (c[i+2] === 1 && i+1<=c.length){
            path.push(i+1);
        }
        else if (i+2<=c.length){
            path.push(i+2);
            i++;
        }
    }
    // console.log(path)
    return (path.length)
}