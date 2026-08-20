'use client';

import { FormEvent, useState } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  Clock3,
  MapPin,
  Minus,
  PackageCheck,
  Plus,
  Send,
  ShoppingBag,
  Store,
  Truck,
} from 'lucide-react';

interface BrandOrderFormProps {
  brandName: string;
  brandLogo: string;
  offerings: string[];
}

const inputClass =
  'w-full rounded-xl border border-[#E3E3E4] bg-white px-4 py-3.5 text-sm text-[#343538] outline-none transition placeholder:text-[#9A9A9D] focus:border-[#F05535] focus:ring-4 focus:ring-[#F05535]/10';

export function BrandOrderForm({ brandName, brandLogo, offerings }: BrandOrderFormProps) {
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [quantity, setQuantity] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const submitOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="order-form" className="scroll-mt-24 bg-[#292A2D] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[.04] shadow-2xl shadow-black/15">
          <div className="grid lg:grid-cols-[.8fr_1.2fr]">
            <div className="relative overflow-hidden border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#F05535]/15 blur-3xl" />
              <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#F6A18F]/10 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#F6A18F]">Order from {brandName}</p>
                <h2 className="mt-4 font-heading text-4xl font-bold leading-tight tracking-[-.035em] sm:text-5xl">
                  Your favourites,<br />made easy to order.
                </h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-white/60 sm:text-base">
                  Send your order request directly from this page. Choose your item, quantity and preferred order method, then share the details with the {brandName} team.
                </p>

                <div className="mt-8 flex h-28 w-52 items-center justify-center rounded-2xl bg-white p-4 shadow-xl shadow-black/15">
                  <img src={brandLogo} alt={`${brandName} logo`} className="max-h-full w-full object-contain" />
                </div>

                <div className="mt-9 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {[
                    [ShoppingBag, 'Easy ordering', 'Simple request form'],
                    [Clock3, 'Quick response', 'Team follow-up'],
                    [MapPin, 'Local service', 'Location confirmed'],
                  ].map(([Icon, title, copy]: any) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/[.05] p-4">
                      <Icon size={18} className="text-[#F05535]" />
                      <p className="mt-3 text-sm font-bold text-white">{title}</p>
                      <p className="mt-1 text-xs text-white/45">{copy}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-7 text-xs leading-5 text-white/40">
                  This form submits an order request. Final availability, delivery area, pricing and confirmation are handled by the relevant outlet.
                </p>
              </div>
            </div>

            <div className="bg-[#F7F7F7] p-6 text-[#343538] sm:p-10 lg:p-12">
              {submitted ? (
                <div className="flex min-h-[560px] flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF0EC] text-[#D34518]">
                    <CheckCircle2 size={42} />
                  </div>
                  <p className="mt-7 text-xs font-extrabold uppercase tracking-[.2em] text-[#D34518]">Order request received</p>
                  <h3 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">Thank you.</h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-[#717275]">
                    Your {brandName} order request has been captured. The relevant outlet can confirm availability, total amount and fulfilment details.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 rounded-xl bg-[#F05535] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#D34518]"
                  >
                    Place another order
                  </button>
                </div>
              ) : (
                <form onSubmit={submitOrder}>
                  <div className="flex flex-col gap-3 border-b border-[#E3E3E4] pb-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#D34518]">Order details</p>
                      <h3 className="mt-2 font-heading text-3xl font-bold tracking-[-.025em]">Place your order</h3>
                    </div>
                    <p className="text-xs font-semibold text-[#8A8B8E]">* Required fields</p>
                  </div>

                  <div className="mt-7">
                    <label className="mb-2 block text-xs font-extrabold uppercase tracking-[.12em]">How would you like it?</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setOrderType('delivery')}
                        className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${orderType === 'delivery' ? 'border-[#F05535] bg-[#FFF0EC] shadow-sm' : 'border-[#E3E3E4] bg-white hover:border-[#F05535]/60'}`}
                      >
                        <span className={`grid h-10 w-10 place-items-center rounded-lg ${orderType === 'delivery' ? 'bg-[#F05535] text-white' : 'bg-[#F7F7F7] text-[#717275]'}`}><Truck size={19} /></span>
                        <span><span className="block text-sm font-bold">Delivery</span><span className="mt-0.5 block text-xs text-[#717275]">To your address</span></span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setOrderType('pickup')}
                        className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${orderType === 'pickup' ? 'border-[#F05535] bg-[#FFF0EC] shadow-sm' : 'border-[#E3E3E4] bg-white hover:border-[#F05535]/60'}`}
                      >
                        <span className={`grid h-10 w-10 place-items-center rounded-lg ${orderType === 'pickup' ? 'bg-[#F05535] text-white' : 'bg-[#F7F7F7] text-[#717275]'}`}><Store size={19} /></span>
                        <span><span className="block text-sm font-bold">Pickup</span><span className="mt-0.5 block text-xs text-[#717275]">Collect from outlet</span></span>
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-bold">Full name *</label>
                      <input name="name" required className={inputClass} placeholder="Your name" />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-bold">Phone number *</label>
                      <input name="phone" type="tel" required className={inputClass} placeholder="03xx xxxxxxx" />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-bold">Email</label>
                      <input name="email" type="email" className={inputClass} placeholder="name@example.com" />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-bold">City *</label>
                      <input name="city" required className={inputClass} placeholder="Your city" />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_150px]">
                    <div>
                      <label className="mb-2 block text-xs font-bold">Select item *</label>
                      <div className="relative">
                        <select name="item" required defaultValue="" className={`${inputClass} appearance-none pr-11`}>
                          <option value="" disabled>Choose a {brandName} favourite</option>
                          {offerings.map((item) => <option key={item} value={item}>{item}</option>)}
                          <option value="Other / custom order">Other / custom order</option>
                        </select>
                        <ChevronDown size={17} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#717275]" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-bold">Quantity</label>
                      <div className="flex h-[50px] items-center justify-between rounded-xl border border-[#E3E3E4] bg-white px-2">
                        <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="grid h-9 w-9 place-items-center rounded-lg text-[#717275] transition hover:bg-[#FFF0EC] hover:text-[#D34518]"><Minus size={16} /></button>
                        <input type="hidden" name="quantity" value={quantity} />
                        <span className="text-sm font-extrabold">{quantity}</span>
                        <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((q) => Math.min(20, q + 1))} className="grid h-9 w-9 place-items-center rounded-lg text-[#717275] transition hover:bg-[#FFF0EC] hover:text-[#D34518]"><Plus size={16} /></button>
                      </div>
                    </div>
                  </div>

                  {orderType === 'delivery' && (
                    <div className="mt-5">
                      <label className="mb-2 block text-xs font-bold">Delivery address *</label>
                      <input name="address" required className={inputClass} placeholder="House / street / area" />
                    </div>
                  )}

                  <div className="mt-5">
                    <label className="mb-2 block text-xs font-bold">Order notes</label>
                    <textarea name="notes" rows={4} className={`${inputClass} resize-none`} placeholder="Add flavours, spice preference, special instructions or any other item you need..." />
                  </div>

                  <label className="mt-5 flex items-start gap-3 rounded-xl border border-[#E3E3E4] bg-white p-4 text-xs leading-5 text-[#717275]">
                    <input type="checkbox" name="whatsapp" className="mt-0.5 h-4 w-4 accent-[#F05535]" />
                    <span><strong className="text-[#343538]">WhatsApp available:</strong> the outlet may use this phone number to confirm your order.</span>
                  </label>

                  <button type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#F05535] px-6 py-4 text-sm font-extrabold uppercase tracking-[.08em] text-white shadow-lg shadow-[#F05535]/15 transition hover:-translate-y-0.5 hover:bg-[#D34518] hover:shadow-xl">
                    <PackageCheck size={19} /> Send order request <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
