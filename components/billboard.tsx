import { Billboard as BillboardType } from "@/types"


interface BillboardProps {
	data: BillboardType
}

export default function billboard({ data }: BillboardProps) {
	return (
		<div className="p-4 sm:p6 lg:p-8 rounded-xl overflow-hidden">
			<div
				className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
				style={{ backgroundImage: `url(${data.imageUrl})` }}
			>
				<div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
				</div>
			</div>
		</div>
	)
}
