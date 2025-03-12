import { JSONFormatter } from "@/types/files";
import { DropRarity, DropRarityRaw } from "@/types/items";
import { formatRarity } from "@/utils/format";
import { HTMLElement } from "node-html-parser";

type UnformattedCraftingMaterial = {};

type FormattedCraftingIngredient = {
  name: string;
  acquisition: string;
  farming: string;
  craftableItems: string[];
};

export const craftingIngredientsFormatter = (
  root: HTMLElement
): FormattedCraftingIngredient[] => {
  const table = root
    .querySelectorAll(".wiki_table")
    .find(
      (t) =>
        t.parentNode?.previousElementSibling?.previousElementSibling
          ?.textContent === "Crafting Materials Table for Elden Ring"
    );
  if (!table) return [];
  const body = table.querySelector("tbody");

  const rows = body
    ?.querySelectorAll("tr")
    .reduce<FormattedCraftingIngredient[]>((acc, row) => {
      const tds = row.querySelectorAll("td");

      const nameCell = tds[0];
      /**
       * Skip SOTE items
       */
      if (nameCell.querySelector('img[title="sote-new"]')) return acc;

      const craftableItems = tds[3]
        ?.querySelectorAll("a")
        .map((el) => el.textContent.replace("\n", "").trim());

      console.log(craftableItems);
      acc.push({
        name: nameCell.textContent.replace("\n", "").trim(),
        acquisition: tds[1].textContent.trim(),
        farming: tds[2].textContent.trim(),
        craftableItems,
      });
      return acc;
    }, []);
  // console.log(rows);
  return rows || [];
};
