function readTimer(blog) {
    const amountWords = 100;
    const readSpeed = 0.3;
    let calculated = blog.split(" ").length / amountWords / readSpeed;
    let finalNumber = Math.round(calculated);

    console.log(`blog =  ${blog}`);
    console.log(`blog split length = ${blog.split(" ").length}`);
    console.log(`calculated = ${finalNumber}`);

    return finalNumber > 0 ? 1 : finalNumber;
}

export default readTimer;