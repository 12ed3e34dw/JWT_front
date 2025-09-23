'use client';

import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutButton() {
    const priceId = "price_1NEXAMPLE123456"; // <-- обязательно валидный Price ID из Stripe Dashboard

    const handleClick = async () => {
        if (!priceId) {
            alert('PriceId не указан!');
            return;
        }

        const res = await fetch('/api/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ priceId }),
        });

        if (!res.ok) {
            const text = await res.text();
            alert('Ошибка при создании сессии: ' + text);
            return;
        }

        const data = await res.json();
        if (!data.url) {
            alert('Stripe URL не возвращён!');
            return;
        }

        const stripe = await stripePromise;
        if (!stripe) {
            alert('Stripe не загрузился!');
            return;
        }

        stripe.redirectToCheckout({ sessionId: data.id });
    };

    return <button onClick={handleClick}>Оплатить</button>;
}
