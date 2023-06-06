import imagen from '../../public/img/nosotros.jpg'
import stylesAbout from '../styles/about.css'

export function meta() {
  return [
    {
      title: 'GuitarLA - About',
      description: 'Venta de guiatrras'
    }
  ]
}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesAbout
    }
  ]
}
const About = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="header about" />
        <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde rem odio repellat corrupti animi perspiciatis, eaque ut? Obcaecati illum ratione ipsa dicta quod nostrum, explicabo earum deserunt incidunt aliquid neque!
            Nulla quo laboriosam adipisci vero aut, sunt quia fugiat doloribus velit blanditiis repudiandae obcaecati quos, molestiae quaerat, qui optio voluptatum rerum fuga excepturi! Neque quidem dignissimos eos quos blanditiis harum!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde rem odio repellat corrupti animi perspiciatis, eaque ut? Obcaecati illum ratione ipsa dicta quod nostrum, explicabo earum deserunt incidunt aliquid neque!
            Nulla quo laboriosam adipisci vero aut, sunt quia fugiat doloribus velit blanditiis repudiandae obcaecati quos, molestiae quaerat, qui optio voluptatum rerum fuga excepturi! Neque quidem dignissimos eos quos blanditiis harum!</p>
        </div>
      </div>
    </main>
  )
}

export default About