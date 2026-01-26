'use client';

import { faker } from '@faker-js/faker';
import type { DragEndEvent } from '@/components/ui/shadcn-io/kanban';
import { BookMarked, Loader, BookCheck } from "lucide-react";
import {
  KanbanBoard,
  KanbanCard,
  KanbanCards,
  KanbanHeader,
  KanbanProvider,
} from '@/components/ui/shadcn-io/kanban';
import { JSX, useEffect, useState } from 'react';

const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

type Column = { id: string; name: string; color: string };
type Feature = {
  id: string;
  name: string;
  column: string;
};

export default function Example() {
  const [columns, setColumns] = useState<Column[]>([]);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [columnIcons, setColumnIcons] = useState<Record<string, JSX.Element>>({});

  useEffect(() => {
    const cols: Column[] = [
      { id: faker.string.uuid(), name: 'Projets Futurs', color: '#6B7280' },
      { id: faker.string.uuid(), name: 'Projets en cours', color: '#b2bec3' },
      { id: faker.string.uuid(), name: 'Projets Terminés', color: '#10B981' },
    ];

    const feats = Array.from({ length: 20 }).map(() => ({
      id: faker.string.uuid(),
      name: capitalize(faker.company.buzzPhrase()),
      column: faker.helpers.arrayElement(cols).id,
    }));

    const icons: Record<string, JSX.Element> = {};
    cols.forEach((col) => {
      if (col.name === 'Projets Futurs')
        icons[col.id] = <BookMarked size={20} className="text-blue-500" />;
      if (col.name === 'Projets en cours')
        icons[col.id] = <Loader size={20} className="text-green-500" />;
      if (col.name === 'Projets Terminés')
        icons[col.id] = <BookCheck size={20} className="text-purple-500" />;
    });

    setColumns(cols);
    setFeatures(feats);
    setColumnIcons(icons);
  }, []);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    setFeatures((prev) =>
      prev.map((feature) =>
        feature.id === active.id
          ? { ...feature, column: over.id as string }
          : feature
      )
    );
  };

  if (!columns.length) return null; // avoid rendering before mount

  return (
    <KanbanProvider columns={columns} data={features} onDragEnd={handleDragEnd}>
      {(column) => (
        <KanbanBoard id={column.id} key={column.id} className="mt-20">
          <KanbanHeader className="flex items-center justify-center space-x-3">
            {columnIcons[column.id]}
            <span>{column.name}</span>
          </KanbanHeader>
          <KanbanCards id={column.id}>
            {(feature) => (
              <KanbanCard
                column={column.name}
                id={feature.id}
                key={feature.id}
                name={feature.name}
              />
            )}
          </KanbanCards>
        </KanbanBoard>
      )}
    </KanbanProvider>
  );
}
