export default class ListView {

    createContent(model) {
        return `<h1>List of items</h1>
                <ul>
                ${model.map(item => 
                    `<li>Item</li>` //Title !!!
                ).join("")}
                </ul>`        
    };

    render(model) {
        document.getElementById("app").innerHTML = this.createContent(model);
    };
};