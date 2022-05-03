import { CloseButton } from "./CloseButton";

import bugImgUrl from '../assets/bug.svg';
import ideaImgUrl from '../assets/idea.svg';
import thoughtImgUrl from '../assets/thought.svg';

const feedBackTypes = {
    BUG: {
        title: 'Problema',
        source: bugImgUrl,
        alt: 'Imagem de um inseto'
    },
    IDEA: {
        title: 'Ideia',
        source: ideaImgUrl,
        alt: 'Imagem de uma lampada'
    },
    OTHER: {
        title: 'Outro',
        source: thoughtImgUrl,
        alt: 'Imagem de um balão de pensamento'
    }
};

export function WidgetForm(){
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu Feedback</span>

                <CloseButton />
            </header>
            
            
            <div className="flex py-8 gap-2 w-full">
                { Object.entries(feedBackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            type="button"
                        >  
                            <img src={value.source} alt={value.alt}/>
                            <span>{value.title}</span>
                        </button>
                    );
                }) }
            </div>

            <footer className="text-xs text-neutral-400">
                Feito por <a className="underline underline-offset-2" href="https://nextlevelweek.com/">RocketSeat</a>
            </footer>
        </div>
    );
}