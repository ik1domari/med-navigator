import React from "react";
import { AppContext } from "../App";
import axios from "axios";
import { botToken, chatId } from "../constants/api.js";
import { FormProvider, useForm } from "react-hook-form";
import { orderFormSchema } from "../form/schema.js";
import { zodResolver } from "@hookform/resolvers/zod";

export default function OrderModal() {
  const { setOpenOrder } = React.useContext(AppContext);
  const [closing, setClosing] = React.useState(false);
  const [ready, setReady] = React.useState(false);
  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setOpenOrder(false);
    }, 200);
  };

  const form = useForm({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      comment: "",
    },
  });

  const onSubmit = async (data) => {
    setReady(true);
    const text = `Пришла заявка с сайта:
- Имя: ${data.name}
- Номер телефона: ${data.phone}
- Почта: ${data.email}
- Комментарий: ${data.comment}
    `;

    await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      text,
      chat_id: chatId,
    });
  };

  return (
    <div className="modal" onClick={closeModal}>
      <div
        className={closing ? "modal__content closing" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <svg
          onClick={closeModal}
          className="modal__close"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          width="48px"
          height="48px"
          viewBox="0 0 24 24"
          aria-labelledby="closeIconTitle"
          stroke="#dedede"
          strokeWidth="1"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
          color="#dedede"
        >
          <path d="M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575" />
        </svg>
        <div className="order">
          {ready ? (
            <div className="order__ready">
              Спасибо за заявку, мы рассмотрим её в ближайшее время!
            </div>
          ) : (
            <>
              <h2 className="order__heading">Заказать звонок</h2>
              <FormProvider {...form}>
                <form
                  className="order__form"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <input
                    {...form.register("name")}
                    className="order__input"
                    type="text"
                    placeholder="Имя"
                  />
                  {form.formState.errors.name && (
                    <div className="order__error">
                      {form.formState.errors.name.message}
                    </div>
                  )}
                  <input
                    {...form.register("phone")}
                    className="order__input"
                    type="tel"
                    placeholder="Номер телефона"
                  />
                  {form.formState.errors.phone && (
                    <div className="order__error">
                      {form.formState.errors.phone.message}
                    </div>
                  )}
                  <input
                    {...form.register("email")}
                    className="order__input"
                    type="email"
                    placeholder="Почта"
                  />
                  {form.formState.errors.email && (
                    <div className="order__error">
                      {form.formState.errors.email.message}
                    </div>
                  )}
                  <textarea
                    {...form.register("comment")}
                    className="order__textarea"
                    placeholder="Комментарий"
                  />
                  <button className="order__btn" type="submit">
                    Отправить
                  </button>
                </form>
              </FormProvider>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
