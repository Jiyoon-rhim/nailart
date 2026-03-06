'use client';

import React from 'react';
import { AetherHero } from '@/components/main/hero';

export default function AuthPage() {
    return (
        <main>
            <AetherHero
                title="" // 기존 타이틀 위치는 비워둠
                overlayGradient="radial-gradient(circle at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.85) 100%)"
                subtitle={
                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '-40px', // 화면 중앙 정렬을 위한 조정
                        position: 'relative',
                        zIndex: 10
                    }}>
                        {/* 모든 요소가 포함된 카드 박스 */}
                        <div style={{
                            background: 'rgba(15, 15, 15, 0.65)',
                            backdropFilter: 'blur(24px) saturate(150%)',
                            WebkitBackdropFilter: 'blur(24px) saturate(150%)',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            borderRadius: '32px',
                            padding: '64px 48px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '12px',
                            boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255,255,255,0.05)',
                            maxWidth: '460px',
                            width: '100%',
                        }}>
                            {/* 타이틀을 카드 내부로 이동 */}
                            <h1 style={{
                                margin: '0 0 12px 0',
                                fontSize: '2.2rem',
                                fontWeight: 700,
                                color: 'white',
                                letterSpacing: '-0.02em',
                                textAlign: 'center'
                            }}>
                                Nailart AI 시작하기
                            </h1>

                            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                                <p style={{ 
                                    margin: 0, 
                                    fontSize: '1.05rem', 
                                    fontWeight: 400,
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    lineHeight: '1.6',
                                    wordBreak: 'keep-all',
                                }}>
                                    구글 계정으로 간편하게 로그인하고<br />
                                    나만의 고퀄리티 유튜브 썸네일을 만들어보세요.
                                </p>
                            </div>
                            
                            <button
                                onClick={() => console.log('Google login clicked')}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '14px',
                                    padding: '18px 32px',
                                    borderRadius: '16px',
                                    background: 'white',
                                    color: '#000',
                                    border: 'none',
                                    fontWeight: 700,
                                    fontSize: '1.1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.4)',
                                    fontFamily: "'Roboto', sans-serif",
                                    width: '100%',
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(0,0,0,0.5)';
                                    e.currentTarget.style.filter = 'brightness(0.95)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0,0,0,0.4)';
                                    e.currentTarget.style.filter = 'brightness(1)';
                                }}
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24">
                                    <path
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.27.81-.57z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        fill="#EA4335"
                                    />
                                </svg>
                                Google 계정으로 계속하기
                            </button>
                            
                            <p style={{ 
                                fontSize: '0.85rem', 
                                color: 'rgba(255, 255, 255, 0.4)',
                                margin: '20px 0 0 0',
                                textAlign: 'center'
                            }}>
                                가입 시 Nailart AI의 <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>이용약관</span> 및 <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>개인정보 처리방침</span>에 동의하게 됩니다.
                            </p>
                        </div>
                    </div>
                }
                ctaLabel={null}
            />
        </main>
    );
}
