import "./Releases.css";
import teste1 from "../../../assets/layout-season/teste1.jpg";
import teste2 from "../../../assets/layout-season/teste2.jpg";
import teste3 from "../../../assets/layout-season/teste3.jpg";
import teste4 from "../../../assets/layout-season/teste4.jpg";
import teste5 from "../../../assets/layout-season/teste5.jpg";
function Releases() {
  return (
    <div className="releases">
      <h1 class=" bg-slate-200 text-blue-500/75 text-4xl antialiased hover:subpixel-antialiased font-mono text-center ">
        Lançamentos
      </h1>
      <div className="images">
        <img src={teste1} alt="" />

        <img src={teste2} alt="" />

        <img src={teste3} alt="" />

        <img src={teste4} alt="" />

        <img src={teste5} alt="" />

        <img src={teste2} alt="" />

        <img src={teste3} alt="" />

        <img src={teste1} alt="" />

        <img src={teste4} alt="" />

        <img src={teste2} alt="" />

        <img src={teste3} alt="" />

        <img src={teste1} alt="" />

        <img src={teste5} alt="" />

        <img src={teste3} alt="" />
        <img src={teste1} alt="" />

        <img src={teste2} alt="" />

        <img src={teste4} alt="" />

        <img src={teste5} alt="" />

        <img src={teste1} alt="" />
      </div>
      <div className="pagination">
        <nav aria-label="Page navigation example">
          <ul class="list-style-none flex">
            <li>
              <a
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm 
                text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white
                 dark:hover:bg-neutral-700 dark:hover:text-white"
                href="#">
                Previous
              </a>
            </li>
            <li>
              <a
                className="relative block rounded bg-transparent px-3 py-1.5
                 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 
                 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                href="#"
              >
                1
              </a>
            </li>
            <li aria-current="page">
              <a
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm
                 text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white
                  dark:hover:bg-neutral-700 dark:hover:text-white"
                href="#"
              >
                2
              </a>
            </li>
            <li>
              <a
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm
                 text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white 
                 dark:hover:bg-neutral-700 dark:hover:text-white"
                href="#"
              >
                3
              </a>
            </li>
            <li>
              <a
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600
                 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 
                 dark:hover:text-white"
                href="#"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Releases;
