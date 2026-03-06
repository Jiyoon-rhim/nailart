import { AetherHero } from '@/components/main/hero';

export default function Home() {
  return (
    <main>
      <AetherHero
        ctaHref="/auth"
        title="조회수를 떡상시키는 클릭 유발 썸네일,"
        subtitle={
          <>
            Nailart AI가 사람들의 시선을 사로잡는 유튜브 썸네일을 단 몇 초 만에 생성해 드립니다.<br />
            AI 기반 디자인으로 알고리즘의 선택을 받아보세요.
          </>
        }
        ctaLabel={
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
            무료로 썸네일 생성하기
          </span>
        }
      />
    </main>
  );
}
