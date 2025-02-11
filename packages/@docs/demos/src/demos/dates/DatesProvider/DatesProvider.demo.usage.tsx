import 'dayjs/locale/ru';
import React from 'react';
import { MantineDemo } from '@mantinex/demo';
import { DatesProvider, MonthPickerInput, DatePickerInput } from '@mantine/dates';

const code = `
import 'dayjs/locale/ru';
import { DatesProvider, MonthPickerInput, DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatesProvider settings={{ locale: 'ru', firstDayOfWeek: 0, weekendDays: [0], timezone: 'UTC' }}>
      <MonthPickerInput label="Pick month" placeholder="Pick month" />
      <DatePickerInput mt="md" label="Pick date" placeholder="Pick date" />
    </DatesProvider>
  );
}
`;

function Demo() {
  return (
    <DatesProvider
      settings={{ locale: 'ru', firstDayOfWeek: 0, weekendDays: [0], timezone: 'UTC' }}
    >
      <MonthPickerInput label="Pick month" placeholder="Pick month" />
      <DatePickerInput mt="md" label="Pick date" placeholder="Pick date" />
    </DatesProvider>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
