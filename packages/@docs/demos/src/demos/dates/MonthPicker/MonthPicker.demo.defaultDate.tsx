import React, { useState } from 'react';
import { MantineDemo } from '@mantinex/demo';
import { MonthPicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <MonthPicker defaultDate={new Date(2015, 1)} value={value} onChange={setValue} />;
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <MonthPicker defaultDate={new Date(2015, 1)} value={value} onChange={setValue} />;
}

export const defaultDate: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
