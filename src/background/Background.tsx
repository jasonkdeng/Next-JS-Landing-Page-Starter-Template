import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

const Background = (props: IBackgroundProps) => (
  <div className={`${props.color} relative overflow-hidden`}>
    {/* Highlighter marker strokes */}
    <div className="pointer-events-none absolute inset-0">
      {/* Yellow highlighter stroke */}
      <div className="animate-float-1 absolute left-10 top-20 h-8 w-32 -rotate-12 rounded-full bg-yellow-300 opacity-60"></div>

      {/* Pink highlighter stroke */}
      <div className="animate-float-2 absolute right-20 top-40 h-6 w-24 rotate-6 rounded-full bg-pink-300 opacity-50"></div>

      {/* Green highlighter stroke */}
      <div className="animate-float-3 absolute left-1/4 top-60 h-7 w-28 -rotate-3 rounded-full bg-green-300 opacity-55"></div>

      {/* Blue highlighter stroke */}
      <div className="rotate-15 animate-float-4 absolute right-1/3 top-80 h-5 w-20 rounded-full bg-blue-300 opacity-45"></div>

      {/* Orange highlighter stroke */}
      <div className="-rotate-8 animate-float-5 absolute left-2/3 top-32 h-9 w-36 rounded-full bg-orange-300 opacity-65"></div>

      {/* Purple highlighter stroke */}
      <div className="w-22 animate-float-6 absolute left-1/2 top-72 h-6 rotate-12 rounded-full bg-purple-300 opacity-50"></div>

      {/* Teal highlighter stroke */}
      <div className="w-30 -rotate-5 animate-float-7 absolute left-16 top-96 h-8 rounded-full bg-teal-300 opacity-60"></div>

      {/* Light blue highlighter stroke */}
      <div className="top-120 w-26 rotate-9 animate-float-8 absolute right-16 h-7 rounded-full bg-cyan-300 opacity-55"></div>

      {/* Additional strokes */}
      {/* Red highlighter stroke */}
      <div className="top-140 w-34 -rotate-10 animate-float-9 absolute left-1/3 h-8 rounded-full bg-red-300 opacity-50"></div>

      {/* Indigo highlighter stroke */}
      <div className="top-160 w-18 rotate-8 animate-float-10 absolute right-1/4 h-6 rounded-full bg-indigo-300 opacity-45"></div>

      {/* Lime highlighter stroke */}
      <div className="top-180 animate-float-11 absolute left-2/3 h-7 w-28 -rotate-6 rounded-full bg-lime-300 opacity-60"></div>

      {/* Amber highlighter stroke */}
      <div className="top-200 rotate-11 animate-float-12 absolute right-1/2 h-9 w-32 rounded-full bg-amber-300 opacity-55"></div>

      {/* Emerald highlighter stroke */}
      <div className="top-220 left-1/5 -rotate-9 animate-float-13 absolute h-6 w-24 rounded-full bg-emerald-300 opacity-50"></div>

      {/* Sky highlighter stroke */}
      <div className="top-240 right-1/6 w-30 rotate-7 animate-float-14 absolute h-8 rounded-full bg-sky-300 opacity-65"></div>

      {/* Rose highlighter stroke */}
      <div className="top-260 w-26 -rotate-4 animate-float-15 absolute left-3/4 h-7 rounded-full bg-rose-300 opacity-55"></div>

      {/* Violet highlighter stroke */}
      <div className="top-280 w-22 rotate-13 animate-float-16 absolute right-1/3 h-6 rounded-full bg-violet-300 opacity-50"></div>

      {/* Fuchsia highlighter stroke */}
      <div className="top-300 -rotate-7 animate-float-17 absolute left-1/2 h-9 w-36 rounded-full bg-fuchsia-300 opacity-60"></div>

      {/* Slate highlighter stroke */}
      <div className="top-320 rotate-5 animate-float-18 absolute right-2/3 h-5 w-20 rounded-full bg-slate-300 opacity-45"></div>

      {/* Stone highlighter stroke */}
      <div className="top-340 left-1/6 -rotate-11 animate-float-19 absolute h-8 w-28 rounded-full bg-stone-300 opacity-55"></div>
    </div>

    {props.children}
  </div>
);

export { Background };
