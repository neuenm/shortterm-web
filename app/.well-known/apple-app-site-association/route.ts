import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    applinks: {
      apps: [],
      details: [
        {
          appID: "VND9R25496.com.neuenm.shortterm",
          paths: ["/listing/*"],
        },
      ],
    },
  });
}
