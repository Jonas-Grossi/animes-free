
import './Donate.css'
import qrcode from '../../../assets/qrcode.jpg'
function Donate (){

    return( 
    <div className="Donate">
    
<a href="/#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Doe e ajude a manter o site! </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Você prefere um site sem anuncios? pensando nisso optamos por não colocar, com isso garantimos sua segurança contra virus, porém precisamos de doações para que o site continue funcionando e receba atualizaçoes diariamente.
    
    <br />
    <strong>USE O QRCODE AO LADO PARA DOAR, QUALQUER QUANTIA É VÁLIDA!</strong>  
    </p>
    
    
    
</a>
<img className='px-5' src={qrcode} alt="qrcode" />
</div>
    )
    
    }
    export default Donate