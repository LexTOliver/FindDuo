import { MagnifyingGlassPlus } from 'phosphor-react'

import logo from './assets/logo.svg'

function App() {
  return (
    <div className='max-w[1440px] mx-auto flex flex-col items-center my-20 text-white'>
      <header>
        <div className='flex flex-col items-center'>
          <img src={logo} alt="Esports Logo"/>
          <p className='text-xs'>Desenvolvido por <a href="https://github.com/LexTOliver">Alexandre Oliveira</a></p>
        </div>
        <h1 className=' text-7xl font-black mt-20'>
          Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.
        </h1>
      </header>
      <main className='mt-16'>
        <div className='grid grid-cols-6 gap-6'>
          <a href="http://" className='relative rounded-lg overflow-hidden rounded-lg overflow-hidden'>
            <img src="/games/image 1.png" alt="game 1" />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className="text-base font-bold block">League of Legends</strong>
              <span className='text-zinc-300 text-sm block'>4 anúncios</span>
            </div>
          </a>
          <a href="http://" className='relative rounded-lg overflow-hidden'>
            <img src="/games/image 2.png" alt="game 2" />
                        <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className="text-base font-bold block">Dota 2</strong>
              <span className='text-zinc-300 text-sm block'>4 anúncios</span>
            </div>
          </a>
          <a href="http://" className='relative rounded-lg overflow-hidden'>
            <img src="/games/image 3.png" alt="game 3" />
                        <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className="text-base font-bold block">Counter-Strike</strong>
              <span className='text-zinc-300 text-sm block'>4 anúncios</span>
            </div>
          </a>
          <a href="http://" className='relative rounded-lg overflow-hidden'>
            <img src="/games/image 5.png" alt="game 5" />
                        <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className="text-base font-bold block">Apex Legends</strong>
              <span className='text-zinc-300 text-sm block'>4 anúncios</span>
            </div>
          </a>
          <a href="http://" className='relative rounded-lg overflow-hidden'>
            <img src="/games/image 6.png" alt="game 6" />
                        <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className="text-base font-bold block">Fortnite</strong>
              <span className='text-zinc-300 text-sm block'>4 anúncios</span>
            </div>
          </a>
          <a href="http://" className='relative rounded-lg overflow-hidden'>
            <img src="/games/image 7.png" alt="game 7" />
                        <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className="text-base font-bold block">World of Warcraft</strong>
              <span className='text-zinc-300 text-sm block'>4 anúncios</span>
            </div>
          </a>
        </div>

        <div className='pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden'>
          <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
              <div>
                <strong className="text-2xl font-black block">Não encontrou seu duo?</strong>
                <span className='text-zinc-400 text-base block'>Publique um anúncio para encontrar novos players!</span>
              </div>
              <button className='px-4 py-3 bg-violet-500 hover:bg-violet-700 rounded-md flex items-center gap-3'>
                <MagnifyingGlassPlus size={24} />
                Publicar anúncio
              </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
