
import { Head } from "https://deno.land/x/fresh@1.1.4/runtime.ts";

const TITLE = "Maëlly Sorel - Graphiste - UX/UI Designer";
const DESCRIPTION =
    "En troisième année de Bachelor Design Graphique, je suis créative et pleine d'idées.\
    En tant que designeuse, j'aime répondre aux problématiques métier que je rencontre par des moyens visuels et innovants. \
    De nature curieuse, je dispose de compétences en UX/UI, en branding, en Motion Design, en 3D, en print et en dessin.";

export function HeadComponent() {
    return <>
        <Head>
            <head>
                <title>{TITLE}</title>
                <meta charSet="UTF-8" />
                <meta name="description" content={DESCRIPTION} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>
        </Head>
    </>
}