const Render = {
    createElement,
    render,
}

function convertToHTML(virtualNode) {
    
    if (typeof virtualNode === 'string' || typeof virtualNode === 'number') {
        return document.createTextNode(`${virtualNode}`);
    }

    const props = virtualNode.props;

    const $domElement = document.createElement(virtualNode.tagName);
    
    for (const key in props) {
        if(key === 'children') continue;

        $domElement[key] = props[key];
    }

    props.children.forEach((virtualChild) => {
        $domElement.appendChild(convertToHTML(virtualChild))
    })

    return $domElement;
}

function render(initialVirtualTree, $domRoot) {
    const $appHTML = convertToHTML(initialVirtualTree);

    $domRoot.appendChild($appHTML);
}

function createElement(elementType, props, ...children) {
	
	const virtualElementProps = {
		...props,
		children
	}

	if (typeof elementType === 'function') {
		return elementType(virtualElementProps);
	}

	return {
		tagName: elementType,
		props: virtualElementProps
	}

}

function App(props) {

    const value = props?.value || 0;
    console.log(value);

    return (
        Render.createElement(
            'section',
            {
                className: 'App'
            },
            Render.createElement("h1", null, `Contador está no ${value}`),
            Render.createElement("button", {
                className: 'btn',
                onclick: () => {
                    document.querySelector('#root').innerHTML = '';
                    Render.render(App({value: value + 1}), document.querySelector('#root'))
                }
            }, "Aumentar")
        )
    )
}

Render.render(App(), document.querySelector('#root'))