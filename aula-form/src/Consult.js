export function Consult() {
    return (
        <div>
            <h1 className='text-3xl text-gray-800 mb-4'>Listar Pedidos</h1>
            <form className='space-y-2'>
                <div className="flex flex-row gap-2">
                    <div>
                        <input
                            placeholder='Pesquisar...'
                            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <button className="p-2 border border-black bg-sky-500 hover:bg-sky-700 text-white rounded-lg" type='submit'>+Cadastrar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}