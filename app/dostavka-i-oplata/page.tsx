import React from "react";
import { CrumbsLink } from "../../components/parts/CrumbsLink";

const DeliveryPaymentPage: React.FC = () => {
  const crumbsData = {
    categories: {
      id: null,
      category: {
        name: "Доставка і Оплата",
      },
    },
    items: [],
  };

  return (
    <div className="container mx-auto p-4">
      <CrumbsLink categories={crumbsData.categories} items={crumbsData.items} />

      <h3 className="text-4xl font-bold mb-6">Доставка</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="space-y-4 text-gray-800">
            <p>
              <span className="font-semibold">Доставка та збирання Меблів,</span> придбаних в наших офлайн магазинах відбувається по домовленості
              з персоналом магазину, під час якого обговорюються такі моменти:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>адреса доставки товару;</li>
              <li>час і дата доставки та збирання товару;</li>
              <li>уточнюється вартість доставки та збирання товару.</li>
            </ul>
            <p>
              *Ми рекомендуємо доручити збирання меблів нашим професійним
              збиральникам, які швидко та якісно зберуть Ваші меблі.
            </p>
          </div>
        </div>

        <div>
          <div className="space-y-4 text-gray-800">
            <p>
              <span className="font-semibold">
                Доставка та збирання Меблів,
              </span> варіантах:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                доставка з нашого офлайн магазину, якщо це територіально можливо
                (процедура показана в попередньому дописі);
              </li>
              <li>
                доставка за допомогою поштових служб таких як Нова Пошта – по їх
                тарифах. Всі умови доставки та збирання меблів узгоджуються з
                менеджером нашого Інтернет магазину.
              </li>
            </ul>
            <p>
              *Ми рекомендуємо доручити збирання меблів нашим професійним
              збиральникам, які швидко та якісно зберуть Ваші меблі.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-4xl font-bold mt-12 mb-4">Оплата</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            У наших магазинах (готівкою / карткою)
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Готівка в касу магазину;</li>
            <li>Оплата карткою через POS термінал;</li>
            <li>
              Оплата готівкою чи карткою при накладному платежі, під час
              отримання товару на поштовому відділенні;
            </li>
            <li>
              Комісію за банківський переказ або витрати, пов’язані з
              пересиланням післяплати кур’єрською службою (Нова Пошта), оплачує
              покупець.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            За банківськими реквізитами
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Ви отримуєте рахунок-фактуру, згідно з яким можна оплатити
              замовлення через будь-який банк.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Через термінал самообслуговування
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Приватбанк або IBox, за реквізитами наданими нашим Менеджером
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Кредит і розстрочка</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Оплата частинами від ПриватБанк</li>
            <li>Кредит ПумбБанк</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPaymentPage;
