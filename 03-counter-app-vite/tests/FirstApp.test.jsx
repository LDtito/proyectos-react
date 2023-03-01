import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en FirstApp', () => {
  
    test('debe de hacer match con el snapshot ', () => {
      
        const title = 'test title';
        const {container} = render( <FirstApp title={title}/> )

        expect(container).toMatchSnapshot();

    });

    test('debe mostrar el titulo en un h1', () => {
      
        const title = 'hola';
        const {container, getByText} = render( <FirstApp title={title}/> )

        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);

    })
    
    

});
