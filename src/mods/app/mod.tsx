import React, { useEffect, useState } from "react";
import { AnchorChip } from "../../libs/anchors/mod.tsx";
import { Lang } from "../../libs/lang/mod.ts";
import * as ascii from "./ascii/mod.ts";

React;

function timeout(delay: number) {
  return new Promise(ok => setTimeout(ok, delay))
}

async function loop(callback: () => Promise<void>, signal: AbortSignal) {
  while (!signal.aborted) await callback()
}

export function App() {
  const [closed, setClosed] = useState(false)

  useEffect(() => {
    const aborter = new AbortController()

    loop(async () => {
      await timeout(4000)
      setClosed(true)
      await timeout(250)
      setClosed(false)
    }, aborter.signal).catch(console.error)

    return () => aborter.abort()
  }, [])

  return <div className="p-safe h-full w-full flex flex-col overflow-y-scroll animate-opacity-in">
    <div className="grow flex flex-col w-full m-auto max-w-6xl">
      <div className="h-dvh flex flex-col p-8">
        <div className="h-[max(24rem,100dvh-16rem)] flex flex-col justify-center items-center">
          <div className="text-default-contrast whitespace-pre-wrap font-[monospace] text-[min(1vw,8px)] leading-[min(1vw,8px)]"
            dir="ltr">
            {closed ? ascii.closed : ascii.open}
          </div>
        </div>
        <div className="h-16 grow shrink-0" />
        <div className="font-medium text-6xl">
          Brume
        </div>
        <div className="h-2 shrink-0" />
        <div className="text-default-contrast text-2xl">
          {Lang.match({
            en: "Technologies to hide yourself in plain sight",
            zh: "在明处隐藏自己的技术",
            hi: "सामने छुपने के लिए तकनीक",
            es: "Tecnologías para esconderse a plena vista",
            ar: "تقنيات لإخفاء نفسك في الوضوح",
            fr: "Technologies pour vous cacher à la vue de tous",
            de: "Technologien, um sich offen zu verstecken",
            ru: "Технологии, чтобы скрыться на виду",
            pt: "Tecnologias para se esconder à vista de todos",
            ja: "目立たないように自分を隠すための技術",
            pa: "ਸਾਫ ਦਿਖਾਈ ਵਿੱਚ ਆਪਣੇ ਆਪ ਨੂੰ ਛੁਪਾਉਣ ਲਈ ਤਕਨੀਕ",
            bn: "প্রকাশে নিজেকে লুকানোর প্রযুক্তি",
            id: "Teknologi untuk menyembunyikan diri di depan umum",
            ur: "صاف دکھائی میں خود کو چھپانے کی تکنیک",
            ms: "Teknologi untuk menyembunyikan diri di tempat terang",
            it: "Tecnologie per nascondersi alla vista di tutti",
            tr: "Açıkta kendini gizlemek için teknolojiler",
            ta: "பொதுவாக மறைக்க தெரியும் தொழில்நுட்பங்கள்",
            te: "ప్రకటనలో నిజాయితీకరించడానికి సాధనాలు",
            ko: "눈에 띄지 않게 자신을 숨기는 기술",
            vi: "Công nghệ để ẩn mình trong tầm nhìn",
            pl: "Technologie, aby schować się na widoku",
            ro: "Tehnologii pentru a te ascunde în plină vedere",
            nl: "Technologieën om jezelf in het zicht te verbergen",
            el: "Τεχνολογίες για να κρυφτείτε στην απλή όψη",
            th: "เทคโนโลยีในการซ่อนตัวในที่สาธารณะ",
            cs: "Technologie, jak se skrýt na očích",
            hu: "Technológiák, hogy elrejtsd magad a szem elől",
            sv: "Tekniker för att gömma sig i vanlig syn",
            da: "Teknologier for at skjule dig selv i almindelig syn",
          })}
        </div>
        <div className="h-4 shrink-0" />
        <div className="flex flex-wrap gap-2">
          <AnchorChip
            href="https://wallet.brume.money"
            rel="noreferrer"
            target="_blank"
            dir="ltr">
            Wallet
          </AnchorChip>
          <AnchorChip
            href="https://bobine.tech"
            rel="noreferrer"
            target="_blank"
            dir="ltr">
            Bobine
          </AnchorChip>
          <AnchorChip
            href="https://dexscreener.com/ethereum/0xD0EbFe04Adb5Ef449Ec5874e450810501DC53ED5"
            rel="noreferrer"
            target="_blank"
            dir="ltr">
            $BRUME
          </AnchorChip>
          <AnchorChip
            href="https://x.com/BrumeProject"
            rel="noreferrer"
            target="_blank"
            dir="ltr">
            X.com
          </AnchorChip>
          <AnchorChip
            href="https://discord.gg/KVEPWfN9jK"
            rel="noreferrer"
            target="_blank"
            dir="ltr">
            Discord
          </AnchorChip>
          <AnchorChip
            href="https://juicebox.money/v2/p/748?tabid=about"
            rel="noreferrer"
            target="_blank"
            dir="ltr">
            Juicebox
          </AnchorChip>
          <AnchorChip
            href="https://github.com/brumeproject"
            rel="noreferrer"
            target="_blank"
            dir="ltr">
            GitHub
          </AnchorChip>
        </div>
      </div>
    </div>
  </div>
}