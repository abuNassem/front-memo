import { Card, Typography } from "@mui/material";
import React, { useContext } from "react";
import { api } from "../../template/layout";

const Sure = () => {
  const context = useContext(api);

  const running = () => {
    if (context?.target?.func) {
      context.target.func();
    }
    context?.setIsSure(false);
  };

  if (!context?.isSure) return null;

  return (
    <div
      onClick={() => context?.setIsSure(false)}
      className="fixed inset-0 bg-zinc-800/50 flex items-center justify-center z-[40]"
    >
      <Card
        sx={{
          backgroundColor: "rgba(248, 248, 248, 1)",
          width: 350,
          height: 200,
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        onClick={(e) => e.stopPropagation()} // يمنع إغلاق الـ modal عند الضغط داخل الكارد
      >
        <Typography variant="h6">{context?.target?.name}</Typography>

        <div className="flex gap-2 justify-end">
          <button
            className="bg-zinc-800 hover:bg-zinc-600 text-sm font-bold text-white px-3 rounded-md h-[30px]"
            onClick={() => context?.setIsSure(false)}
          >
            cancel
          </button>
          <button
            className="bg-zinc-800 hover:bg-zinc-600 text-sm font-bold text-white px-3 h-[30px] rounded-md"
            onClick={running}
          >
            continue
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Sure;
